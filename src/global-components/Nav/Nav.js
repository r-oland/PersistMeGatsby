// Components==============
import React from "react";
import styled from "styled-components";
import Login from "../../micro-components/Login";
import Register from "../../micro-components/Register";
// =========================

const Flex = styled.div`
  display: flex;
`;

export default function Nav() {
  return (
    <Flex>
      <Login />
      <Register />
    </Flex>
  );
}
