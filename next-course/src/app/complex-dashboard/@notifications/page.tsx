import Card from "@/components/card";
import Link from "next/link";

export default function notifcations(){
    return <Card>
       archived nofication <div>
            <Link href="/complex-dashboard/archived">archived notification</Link>
        </div>
    </Card>
}