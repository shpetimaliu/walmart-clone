import Link from "next/link";

type Props = {
  title: string;
  className?: string;
  image?: string;
};

function GridOptions({ title, image, className }: Props) {
  return (
    <Link
      href={{
        pathname: "/",
        query: { q: title },
      }}
    >
      <h2>{title}</h2>
    </Link>
  );
}

export default GridOptions;