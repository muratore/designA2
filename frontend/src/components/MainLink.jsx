import { Link, useLocation } from "react-router-dom";
function MainLink({ texto, url, onClick}) {
  const location = useLocation()
  return (
    <Link
    to={`${url}`}
    className={` ${location.pathname === url ? "text-orange-500" : "font-medium  text-zinc-600 hover:text-zinc-300 tracking-widest" } `}
  >
    <li className=" my-2 py-2 lg:my-0 lg:py-0 border-b-2 bg-red-500* border-zinc-700 lg:border-0" onClick={onClick}>
        {texto}
    </li>
    </Link>
  );
}

export default MainLink;
