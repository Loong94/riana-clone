import Image from "next/image";
import React from "react";

interface Props {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
}

const Button = ({ type, title, icon, variant }: Props) => {
  return (
    <button type={type} className={`flexCenter rounded-full border ${variant}`}>
      <label className="bold-16 whitespace-nowrap px-2">{title}</label>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
    </button>
  );
};

export default Button;
