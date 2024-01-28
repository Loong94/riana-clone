import React from "react";
import { UseFormRegisterReturn, useForm } from "react-hook-form";

interface Props {
  label: string;
  placeholder?: string;
  type: string;
  formReg: UseFormRegisterReturn<"name" | "email" | "tel">;
}

const LabelInput = ({ label, placeholder, type, formReg }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-1 justify-between pb-4 md:w-[33vw] ">
      <label className="text-white bold-16 lg:bold-20 ">{label}</label>
      <input
        className="rounded-full border px-2 md:py-1 lg:py-2"
        type={type}
        placeholder={placeholder ? placeholder : label}
        required
        {...formReg}
      />
    </div>
  );
};

export default LabelInput;
