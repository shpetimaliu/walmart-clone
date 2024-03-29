"use client";
import Product from "@/components/Product";
import { useEffect, useState } from "react";
import products from "../../public/pr.json";
import Loading from "./loading";

type Props = {
  searchParams: {
    q: string;
  };
};

async function SearchPage({ searchParams: { q } }: Props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!products.search_results) {
    return <div>No search results found.</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Result for: {q}</h1>
      <h2 className="mb-5 text-gray-200"></h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.search_results.map((item: any, index: number) => (
          <li key={index}>
            <Product product={item.product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
