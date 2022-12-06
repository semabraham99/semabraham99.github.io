var page = 0

let key = []
let questionText = []
let answerAText = []  
let answerBText = []

const answerA = document.getElementById('buttonA')
const answerB = document.getElementById('buttonB')
const question = document.getElementById('questionText')

test()

function cekJawaban (id) {
    console.log("di click")
    if (page >= 4){
        page = 0
        test()
    }

    if (id === key[page]) {
        jawabanBenar()
        setTimeout(()=> {nextPage()}, 500)       
    }

    else {
        jawabanSalah()
        setTimeout(()=> {nextPage()}, 500)
    }
}

function jawabanBenar(){
    if (key[page]===1){
        answerA.style.backgroundColor = "#0e9e95"
       
    }
    else{
        answerB.style.backgroundColor = "#0e9e95"
      
    }
}

function jawabanSalah(){
    if (key[page]===1){
        answerB.style.backgroundColor = "red"
      
    }
    else{
        answerA.style.backgroundColor = "red"
    
    }
}

function nextPage() {
    page = page + 1
    console.log ("level up")
    resetView()
}

function resetView() {
    answerA.style.backgroundColor = "#590D82"
    answerB.style.backgroundColor = "#590D82"

    answerA.innerHTML = "<h3>" + answerAText[page] + "<h3>"
    answerB.innerHTML = "<h3>" + answerBText[page] + "<h3>"
    question.innerText = questionText[page]
    
}

function test(){
    const request = new Request("https://script.google.com/macros/s/AKfycby10XZX-kAVmMhbHcJIhZ44uUzJisHFqAcgrCaWYxeQRNEqnX8YOvxbdq-VbNMb8DBrAw/exec") 
    fetch(request).then((Response)=> Response.json()).then((data)=>{
        questionText = [(data[0].soal),(data[1].soal),(data[2].soal),(data[3].soal),(data[4].soal)]
        answerAText = [(data[0].jawabanA),(data[1].jawabanA),(data[2].jawabanA),(data[3].jawabanA),(data[4].jawabanA)]
        answerBText = [(data[0].jawabanB),(data[1].jawabanB),(data[2].jawabanB),(data[3].jawabanB),(data[4].jawabanB)]
        key = (data[5])
    })

}

// // ubah text dan warna answer A
    // answerA.textContent = pageContent.jawabanA
    // answerA.style.backgroundColor = "red"