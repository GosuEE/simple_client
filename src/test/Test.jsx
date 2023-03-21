import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { userAPI } from "./api/user/user";
import Button from "./component/common/Button";
import DeleteForm from "./component/user/DeleteForm";
import SubmitForm from "./component/user/SubmitForm";
import UpdateForm from "./component/user/UpdateForm";

function Test() {
  const [text, setText] = useState(null);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    userAPI.getUser().then((res) => {
      let text = "";

      res.data.map((row) => {
        Object.keys(row).map((key) => (text = text + `${key}: ${row[key]}/`));
        text = text + "\n";
      });
      setText(text);
    });
  }

  return (
    <div>
      <SubmitForm />
      <UpdateForm />
      <DeleteForm />
      <Text>{text}</Text>
      <Button text={"새로고침"} disabled={false} onClick={getUsers}></Button>
    </div>
  );
}

const Text = styled.div`
  font-family: sans-serif;
  white-space: pre;
`;

export default Test;
