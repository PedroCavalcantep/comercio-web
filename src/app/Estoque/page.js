"use client";
import { Input, Button } from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Cod_Prod", "Quantidade", "Descrição", "P_Compra", "P_Venda", "Cod_Barra", "NCM",  "remover", "editar"];
 
const TABLE_ROWS = [
  {
    Cod_Prod: "1234",
    Quantidade: "4",
    Descrição: "bananas",
    P_Compra: "R$1,00",
    P_Venda: "R$2,00",
    Cod_Barra: "sla pedro vai ver",
    NCM: " Sei nem oq é isso tbm",
  },
  {
    Cod_Prod: "1234",
    Quantidade: "4",
    Descrição: "bananas",
    P_Compra: "R$1,00",
    P_Venda: "R$2,00",
    Cod_Barra: "sla pedro vai ver",
    NCM: " Sei nem oq é isso tbm",
  },
  {
    Cod_Prod: "1234",
    Quantidade: "4",
    Descrição: "bananas",
    P_Compra: "R$1,00",
    P_Venda: "R$2,00",
    Cod_Barra: "sla pedro vai ver",
    NCM: " Sei nem oq é isso tbm",
  },
  {
    Cod_Prod: "1234",
    Quantidade: "4",
    Descrição: "bananas",
    P_Compra: "R$1,00",
    P_Venda: "R$2,00",
    Cod_Barra: "sla pedro vai ver",
    NCM: " Sei nem oq é isso tbm",
  },
  {
    Cod_Prod: "1234",
    Quantidade: "4",
    Descrição: "bananas",
    P_Compra: "R$1,00",
    P_Venda: "R$2,00",
    Cod_Barra: "sla pedro vai ver",
    NCM: " Sei nem oq é isso tbm",
  },
  {
    Cod_Prod: "1234",
    Quantidade: "4",
    Descrição: "bananas",
    P_Compra: "R$1,00",
    P_Venda: "R$2,00",
    Cod_Barra: "sla pedro vai ver",
    NCM: " Sei nem oq é isso tbm",
  },
];

export default function Estoque(){
  return(
    <div className="flex flex-col items-center justify-center h-full w-full py-16 gap-3">
      <div className="flex flex-row w-[1150px] justify-between ">
      <Button color="blue">Criar</Button>
      <div className="relative flex w-full max-w-[24rem]">
      <Input
        type="email"
        label="Pesquisar"
        className="pr-20"
      />
      <Button
        size="sm"
        className="!absolute right-1 top-1 rounded"
      >
        enter
      </Button>
    </div>
      </div>
    <Card className="h-full w-[1250px] overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4  "
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ Cod_Prod, Quantidade, Descrição, P_Compra, P_Venda, Cod_Barra, NCM}, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={Cod_Prod} className="even:bg-blue-gray-50/50 "> 
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Cod_Prod}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Quantidade}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Descrição}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {P_Compra}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {P_Venda}
                  </Typography>
                </td>

                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Cod_Barra}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {NCM}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                    >
                    <Button  color="red">remover</Button>
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                    >
                    <Button color="blue">editar</Button>
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
            </div>
  );
}