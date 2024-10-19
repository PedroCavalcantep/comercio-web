import Box from '../assets/Box.svg'
import Image from 'next/image'
import User from '../assets/User.svg'
import ShoppingMarket from '../assets/ShoppingMarket.svg'
import Link from 'next/link'

export default function Menu() {
	return (
		<div>
			<div className=" flex justify-center items-center h-[700px] max-w-5x1 mx-auto gap-8 group">
				<Link href={'/estoque'}>
					<div className="bg-blue-400 duration-500 w-[280px] h-[250px]  text-white text-lg text-center cursor-pointer   font-extrabold rounded-xl shadow-lg shadow-gray-900 p-8 gap-5 rounded-x1 flex flex-col justify-center items-center hover:bg-[#434C5E]  hover:text-white  transition ease-in-out">
						<Image src={Box} alt="Box" className=" w-[100px]" />

						<p>Estoque</p>
					</div>
				</Link>

				{/* bg-[#434C5E] */}

				<Link href={'/usuario'}>
					<div className=" bg-blue-400 duration-500 w-[280px] h-[250px]  text-white text-lg text-center cursor-pointer font-extrabold rounded-xl shadow-lg shadow-gray-900 p-8 gap-5 rounded-x1 flex flex-col justify-center items-center hover:bg-[#434C5E]  hover:text-white  transition ease-in-out">
						<Image src={User} alt="User" className=" w-[100px]" />

						<p>Usuario</p>
					</div>
				</Link>

				<Link href={'/caixa'}>
					<div className=" bg-blue-400 duration-500 w-[280px] h-[250px]  text-white text-lg text-center cursor-pointer font-extrabold rounded-xl shadow-lg shadow-gray-900 p-8 gap-5 rounded-x1 flex flex-col justify-center items-center hover:bg-[#434C5E]  hover:text-white  transition ease-in-out">
						<Image src={ShoppingMarket} alt="ShoppingMarket" className=" w-[100px]" />

						<p>Caixa</p>
					</div>
				</Link>
			</div>
		</div>
	)
}
