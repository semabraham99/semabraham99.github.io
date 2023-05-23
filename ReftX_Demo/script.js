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
        return
    } 
    if (tanggalLahir == "") {
        console.log("tanggal lahir belum diisi")
        return
    }
        
    if (beratBadans == "") {
        console.log("berat badan belum diisi")
        return
    }
        
    if (tanggalData == "") {
        console.log("tanggal data belum diisi")
        return
    }
    
    konfirmasi(nama,tanggalLahir,beratBadan,tanggalData)
    console.log(nama)
    console.log(tanggalLahir)
    console.log(tanggalData)
    console.log(beratBadan) 
}

function konfirmasi(_nama, _tanggalLahir, _berat, _dataTime){
    
    console.log("pesanan diproses")
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
    }).catch(err => {
        console.log("Error:" + err);
        // popup(1,1,"pesanan belum diterima");
    });
}

function buatRequest(nama,telepon){

    console.log("pesanan diproses")
    
    // fetch pesanan 
    fetch("https://script.google.com/macros/s/AKfycbx-RSvI6WBRyHCTUTReqLP8xmQxigH7Jk4hq1AtcGai69EP2uCvlrjLo5JI71E1nLVm/exec?nama="+ String(nama) + "&noTelp=" + String(telepon)
        
    ).then(response => {
        console.log(response);
        
    }).catch(err => {
        console.log("Error:" + err);
        
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
