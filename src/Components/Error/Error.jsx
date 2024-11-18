import error from "../../assets/man-upset-computer-error-cartoon-illustration-system-308564220.webp";

const Error = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <div className="h-96 mb-4">
        <img className="h-full" src={error} alt="" />
      </div>
      <h3 className="text-7xl font-bold text-red-700 mb-8">404</h3>
      <p className="text-3xl capitalize text-red-500 italic">Page not found</p>
    </div>
  );
};

export default Error;
