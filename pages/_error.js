import Link from 'next/link';
import NextErrorComponent from 'next/error';
import * as Sentry from '@sentry/nextjs';

const statusCodes = {
  400: { title: 'Bad Request', description: "Something doesn't seem right" },
  404: {
    title: 'This page could not be found',
    description: 'Please check the URL in the address bar and try again.',
  },
  405: { title: 'Method Not Allowed', description: "Something doesn't seem right" },
  500: {
    title: 'Internal Server Error',
    description: 'Sorry, something went wrong !! Please contact support...',
  },
};

const MyError = ({ statusCode, hasGetInitialPropsRun, err }) => {
  if (!hasGetInitialPropsRun && err && process.env.NODE_ENV === 'production') {
    // getInitialProps is not called in case of
    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
    // err via _app.js so it can be captured
    Sentry.captureException(err);
    // Flushing is not required in this case as it only happens on the client
  }

  statusCode = statusCode ? statusCode : err ? err.statusCode : 404;

  return (
    <div className="bg-white dark:bg-black min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">{statusCode}</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                {statusCodes[statusCode].title}
              </h1>
              <p className="mt-1 text-base text-gray-500">{statusCodes[statusCode].description}</p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link href="/">
                <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Go back home
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

MyError.getInitialProps = async (context) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps(context);

  const { res, err, asPath } = context;

  // Workaround for https://github.com/vercel/next.js/issues/8592, mark when
  // getInitialProps has run
  errorInitialProps.hasGetInitialPropsRun = true;

  // Returning early because we don't want to log 404 errors to Sentry.
  if (res?.statusCode === 404) {
    return errorInitialProps;
  }

  // Running on the server, the response object (`res`) is available.
  //
  // Next.js will pass an err on the server if a page's data fetching methods
  // threw or returned a Promise that rejected
  //
  // Running on the client (browser), Next.js will provide an err if:
  //
  //  - a page's `getInitialProps` threw or returned a Promise that rejected
  //  - an exception was thrown somewhere in the React lifecycle (render,
  //    componentDidMount, etc) that was caught by Next.js's React Error
  //    Boundary. Read more about what types of exceptions are caught by Error
  //    Boundaries: https://reactjs.org/docs/error-boundaries.html

  if (err) {
    if (process.env.NODE_ENV === 'production') {
      Sentry.captureException(err);

      // Flushing before returning is necessary if deploying to Vercel, see
      // https://vercel.com/docs/platform/limits#streaming-responses
      await Sentry.flush(2000);
    }

    return errorInitialProps;
  }

  // If this point is reached, getInitialProps was called without any
  // information about what the error might be. This is unexpected and may
  // indicate a bug introduced in Next.js, so record it in Sentry
  if (process.env.NODE_ENV === 'production') {
    Sentry.captureException(new Error(`_error.js getInitialProps missing data at path: ${asPath}`));
    await Sentry.flush(2000);
  }

  return errorInitialProps;
};

export default MyError;
