import {} from "react";
import { Outlet } from "react-router-dom";

// type Props = {}

const Root = () => {
  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
};

export default Root;