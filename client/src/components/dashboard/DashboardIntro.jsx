import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { useDashboardContext } from '../../pages/DashboardLayout';

const DashboardIntro = () => {
  const { user } = useDashboardContext();
  return (
    <div className="bg-white px-6 py-6 sm:py-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Willkommen beim SORBA Offerten Tool,{' '}
          <p className="inline capitalize">{user.firstName}</p>
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Lorem Ipsum
        </p>
        <ul
          role="list"
          className="mt-8 max-w-xl space-y-8 text-gray-600 text-left"
        >
          <li className="flex gap-x-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 flex-none text-svisitPrimary-600"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">
                Offerten erstellen.
              </strong>{' '}
              Erstelle einfach Offerten.
            </span>
          </li>
          <li className="flex gap-x-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 flex-none text-svisitPrimary-600"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">
                Mehr Text.
              </strong>{' '}
              Lorem Ipsum.
            </span>
          </li>
          <li className="flex gap-x-3">
            <CheckCircleIcon
              className="mt-1 h-5 w-5 flex-none text-svisitPrimary-600"
              aria-hidden="true"
            />
            <span>
              <strong className="font-semibold text-gray-900">
                Mehr Text.
              </strong>{' '}
              Lorem Ipsum.
            </span>
          </li>
        </ul>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://www.sorba.ch/hubfs/Bilder-Screenshots/Mockups/Hero-Banner-Startseite-Fokus-MIS-GPS%20(1).png"
            alt="SORBA Offerten"
          />
        </figure>
      </div>
    </div>
  );
};

export default DashboardIntro;