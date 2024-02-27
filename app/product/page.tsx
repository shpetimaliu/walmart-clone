type ProductProps = {
  product: {
    title: string;
    link: string;
  };
};

const ProductInfo = ({ product }: ProductProps) => {
  return (
    <div>
      <li>
        <ul className="">
          {product.map((item: any, index: number) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </li>
    </div>
  );
};

export default ProductInfo;
