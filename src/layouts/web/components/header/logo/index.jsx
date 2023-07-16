import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to={"/"} className="text-2xl font-semibold text-primary ">
      Auron
      <span className="text-sm ml-2 font-medium text-zinc-500 ">v1.0.0</span>
    </Link>
  );
}
export default Logo;
