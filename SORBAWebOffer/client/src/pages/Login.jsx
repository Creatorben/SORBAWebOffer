import React from 'react';
import {
  Form,
  redirect,
  useNavigation,
  Link,
  useSearchParams,
} from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import LogoLang from '../components/LogoLang';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post('/auth/login', data);
      queryClient.invalidateQueries();
      const userWithTimestamp = {
        ...response.data.tokenUser,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('user', JSON.stringify(userWithTimestamp));
      if (data.redirectURL) {
        return redirect(data.redirectURL);
      }
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const Login = () => {
  const navigation = useNavigation();
  const [queryParameters] = useSearchParams();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <>
      <div className="h-full bg-gray-50" style={{ height: '100vh' }}>
        <div className="h-full">
          <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <Link to="/">
                <LogoLang />
              </Link>
              <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Logge dich bei deinem Account ein
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
              <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                <Form className="space-y-6" method="POST">
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
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-newport-900 focus:ring-newport-900"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-900"
                      >
                        Angaben speichern
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <Link
                        to="/forgot-password"
                        href="#"
                        className="font-semibold text-newport-900 hover:text-newport-500"
                      >
                        Passwort vergessen?
                      </Link>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-newport-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-newport-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-newport-900"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Loggt ein...' : 'Einloggen'}
                    </button>
                  </div>
                </Form>
                <Link to="/register">
                  <div className="mt-4">
                    <button
                      type="button"
                      className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Registrieren
                    </button>
                  </div>
                </Link>
              </div>

              {/* <p className="mt-10 text-center text-sm text-gray-500">
                Noch kein Kunde?{' '}
                <a
                  href="#"
                  className="font-semibold leading-6 text-newport-900 hover:text-newport-500"
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

export default Login;