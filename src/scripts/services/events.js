import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getEvents(nomeUsuario) {
    const event = await fetch(`${baseUrl}/${nomeUsuario}/events?per_page=${repositoriesQuantity}`)
    return event.json()
}

export { getEvents }