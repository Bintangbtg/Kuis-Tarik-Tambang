document.addEventListener('DOMContentLoaded', function() {
    Swal.fire({
        title: 'KITA',
        text:'(Kuis Tarik Tambang)',
        text:'Sebuah permainan dimana kita harus menjawab soal dengan benar agar dapat menarik tali',
        confirmButtonText: 'Next',
    }).then(() => {
        Swal.fire({
            title : 'Cara Main',
            text : 'Jawab pertanyaan dengan huruf kecil dan benar, Ketika selesai tekan enter satu kali agar karakter kembali ketempat awal',
            confirmButtonText : 'next',
        }).then(()=>{
            Swal.fire({
                title : 'TerimaKasih',
                text : 'Terimakasih telah mau bermain game ini maaf atas segala kekurangannya',
                confirmButtonText : 'Mulai',
            })
        });
    });
});

const questions = [
    {
        question: "Apa warna bendera Indonesia?",
        answer: "merah putih"
    },
    {
        question: "Ibukota Indonesia adalah?",
        answer: "jakarta"
    },
    {
        question: "Kapan Indonesia merdeka?",
        answer: "17 agustus 1945"
    },
    {
        question: "Siapa yang menjadi presiden pertama Indonesia?",
        answer: "ir.soekarno"
    },
    {
        question: "Presiden Indonesia saat ini adalah?",
        answer: "joko widodo"
    },
    {
        question: "Mata uang Indonesia adalah?",
        answer: "rupiah"
    },
    {
        question: "Gunung tertinggi di Indonesia adalah",
        answer: "puncak jaya"
    },
    {
        question: "Bendera yang berkibar saat proklamasi dijahit oleh?",
        answer: "ibu fatmawati"
    },
    {
        question: "Negara Jepang menyerah kepada Sekutu pada tanggal?",
        answer: "15 agustus 1945"
    },
    {
        question: "kunci keberhasilan perjuangan kemerdekaan Indonesia yaitu?",
        answer: "persatuan"
    },
    {
        question: "Siapakah yang mengetik teks proklamasi?",
        answer: "sayuti melik"
    },
];

let currentQuestion = 0;
let percentage = 50;
let percentange1 = 50;
let scorep = 0;
let scoreb = 0;

function showQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
}

document.querySelector(".submit-btn").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        setTimeout(checkAnswer, 50);
    }
  });

document.querySelector(".answer").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        setTimeout(checkAnswer, 50);
    }
  });

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();
    const correctAnswer = questions[currentQuestion].answer;

    if (userAnswer === correctAnswer) {
        document.getElementById("character").style.left = `calc(${percentage}% - 5%)`;
        percentage -= 5;
        scorep += 1;
        swal.fire("Selamat Jawaban Kamu Benar");
    } else {
        document.getElementById("character").style.left = `calc(${percentage}% + 5%)`;
        percentage += 5;
        scoreb += 1;
        swal.fire('Yah jawaban kamu salah');
    }

    currentQuestion++;

    if (currentQuestion === 11) {
        if (scorep > scoreb) {
            swal.fire("Kamu menang!", "Permainan telah selesai", "success");
            setTimeout(resetGame(),50);
          } else {
            swal.fire("Kamu kalah!", "Permainan telah selesai", "error");
            setTimeout(resetGame(),50);
          }
    }
    else{setTimeout(() => {
        showQuestion();
        document.getElementById("answer").value = "";
    }, 500);
}
}

function resetGame() {
    currentQuestion = 0;
    showQuestion();
    characterPosition = 0;
    percentage = 50;
    img.src = "asset/bg.png";
    document.getElementById("character").style.left = "50%";
    document.getElementById("answer").value = "";
}


showQuestion();