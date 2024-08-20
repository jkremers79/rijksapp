import { Outlet, Link } from "react-router-dom";
import "./Root.css";

export const Root = () => {
  return (
    <>
      <div className="root_wrapper">
        <h1>Rembrandt Rijks Gallery</h1>
        <Link to="./">Show full Gallery</Link>
      </div>
      <Outlet />
    </>
  );
};
