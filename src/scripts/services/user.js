import { baseUrl } from "../variables.js"

async function getUser(nomeUsuario) {
    const info = await fetch(`${baseUrl}/${nomeUsuario}`)
    return await info.json()
}

export { getUser }