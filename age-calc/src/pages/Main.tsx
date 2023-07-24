import React from "react";
import Form from "../components/Form";
import Result from "../components/Result";

interface Props {}

const Main = (props: Props) => {
  return (
    <main>
      <Form />
      <Result />
    </main>
  );
};

export default Main;
