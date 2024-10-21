"use client"
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
  <>
  <div className="grid sm:grid-cols-2 gap-2">
  <div className="">
    <Image src={"https://img.freepik.com/free-vector/astronaut-dabbing-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3360.jpg?w=740&t=st=1729506210~exp=1729506810~hmac=96ddce76166301d12e2655d93d1a9d5bd40bea55089b0ca55dd63fa0dbff9f4d"}
     alt="Image"
     height={500}
     width={500}
     className="rounded-full sm:m-20 "
     ></Image>
  </div>
  <div className="text-center mt-14 mb-5">
    <p className="sm:text-9xl text-4xl font-serif ">ASALAM ALIKUM</p>
    <span className="sm:text-9xl text-4xl font-serif bg-orange-400 p-1 rounded">HAMZA NASIR</span>
  </div>
  
  </div>
  </>
  );
}
