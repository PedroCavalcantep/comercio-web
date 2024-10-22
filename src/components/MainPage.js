'use client'
import { Input } from '@material-tailwind/react'
import { Button } from '@material-tailwind/react'
import Link from 'next/link'
import { login } from '../app/api'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function MainPage() {
	const [nome, setNome] = useState('')
	const [senha, setSenha] = useState('')
	const router = useRouter()

	return (
		<section className=" h-[730px] w-full flex pt-16 justify-center ">
			<div className="flex flex-col w-72 gap-5">
				<div className="text-center text-2xl font-bold"> MERCADINHO AZULÃO</div>

				<Input
					label="Usuario"
					value={nome}
					onChange={(e) => {
						setNome(e.target.value)
					}}
				/>
				<Input
					type="password"
					label="Senha"
					value={senha}
					onChange={(e) => {
						setSenha(e.target.value)
					}}
				/>

				<Button
					className="bg-blue-500 w-[120px] place-self-end"
					variant="filled"
					onClick={async () => {
						try {
							const response = await login(nome, senha)
							if (response.codUsuario) {
								router.push('/menu')
							}
						} catch (error) {}
					}}
				>
					Acessar
				</Button>
			</div>
		</section>
	)
}
