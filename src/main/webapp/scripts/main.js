//문서에서 일치하는 요소를 찾아서 텍스트를 바꿔주는 코드
let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

//연산자 연습 코드
function multiply(a, b) {
	let result = a + b;
	return result
};

// 클릭하면 이미지 변하는 코드
let imgChange = document.querySelector('img');
imgChange.onclick = function() {
	let mySrc = imgChange.getAttribute('src'); //getAttrubute는 해당 요소에 지정된 값을 반환
	if(mySrc === 'images/test_image.jfif'){
		imgChange.setAttribute ('src', 'images/image.png') //setAtrribute는 지정된 요소의 속성값을 설정
	}else{
		imgChange.setAttribute ('src', 'images/test_image.jfif')
	}
};

// 개인환영 코드
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')

function setUserName() {
	let myName = prompt('Please enter your name.'); //prompt는 사용자에게 데이터를 입력하길 요청
	if(!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName)
		myHeading.innerHTML = '강아지 소개, ' + myName;
	}
};

if(!localStorage.getItem('name')){
		setUserName();
	} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = '강아지 소개, ' + storedName;
} // 이름이 지정되지 않았을 경우 이름 데이터를 남기게 설정

myButton.onclick = function() {
	setUserName();
}