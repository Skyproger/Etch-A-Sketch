let color = "black";
let click = false;



document.addEventListener("DOMContentLoaded",function () {                      //Этот обработчик срабатывает, когда весь HTML-документ загружен и разобран.
  createBoard(16);                                                              //Доска 16х16 всегда

  this.querySelector("body").addEventListener("click",function (e) {
    if(e.target.tagName != "BUTTON"){
      click = !click;
      let draw = document.querySelector("#draw");
      if (click){
        draw.innerHTML = "Ты рисуешь";
      }
      else {
        draw.innerHTML = "Ты не рисуешь ";
      }
    }
  })


  let btn_popup = document.querySelector('#popup')                              //#popup - обращается к id в html
  btn_popup.addEventListener('click',function () {
    let size = getSize();
    createBoard(size);
  })
})

function createBoard(size) {
  let board = document.querySelector(".board");

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size ;

  for (let i=0; i < numDivs ; i++){
    let div=document.createElement("div");
    div.addEventListener("mouseover",colorDiv)
    board.insertAdjacentElement("beforeend",div);
  }
}

function getSize(){
  let input = prompt("Выберите размер доски");                                  //Что будет писать при нажатии на Выбрать
  let message = document.querySelector('#message')
  if (input == ""){
    message.innerHTML = 'Пожалуйста укажите размер'
  }
  else if(input < 0 || input > 100){
    message.innerHTML = 'Укажите число от 1 до 100'
  }
  else{
    message.innerHTML = 'Можешь играть'
    return input;
  }
}


function colorDiv(){
  if(click){
    if (color == "blue"){
      this.style.backgroundColor='blue'
    }
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    if (color =='black'){
      this.style.backgroundColor='black'
    }
  }
}

function setColor(colorChoice) {
  color=colorChoice;
}

function resetBoard() {
  let divs = document.querySelectorAll("div")
  divs.forEach((div) => div.style.backgroundColor = "white")
}
