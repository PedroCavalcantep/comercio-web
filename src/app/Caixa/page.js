"use client";

import ShoppingMarket from "../../assets/ShoppingMarket.svg";
import Image from "next/image";
import { Input } from "@material-tailwind/react";

export default function Caixa() {
  return (
    <div className="flex flex-col w-full h-[710px] items-center gap-6 bg-[#418DFF] ">
      <div className=" flex justify-center rounded-lg items-center w-4/5 h-14 bg-white text-[#418dff] font-bold mt-11 py-10 text-5xl ">
        <p>CAIXA</p>
      </div>

      <div className="flex flex-row w-4/5 h-[400px] justify-between gap-5">
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-center text-4xl  text-white p-2 rounded-t-[10px] bg-[#0F5DED]">
              Codigo de Barras
            </p>
            <Input
              type="text"
              type size = "lg"
              className="rounded-b-md rounded-t-none  bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
          </div>

          <div>
          <p className="text-center text-4xl  text-white p-2 rounded-t-[10px] bg-[#0F5DED]">
              Quantidade
            </p>
            <Input
              type="text"
              type size = "lg"
              className="rounded-b-md rounded-t-none  bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
          </div>

          <div>
          <p className="text-center text-4xl  text-white p-2 rounded-t-[10px] bg-[#0F5DED]">
              Preço Unitario
            </p>
            <Input
              type="text"
              type size = "lg"
              className="rounded-b-md rounded-t-none  bg-white !border-t-blue-gray-200 focus:!border-t-gray-900"
            />
          </div>

          <Image
            src={ShoppingMarket}
            alt="ShoppingMarket"
            className=" text-blue-700"
          />
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <p>Lista de Produtos</p>
          </div>

          <div>
            <p>Subtotal</p>
          </div>

          <div className="flex flex-row gap-8">
            <div>
              <p>Total Recebido</p>
            </div>
            <div>
              <p>Troco</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
