import React, { createRef } from "react";

export default function Form(props) {
  const nameInputRef = createRef();
  const idInputRef = createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChangeAndValidate();
  };

  const handleChangeAndValidate = () => {
    const { onSubmit, names } = props;
    const submittedName = nameInputRef.current.value;
    const submittedId = idInputRef.current.value;

    const hasDuplicates = names.find((name) => name.id === submittedId);
    if (hasDuplicates !== undefined) {
      alert("Enter unique id");
      idInputRef.current.focus();
    } else {
      onSubmit({ id: submittedId, name: submittedName });
      idInputRef.current.value = "";
      nameInputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} id="myform">
      <label style={{ fontSize: "20px", fontWeight: "bold" }}>
        Name: {""}
        <input type="text" required ref={nameInputRef} />
      </label>{" "}
      <label style={{ fontSize: "20px", fontWeight: "bold" }}>
        ID: {""}
        <input type="number" required ref={idInputRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
