import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid h-[80vh] place-content-center">
      <p className="text-2xl italic">Resource Not Found</p>
      <Link
        to="/"
        className="bg-sky-500 px-12 text-center my-4 py-2 text-xl text-white font-bold"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
