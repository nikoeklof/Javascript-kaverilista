let lomake = document.forms['kaverilistainput']
let itemList = document.getElementById('kaverilista')
let poista = document.getElementById('poista')
let jarjestanimet = document.getElementById('jarjesta')
poista.addEventListener('click', poistaItem)
lomake.addEventListener('submit', uusiListaElementti)
jarjestanimet.addEventListener('click', jarjesta)

function uusiListaElementti(event) {
    event.preventDefault()
    let elementinnimi = document.querySelector('#container input[type="text"]').value
    if (elementinnimi < 1) {
        alert('Anna nimi!')
        return
    }
    let uusiElementti = document.createElement('li')
    let uusiteksi = document.createTextNode(elementinnimi)
    uusiElementti.appendChild(uusiteksi)
    uusiElementti.className = 'list-item'
    document.querySelector('#kaverilista').appendChild(uusiElementti)
    document.querySelector('#container #textinput').value = ''
}

function poistaItem() {
    let elementinnimi = document.querySelector('#container input[type="text"]').value
    let lista = document.querySelectorAll('.list-item')
    if (lista.length > 0) {
        for (var i = 0; i < lista.length; i++) {
            console.log(i)
            let verrattava = lista[i].textContent.toString()
            if (elementinnimi == verrattava) {
                document.querySelector('#kaverilista').removeChild(lista[i])
                document.querySelector('#container #textinput').value = ''
                return
            }
        }
    }
}

function jarjesta() {
    var lista, i, jarjestaako, b, jarjesta;
    lista = document.getElementById('kaverilista');
    jarjestaako = true;
    while (jarjestaako) {
        jarjestaako = false;
        array = lista.getElementsByTagName('LI');
        for (i = 0; i < (array.length - 1); i++) {
            jarjestaako = false;
            if (array[i].innerHTML.toLowerCase() > array[i + 1].innerHTML.toLowerCase()) {
                jarjesta = true;
                break;
            }
        }
        if (jarjesta) {
            array[i].parentNode.insertBefore(array[i + 1], array[i])
            jarjestaako = true;
        }
    }

}