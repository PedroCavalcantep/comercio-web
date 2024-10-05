import './globals.css'

export const metadata = {
	title: 'Comercio',
	description: 'Comercio web',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
