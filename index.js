//variables
const $maxNumInput = document.querySelector('#maxNumInput');
const $guessNumInput = document.querySelector('#guessNumInput');
const $gameForm = document.querySelector('#gameForm');
const $h2 = document.querySelector('h2');
const $h3 = document.querySelector('h3');

//Functions
function onGameFormSubmit (event) {
  event.preventDefault();
  const guessNum = parseInt($guessNumInput.value);
  const rangeMax = parseInt($maxNumInput.value);
  //input값의 value를 불러오면 type이 string이므로 주의할 것. (typeof 메소드로 type 확인!)
  let randomNum = Math.floor(Math.random()*(rangeMax+1));
  //사용자 선택 숫자 & 선택된 랜덤 숫자 안내화면 출력
  $h2.innerText = `You chose : ${guessNum}, the machine chose : ${randomNum}`
  if(randomNum === guessNum) {
    $h3.innerText = 'You win !!!'
  }
  else {
    $h3.innerText = 'You lose ㅠㅠ'
  }
}

//설정한 범위 내의 값만 입력 받기 위해 동적으로 min, max 속성 부여
function onMaxNumInput () {
  const rangeMax = parseInt($maxNumInput.value);
  $guessNumInput.setAttribute('max',rangeMax);
  $guessNumInput.setAttribute('min',1);
}


//EventListeners
$gameForm.addEventListener('submit', onGameFormSubmit);
$maxNumInput.addEventListener('input', onMaxNumInput);



