let lomake = document.forms['kaverilistainput']
let itemList = document.getElementById('kaverilista')
let poista = document.getElementById('poista')
poista.addEventListener('click', poistaItem)
lomake.addEventListener('submit', uusiListaElementti)

function uusiListaElementti(event) {
    event.preventDefault()
    console.log("painoi nappia")
    let elementinnimi = document.querySelector('.container input[type="text"]').value
    if (elementinnimi < 1) {
        alert('Anna nimi!')
        return
    }
    let uusiElementti = document.createElement('li')
    let uusiteksi = document.createTextNode(elementinnimi)
    uusiElementti.appendChild(uusiteksi)
    uusiElementti.className = 'list-item'
    document.querySelector('#kaverilista').appendChild(uusiElementti)
    document.querySelector('.container #textinput').value = ''
}

function poistaItem() {
    console.log("painoi poista")
    let elementinnimi = document.querySelector('.container input[type="text"]').value
    console.log(elementinnimi)

    let lista = document.querySelectorAll('.list-item')
    console.log(lista[0].textContent)
    if (lista.length > 0) {
        for (var i = 0; i < lista.length; i++) {
            console.log(i)
            let verrattava = lista[i].textContent.toString()
            if (elementinnimi == verrattava) {
                document.querySelector('#kaverilista').removeChild(lista[i])
                return
            }
        }
    }

}