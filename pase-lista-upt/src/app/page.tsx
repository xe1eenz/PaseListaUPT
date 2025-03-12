"use client"
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";


import Image from "next/image";

export default function Home() {
  return (
   <div>
    <h1>Hola</h1>
    <Button variant="outline">DAFNE BURRA</Button>
    <Button variant="destructive">Destructive</Button>
    <LoginLink>Sign in</LoginLink>
    <RegisterLink>Sign up</RegisterLink>
   </div>
  );
}
