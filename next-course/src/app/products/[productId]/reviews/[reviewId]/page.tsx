export default function ReviewDetials({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <div>
      <h1>
        Review {params.productId} for the product {params.reviewId}{" "}
      </h1>
    </div>
  );
}
