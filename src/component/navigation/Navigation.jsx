import React from "react";
import "./Navigation.css"
import { Link, Outlet } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <Link to="/" className="ShowLink" >Show</Link>
      <Link to="/login" className="InputLink" >Input</Link>
      <Outlet />
    </>
  );
};

export default Navigation;
