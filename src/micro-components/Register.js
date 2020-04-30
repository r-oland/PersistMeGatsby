// Components==============
import { AnimatePresence } from "framer-motion";
import { useToggle } from "hooks-lib/src";
import React, { useContext, useRef, useState } from "react";
import styled from "styled-components";
import { FirebaseContext } from "../firebase/index";
import { Button, L } from "../style/Mixins";
import Modal from "./Modal";
// =========================

const Btn = styled(L)`
  justify-self: flex-end;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  &:hover {
    color: ${({ theme: { primary } }) => primary.s4};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    border: none;
    box-shadow: ${({ theme: { shadow } }) => shadow.small};
    padding: ${({ theme: { spacing } }) => `${spacing.s4} ${spacing.s4}`};
    margin-top: ${({ theme: { spacing } }) => spacing.s6};
  }

  button {
    margin-top: ${({ theme: { spacing } }) => spacing.s5};
  }
`;

export default function Register() {
  const [formValues, setformValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { user, firebase } = useContext(FirebaseContext);
  const [modalIsOpen, setModalIsOpen, toggle] = useToggle(false);

  const errorRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordConf = formValues.password === formValues.confirmPassword;

    if (user === null && passwordConf) {
      firebase
        .register({
          email: formValues.email,
          password: formValues.password,
        })
        .then(() => {
          modalIsOpen && setModalIsOpen(false);
        })
        .catch((error) => {
          errorRef.current.innerHTML = error;
        });
    } else {
      errorRef.current.innerHTML = "The passwords do not match";
    }
  };

  const handleInputChange = (e) => {
    e.persist();
    setformValues((currentValues) => ({
      ...currentValues,
      [e.target.name]: e.target.value,
    }));

    errorRef.current.innerHTML = "";
  };

  return (
    <>
      <AnimatePresence>
        {modalIsOpen && (
          <Modal setModalIsOpen={setModalIsOpen} handleChange={toggle}>
            <Form onSubmit={handleSubmit}>
              <p ref={errorRef}></p>
              <input
                value={formValues.email}
                type="email"
                name="email"
                placeholder="email"
                onChange={handleInputChange}
                required
              />
              <input
                value={formValues.password}
                type="password"
                name="password"
                placeholder="password"
                onChange={handleInputChange}
                required
                minLength={6}
              />
              <input
                value={formValues.confirmPassword}
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                onChange={handleInputChange}
                required
                minLength={6}
              />
              <Button type="submit">Register</Button>
            </Form>
          </Modal>
        )}
      </AnimatePresence>
      <Btn as="button" onClick={toggle}>
        {user === null && "Register"}
      </Btn>
    </>
  );
}
