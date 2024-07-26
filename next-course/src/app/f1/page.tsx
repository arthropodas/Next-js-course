import Link from "next/link";

export default function F1() {
  return (
    <div>
      This is F1 page
      <h1>
        <Link href="/f1/f2" className="text-blue-600">
          f2 page
        </Link>
      </h1>
    </div>
  );
}
