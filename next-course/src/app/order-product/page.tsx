"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {

    const router = useRouter()
    const handleClick = ()=>{
        router.push('/')
        console.log("order placing")
    }
  return (
    <>
      
      <div>
        <h1>order product</h1>
        <button className="bg-blue-600" onClick={handleClick}>place order</button>
      </div>
    </>
  );
}
