// Node.js 라이브러리 사용하기

// 라이브러리 : 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것.
// ex) 날짜 라이브러리, 수학 라이브러리, 그래픽 라이브러리

// npm.js 사이트 (https://www.npmjs.com/)에 들어가면 모든 라이브러리가 등록되어 있음.
// npm i randomcolor 이걸하면 package.json에 dependencies에 어떤 라이브러리를 설치했는지가 나오게 됨.
// node_module 실제 설치한 라이브러리의 저장소
// package-lock.json package.json 보다 더 자세하게 설치한 것들이 써있음.
// package.json 에는 대략적인 버전이 명시가 됨.

// node_modules랑 package-lock.json이 지워지게 되면, 오류 발생. package.json 만 있어도 다시 설치 가능
// npm i 만 입력하면 package.json dependency를 기준으로 모든 라이브러리 한번에 설치 가능. !!

// 누군가와 공유할 때 node_modules 함께 공유 X, package.json만 있어도 다 가능하니까.
