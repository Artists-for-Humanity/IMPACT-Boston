import { draftMode } from "next/headers";
import Link from "next/link";

export async function DraftModeIndicator() {
  const { isEnabled } = await draftMode();

  if (!isEnabled) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg border border-orange-300 bg-orange-100 px-4 py-2 shadow-lg dark:border-orange-700 dark:bg-orange-900/80">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-orange-600 animate-pulse" />
          <span className="text-sm font-medium text-orange-900 dark:text-orange-100">
            Draft Mode Active
          </span>
        </div>
        <Link
          href="/api/disable-draft"
          className="text-sm text-orange-700 underline hover:text-orange-900 dark:text-orange-300 dark:hover:text-orange-100"
        >
          Exit
        </Link>
      </div>
    </div>
  );
}
