import Link from "next/link";

export default function F4(){
    return(
        <div>
            <h1>
                this is the page F4

                <Link className="text-blue-600" href="/f1/f3">
                page 3
                </Link>

                <Link className="text-blue-600" href="/about">
               about page
                </Link>
            </h1>
        </div>
    )
}