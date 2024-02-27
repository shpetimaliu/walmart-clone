import Image from "next/image";
import Link from "next/link";

function Product({ product }: { product: any }) {
  console.log(product);
  return (
    <Link href={{ pathname: "/product", query: { url: product.link } }}>
      <Image
        src={product.main_image}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto"
      />
    </Link>
  );
}

export default Product;
