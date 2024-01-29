import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function POST(request: NextRequest) {
  const { name, email, tel } = await request.json();

  const customer = await prisma.customer.create({
    data: {
      name: name,
      email: email,
      phoneNumber: tel,
      project: process.env.PROJECT_NAME
        ? process.env.PROJECT_NAME
        : "Project Name Not Setup",
    },
  });

  return NextResponse.json(customer, { status: 201 });
}
