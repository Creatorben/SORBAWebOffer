import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <>
        <div className="h-full" style={{ height: '100vh' }}>
          <div className="h-full">
            <main className="relative isolate min-h-full">
              <img
                src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
              />
              <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
                <p className="text-base font-semibold leading-8 text-white">
                  404
                </p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                  Seite nicht gefunden
                </h1>
                <p className="mt-4 text-base text-white/70 sm:mt-6">
                  Entschuldigung, diese Seite können wir leider nicht finden.
                </p>
                <div className="mt-10 flex justify-center">
                  <Link
                    to="/dashboard"
                    className="text-sm font-semibold leading-7 text-white"
                  >
                    <span aria-hidden="true">&larr;</span> Zurück
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="h-full" style={{ height: '100vh' }}>
        <div className="h-full">
          <main className="relative isolate min-h-full">
            <img
              src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
              alt=""
              className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
            />
            <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
              <p className="text-base font-semibold leading-8 text-white">
                Hoppla...
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Etwas ist schiefgelaufen
              </h1>
              <p className="mt-4 text-base text-white/70 sm:mt-6">
                Wir kümmern uns darum.
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  to="/dashboard"
                  className="text-sm font-semibold leading-7 text-white"
                >
                  <span aria-hidden="true">&larr;</span> Zurück
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Error;