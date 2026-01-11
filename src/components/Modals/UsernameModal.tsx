import React from "react";

type Operations = {

    open: boolean;
    close: () => void;
}


export default function UsernameDetailsModal({ open, close }:Operations) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={close}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div className="relative z-10 w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-100 shadow-xl">
        <div className="flex flex-col">
          {/* Top bar */}
          <header className="flex items-center justify-between px-4 pt-4 pb-2">
            <button
              type="button"
              onClick={close}
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white shadow"
            >
              <span className="sr-only">Close</span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-slate-700"
                aria-hidden="true"
              >
                <path
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <h1 className="text-base font-semibold text-slate-900">
              Personal details
            </h1>

            <div className="h-9 w-9" />
          </header>

 
          <main className="flex-1 px-4 pb-6">
            <section className="flex flex-col items-center mt-2 mb-6">
              <div className="h-28 w-28 rounded-full overflow-hidden bg-blue-500">
                {/* <img
                  src="/avatar-placeholder.jpg"
                  alt="Profile"
                  className="h-full w-full object-cover"
                /> */}
              </div>

              <button
                type="button"
                className="mt-2 text-sm font-medium text-sky-600"
              >
                edit
              </button>

              <p className="mt-1 text-xl font-semibold text-slate-900">
                @Username
              </p>
            </section>

            {/* Full name */}
            <section className="mb-4">
              <p className="text-xs font-medium tracking-wide text-slate-500">
                NAME
              </p>
              <button
                type="button"
                className="mt-2 w-full rounded-3xl bg-white px-4 py-4 text-left shadow-sm flex items-center justify-between"
              >
                <span className="text-base text-slate-900">Name User</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-slate-400"
                  aria-hidden="true"
                >
                  <path
                    d="M9 5.25L15.75 12 9 18.75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </section>

            {/* Contact details */}
            <section>
              <p className="text-xs font-medium tracking-wide text-slate-500">
                CONTACT DETAILS
              </p>

              {/* Username */}
              <button
                type="button"
                className="mt-2 w-full rounded-3xl bg-white px-4 py-4 text-left shadow-sm flex items-center justify-between"
              >
                <span className="text-base text-slate-900">@Username</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-slate-400"
                  aria-hidden="true"
                >
                  <path
                    d="M9 5.25L15.75 12 9 18.75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Email */}
              <button
                type="button"
                className="mt-2 w-full rounded-3xl bg-white px-4 py-4 text-left shadow-sm flex items-center justify-between"
              >
                <span className="text-base text-slate-900">
                  emailUser@email.com
                </span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-slate-400"
                  aria-hidden="true"
                >
                  <path
                    d="M9 5.25L15.75 12 9 18.75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Mobile number */}
              <button
                type="button"
                className="mt-2 w-full rounded-3xl bg-white px-4 py-4 text-left shadow-sm flex items-center justify-between"
              >
                <span className="text-base text-slate-900">+01 12345567</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-slate-400"
                  aria-hidden="true"
                >
                  <path
                    d="M9 5.25L15.75 12 9 18.75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
