import Link from "next/link";

export default function F2() {
  return (
    <div>
      This is F2 page
      <Link href="/f1/f3" className="blue">f3 page </Link>
    </div>
  );
}
