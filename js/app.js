const questions = [
    {
        'que': "Which is India’s highest award in cinema? ",
        'a': "Dadasaheb Phalke Award",
        'b': "Academy Awards",
        'c': "Filmfare",
        'd': "IIFA",
        'correct': "Dadasaheb Phalke Award"
    },
    {
        'que': "The fourth Guru of the Sikhs was",
        'a': "Guru Ram Das",
        'b': "Guru Angad Dev",
        'c': "Guru Gobind Singh",
        'd': "Guru Amar Das",
        'correct': "Guru Ram Das"
    },
    {
        'que': "Who wrote 'Discovery of India'?",
        'a': "Bal Gangadhar Tilak",
        'b': "Jawaharlal Nehru",
        'c': "Mahatma Gandhi",
        'd': "APJ Abdul Kalam",
        'correct': "Jawaharlal Nehru"
    },
    {
        'que': "India’s largest museum is located at",
        'a': "Kolkata",
        'b': "Chennai",
        'c': "Bengaluru",
        'd': "Delhi",
        'correct': "Kolkata"
    },
    {
        'que': "Which instrument is Ustaad Amjad Ali Khan associated with?",
        'a': "Sitar",
        'b': "Veena",
        'c': "Tabla",
        'd': "Sarod",
        'correct': "Sarod"
    }
    
]

let index = 0;
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const box = document.querySelector(".box");
let right = 0 , wrong = 0;
let getinput = null;
let checkinput = null;
const options = document.querySelectorAll(".option");
const que = document.getElementById("que");
que.innerText = `Q : ${questions[index].que}`;
options[0].nextElementSibling.innerHTML = questions[index].a;
options[1].nextElementSibling.innerHTML = questions[index].b;
options[2].nextElementSibling.innerHTML = questions[index].c;
options[3].nextElementSibling.innerHTML = questions[index].d;


const loadWindow = () =>{
    document.querySelector(".box").style.width = "600px"; 
}




const nextQuiz = () => {
    let checkinput = null;
    options.forEach((input) => {
        if (input.checked) {
            checkinput = input.nextElementSibling.innerText;
            getinput = input;
            questions[index].value =  getinput.nextElementSibling.innerText;
        }
    })
    if (checkinput === null) {
        alert("Please Select Any one");
    } else {
        
        index++;
        reset();
        que.innerText = `Q : ${questions[index].que}`;
        options[0].nextElementSibling.innerHTML = questions[index].a;
        options[1].nextElementSibling.innerHTML = questions[index].b;
        options[2].nextElementSibling.innerHTML = questions[index].c;
        options[3].nextElementSibling.innerHTML = questions[index].d;
        if(index === questions.length - 1){
            nextBtn.style.display = "none";
            submitBtn.style.display = "block";
        }
    }
}

const prevQuiz = () =>{
    index--;
    if(index < 0){
        index = 0;
    }
    if(index < questions.length - 1){
        nextBtn.style.display = "block";
            submitBtn.style.display = "none";
    }
  
    console.log(right);

    que.innerText = `Q : ${questions[index].que}`;
    options[0].nextElementSibling.innerHTML = questions[index].a;
    options[1].nextElementSibling.innerHTML = questions[index].b;
    options[2].nextElementSibling.innerHTML = questions[index].c;
    options[3].nextElementSibling.innerHTML = questions[index].d;
    options.forEach((input)=>{
        if(input.nextElementSibling.innerText == questions[index].value){
            input.checked = true;
        }
    })
}

const reset = () =>{
    options.forEach((input)=>{
        input.checked = false;
    })
}

const sumbitQuiz = () =>{
   
    let checkinput = null;
    options.forEach((input) => {
        if (input.checked) {
            checkinput = input.nextElementSibling.innerText;
            getinput = input;
            questions[index].value =  getinput.nextElementSibling.innerText;
        }
    })
    if (checkinput === null) {
        alert("Please select a answer than click next");
    } else {
        // alert("Submit Form");
       questions.forEach((question)=>{
         if(question.value == question.correct){
            right++;
            console.log(right);
         }else{
            wrong++;
            console.log(wrong);
         }
       })
       box.style.background = "none";
       box.innerHTML = `<div class="spinner"></div>`;
       setTimeout(()=>{
        box.style.background = "white";
        box.innerHTML = `
    
        <h2 style="text-align:center">Thank you for playing Quiz </h2>
        <div class="center">
          <b>Total</b> : ${questions.length}
        </div>
        <div class="center">
        <b>Right</b> : ${right}
      </div>
      <div class="center">
      <b>Wrong</b> : ${wrong}
    </div>
        `;
       },3000)
       
    }
}