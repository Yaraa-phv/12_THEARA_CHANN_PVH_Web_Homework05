"use client"

import React from "react";
import {Form, Input} from "@heroui/react";

export default function SearchBar() {
  const [errors, setErrors] = React.useState({});

  const onSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (!data.username) {
      setErrors({username: "Username is required"});

      return;
    }

    const result = callServer(data);

    // console.log(data);
    
    setErrors(result.errors);
  };

  return (
    <Form
      className="self-center"
      validationErrors={errors}
      onSubmit={onSubmit}
    >
      <Input
        labelPlacement="outside"
        name="username"
        placeholder="Search anything you want..."
      />
    </Form>
  );
}
// Fake server used in this example.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function callServer(data) {
  return {
    errors: {
      username: "Sorry, this username is taken.",
    },
  };
}


