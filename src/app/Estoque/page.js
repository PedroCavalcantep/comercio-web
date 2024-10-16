'use client'
import { Input, Button } from '@material-tailwind/react'
import { Card, Typography } from '@material-tailwind/react'
import { useEffect, useState } from 'react'

export default function Estoque() {
	const TABLE_HEAD = [
		'Código',
		'Quantidade',
		'Descrição',
		'Preço Compra',
		'Preço Venda',
		'Código de Barras',
		'NCM',
		'',
		'',
	]
	const [TABLE_ROWS, SETTABLE_ROWS] = useState([])

	useEffect(() => {
		fetch('http://localhost:8081/bazinga', { method: 'GET' })
			.then((response) => {
				if (response.ok) {
					return response.json()
				} else {
					throw new Error('Erro ao carregar produtos')
				}
			})
			.then((data) => {
				SETTABLE_ROWS(data)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<div className="flex flex-col items-center justify-center h-full w-full py-16 gap-3">
			<div className="flex flex-row w-[1150px] justify-between ">
				<Button color="blue">Criar</Button>
				<div className="relative flex w-full max-w-[24rem]">
					<Input type="email" label="Pesquisar" className="pr-20" />
					<Button size="sm" className="!absolute right-1 top-1 rounded">
						enter
					</Button>
				</div>
			</div>
			<Card className="h-full w-[1250px] overflow-scroll">
				<table className="w-full min-w-max table-auto text-left">
					<thead>
						<tr>
							{TABLE_HEAD.map((head) => (
								<th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
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
						{TABLE_ROWS.length > 0 ? (
							TABLE_ROWS.map(
								({ codProd, qtd, descricao, precoCompra, precoVenda, codBarra, ncm }, index) => {
									const isLast = index === TABLE_ROWS.length - 1
									const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

									return (
										<tr key={codProd} className="even:bg-blue-gray-50/50">
											<td className={classes}>
												<Typography variant="small" color="blue-gray" className="font-normal">
													{codProd}
												</Typography>
											</td>
											<td className={classes}>
												<Typography variant="small" color="blue-gray" className="font-normal">
													{qtd}
												</Typography>
											</td>
											<td className={classes}>
												<Typography variant="small" color="blue-gray" className="font-normal">
													{descricao}
												</Typography>
											</td>
											<td className={classes}>
												<Typography variant="small" color="blue-gray" className="font-normal">
													{precoCompra}
												</Typography>
											</td>
											<td className={classes}>
												<Typography variant="small" color="blue-gray" className="font-normal">
													{precoVenda}
												</Typography>
											</td>
											<td className={classes}>
												<Typography variant="small" color="blue-gray" className="font-normal">
													{codBarra}
												</Typography>
											</td>
											<td className={classes}>
												<Typography variant="small" color="blue-gray" className="font-normal">
													{ncm}
												</Typography>
											</td>
											<td className={classes}>
												<Button color="red">remover</Button>
											</td>
											<td className={classes}>
												<Button color="blue">editar</Button>
											</td>
										</tr>
									)
								}
							)
						) : (
							<tr>
								<td colSpan={TABLE_HEAD.length} className="text-center p-4">
									<Typography variant="small" color="blue-gray" className="font-normal">
										Nenhum produto encontrado
									</Typography>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</Card>
		</div>
	)
}
