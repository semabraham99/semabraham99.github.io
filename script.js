let page = 0


const key = [1,2,1,1]
const answerA = document.getElementById('buttonA')
const answerB = document.getElementById('buttonB')

function cekJawaban (id) {
    console.log("di click")
    if (page >= 5){
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
        answerA.style.backgroundColor = "blue"
    }
    else{
        answerB.style.backgroundColor = "blue"
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
    answerA.style.backgroundColor = "#0e9e95"
    answerB.style.backgroundColor = "#0e9e95"
}

// // ubah text dan warna answer A
    // answerA.textContent = pageContent.jawabanA
    // answerA.style.backgroundColor = "red"