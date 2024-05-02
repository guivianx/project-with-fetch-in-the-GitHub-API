import { baseUrl, repositoriesQuantity } from "../variables.js"

async function repo(nomeUsuario) {
    const info = await fetch(`${baseUrl}/${nomeUsuario}/repos?per_page=${repositoriesQuantity}`)
    return await info.json()
}

export { repo }