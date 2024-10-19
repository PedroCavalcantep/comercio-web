"use client";
import { Input, Button } from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Cod_Usuario","Login" ,"Senha","Cargo", "Salario", "remover", "editar"];
 
const TABLE_ROWS = [
  {
    Cod_Usuario: "Pedro Cagao",
    Login: "Pedro_makako",
    Senha: "pedro1234",
    Cargo: "Faxineiro",
    Salario: "1 banana",
  },
  
  {
    Cod_Usuario: "Isaias",
    Login: "IsaisNet",
    Senha: "internet1234",
    Cargo: "Balconista",
    Salario: "1 coca cola"
  },

  {
    Cod_Usuario: "Jusia Figma Jr",
    Login: "FigmaJunior",
    Senha: "Figma123",
    Cargo: "Repositor",
    Salario: "3DS"
  },

  {
    Cod_Usuario: "Kauê",
    Login: "kaue_barbosa",
    Senha: "kaue123",
    Cargo: "Gerente",
    Salario: "R$ 1.600,00"
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
          {TABLE_ROWS.map(({ Cod_Usuario, Login, Senha, Cargo, Salario}, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={Cod_Usuario} className="even:bg-blue-gray-50/50 "> 
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Cod_Usuario}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Login}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  
                  >
                     {Senha} 
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Cargo}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {Salario}
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