import { getUser } from "../scripts/services/user.js"
import { repo } from "../scripts/services/repositories.js"
import { getEvents } from "./services/events.js"

import { user } from "./objects/user.js"
import { screen } from "./objects/screen.js"

function validationEmptyInput(userName) {
    if (userName === '') {
        alert('Digite o nome de um usuário do GitHub')
        return true
    }
}

//botão 
document.getElementById('btn-search').addEventListener('click', () => {
    const nomeUsuario = document.getElementById('input-search').value
    if (validationEmptyInput(nomeUsuario)) return
    getUserData(nomeUsuario)
})

//clique Enter 
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPress = key === 13

    if (isEnterKeyPress) {
        if (validationEmptyInput(userName)) return
        getUserData(userName)
    }
})

async function getUserData(nomeUsuario) {

    const userResponse = await getUser(nomeUsuario)
    const repositoriesResponse = await repo(nomeUsuario)
    const userEvents = await getEvents(nomeUsuario)

    if (userResponse.message === "Not Found") {
        screen.renderUserNotFound()
        return
    }

    const eventTypePush = userEvents.filter((evento) => evento.type === "PushEvent")

    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    user.setEvents(eventTypePush)

    screen.renderUser(user)
}