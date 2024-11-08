import React from "react";
import { DocumentCheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import PositionsSlideIn from "../components/dashboard/PositionsSlideIn";
import { useDashboardContext } from "./DashboardLayout";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../components/dashboard/Invoice";
import { nanoid } from "nanoid";
import { useNavigation } from "react-router-dom";
import { useMemo } from "react";

const Offerten = () => {
  const { user } = useDashboardContext();
  const [open, setOpen] = useState(false);
  const [editPosition, setEditPosition] = useState([]);

  const [kundenadresse, setKundenadresse] = useState();

  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

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

  const [offerDownload, setOfferDownload] = useState(false);

  const handleDownloadClick = () => {
    // Set the selected order ID to the clicked one
    setOfferDownload(true);
  };

  const offerCode = useMemo(() => nanoid(6), []);

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="bg-white py-6 sm:py-6">
          <div className="max-w-2xl text-left">
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
                value={kundenadresse}
                onChange={(e) => setKundenadresse(e.target.value)}
                rows={4}
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newport-600 sm:text-sm/6"
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
                  onClick={() => {
                    setOpen(true);
                    setEditPosition({});
                  }}
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
                            <button
                              type="button"
                              onClick={() => {
                                setEditPosition(position);
                                setOpen(true);
                              }}
                              className="text-newport-900 hover:text-newport-900"
                            >
                              Bearbeiten
                              <span className="sr-only">, {position.text}</span>
                            </button>
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

        {/* Offerte generieren */}

        <div className="mt-6 pt-6">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h3 className="text-base font-semibold text-gray-900">Fertig?</h3>
              <p className="mt-2 text-sm text-gray-700">
                Mit dem Klick auf den Button wird deine Offerte erstellt.
              </p>
              <div className="mt-6">
                {offerDownload ? (
                  <PDFDownloadLink
                    document={
                      <Invoice
                        positionen={positionen}
                        user={user}
                        kundenadresse={kundenadresse}
                        offerCode={offerCode}
                      />
                    }
                    fileName={`Offerte_${offerCode}.pdf`}
                    className="inline-flex items-center gap-x-2 rounded-md bg-newport-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-newport-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-newport-900"
                  >
                    <DocumentCheckIcon
                      aria-hidden="true"
                      className="-ml-0.5 h-5 w-5"
                    />
                    {isPageLoading
                      ? "Offerte wird erstellt..."
                      : "Offerte herunterladen"}
                  </PDFDownloadLink>
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center gap-x-2 rounded-md bg-newport-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-newport-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-newport-900"
                    onClick={handleDownloadClick}
                  >
                    Offerte generieren
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <PositionsSlideIn
        open={open}
        setOpen={setOpen}
        editPosition={editPosition}
        setEditPosition={setEditPosition}
        positionen={positionen}
        setPositionen={setPositionen}
      />
    </>
  );
};

export default Offerten;
