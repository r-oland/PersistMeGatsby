import React from "react";
import Layout from "./src/global-components/Layout/Layout";

const page = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export default page;
