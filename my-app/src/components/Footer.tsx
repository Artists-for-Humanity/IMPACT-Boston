import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto grid max-w-5xl grid-cols-12 gap-6 px-4 py-10 sm:px-6">
        {/* Left */}
        <div className="col-span-12 md:col-span-6">
          <Link
            href="/"
            className="text-base font-semibold text-gray-900 dark:text-gray-50"
          >
            IMPACT Boston
          </Link>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Built with Next.js + Sanity. Content updates revalidate automatically.
          </p>

          <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
            © {year} IMPACT Boston
          </p>
        </div>

        {/* Right */}
        <div className="col-span-12 md:col-span-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:justify-items-end">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-500">
                Site
              </p>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    className="text-gray-700 hover:underline dark:text-gray-300"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 hover:underline dark:text-gray-300"
                    href="/"
                  >
                    Posts
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-700 hover:underline dark:text-gray-300"
                    href="/"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-500">
                Resources
              </p>
              <ul className="space-y-1 text-sm">
                <li>
                  <a
                    className="text-gray-700 hover:underline dark:text-gray-300"
                    href="https://impact-boston.sanity.studio/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sanity Studio
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-700 hover:underline dark:text-gray-300"
                    href="https://github.com/Artists-for-Humanity/IMPACT-Boston"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-500">
                Contact
              </p>
              <ul className="space-y-1 text-sm">
                <li>
                  <a
                    className="text-gray-700 hover:underline dark:text-gray-300"
                    href="mailto:hello@example.com"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <Link
                    className="text-gray-700 hover:underline dark:text-gray-300"
                    href=""
                  >
                    Contact page
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-xs text-gray-500 dark:text-gray-500 md:text-right">
            Studio is deployed separately on Sanity.
          </p>
        </div>
      </div>
    </footer>
  );
}
