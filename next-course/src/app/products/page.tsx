import Link from "next/link";

export default function ProductsList() {
  const productId = 100;
  return (
    <div>
      <h1>products lists</h1>
      <h1>
        <Link href="products/1">product 1</Link>
      </h1>
      <h1>
        <Link href="products/2">product 2</Link>
      </h1>
      <h1>
        <Link href= {`products/${productId}`}> product {productId}</Link>
      </h1>
    </div>
  );
}
