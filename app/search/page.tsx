import { FetchSearch } from "@/lib/fetchSearch";

type Props = {
  searchParams: {
    q: string;
  };
};

async function SearchPage({ searchParams: { q } }: Props) {
  console.log(q);

  const results = await FetchSearch(q);

  console.log(results);
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Result for {q}</h1>
      <h2 className="mb-5 text-gray-200"></h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        (
        {results.search_results &&
          results.search_results.product.map((product: any) => (
            <li key={product.product_id}>{product.title}</li>
          ))}
        results)
      </ul>
    </div>
  );
}

export default SearchPage;
