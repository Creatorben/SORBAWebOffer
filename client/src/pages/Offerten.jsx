import React from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import PositionsSlideIn from "../components/dashboard/PositionsSlideIn";

const Offerten = () => {
  const [open, setOpen] = useState(false);
  const [editPosition, setEditPosition] = useState([]);
  const [positionen, setPositionen] = useState([
    {
      id: "213904124",
      text: "Baustellenaushub",
      mengenEinheit: "m2",
      menge: "25",
      preis: "35",
    },
    {
      id: "23984u9",
      text: "Vorbereitungen",
      mengenEinheit: "H",
      menge: "2",
      preis: "50",
    },
  ]);

  return (
    <>
      <PositionsSlideIn
        open={open}
        setOpen={setOpen}
        editPosition={editPosition}
        setEditPosition={setEditPosition}
        positionen={positionen}
        setPositionen={setPositionen}
      />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-white px-6 py-6 sm:py-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Offerten erstellen
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Erstelle einfach eine Eigentext-Offerte.
            </p>
          </div>
        </div>

        {/* Kundenanschrift */}
        <h3 className="mt-2 leading-8 text-base font-semibold text-gray-900">
          Kundenangaben
        </h3>
        <div className="divide-y divide-gray/5 divide">
          <div className="mt-2 max-w-3xl">
            <label
              htmlFor="kundenadresse"
              className="block text-sm/6 text-nero-700"
            >
              Kundenadresse
            </label>
            <div className="mt-2">
              <textarea
                id="kundenadresse"
                name="kundenadresse"
                rows={4}
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newport-600 sm:text-sm/6"
                defaultValue={""}
              />
            </div>
          </div>

          {/* Positionen erfassen */}
          <div className="mt-6 pt-6">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h3 className="text-base font-semibold text-gray-900">
                  Offert-Positionen
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  Hier können einfach neue Positionen erfasst werden.
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                  type="button"
                  className="block rounded-md bg-newport-900 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-newport-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-newport-900"
                  onClick={() => setOpen(true)}
                >
                  Neue Position hinzufügen
                </button>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                        >
                          Text
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Mengeneinheit
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Menge
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Preis
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Resultat
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                        >
                          <span className="sr-only">Bearbeiten</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {positionen.map((position) => (
                        <tr key={position.id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                            {position.text}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {position.mengenEinheit}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {position.menge}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {position.preis} CHF
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {position.preis * position.menge} CHF
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                            <a
                              href="#"
                              className="text-newport-900 hover:text-newport-900"
                            >
                              Bearbeiten
                              <span className="sr-only">, {position.text}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerten;
