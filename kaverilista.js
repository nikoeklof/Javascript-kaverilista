var nimilista = []
var lomake = document.forms['kaverilistainput']
var textinput = document.querySelector('#textinput').value
var lista = document.getElementById('kaverilista')
var poista = document.getElementById('poista')
var jarjesta = document.getElementById('jarjesta')
lomake.addEventListener('submit', lisaaListaan)
poista.addEventListener('click', containerRemove)
jarjesta.addEventListener('click', containerSort)

function lisaaListaan(event) {
    textinput = document.querySelector('#textinput').value
    event.preventDefault();
    nimilista.push(textinput)
    containerAdd()
}

function containerAdd() {
    textinput = document.querySelector('#textinput').value
    let uusiItem = document.createElement('LI')
    let itemContent = document.createTextNode(textinput)
    uusiItem.appendChild(itemContent)
    lista.appendChild(uusiItem)
}

function containerRemove() {
    textinput = document.querySelector('#textinput').value
    if (nimilista.length < 1) {
        alert('Lista tyhjä! ei voi poistaa')
    }
    if (nimilista.length < lista.childNodes.length) {
        lista.removeChild(lista.childNodes[0])
    }
    for (var i = 0; i < nimilista.length; i++) {
        if (textinput == nimilista[i]) {
            lista.removeChild(lista.childNodes[i])
            nimilista.splice(i, 1)
            return
        }
    }
}

function containerSort() {
    if (nimilista.length < 1) {
        alert('Lista tyhjä!')
    }
    if (nimilista.length < lista.childNodes.length) {
        lista.removeChild(lista.childNodes[0])
    }
    nimilista.sort();
    for (i = 0; i < nimilista.length; i++) {
        lista.childNodes[i].textContent = nimilista[i]
    }

}