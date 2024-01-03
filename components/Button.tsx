"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  navigate: string;
}

const Button = ({
  type,
  title,
  icon,
  variant,
  navigate = "whatsapp",
}: Props) => {
  return (
    <button type={type} className={`flexCenter rounded-full border ${variant}`}>
      <label className="cursor-pointer bold-16 whitespace-nowrap px-2">
        {navigate === "whatsapp" ? (
          <Link href="https://www.whatsapp.com/" target="_blank">
            {title}
          </Link>
        ) : (
          <Link href={navigate}>{title}</Link>
        )}
      </label>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
    </button>
  );
};

export default Button;
