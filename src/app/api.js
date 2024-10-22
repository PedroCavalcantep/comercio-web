const url = 'http://localhost:8081'

export const fetchProdutos = async () => {
	try {
		const response = await fetch(url + '/bazinga', { method: 'GET' })
		if (!response.ok) {
			throw new Error('Erro ao carregar produtos')
		}
		return await response.json()
	} catch (error) {
		console.error(error)
		return []
	}
}

export const deleteProduto = async (id) => {
	try {
		const response = await fetch(url + `/bazinga/${id}`, { method: 'DELETE' })
		if (!response.ok) {
			throw new Error('Produto não encontrado')
		}
	} catch (error) {
		console.log(error)
		return []
	}
}

//Usuario

export const login = async (login, senha) => {
	try {
		const response = await fetch(url + `/usuario/login?login=${login}&senha=${senha}`)
		if (!response) {
			throw new Error('Usuario não encontrado')
		}
		return await response.json()
	} catch (error) {
		console.log(error)
		return error
	}
}

export const getUsuarios = async () => {
	try {
		const response = await fetch(url + '/usuario', { method: 'GET' })
		if (!response.ok) {
			throw new Error('Usuários não encontrados')
		}
		return await response.json()
	} catch (error) {
		console.log(error)
		return []
	}
}

export const deleteUsuario = async (id) => {
	try {
		const response = await fetch(url + `/usuario/${id}`, { method: 'DELETE' })
		if (!response.ok) {
			throw new Error('erro ao deletar usuario', Error)
		}
	} catch (error) {
		console.log(error)
		return []
	}
}
