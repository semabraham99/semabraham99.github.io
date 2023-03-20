let textNomorMeja = ""
let nomorMeja = 0

let pesanan = []
let menuAktif = 1
let listPesanan = []
let listMenu = []

let listMakanan = []
let listMinuman = []

let jumlah = 0 

let namaMenu = [
    "s.ayam kecil","s.ayam kecil pisah","s.ayam besar","s.ayam besar pisah", "nasi",
    "s.sapi kecil","s.sapi kecil pisah","s.sapi besar","s.sapi besar pisah", "sisa-2",
    "teh tawar","teh manis","es teh tawar"," es teh manis", "air hangat",
    "jeruk tawar","jeruk manis","es jeruk tawar"," es jeruk manis", "air es",
    "kosong-1","kosong-2","kosong-3","kosong-4", "kosong-5"
] 

const labelNomorMeja = document.getElementById('nomorMeja')
const labelJumlahPesanan = document.getElementById('jumlahPesanan')

const halaman1 = document.getElementById('halaman1')
const halaman2 = document.getElementById('halaman2')

function tombol (nomor){
    // add string text
    textNomorMeja += String(nomor)
    updateLabel(labelNomorMeja,textNomorMeja)
}

function lanjutkan(){

    // cek no meja ada 
    if (textNomorMeja.length > 0){
        // parse text -> number
        nomorMeja = parseInt(textNomorMeja)
        
        // ganti halaman 
        gantiHalaman(halaman2)
    }
}

function bersihkan(){
    // clear text
    textNomorMeja = ""
    updateLabel(labelNomorMeja,textNomorMeja)
}

function updateLabel(label,teks){
    label.innerText = teks
}

function gantiHalaman (elementHalaman){
    if (elementHalaman === halaman1){
        halaman1.style.display = "flex"
        halaman2.style.display = "none"
    }
    
    else {
        halaman1.style.display = "none"
        halaman2.style.display = "flex"
        updateDisplayListPesanan()
    }
}

function menu(number){
    const labelMenu = document.getElementById('labelMenu')

    // set variabel
    menuAktif = number

    // set label nama menu terpilih
    let menuTerpilih = namaMenu[number-1]
    updateLabel(labelMenu,menuTerpilih)

    // update jumlah
    if (listMenu.includes(number)){
        let indeks = listMenu.indexOf(number)
        jumlah = listPesanan[indeks][1]
    } 
    else {
        jumlah = 0
    }
    updateLabel(labelJumlahPesanan,jumlah)
}

function tambah(number){
    
    jumlah += number

    // pengaman dari -1
    if (jumlah < 0){
        jumlah = 0
    }

    // update label
    updateLabel(labelJumlahPesanan,jumlah)
    updatePesanan()
    updateDisplayListPesanan()

}

function updatePesanan(){

    // update terakhir 
    if (jumlah > 0){
        if (!listMenu.includes(menuAktif)){
            addPesanan(menuAktif,jumlah)
        }
        editPesanan (menuAktif,jumlah)
    } 

    else {
        if (listMenu.includes(menuAktif)){
            deletePesanan (menuAktif)
        }
    }
}

function addPesanan (menuAktif,jumlah){   
    let data = [menuAktif,jumlah] 
    listPesanan.push (data)
    listMenu.push(menuAktif)
}

function editPesanan (menuAktif,jumlah) {
    let indeks = listMenu.indexOf(menuAktif)
    let data = [menuAktif,jumlah]
    listPesanan[indeks] = data
}

function deletePesanan (menuAktif) {
    let indeks = listMenu.indexOf(menuAktif)
    listMenu.splice(indeks,1)
    listPesanan.splice(indeks,1)
}

function konfirmasi(){
    
    popup(1,0,"pesanan diproses")
    // fetch pesanan 
    fetch("https://script.google.com/macros/s/AKfycbzjLpH5INKF2Tv0LbYjYadPvGN0Q0wILmgZ5yfcbOQA6Zy3U_s0poSol2iGJ0_FF_1vsg/exec", {
        method: 'POST',
        body: JSON.stringify({
                    meja: nomorMeja,
                    makanan: listMakanan,
                    minuman: listMinuman
                }),
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        }
    }).then(response => {
        console.log("success:", response);
        popup(1,1,"pesanan telah diterima");
    }).catch(err => {
        console.log("Error:" + err);
        popup(1,1,"pesanan belum diterima");
    });
}

function popup(status,button,teks){
   const popupDiv = document.getElementById('popup')
   const message = document.getElementById('pesan')
   const buttonNotif = document.getElementById('kembaliNotif')

   message.innerText = teks
   if (status == 1){
    popupDiv.style.display = "flex"
   }
   else {
    popupDiv.style.display = "none"
   }

   if (button == 1){
    buttonNotif.hidden=0
   }
   else{
    buttonNotif.hidden=1
   }
}

function kembali(){
    reset()
}

function reset(){

    const labelMenu = document.getElementById('labelMenu')
    const displayListPesanan = document.getElementById('listPesanan')
    let labelJumlahPesanan = document.getElementById('jumlahPesanan')
    let labelNomorMeja = document.getElementById('nomorMeja')

    labelMenu.innerText = namaMenu[0]
    displayListPesanan.innerHTML = ""
    labelNomorMeja.innerHTML = ""
    labelJumlahPesanan.innerHTML = 0

    // kembali ke halaman utama
    gantiHalaman(halaman1)
    popup(0," ")
    
    resetVariabel()
}

function resetVariabel (){
    // list di kosongkan lagi 
    textNomorMeja = ""
    nomorMeja = 0

    pesanan = []
    menuAktif = 1
    listPesanan = []
    listMenu = []

    listMakanan = []
    listMinuman = []

    jumlah = 0 
}

function updateDisplayListPesanan (){
    const displayListPesanan = document.getElementById('listPesanan')
    const panjangPesanan = listPesanan.length

    let content = ""
    listMakanan = []
    listMinuman = []
    // bagi list -> list makanan - list minuman 
    for (let i = 0; i < panjangPesanan;i++){
        let indeksMenu = listPesanan[i][0]
        if (indeksMenu < 10){
            listMakanan.push(listPesanan[i]) 
        }

        else {
            listMinuman.push(listPesanan[i])
        }
    } 

    let panjangListMakanan = listMakanan.length
    let panjangListMinuman = listMinuman.length

    // cetak no meja 
    content+= "<h4> Meja : " + nomorMeja + "</h4>"

    if (panjangListMakanan > 0){
        // add spasi antara no meja dan makanan 
        content += "<span>&shy;</span>"

        // cetak list makanan 
        
        for (let i = 0; i < panjangListMakanan;i++){
            // diisi dengan nama menu + jumlah 
            let indeksMenu = listMakanan[i][0]
            let jumlah = listMakanan[i][1]
            let nama = namaMenu[indeksMenu-1]
            content+= createElementListPesanan (nama,jumlah)
        }
    }

    if (panjangListMinuman > 0){    
        // add spasi antara makanan dan minuman
        content += "<span>&shy;</span>"

        // cetak list Minuman 
        
        for (let i = 0; i < panjangListMinuman;i++){
            // diisi dengan nama menu + jumlah 
            let indeksMenu = listMinuman[i][0]
            let jumlah = listMinuman[i][1]
            let nama = namaMenu[indeksMenu-1]
            content+= createElementListPesanan (nama,jumlah)
        }
    }
    
    displayListPesanan.innerHTML = content

}

function createElementListPesanan (namaPesanan,jumlah){
    string = "<h5>" + namaPesanan + " " + jumlah + "</h5>"
    return string
}