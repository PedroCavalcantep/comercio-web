import NavBar from './components/NavBar'
import './globals.css'

export const metadata = {
	title: 'Comercio',
	description: 'Comercio web',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<NavBar ></NavBar>
				{children}
				</body>
		</html>
	)
}
