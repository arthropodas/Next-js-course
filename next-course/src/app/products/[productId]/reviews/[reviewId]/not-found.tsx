
export default function ReviewNotFoudn({
    params,
  }: {
    params: {
      productId: string;
      reviewId: string;
    };
  }) {
    if(parseInt(params.reviewId)>1000){
        return <h1>revew not found</h1>
    }
    return (
      <div>
        <h1>
          Review {params.productId} for the product {params.reviewId}{" "}
        </h1>
      </div>
    );
  }
  