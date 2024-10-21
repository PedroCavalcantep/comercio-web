'use client'
import { Input } from '@material-tailwind/react'
import { Button } from '@material-tailwind/react'
import Link from 'next/link'

export default function MainPage() {
	return (
		<section className=' h-[730px] w-full flex pt-16 justify-center '>
			<div className='flex flex-col w-72 gap-5'>
				<div className='text-center text-2xl font-bold'> MERCADINHO AZULÃO</div>

				<Input label='Usuario' />
				<Input type='password' label='Senha' />
				<Link href={'./menu'}>
					<Button className='bg-blue-500 w-[120px] place-self-end' variant='filled'>
						Acessar
					</Button>
				</Link>
			</div>
		</section>
	)
}
