import { Outlet, Link } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <h1>Rijks Gallery</h1>
      <Link to="./">Show full Gallery</Link>
      <Outlet />
    </>
  );
};
