import React, { useEffect, useState } from 'react';
import { Form, redirect, useNavigation } from 'react-router-dom';
import { useDashboardContext } from '../pages/DashboardLayout';
// import { toast } from 'react-toastify';
// import customFetch from '../../utils/customFetch';
// import { useQuery } from '@tanstack/react-query';

const Einstellungen = () => {
    const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const { user } = useDashboardContext();
  return (
    <>
    <div className="divide-y divide-gray/5">
    <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
      <div>
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Persönliche Informationen
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-700">
          Name, Titel und E-Mail-Adresse verwalten.
        </p>
      </div>

      <Form
        method="POST"
        className="md:col-span-2"
        encType="multipart/form-data"
      >
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Vorname
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                className="capitalize block w-full rounded-md px-3.5 border-0 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset focus:ring-newport-600 sm:text-sm sm:leading-6"
                defaultValue={user.firstName}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nachname
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                className="capitalize block w-full rounded-md px-3.5 border-0 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-newport-600 sm:text-sm sm:leading-6"
                defaultValue={user.lastName}
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Titel / Jobbezeichnung
            </label>
            <div className="mt-2">
              <input
                id="title"
                name="title"
                type="text"
                className="block w-full rounded-md border-0 px-3.5 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-newport-600 sm:text-sm sm:leading-6"
                defaultValue={user.title}
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="company"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Unternehmen
            </label>
            <div className="mt-2">
              <input
                id="company"
                name="company"
                type="text"
                className="block w-full rounded-md border-0 px-3.5 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-newport-600 sm:text-sm sm:leading-6"
                defaultValue={user.company}
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              E-Mail-Adresse
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 bg-white/5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-newport-600 sm:text-sm sm:leading-6"
                defaultValue={user.email}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex">
          <button
            type="submit"
            className="rounded-md bg-newport-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-newport-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-newport-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Speichert...' : 'Speichern'}
          </button>
        </div>
      </Form>
    </div>
    </div>
    </>
  )
}

export default Einstellungen
