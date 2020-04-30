// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Shade = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 300;
  background-color: ${({ theme: { black } }) => black.replace("1)", "0.9)")};
  top: 0;
  left: 0;
  transition: 0.5s;
`;

const ModalWrapper = styled.div`
  background-color: ${({ theme: { white } }) => white};
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  box-shadow: ${({ theme: { shadow } }) => shadow.medium};
  position: fixed;
  z-index: 301;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-width: 90vw;
  transition: 0.5s;

  p {
    color: ${({ theme: { gray } }) => gray.s7};
  }

  .close {
    cursor: pointer;
    position: fixed;
    right: ${({ theme: { spacing } }) => spacing.s5};
    top: ${({ theme: { spacing } }) => spacing.s3};
    color: ${({ theme: { primary } }) => primary.s6};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    z-index: 302;
  }
`;

const OverflowDiv = styled.div`
  overflow: auto;
  max-height: 80vh;
  padding: ${({ theme: { spacing } }) => `${spacing.s8} ${spacing.s5}`};
`;

export default function Modal({ children, handleChange }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Shade />
      <ModalWrapper>
        <OverflowDiv>
          <button className="close" onClick={handleChange}>
            close
          </button>
          {children}
        </OverflowDiv>
      </ModalWrapper>
    </motion.div>
  );
}
