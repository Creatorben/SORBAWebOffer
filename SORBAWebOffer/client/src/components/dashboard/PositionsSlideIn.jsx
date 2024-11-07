import React from "react";
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const PositionsSlideIn = ({
  open,
  setOpen,
  editPosition,
  positionen,
  setPositionen,
}) => {
  const [text, setText] = useState(editPosition?.text || "");
  const [mengenEinheit, setMengenEinheit] = useState(
    editPosition?.mengenEinheit || ""
  );
  const [menge, setMenge] = useState(editPosition?.menge || "");
  const [preis, setPreis] = useState(editPosition?.preis || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPosition = {
      id: Date.now().toString(), // Generates a unique ID for new position
      text,
      mengenEinheit,
      menge,
      preis,
    };

    // Add new position to positionen array
    setPositionen((positionen) => [...positionen, newPosition]);
    setOpen(false); // Close the dialog after adding the position
    setText("");
    setMengenEinheit("");
    setMenge("");
    setPreis("");
  };
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-[100]">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <form
                onSubmit={handleSubmit}
                className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
              >
                <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-base font-semibold text-gray-900">
                        Position bearbeiten
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-newport-600"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Schliessen</span>
                          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <div className="flex h-full flex-col">
                      <div className="space-y-6 pb-5 pt-6">
                        <div>
                          <label
                            htmlFor="text"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Titel
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="text"
                              id="text"
                              value={text}
                              onChange={(e) => setText(e.target.value)}
                              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-svisitPrimary-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6 pb-5">
                        <div>
                          <label
                            htmlFor="mengenEinheit"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Mengeneinheit
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="mengenEinheit"
                              id="mengenEinheit"
                              value={mengenEinheit}
                              onChange={(e) => setMengenEinheit(e.target.value)}
                              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-svisitPrimary-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6 pb-5">
                        <div>
                          <label
                            htmlFor="menge"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Menge
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="menge"
                              id="menge"
                              value={menge}
                              onChange={(e) => setMenge(e.target.value)}
                              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-svisitPrimary-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6 pb-5">
                        <div>
                          <label
                            htmlFor="preis"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Preis
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="preis"
                              id="preis"
                              value={preis}
                              onChange={(e) => setPreis(e.target.value)}
                              className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-svisitPrimary-600 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex shrink-0 justify-end px-4 py-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                  >
                    Abbrechen
                  </button>
                  <button
                    type="submit"
                    className="ml-4 inline-flex justify-center rounded-md bg-newport-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-newport-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-newport-600"
                  >
                    Speichern
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default PositionsSlideIn;
