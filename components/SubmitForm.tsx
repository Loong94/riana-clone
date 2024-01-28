"use client";
import React from "react";
import LabelInput from "./LabelInput";
import Button from "./Button";
import { useForm } from "react-hook-form";

interface Props {
  formVariant: string;
  btnVariant: string;
}

const SubmitForm = ({ formVariant, btnVariant }: Props) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      className={formVariant}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <LabelInput label="Name" type="text" formReg={register("name")} />
      <LabelInput
        label="Email*"
        placeholder="john.doe@company.com"
        type="email"
        formReg={register("email")}
      />
      <LabelInput
        label="Phone"
        placeholder="0121234567"
        type="tel"
        formReg={register("tel")}
      />
      <Button type="submit" title="SUBMIT" variant={btnVariant} />
    </form>
  );
};

export default SubmitForm;
