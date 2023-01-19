const halaman1 = document.getElementById('login')
const halaman2 = document.getElementById('mainpage')
const halaman3 = document.getElementById('detailpage')

const cardContainer = document.getElementById('cardContainer')

const inputTelepon = document.getElementById("noTelp")

function test (urutan){
    console.log ("bisa",urutan)
}

function a() {    
    halaman1.style.display = "flex"
    halaman2.style.display = "none"
    halaman3.style.display = "none"
}

function b(dataSapi) {
    halaman2.style.display = "flex"
    halaman1.style.display = "none"
    halaman3.style.display = "none"

    let halamanReady = getMainPageHTML(dataSapi)
    cardContainer.innerHTML = halamanReady
}

function c() {
    halaman1.style.display = "none" 
    halaman2.style.display = "none"
    halaman3.style.display = "flex"
}

async function login (){
    let noTelp = inputTelepon.value
    let dataSapi = await fetchLogin(noTelp)
    b(dataSapi)
}

async function fetchLogin(noTelp){
    const response = await fetch("https://script.google.com/macros/s/AKfycbwxmzU3JJo3q1MyfbY95xD3074y-fVI_BuzjRU7wLbt9K-S4Gpc5UWDg7Mlahw80Ki_/exec?tipe=login&noHp="+String(noTelp),{method: 'GET'});
    const data = await response.json();
    let hasil = JSON.parse(data)
  
    return hasil
}

function getMainPageHTML(dataSapi){
    let jumlahSapi = dataSapi.length

    // cetak 1 kartu 
    let arrayCard = [] 
    let innerHTML = ''

    for (let i = 0; i<jumlahSapi; i++){
        
        let nama = dataSapi[i]['nama']
        let status = dataSapi[i]['fase']
        let foto = dataSapi[i]['foto']

        // html 1 card 
        let htmlCard = createCard(nama, status, foto, i)
        arrayCard.push (htmlCard) 
    }

    // tambbah html beberapa card 
    for (let i = 0; i<jumlahSapi; i++){
        innerHTML += arrayCard[i]
    }

    return innerHTML
}

function createCard(namaSapi,status,foto,urutan){
   
    let html1 = `
    <div class="cardSapi" onclick="test(`+String(urutan)+`)">
        <div class="top">`

    let html2 = `
    <div class="namaSapi">
        <h3>`+String(namaSapi)+`</h3>
    </div>`

    let html3 = `
    <div class="status">
        <h4>`+String(status)+`</h4>
    </div>`

    let html4 = `
    </div>
        <div class="gambar">
            <img src="`+String(foto)+`" width="100%" height="130px">
        </div>
    </div>`

    return html1 + html2 + html3 + html4 
}