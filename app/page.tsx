import Link from "next/link";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <>
    <button>
      <Link href="/dashboard/admin-dashboard">Get start</Link>
    </button>
    </>
  );
}
