"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation"

function NotFound() {
  const pathname = usePathname();
  return (
    <div className="notifications-container w-80 h-auto text-sm flex justify-center items-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute gap-4">
      <div className="error-alert rounded-sm p-4 bg-[rgb(254_242_242)]">
        <div className="flex">
          <div className="flex-shrink-0">

            <svg
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#991B1B]"
            >
              <path
                clipRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="error-prompt-container flex flex-col ml-5">
            <p className="error-prompt-heading text-[#991b1b] text-sm font-bold">Error 404!</p>
            <div className="error-prompt-wrap mt-2 flex flex-col gap-5 text-[#B91C1C] text-sm">
              <ul className="error-prompt-list pl-5 mt-2 list-disc" role="list">
                <li>Page Not Found!</li>
                <li>Route entered &apos;{pathname}&apos; is not of Big Brain..</li>
              </ul>
              <Button asChild variant="destructive">
                <Link href={'/'}>Go Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound