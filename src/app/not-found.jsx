const PageNotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-amber-50 p-6">
      <div className="text-center max-w-md">
        <div className="h-[350px] w-full overflow-hidden flex items-center justify-center drop-shadow-xl drop-shadow-gray-300">
          <img
            src="/images/404/coffee-cup.webp"
            className="w-full h-full object-cover object-[center_30%] rounded-2xl"
          />
        </div>

        {/* Text */}
        <h1 className="text-6xl font-extrabold text-gray-800 mt-10">404</h1>
        <p className="mt-4 text-lg text-gray-600">
          Oops… Someone spilled coffee on the server.
        </p>
        <p className="text-gray-500">The page you’re looking for isn’t here.</p>

        {/* Button */}
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg shadow hover:bg-amber-700 transition"
        >
          Take me home
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
