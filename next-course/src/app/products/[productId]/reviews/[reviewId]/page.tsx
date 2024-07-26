"use client"

function getRandomNumber(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetials({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const random = getRandomNumber(2);
  console.log("random", random);

  // Throw a generic error if random number is 1
  if (random === 1) {
    throw new Error("Error loading review details");
  }

  return (
    <div>
      <h1>
        Review {params.productId} for the product {params.reviewId}
      </h1>
    </div>
  );
}
