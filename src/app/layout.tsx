import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Elliott Ganley",
  description: "Writing about markets, technology, and ideas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-800">
        <header className="border-b border-neutral-200">
          <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold">
              Elliott Ganley
            </Link>

            {/* Desktop nav */}
            <nav className="hidden sm:flex space-x-6 text-sm text-neutral-700">
              <Link href="/writings" className="hover:underline">Writings</Link>
              <Link href="/about" className="hover:underline">About</Link>
              <Link href="/contact" className="hover:underline">Contact</Link>
    
            </nav>

            {/* Mobile dropdown */}
            <details className="sm:hidden">
              <summary className="list-none cursor-pointer text-sm text-neutral-700">
                Menu
              </summary>
              <div className="mt-2 rounded-md border border-neutral-200 bg-white">
                <Link href="/writings" className="block px-3 py-2 text-sm hover:bg-neutral-100">Writings</Link>
                <Link href="/about" className="block px-3 py-2 text-sm hover:bg-neutral-100">About</Link>
                <Link href="/contact" className="block px-3 py-2 text-sm hover:bg-neutral-100">Contact</Link>
                <Link href="/notes" className="block px-3 py-2 text-sm hover:bg-neutral-100">Notes</Link>
              </div>
            </details>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6">{children}</main>

        <footer className="border-t border-neutral-200 mt-20 py-10 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Elliott Ganley
        </footer>
      </body>
    </html>
  );
}
