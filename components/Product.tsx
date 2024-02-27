import { Badge } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Product({ product }: { product: any }) {
  return (
    <Link
      href={{ pathname: "/product", query: { url: product.link } }}
      className="flex flex-col relative border rounded-md h-full p-5"
    >
      <div>
        <Image
          src={product.main_image}
          alt={product.title}
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>
      <p className="font-light">{product.title}</p>

      <Badge className="w-fit absolute top-2 right-2">
        {product.best_seller}
      </Badge>

      {product.rating && (
        <p className="text-yellow-500 text-sm">
          {product.rating}★{" "}
          <span className="text-gray-400 ml-2">({product.ratings_total})</span>
        </p>
      )}
    </Link>
  );
}

export default Product;
