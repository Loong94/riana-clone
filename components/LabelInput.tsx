import React from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface Props {
  label: string;
  placeholder?: string;
  type: string;
  formReg: UseFormRegisterReturn<"name" | "email" | "tel">;
  formError: FieldError | undefined;
}

const LabelInput = ({
  label,
  placeholder,
  type,
  formReg,
  formError,
}: Props) => {
  return (
    <div className="grid grid-cols-1 gap-1 justify-between pb-3 md:w-[33vw] ">
      <label className="text-white bold-16 lg:bold-20 ">{label}</label>
      <input
        className="rounded-full border px-2 md:py-1 lg:py-2 text-black"
        type={type}
        placeholder={placeholder ? placeholder : label}
        {...formReg}
      />
      {formError && (
        <p className="text-rose-500 bold-16">{formError.message}</p>
      )}
    </div>
  );
};

export default LabelInput;
