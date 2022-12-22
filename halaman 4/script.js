var page = 0
var view = 1
var salah = 0 

let key = []
let questionText = []
let answerAText = []  
let answerBText = []

const answerA = document.getElementById('buttonA')
const answerB = document.getElementById('buttonB')
const question = document.getElementById('questionText')

const page1 = document.getElementById('containerPage1')
const page2 = document.getElementById('containerPage2')

const rocket = document.getElementById('rocketImage')
const score = document.getElementById('score')

function init(){
    console.log ("run init")
    fetchSoal()
    page1.style.display = 'flex'
    page2.style.display = 'none'
    
    view = 1
    
}

function cekJawaban (id) {
    console.log("di click")
    if (page >= 4){
        if (salah == 0){
            changeView()
        }
        page = 0
        salah = 0
        fetchSoal()
    }

    if (id === key[page]) {
        jawabanBenar()
        setTimeout(()=> {nextPage()}, 500)       
    }

    else {
        jawabanSalah()
        salah = salah + 1
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

function fetchSoal(){
    const request = new Request("https://script.google.com/macros/s/AKfycby10XZX-kAVmMhbHcJIhZ44uUzJisHFqAcgrCaWYxeQRNEqnX8YOvxbdq-VbNMb8DBrAw/exec") 
    fetch(request).then((Response)=> Response.json()).then((data)=>{
        questionText = [(data[0].soal),(data[1].soal),(data[2].soal),(data[3].soal),(data[4].soal)]
        answerAText = [(data[0].jawabanA),(data[1].jawabanA),(data[2].jawabanA),(data[3].jawabanA),(data[4].jawabanA)]
        answerBText = [(data[0].jawabanB),(data[1].jawabanB),(data[2].jawabanB),(data[3].jawabanB),(data[4].jawabanB)]
        key = (data[5])
    })

}

function changeView(){
    console.log ("ganti view")
    if (view == 1){
        console.log("ini view 1")
        page1.style.display = 'none'
        page2.style.display = 'flex'
        view = 2
        setTimeout(()=> {}, 1500)
        rocket.animate(
                [
                    {transform:'translateY(0)'}, 
                    {transform:'translateY(-90%)'}
                ],

                {
                    easing:"ease-in-out",
                    fill:"forwards",
                    duration: 1000,
                    iterations:1
                }
            )
        
        score.style.borderColor = 'white'
        setTimeout(()=> {changeView()}, 4500)
    }
    else {
        console.log("ini view 2")
        page1.style.display = 'flex'
        page2.style.display = 'none'
        view = 1
    }

}
// // ubah text dan warna answer A
    // answerA.textContent = pageContent.jawabanA
    // answerA.style.backgroundColor = "red"