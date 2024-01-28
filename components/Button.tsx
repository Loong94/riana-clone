"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  ringColour?: string;
  navigate?: string;
}

const Button = ({
  type,
  title,
  icon,
  variant,
  ringColour,
  navigate = "whatsapp",
}: Props) => {
  if (type === "submit") {
    return (
      <button
        type={type}
        className={`relative flexCenter rounded-full border ${variant}`}
      >
        <span className="cursor-pointer bold-16 whitespace-nowrap px-2">
          {title}
        </span>
      </button>
    );
  } else {
    return (
      <Link
        href={navigate === "whatsapp" ? "https://www.whatsapp.com/" : navigate}
        target={navigate === "whatsapp" ? "_blank" : ""}
        className={`relative flexCenter rounded-full border ${variant}`}
      >
        <button type={type}>
          {ringColour && (
            <div
              className={`absolute inset-0 rounded-full animate-pulse ring-4 ${ringColour}`}
            ></div>
          )}
          <div className="flex flex-row">
            <label className="cursor-pointer bold-16 whitespace-nowrap px-2">
              {title}
            </label>
            {icon && <Image src={icon} alt={title} width={24} height={24} />}
          </div>
        </button>
      </Link>
    );
  }
};

export default Button;
