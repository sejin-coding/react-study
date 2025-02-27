// 비동기 작업 처리하기 1. 콜백 함수

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
    console.log(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000); //3초 뒤에 콜백함수 실행
}

// 음식을 식히는 함수
function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000); //2초 뒤에
}

function freezeFood(food) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);
  
  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});
// 콜백함수안에 콜백함수되니까 점점 인덴트가 깊어지잖아. 여기서 5개나 되면 너무 깊어져서 가독성 매우 안좋아짐. 
// 그래서 그걸 콜백 지옥이라고 부르는데 프로미스라고 다음시간에 배움. 