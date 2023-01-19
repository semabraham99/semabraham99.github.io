const halaman1 = document.getElementById('mainPage')
const halaman2 = document.getElementById('sapiDara')
const halaman3 = document.getElementById('sapiIndukan1')
const halaman4 = document.getElementById('sapiIndukan2')

const inputTanggalLahir = document.getElementById('tanggalLahir')
const idBirahi1 = 'outputTanggalBirahi1'
const idBirahi2 = 'outputTanggalBirahi2'
const idBirahi3 = 'outputTanggalBirahi3'

const inputTanggalBeranak = document.getElementById('tanggalBeranak')
const idMasaKosong = "outputTanggalKosong"
const idEstBirahi1 = "outputTanggalEstBirahi1"
 

const hari2milis = 86400000

function test (urutan){
    console.log ("bisa",urutan)
    document.getElementById(idBirahi1).innerText ="halo"
}

function mainPage() {    
    halaman1.style.display = "flex"
    halaman2.style.display = "none"
    halaman3.style.display = "none"
    halaman4.style.display = "none"
}

function sapiDara() {
    halaman2.style.display = "flex"
    halaman1.style.display = "none"
    halaman3.style.display = "none"
    halaman4.style.display = "none"
}

function sapiIndukan1() {
    halaman3.style.display = "flex"
    halaman2.style.display = "none"
    halaman1.style.display = "none"
    halaman4.style.display = "none"
}

function sapiIndukan2() {
    halaman4.style.display = "flex"
    halaman2.style.display = "none"
    halaman1.style.display = "none"
    halaman3.style.display = "none"
}

function gantiInputTanggal (tipe){
    console.log(tipe)
}

function hitung(tipe){
    switch (tipe){
        case 1:
            console.log("hitungan 1")
            let tanggalLahir = new Date (inputTanggalLahir.value).getTime()
            
            let birahi1a = new Date (654 * hari2milis)
            let birahi1b = new Date (660 * hari2milis) 

            let birahi2a = new Date (675 * hari2milis)
            let birahi2b = new Date (681 * hari2milis)

            let birahi3a = new Date (696 * hari2milis)
            let birahi3b = new Date (702 * hari2milis)

            updateTanggal(idBirahi1,birahi1a,birahi1b)
            updateTanggal(idBirahi2,birahi2a,birahi2b)
            updateTanggal(idBirahi3,birahi3a,birahi3b)
            
            break
        case 2:
            console.log("hitungan 2")

        case 3:
            console.log("hitungan 3")
            let tanggalBeranak = new Date (inputTanggalBeranak.value).getTime()
            
            let kosongA = new Date (tanggalBeranak)
            let kosongB = new Date (tanggalBeranak + 78 * hari2milis) 

            let birahiA = new Date (tanggalBeranak + 78 * hari2milis)
            let birahiB = new Date (tanggalBeranak + 84 * hari2milis) 

            updateTanggal(idMasaKosong,kosongA,kosongA)
            updateTanggal(idEstBirahi1,birahiA,birahiB)
            
            break

        case 4:
            console.log("hitungan 4")
    }

}

function updateTanggal (id,tanggal1,tanggal2){

    let teks1 = date2teks(tanggal1)
    let teks2 = date2teks(tanggal2)
    
    let teks = teks1 + " - " + teks2
    
    document.getElementById(id).innerText = teks
}

function date2teks (date){
    const arrayBulan = ["Januari","Februari","Maret","April","Mei","juni","juli","Agustus","September","Oktober","November","Desember"]
    
    let a = new Date(date)
    let tanggal = a.getDate()
    let bulan = a.getMonth()
    let teks = String(tanggal) + " " +arrayBulan[bulan]
    return teks
}
// function getMainPageHTML(dataSapi){
//     let jumlahSapi = dataSapi.length

//     // cetak 1 kartu 
//     let arrayCard = [] 
//     let innerHTML = ''

//     for (let i = 0; i<jumlahSapi; i++){
        
//         let nama = dataSapi[i]['nama']
//         let status = dataSapi[i]['fase']
//         let foto = dataSapi[i]['foto']

//         // html 1 card 
//         let htmlCard = createCard(nama, status, foto, i)
//         arrayCard.push (htmlCard) 
//     }

//     // tambbah html beberapa card 
//     for (let i = 0; i<jumlahSapi; i++){
//         innerHTML += arrayCard[i]
//     }

//     return innerHTML
// }

// function createCard(namaSapi,status,foto,urutan){
   
//     let html1 = `
//     <div class="cardSapi" onclick="test(`+String(urutan)+`)">
//         <div class="top">`

//     let html2 = `
//     <div class="namaSapi">
//         <h3>`+String(namaSapi)+`</h3>
//     </div>`

//     let html3 = `
//     <div class="status">
//         <h4>`+String(status)+`</h4>
//     </div>`

//     let html4 = `
//     </div>
//         <div class="gambar">
//             <img src="`+String(foto)+`" width="100%" height="130px">
//         </div>
//     </div>`

//     return html1 + html2 + html3 + html4 
// }