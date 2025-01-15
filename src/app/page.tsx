import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* Home page with recent documents. Feature to be coded in future. */}
      Click &nbsp; <Link href="/documents/123" className="text-blue-600 underline">  here </Link>&nbsp; to go to the documents page.
    </div>
  );
}

export default Home;