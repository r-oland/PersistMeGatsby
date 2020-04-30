import React from "react";
import styled from "styled-components";

const Overflow = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;

const root = ({ element, props }) => {
  return <Overflow {...props}>{element}</Overflow>;
};

export default root;
