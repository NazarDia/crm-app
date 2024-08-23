import Link from 'next/link';
import Button from './components/button';

export default function Home() {
  return (
    <main className="px-10 py-6 flex flex-col">
      <h1 className="text-3xl font-semibold text-gray-900 mb-8 mt-[140px] text-center">
        Home page
      </h1>
      <div className="flex items-center gap-4 mx-auto">
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
        <Link href="/companies">
          <Button>Companies</Button>
        </Link>
      </div>
    </main>
  );
}
