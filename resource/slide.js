const viewDOM = document.getElementById("view-js");
const calDOM = document.getElementById("calView-js");

let operatorValue = 0;
let operator = "";

// 여러개의 이미지를 가지고 있어야 한다.
// 현재 이미지가 몇번인지 알아야 해요!

const imageList = [
    "https://i.pinimg.com/474x/6c/99/21/6c99219b22a7bc6cc08f92bb1245c965.jpg",
    "https://i.pinimg.com/474x/e3/c7/32/e3c732d805994f1c8148bfe81f8aef8e.jpg",
    "https://i.pinimg.com/474x/f5/c5/15/f5c5153115effe0930898b7233c155d4.jpg",
    "https://i.pinimg.com/474x/44/2d/d8/442dd8d6f615d9ab1d4174a5fb31645d.jpg",
    "https://i.pinimg.com/474x/3e/60/ae/3e60aea9ee469222f13aec85b91f0115.jpg"
];
let imageNumber = 0;

// 이미지 리스트와 이미지넘버라는 변수들은 왜
// 함수 밖에 만들어져있는가?
// 이미지 체인지 핸들러 라는 함수는, 버튼을 누를 때 마다 실행돼요.
// imageNuber가 0이 돼요. 

function imageChangeHandler(type) {
    // type이 0이면 "prev" : 이전 이미지
    // type이 1이면 "next" : 다음 이미지

    if (type === 0) {
        // 현재 값이 0이면, imageNuber를 (imageList.length - 1)로 변경하고,
        if(imageNumber === 0) {
            imageNumber = imageList.length - 1;
        } else {
            // 그게 아니라면, 현재 값이 -1을 해주면 된다.
            imageNumber = imageNumber - 1;
        }
    } else {
        // 현재 imageNuber가 (imageList.length - 1)과 같다면, 0으로 변경하고,
        if(imageNumber === imageList.length - 1) {
            imageNumber = 0;
        } else {
            // 그게 아니라면, 현재 값이 +1 을 해주면 된다.
            imageNumber = imageNumber + 1;
        }
    };

    viewDOM.src = imageList[imageNumber];
};

function numberClickHandler(value) {
    const result = calDOM.innerHTML + "" + value;
    calDOM.innerHTML = result;
};

function initValue() {
    calDOM.innerHTML = "";
};

function plusHandler() {
    operatorValue = parseInt(calDOM.innerHTML);
    operator = "plus";
    calDOM.innerHTML = "";
};

function minusHandler() {
    operatorValue = parseInt(calDOM.innerHTML);
    operator = "minus";
    calDOM.innerHTML = "";
};

function divideHandler() {
    operatorValue = parseInt(calDOM.innerHTML);
    operator = "divid";
    calDOM.innerHTML = "";
};

function multiplyHandler() {
    operatorValue = parseInt(calDOM.innerHTML);
    operator = "multiply";
    calDOM.innerHTML = "";
};

function calulate() {
    let result = "";

    if (operator === "plus") {
        result = parseInt(operatorValue) + parseInt(calDOM.innerHTML);
    };
    if (operator === "minus") {
        result = parseInt(operatorValue) - parseInt(calDOM.innerHTML);
    };
    if (operator === "divid") {
        result = parseInt(operatorValue) / parseInt(calDOM.innerHTML);
    };
    if (operator === "multiply") {
        result = parseInt(operatorValue) * parseInt(calDOM.innerHTML);
    };

    calDOM.innerHTML = result;
};