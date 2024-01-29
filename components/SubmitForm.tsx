"use client";
import React, { useState } from "react";
import LabelInput from "./LabelInput";
import Button from "./Button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormDataSchema } from "@/lib/schema";

type Inputs = z.infer<typeof FormDataSchema>;

interface Props {
  formVariant: string;
  btnVariant: string;
}

const SubmitForm = ({ formVariant, btnVariant }: Props) => {
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: zodResolver(FormDataSchema) });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    try {
      fetch("/api/customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          tel: data.tel.replaceAll("+", "").replaceAll("-", ""),
        }),
      });
    } catch (error) {
      console.error(error);
    }

    setMessage(
      `Thank you ${data.name} registering. We will send you the details soon.`
    );
    reset();
  };

  return (
    <>
      <form className={formVariant} onSubmit={handleSubmit(onSubmit)}>
        <LabelInput
          label="Name"
          type="text"
          formReg={register("name")}
          formError={errors.name}
        />
        <LabelInput
          label="Email*"
          placeholder="john.doe@company.com"
          type="email"
          formReg={register("email")}
          formError={errors.email}
        />
        <LabelInput
          label="Phone"
          placeholder="0121234567"
          type="tel"
          formReg={register("tel")}
          formError={errors.tel}
        />
        <Button type="submit" title="SUBMIT" variant={btnVariant} />
      </form>
      <p className="text-white">{message}</p>
    </>
  );
};

export default SubmitForm;
