let pageContent = {
    page: 1,
    soal : "apakah pertanyaan itu ?",
    jawabanA: "jawaban 1",
    jawabanB: "jawaban 2",
    nextPage : function () {
        this.page = this.page + 1
        console.log ("level up")
    }
}

const answerA = document.getElementById('answerA')

// ubah text dan warna answer A
answerA.textContent = pageContent.jawabanA
answerA.style.backgroundColor = "red"