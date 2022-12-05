var page = 0

const key = [1,2,1,1]
const questionText = [
    "which word means something cause motion",
    "which word means something makes change of speed",
    "which word means change of speed",
    "which word means ability to do work ",
]
const answerAText = [
    "Force",
    "Work",
    "Acceleration",
    "Energy",
    
]
const answerBText = [
    "Acceleration",
    "Force",
    "Work",
    "Speed",   
]

const answerA = document.getElementById('buttonA')
const answerB = document.getElementById('buttonB')
const question = document.getElementById('questionText')

function cekJawaban (id) {
    console.log("di click")
    if (page >= 3){
        page = 0
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
    console.log(10)
}

// // ubah text dan warna answer A
    // answerA.textContent = pageContent.jawabanA
    // answerA.style.backgroundColor = "red"