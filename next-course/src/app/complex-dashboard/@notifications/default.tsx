import Card from "@/components/card";
import Link from "next/link";

export default function defaultnotification() {
  return (
    <Card>
      <div>
        <Link href="/complex-dashboard"> notification</Link>
      </div>
    </Card>
  );
}
