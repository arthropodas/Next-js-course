export default function DocDetails({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        viewing doc for feature and {params.slug[0]} and concept{" "}
        {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>viewing doc for feature and {params.slug[0]}</h1>;
  }
  return <h1>inside the docs</h1>;
}