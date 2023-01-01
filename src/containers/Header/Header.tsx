// Import Third-party Modules
import React from "react";

// Import User-Defined Modules
import "./Header.scss";
import { IHeaderProps } from "../../types/containers/Header.interface";

export const Header: React.FC<IHeaderProps> = () => {
  return (
    <>
      <h1> Header </h1>
    </>
  );
};
