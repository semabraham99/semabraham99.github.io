const halaman1 = document.getElementById('mainPage')
const halaman2 = document.getElementById('sapiDara')
const halaman3 = document.getElementById('sapiIndukan1')
const halaman4 = document.getElementById('sapiIndukan2')

const inputTanggalLahir = document.getElementById('tanggalLahir')
const inputTanggalSapih = document.getElementById('tanggalSapih')
const idBirahi1 = 'outputTanggalBirahi1'
const idBirahi2 = 'outputTanggalBirahi2'
const idBirahi3 = 'outputTanggalBirahi3'

const inputTanggalBeranak = document.getElementById('tanggalBeranak')
const idMasaKosong = "outputTanggalKosong"
const idEstBirahi1 = "outputTanggalEstBirahi1"

const innerInputIndukan1a = `
    <h3>Apakah sapi menunjukan tanda-tanda birahi</h3>  
    <div class="inputDialog2">
        <button onclick="hitung(2)">ya</button>
        <button onclick="hitung(3)">tidak</button>
    </div>
`

const innerInputIndukan1b = `
    <h3>Tanggal Beranak Terakhir</h3>
    <input type="date" id="tanggalBeranak">  
    <div class="inputDialog2">
        <button onclick="hitung(3)">ok</button>
    </div>
`

const innerInputIndukan1c = `
    <h3>Tanggal Birahi Terdekat</h3>
    <input type="date" id="tanggalBirahiTerdekat">  
    <div class="inputDialog2">
        <button onclick="hitung(3)">ok</button>
    </div>
`

const innerInputDaraA=`
    <h3>Masukan Tanggal Lahir</h3>
    <input type="date" id="tanggalLahir">  
    <div class="inputDialog2">
        <button onclick="gantiInputTanggal('sapih')">lupa</button>
        <button onclick="hitung(1)">ok</button>
    </div>
`

const innerInputDaraB=`
    <h3>Masukan Tanggal sapih</h3>
    <input type="date" id="tanggalSapih">  
    <div class="inputDialog2">
        <button onclick="gantiInputTanggal('kelahiran')">kembali</button>
        <button onclick="hitung(2)">ok</button>
    </div>
`

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
    switch (tipe){
        case "sapih" :
            document.getElementById("inputDara1").innerHTML = innerInputDaraB
        
        case "kelahiran" :
        document.getElementById("inputDara1").innerHTML = innerInputDaraA
    }
}

function hitung(tipe){
    switch (tipe){
        case 1:
            console.log("hitungan 1")
            let tanggalLahir = new Date (inputTanggalLahir.value).getTime()
            
            let birahi1a = new Date (tanggalLahir + 654 * hari2milis)
            let birahi1b = new Date (tanggalLahir + 660 * hari2milis) 

            let birahi2a = new Date (tanggalLahir + 675 * hari2milis)
            let birahi2b = new Date (tanggalLahir + 681 * hari2milis)

            let birahi3a = new Date (tanggalLahir + 696 * hari2milis)
            let birahi3b = new Date (tanggalLahir + 702 * hari2milis)

            updateTanggal(idBirahi1,birahi1a,birahi1b)
            updateTanggal(idBirahi2,birahi2a,birahi2b)
            updateTanggal(idBirahi3,birahi3a,birahi3b)
            
            break

        case 2:
            console.log("hitungan 2")
            let tanggalSapih = new Date (inputTanggalSapih.value).getTime()
            
            let birahi1a = new Date (tanggalSapih + 90 * hari2milis)
            let birahi1b = new Date (tanggalSapih + 96 * hari2milis) 

            let birahi2a = new Date (tanggalSapih + 111 * hari2milis)
            let birahi2b = new Date (tanggalSapih + 117 * hari2milis)

            let birahi3a = new Date (tanggalSapih + 132 * hari2milis)
            let birahi3b = new Date (tanggalSapih + 138 * hari2milis)

            updateTanggal(idBirahi1,birahi1a,birahi1b)
            updateTanggal(idBirahi2,birahi2a,birahi2b)
            updateTanggal(idBirahi3,birahi3a,birahi3b)

        case 3:
            console.log("hitungan 3")
            let tanggalBeranak = new Date (inputTanggalBeranak.value).getTime()
            
            let kosongA = new Date (tanggalBeranak)
            let kosongB = new Date (tanggalBeranak + 78 * hari2milis) 

            let birahiA = new Date (tanggalBeranak + 78 * hari2milis)
            let birahiB = new Date (tanggalBeranak + 84 * hari2milis) 

            updateTanggal(idMasaKosong,kosongA,kosongB)
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
