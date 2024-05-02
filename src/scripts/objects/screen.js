const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="Avatar usuário">
                <div class="data">
                    <h1 class="nameUser">${user.name ?? 'Não possui nome cadastrado ❌'}</h1>
                    <p class="bioUser">${user.bio ?? '--'}</p>
                    <div class="followUser">
                        👥<p>${user.followers} followers</p>
                        ${" · "}
                        <p>${user.following} following</p>
                    </div>
                </div>
            </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `
            <li class="liRepo">
                <a class="linkRepo" href="${repo.html_url}" target="_blank">${repo.name}</a>
                <ul class="ulInfoRepo">
                    <li>${"🍴"} ${repo.forks_count}</li>
                    <li>${"⭐"} ${repo.stargazers_count}</li>
                    <li>${"👀"} ${repo.watchers}</li>
                    <li>${"👩🏻‍💻"} ${repo.language ?? 'none'}</li>
                </ul>
            </li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
                <div class="repositories section">
                    <h2>Repositórios</h2>
                    <ul class="ulRepo">${repositoriesItens}</ul>
                </div>`
        }

        let eventsList = ''
        user.events.forEach(event => eventsList += `<li><p class="textEvent">${event.repo.name}</p> ${" - "} <p>${event.payload.commits[0].message}</p></li>`)

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `
                <div class="events section">
                    <h2>Eventos</h2>
                    <ul class="ulEvents">${eventsList}</ul>
                </div>`
        }
    },
    renderUserNotFound() {
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }
}

export { screen }

