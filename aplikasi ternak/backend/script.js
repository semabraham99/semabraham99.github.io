const day2ms = 86400000
const num2bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

const elementTanggalBeranak = document.getElementById('tanggal1')
const elementTanggalBirahi = document.getElementById('tanggal2')
const elementDinamis = document.getElementById('dynamic')


const tes1 = 3
const tes2 = 4

var tanggalBeranak
var masaberhenti
var tanggalBirahi1
var tanggalBirahi2

var tanggalBirahi1awal
var tanggalBirahi1akhir

var tanggalBirahi2awal
var tanggalBirahi2akhir

var masaKawin
var tanggalKawin
var tanggalBirahi3  


function submit(){
    updateInputBeranak()  
    hitung1()

    hitungBirahi1()
    hitungBirahi2()
    
    updateInfoBirahi1()
    updateInfoBirahi2()
}

function updateInputBeranak(){
    tanggalBeranak = new Date (elementTanggalBeranak.value)
}

function hitung1(){
    masaberhenti = new Date (tanggalBeranak.getTime() + 90 * day2ms) 
    tanggalBirahi1 = new Date (tanggalBeranak.getTime() + 60 * day2ms)
 }

function hitungBirahi1(){
    console.log (tanggalBirahi1)
    tanggalBirahi1awal = new Date (tanggalBirahi1.getTime() - 3 * day2ms) 
    tanggalBirahi1akhir = new Date (tanggalBirahi1.getTime() + 3 * day2ms)    
}

function hitungBirahi2(){
    tanggalBirahi2awal = new Date (masaberhenti.getTime() - 3 * day2ms) 
    tanggalBirahi2akhir = new Date (masaberhenti.getTime() + 3 * day2ms) 
}

function updateInfoBirahi1(){
    var tanggalAwal = tanggalBirahi1awal.getDate() + " " + num2bulan [tanggalBirahi1awal.getMonth()]
    var tanggalAkhir = tanggalBirahi1akhir.getDate()  + " " + num2bulan[tanggalBirahi1akhir.getMonth()]
    infoBirahi1.innerText= tanggalAwal + " sampai " + tanggalAkhir
}

function updateInfoBirahi2(){
    var tanggalAwal = tanggalBirahi2awal.getDate() + " " + num2bulan [tanggalBirahi2awal.getMonth()]
    var tanggalAkhir = tanggalBirahi2akhir.getDate()  + " " + num2bulan [tanggalBirahi2akhir.getMonth()]
    infoBirahi2.innerText= tanggalAwal + " sampai " + tanggalAkhir
}

function updateInfoBirahi(){
    tanggalBirahi = new Date (elementTanggalBirahi.value)
}

function submit2(){
    updateInputBirahi()  

    hitungMasaKawin()
    updateInfoMasaKawin()
}

function updateInputBirahi(){
    tanggalBirahi3 = new Date (elementTanggalBirahi.value)
}

function hitungMasaKawin(){
    masaKawin = new Date (tanggalBirahi3.getTime()  + day2ms) 
} 

function updateInfoMasaKawin(){
    document.getElementById('infoMasaKawin').innerHTML = masaKawin.getDate() + " " + num2bulan [masaKawin.getMonth()]
}

function gantiHalaman (tahap){
    switch (tahap){
        case 1:
            elementDinamis.innerHTML =  `
            <h3> Cek Kebuntingan 1 </h3>
            <p>( apakah ada tanda birahi ? )</p>
            `
            break
        case 2:
            elementDinamis.innerHTML = `
            <h3> Cek Kebuntingan 1 </h3>
            <p> tidak bunting </p>
            `
            break
        case 3:
            elementDinamis.innerHTML = `
            <h3> Cek Kebuntingan 2 </h3>
            <p>lakukan pengecekan kebuntingan. </p>
            <p>apakah indikator menyatakan bunting ?</p>
            <button type="button" onclick="gantiHalaman(5)"> ya</button>
            <button type="button" onclick="gantiHalaman(2)"> tidak</button>
            `
            break
        case 4:
            elementDinamis.innerHTML = `
            
            `
            break
        case 5:
            elementDinamis.innerHTML = `
            <h3> Massa Bunting </h3>
            <p> tanggal bunting x sampai y </p>
            <p> estimasi 31 hari menuju beranak </p>
            <p> kata kata lainnnya </p>
            `
            break
        case 6:
            elementDinamis.innerHTML = `
            <h3> Massa Beranak </h3>
            <p> tanggal beranak  x sampai y </p>
            <p> kata kata lainnnya </p>
            `
            break
        case 7:
            elementDinamis.innerHTML = `
            <h3> Massa Berhenti </h3>
            <p> tanggal  x sampai y </p>
            <p> kata kata lainnnya </p>
            `
            break
        case 8:
            elementDinamis.innerHTML = `
            <h3> Massa Beranak </h3>
            <p> tanggal beranak  x sampai y </p>
            <p> kata kata lainnnya </p>
            `
            break
}
}

function test1 (){
     
    
}