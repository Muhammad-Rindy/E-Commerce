import React from "react";
import Topbar from "../Components/Topbar";

function Layout({ children }) {
  return (
    <div>
      <Topbar />
      {children}
    </div>
  );
}

export default Layout;
