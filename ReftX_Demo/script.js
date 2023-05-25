// goal  
// bisa bikin yang au update kalao ditekan 
// bisa bikin data console saau button 

function test () {
    let kolomNama = document.getElementById('nama')
    let nama = kolomNama.value
    
    let kolomTanggalLahir = document.getElementById('ttl')
    let tanggalLahir = kolomTanggalLahir.value

    let kolomBeratBadan = document.getElementById('beratBadan')
    let beratBadan = kolomBeratBadan.value

    let kolomTanggalData = document.getElementById('tanggalData')
    let tanggalData = kolomTanggalData.value

    if (nama == ""){
        console.log("nama belum diisi")
        displayDataSalah(true)
        setTimeout(displayDataSalah,2000)
        
        return
    } 
    if (tanggalLahir == "") {
        console.log("tanggal lahir belum diisi")
        displayDataSalah()
        setTimeout(displayDataSalah,2000)
        
        return
    }
        
    if (beratBadan == "") {
        console.log("berat badan belum diisi")
        displayDataSalah()
        setTimeout(displayDataSalah,2000)
        
        return
    }
        
    if (tanggalData == "") {
        console.log("tanggal data belum diisi")
        displayDataSalah()
        setTimeout(displayDataSalah,2000)
        
        return
    }
    
    konfirmasi(nama,tanggalLahir,beratBadan,tanggalData)
    console.log(nama)
    console.log(tanggalLahir)
    console.log(tanggalData)
    console.log(beratBadan) 
}

function clearInput(){
    let kolomNama = document.getElementById('nama')
    kolomNama.value = ""
    
    let kolomTanggalLahir = document.getElementById('ttl')
    kolomTanggalLahir.value =""

    let kolomBeratBadan = document.getElementById('beratBadan')
    kolomBeratBadan.value = ""

    let kolomTanggalData = document.getElementById('tanggalData')
    kolomTanggalData.value = ""
}

function konfirmasi(_nama, _tanggalLahir, _berat, _dataTime){
    
    console.log("pesanan diproses")
    displayLoading(true)
    // fetch pesanan 
    fetch("https://script.google.com/macros/s/AKfycby7F3oZLgiGpVDvDq_dmQkeMBqEQwxxm98Ly-WQ2FWSoDRMmtn-zJ_TuIa0Vji6w5zieg/exec", {
        method: 'POST',
        body: JSON.stringify({
                    nama: _nama,
                    tanggalLahir: _tanggalLahir,
                    berat: _berat,
                    dataTime: _dataTime,
                }),
        headers: {
            'Content-Type': 'text/plain;charset=utf-8',
        }
    }).then(response => {
        console.log("success:", response);
        
        displayLoading(false)
        displaySent(true)
        setTimeout(displaySent,2000)
        clearInput()
    }).catch(err => {
        console.log("Error:" + err);
        displayNotSent(true)
        setTimeout(displayNotSent,2000)
        // popup(1,1,"pesanan belum diterima");
    });
}

function buatRequest(nama,telepon){

    console.log("pesanan diproses")
    
    // fetch pesanan 
    fetch("https://script.google.com/macros/s/AKfycbx-RSvI6WBRyHCTUTReqLP8xmQxigH7Jk4hq1AtcGai69EP2uCvlrjLo5JI71E1nLVm/exec?nama="+ String(nama) + "&noTelp=" + String(telepon)
        
    ).then(response => {
        console.log(response);
        displaySent(true);
        
    }).catch(err => {
        console.log("Error:" + err);
        displayNotSent(true);
        
    });
}


async function fetchLogin(nama,telepon){
    
    const response = await fetch("https://script.google.com/macros/s/AKfycbx-RSvI6WBRyHCTUTReqLP8xmQxigH7Jk4hq1AtcGai69EP2uCvlrjLo5JI71E1nLVm/exec?nama="+ String(nama) + "&noTelp=" + String(telepon),{method: 'GET'});
    const data = await response.json();
    let hasil = JSON.parse(data)
    if (hasil == -1){
        pesan("id tidak ditemukan")
    }
    else{
        pesan("id adalah : " + hasil)
    }
    
  
    return hasil
}

function displayLoading(display){
    const loadingPage = document.getElementById('loadingPage')
    if (display == true) {
        loadingPage.style.display = 'flex'
        loadingPage.style.animation = 'loading1 2s'
        
    }
    else {
        loadingPage.style.zIndex = -100
        loadingPage.style.display = 'none'
    }
}

function displaySent(display=false){
    const sentPage = document.getElementById('sentPage')
    if (display == true) {
        sentPage.style.display = 'flex'
        sentPage.style.animation = 'popup1 2s'
    }
    else {
        sentPage.style.zIndex = -100
        sentPage.style.display = 'none'
    }
}

function displayNotSent(display=false){
    const sentPage = document.getElementById('notSentPage')
    if (display == true) {
        sentPage.style.display = 'flex'
        sentPage.style.animation = 'popup1 2s'
    }
    else {
        sentPage.style.zIndex = -100
        sentPage.style.display = 'none'
    }
}

function displayDataSalah(display=false){
    const sentPage = document.getElementById('notificationPage')
    if (display == true) {
        sentPage.style.display = 'flex'
        sentPage.style.animation = 'popup1 1.6s'
    }
    else {
        sentPage.style.zIndex = -100
        sentPage.style.display = 'none'
    }
}
