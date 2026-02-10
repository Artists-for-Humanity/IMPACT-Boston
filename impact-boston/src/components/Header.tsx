import Link from "next/link";

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/posts", label: "Posts" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <div className="border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:border-gray-800 dark:bg-gray-950/70 dark:supports-[backdrop-filter]:bg-gray-950/50">
      <div className="mx-auto grid max-w-5xl grid-cols-12 items-center gap-4 px-4 py-4 sm:px-6">
        {/* Brand */}
        <div className="col-span-12 sm:col-span-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-semibold tracking-tight text-gray-900 dark:text-gray-50"
          >
            <span className="text-lg">IMPACT Boston</span>
          </Link>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Community stories & updates
          </p>
        </div>

        {/* Nav */}
        <nav className="col-span-12 sm:col-span-8">
          <ul className="grid grid-cols-2 gap-2 sm:flex sm:justify-end sm:gap-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-900"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}