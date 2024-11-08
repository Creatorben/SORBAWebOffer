import React from 'react';
import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import LogoLang from '../components/LogoLang';
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success(
      'Erfolgreich registriert! Bitte bestätige deine E-Mail-Adresse.'
    );
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <>
      <div className="h-full bg-gray-50">
        <div className="h-full">
          <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <Link to="/">
                <LogoLang />
              </Link>
              <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Registriere dich jetzt und erstelle kostenlos deinen Account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
              <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                <Form className="space-y-6" method="POST">
                  <div>
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
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newport-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
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
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newport-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newport-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Passwort
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-newport-900 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="agb"
                        name="agb"
                        type="checkbox"
                        required
                        className="h-4 w-4 rounded border-gray-300 text-newport-900 focus:ring-newport-900"
                      />
                      <label
                        htmlFor="agb"
                        className="ml-3 block text-sm leading-6 text-gray-900"
                      >
                        Ich stimme den{' '}
                        <Link className="text-newport-900" to="/agb">
                          AGB
                        </Link>{' '}
                        zu
                      </label>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-newport-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-svisitPrimary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-newport-900"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Registriert...' : 'Registrieren'}
                    </button>
                  </div>
                </Form>

                <div className="mt-4 border-t border-gray-900/10">
                  <p className="my-2 text-sm leading-6 text-gray-900 text-center">
                    Du hast bereits ein Konto?
                  </p>
                  <Link to="/login">
                    <button
                      type="button"
                      className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Einloggen
                    </button>
                  </Link>
                </div>
              </div>

              {/* <p className="mt-10 text-center text-sm text-gray-500">
            Noch kein Kunde?{' '}
            <a
              href="#"
              className="font-semibold leading-6 text-newport-900 hover:text-svisitPrimary-500"
            >
              Jetzt gratis testen!
            </a>
          </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;