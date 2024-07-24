import { metadata } from "@/app/layout";
import { Metadata } from "next";

type Props ={
  params:{
    productId :string;
  }
}


// export default function products({
//   params,
// }: {
//   params: { productId: string };
// }) {
//   return <h1> This is product {params.productId}</h1>;
// }

export const generateMetadata = async({params}:Props):Promise<Metadata> =>{

  const title  = await new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(`iPhone ${params.productId}`)
    },100)
  })
  return {
    title:`product ${title}`
  }
}

export default function productDetails({params}:Props){
  return <h1>Details about the product {params.productId}</h1>
}