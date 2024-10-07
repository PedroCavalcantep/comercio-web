"use client"

import { Button } from "@material-tailwind/react";
import Image from "next/image"
import ShoppingMarket from "../assets/ShoppingMarket.svg"
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-[#418DFF] p-4">
    <div className="container mx-auto flex items-center justify-between">
      <Button variant="text" className="flex items-center hover>">
        <div className="w-12 h-12">
          <Image 
            src={ShoppingMarket}
            alt="ShoppingMarket"
            className="object-cover w-full h-full"
            />

        </div>
        <span className="ml-4 text-white text-2xl font-bold">
          Mercadinho Azulão
        </span>
      </Button>
    </div>
  </nav>
  )
}