import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { userAPI } from "../../api/user/user";
import Button from "../common/Button";

const intCheck = /^(?!0)[0-9]+$/;

function SubmitForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [disable, setDisable] = useState(true);

  function onNameChangeHandler(event) {
    setName(event.target.value);
  }
  function onAgeChangeHandler(event) {
    if (intCheck.test(event.target.value) || event.target.value === "")
      setAge(event.target.value);
  }
  function onJobChangeHandler(event) {
    setJob(event.target.value);
  }

  function submitUser() {
    userAPI.submitUser(
      JSON.stringify({
        age: age * 1,
        name,
        job,
      })
    );
  }

  useEffect(() => {
    setDisable(name === "" || age === "" || job === "");
  }, [name, age, job]);

  return (
    <Input>
      이름:{" "}
      <input
        type="text"
        onChange={(event) => onNameChangeHandler(event)}
        value={name}
      ></input>
      <br />
      나이:{" "}
      <input
        type="text"
        onChange={(event) => onAgeChangeHandler(event)}
        value={age}
      ></input>
      <br />
      직업:{" "}
      <input
        type="text"
        onChange={(event) => onJobChangeHandler(event)}
        value={job}
      ></input>
      <br />
      <Button text={"제출"} disabled={disable} onClick={submitUser}></Button>
    </Input>
  );
}

const Input = styled.div`
  display: block;
  font-family: sans-serif;
  width: max-content;
`;

export default SubmitForm;
