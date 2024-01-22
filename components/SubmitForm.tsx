"use client";
import React from "react";
import LabelInput from "./LabelInput";
import Button from "./Button";

interface Props {
  formVariant: string;
  btnVariant: string;
}

const SubmitForm = ({ formVariant, btnVariant }: Props) => {
  return (
    <form className={formVariant}>
      <LabelInput label="Name" type="text" />
      <LabelInput
        label="Email*"
        placeholder="john.doe@company.com"
        type="email"
      />
      <LabelInput label="Phone" type="tel" />
      <Button
        type="submit"
        title="SUBMIT"
        variant={btnVariant}
        navigate="whatsapp"
      />
    </form>
  );
};

export default SubmitForm;
