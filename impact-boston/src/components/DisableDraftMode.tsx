"use client";

import { useTransition } from "react";
import { disableDraftMode } from "@/app/actions";

export function DisableDraftMode() {
  const [pending, startTransition] = useTransition();

  const disable = () =>
    startTransition(() => disableDraftMode());

  return (
    <div className="fixed left-4 top-4 z-[2147483647]">
      <button
        type="button"
        onClick={disable}
        disabled={pending}
        className="rounded-md border-2 border-white bg-red-600 px-5 py-3 text-base font-bold text-white shadow-2xl ring-2 ring-red-900/30 transition hover:bg-red-700 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-wait disabled:opacity-80"
      >
        {pending ? "Disabling draft mode..." : "Exit draft mode"}
      </button>
    </div>
  );
}
