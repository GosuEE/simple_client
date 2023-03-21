import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { userAPI } from "../../api/user/user";
import Button from "../common/Button";

const intCheck = /^(?!0)[0-9]+$/;

function DeleteForm() {
  const [id, setId] = useState("");
  const [disable, setDisable] = useState(true);

  function onIdChangeHandler(event) {
    if (intCheck.test(event.target.value) || event.target.value === "")
      setId(event.target.value);
  }

  function deleteUser() {
    userAPI.deleteUser(id);
  }

  useEffect(() => {
    setDisable(id === "");
  }, [id]);

  return (
    <Input>
      ID:{" "}
      <input
        type="text"
        onChange={(event) => onIdChangeHandler(event)}
        value={id}
      ></input>
      <br />
      <Button text={"삭제"} disabled={disable} onClick={deleteUser}></Button>
    </Input>
  );
}

const Input = styled.div`
  display: block;
  font-family: sans-serif;
  width: max-content;
`;

export default DeleteForm;
