'use client'
import { Input, Button } from '@material-tailwind/react'
import { Card, Typography } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { getUsuarios, deleteUsuario } from '../api'

export default function Estoque() {
	const TABLE_HEAD = ['Cod. Usuário', 'Login', 'Senha', 'Cargo', '', '']

	const [TABLE_ROWS, SETTABLE_ROWS] = useState([])

	useEffect(() => {
		const carregarUsuarios = async () => {
			const usuarios = await getUsuarios()
			SETTABLE_ROWS(usuarios)
		}
		carregarUsuarios()
	}, [])

	return (
		<div className='flex flex-col items-center justify-center h-full w-full py-16 gap-3'>
			<div className='flex flex-row w-[1150px] justify-between '>
				<Button color='blue'>Criar</Button>
				<div className='relative flex w-full max-w-[24rem]'>
					<Input type='email' label='Pesquisar' className='pr-20' />
					<Button size='sm' className='!absolute right-1 top-1 rounded'>
						enter
					</Button>
				</div>
			</div>
			<Card className='h-full w-[1250px] overflow-scroll'>
				<table className='w-full min-w-max table-auto text-left'>
					<thead>
						<tr>
							{TABLE_HEAD.map((head) => (
								<th key={head} className='border-b border-blue-gray-100 bg-blue-gray-50 p-4  '>
									<Typography
										variant='small'
										color='blue-gray'
										className='font-normal leading-none opacity-70'
									>
										{head}
									</Typography>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{TABLE_ROWS.map(({ codUsuario, login, senha, cargo }, index) => {
							const isLast = index === TABLE_ROWS.length - 1
							const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

							return (
								<tr key={codUsuario} className='even:bg-blue-gray-50/50 '>
									<td className={classes}>
										<Typography variant='small' color='blue-gray' className='font-normal'>
											{codUsuario}
										</Typography>
									</td>
									<td className={classes}>
										<Typography variant='small' color='blue-gray' className='font-normal'>
											{login}
										</Typography>
									</td>
									<td className={classes}>
										<Typography variant='small' color='blue-gray' className='font-normal'>
											{senha}
										</Typography>
									</td>
									<td className={classes}>
										<Typography variant='small' color='blue-gray' className='font-normal'>
											{cargo}
										</Typography>
									</td>

									<td className={classes}>
										<Typography
											as='a'
											href='#'
											variant='small'
											color='blue-gray'
											className='font-medium'
										>
											<Button
												color='red'
												onClick={async () => {
													try {
														await deleteUsuario(codUsuario)
														SETTABLE_ROWS((prevRows) =>
															prevRows.filter((usuarios) => {
																usuarios.codUsuario !== codUsuario
															})
														)
													} catch (error) {
														console.log(error)
													}
												}}
											>
												remover
											</Button>
										</Typography>
									</td>
									<td className={classes}>
										<Typography
											as='a'
											href='#'
											variant='small'
											color='blue-gray'
											className='font-medium'
										>
											<Button color='blue'>editar</Button>
										</Typography>
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</Card>
		</div>
	)
}
