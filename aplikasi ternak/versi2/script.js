const halaman1 = document.getElementById('mainPage')
const halaman2 = document.getElementById('sapiDara')
const halaman3 = document.getElementById('sapiIndukan1')

let inputTanggalLahir = document.getElementById('tanggalLahir')
let inputTanggalSapih = document.getElementById('tanggalSapih')
const idBirahi1 = 'outputTanggalBirahi1'
const idBirahi2 = 'outputTanggalBirahi2'
const idBirahi3 = 'outputTanggalBirahi3'

const idKawin = "outputTanggalKawin"
const idBirahiSelanjutnya = "outputTanggalBirahiSelanjutnya"
const idBeranak = "outputTanggalBeranak"

const idInputBeranak = "tanggalBeranak2"
const idMasaKosong = "outputMasaKosong"
const idEstBirahi1 = "outputTanggalEstBirahi1"

const innerInputIndukan1a = `
    <h3>Apakah sapi menunjukan tanda-tanda birahi</h3>  
    <div class="inputDialog2">
        <button onclick='gantiInputTanggal("birahi")'>ya</button>
        <button onclick='gantiInputTanggal("beranak")'>tidak</button>
    </div>
`

const innerInputIndukan1b = `
    <h3>Tanggal Beranak Terakhir</h3>
    <input type="date" id="tanggalBeranak2">  
    <div class="inputDialog2">
        <button onclick="hitung(3)">ok</button>
    </div>
`

const innerInputIndukan1c = `
    <h3>Tanggal Birahi Terdekat</h3>
    <input type="date" id="tanggalBirahiTerdekat">  
    <div class="inputDialog2">
        <button onclick="hitung(4)">pagi</button>
        <button onclick="hitung(5)">sore</button>
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

const innerOutputIndukan1b=`

    <div class="contentOutput">
        <h3>Massa kosong</h3>
        <p id="outputMasaKosong"> </p>
    </div>

    <div class="contentOutput">
        <h3>Birahi Selanjutnya</h3>
        <p id="outputTanggalEstBirahi1"> </p>
    </div>
`

const innerOutputIndukan1c=`

    <div class="contentOutput">
        <h3>Waktu Kawin</h3>
        <p id="outputTanggalKawin"> </p>
    </div>

    <div class="contentOutput">
        <h3>cek birahi Selanjutnya </h3>
        <p id="outputTanggalBirahiSelanjutnya"> </p>
    </div>
`

const hari2milis = 86400000

function test (urutan){
    console.log ("bisa",urutan)
    document.getElementById(idBirahi1).innerText ="halo"
}

function mainPage(page=0) {    
    halaman1.style.display = "flex"
    halaman2.style.display = "none"
    halaman3.style.display = "none"
    resetHalaman(page)
}

function sapiDara() {
    console.log("test")
    halaman2.style.display = "flex"
    halaman1.style.display = "none"
    halaman3.style.display = "none"
}

function sapiIndukan1() {
    halaman3.style.display = "flex"
    halaman2.style.display = "none"
    halaman1.style.display = "none"
}

function gantiInputTanggal (tipe){
    
    switch (tipe){
        case "sapih" :
            console.log(tipe)
            document.getElementById("inputDara1").innerHTML = innerInputDaraB
            break
        
        case "kelahiran" :
            console.log(tipe)
            document.getElementById("inputDara1").innerHTML = innerInputDaraA
            break

        case "birahi" :
            console.log(tipe)
            document.getElementById("inputIndukan1").innerHTML = innerInputIndukan1c
            document.getElementById("outputIndukan1").innerHTML = innerOutputIndukan1c
            break
        
        case "beranak" :
            console.log(tipe)
            document.getElementById("inputIndukan1").innerHTML = innerInputIndukan1b
            document.getElementById("outputIndukan1").innerHTML = innerOutputIndukan1b
            break

    }
}

function hitung(tipe){
    switch (tipe){
        case 1:
            console.log("hitungan 1")
            let elementTglLahir = document.getElementById('tanggalLahir')
            let tanggalLahir = new Date (elementTglLahir.value).getTime()

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
            let elementTglSapih = document.getElementById('tanggalSapih')
            let tanggalSapih = new Date (elementTglSapih.value).getTime()
            console.log("nilai input 2", tanggalSapih)

            let birahi1c = new Date (tanggalSapih + 90 * hari2milis)
            let birahi1d = new Date (tanggalSapih + 96 * hari2milis) 

            let birahi2c = new Date (tanggalSapih + 111 * hari2milis)
            let birahi2d = new Date (tanggalSapih + 117 * hari2milis)

            let birahi3c = new Date (tanggalSapih + 132 * hari2milis)
            let birahi3d = new Date (tanggalSapih + 138 * hari2milis)

            updateTanggal(idBirahi1,birahi1c,birahi1d)
            updateTanggal(idBirahi2,birahi2c,birahi2d)
            updateTanggal(idBirahi3,birahi3c,birahi3d)
            break

        case 3:
            console.log("hitungan 3")
            let elementTglBeranak2 = document.getElementById('tanggalBeranak2')
            let tanggalBeranak2 = new Date (elementTglBeranak2.value).getTime()
            
            let kosongA = new Date (tanggalBeranak2)
            let kosongB = new Date (tanggalBeranak2 + 78 * hari2milis) 

            let birahiA = new Date (tanggalBeranak2 + 78 * hari2milis)
            let birahiB = new Date (tanggalBeranak2 + 84 * hari2milis) 
           
            updateTanggal(idEstBirahi1,birahiA,birahiB)
            updateTanggal(idMasaKosong,kosongA,kosongB)
            
            break

        case 4:
            console.log("hitungan 4")
            let elementtanggalBirahi = document.getElementById('tanggalBirahiTerdekat')
            let tanggalBirahiTerdekat = new Date(elementtanggalBirahi.value).getTime()
            
            let tanggalKawin = new Date (tanggalBirahiTerdekat)
            let birahiSelanjutnyaA = new Date (tanggalBirahiTerdekat + 18* hari2milis)
            let birahiSelanjutnyaB = new Date (tanggalBirahiTerdekat + 24* hari2milis)
            let beranak = new Date (tanggalBirahiTerdekat + 275 * hari2milis)

            //  tambah sore hari
            updateTanggal1(idKawin,tanggalKawin,"sore hari") 
            updateTanggal(idBirahiSelanjutnya,birahiSelanjutnyaA,birahiSelanjutnyaB)
            updateTanggal1(idBeranak,beranak)
            break

        case 5:
            // menghitung tanggal kawin, cek birahi selanjutnya, beranak dari 
            console.log("hitungan 5")
            let elementtanggalBirahi1 = document.getElementById('tanggalBirahiTerdekat')
            let tanggalBirahiTerdekat1 = new Date(elementtanggalBirahi1.value).getTime()
            
            let tanggalKawin1 = new Date (tanggalBirahiTerdekat1 + 1*hari2milis)
            let birahiSelanjutnyaA1 = new Date (tanggalBirahiTerdekat1 + 18* hari2milis)
            let birahiSelanjutnyaB1 = new Date (tanggalBirahiTerdekat1 + 24* hari2milis)
            let beranak1 = new Date (tanggalBirahiTerdekat1 + 275 * hari2milis)

            //  tambah pagi hari
            updateTanggal1(idKawin,tanggalKawin1,"Pagi hari")
            updateTanggal(idBirahiSelanjutnya,birahiSelanjutnyaA1,birahiSelanjutnyaB1)
            updateTanggal1(idBeranak,beranak1)
            break
    }

}

function updateTanggal (id,tanggal1,tanggal2){

    let teks1 = date2teks(tanggal1)
    let teks2 = date2teks(tanggal2)
    
    let teks = teks1 + " - " + teks2
    
    document.getElementById(id).innerText = teks
}

function updateTanggal1 (id,tanggal,tambahan){
    
    let teks = date2teks(tanggal)
    
    document.getElementById(id).innerText = teks + " - " + String(tambahan)
}

function date2teks (date){
    const arrayBulan = ["Januari","Februari","Maret","April","Mei","juni","juli","Agustus","September","Oktober","November","Desember"]
    
    let a = new Date(date)
    let tanggal = a.getDate()
    let bulan = a.getMonth()
    let tahun = a.getFullYear()
    let teks = String(tanggal) + " " +arrayBulan[bulan] + " " + String(tahun).substring(2,4)
    return teks
}

function resetHalaman(page){
    switch (page){
        case 1:
            document.getElementById("inputDara1").innerHTML = innerInputDaraA
            document.getElementById(idBirahi1).innerHTML = " "
            document.getElementById(idBirahi2).innerHTML = " "
            document.getElementById(idBirahi3).innerHTML = " "

        case 2:
            document.getElementById("inputIndukan1").innerHTML = innerInputIndukan1a
            document.getElementById("outputIndukan1").innerHTML = " "
    }   
}