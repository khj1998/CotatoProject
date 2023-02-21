# CotatoProject

node_modules,package.json 제거하고 다시 npm init할 경우

프론트단에서 쓰는 react 버전이 17.0.2이기 때문에 새로 설치한 react 버전(18)과 호환되지 않는 문법이
존재한다.
=> react 버전은 17.0.2로 맞춘다.




App.js 코드중 MainPage, Login등 컴포넌트를 인식하지 못하는 버그 발생할시 => react-router-dom 6버전 이하 에러.

react-router-dom 6버전 이상 설치 해결 => <Route><Route/>들을 <Routes>로 감싸고, component = {컴포넌트/}로 작성된 코드를 element로 수정한다.
기존 6버전 이하 해결 => react-router-dom 6버전 이하는 Routes를 지원하지 않는다. <Route>를 <> </>로 감싸야한다.
  
해당 프로젝트에서는 react-router-dom 6버전 이하를 활용한다.


터미널에서 npm start 실행시 Missing script: "start" 에러를 뱉으며 실행 실패시 다음과 같이 설정한다.
package.json에서 "scripts"부분에 "start": "react-scripts start"를 추가한다.

----------------------------------------------------------------------------------------------------------

앱을 처음 clone해왔을 경우 아래의 코드들을 차례대로 입력해주세요!

cd frontend

npm init

npm init을 했을 때 입력하라고 나오는 것들에 대해서는 그냥 엔터키만 계속 누르면 됨.

npm i react-scripts

npm i react-router-dom

npm i redux react-redux

npm i styled-components

npm i axios

npm i redux-devtools-extension

npm i redux-actions

--"start": "react-scripts start"를 package.json의 "scripts"에 추가--

npm start를 하면 처음 나오는 문장에 y입력

위의 코드들은 clone해온 후 한번만 입력하시면 됩니다!



----------------------------------------------------------------------------------------------------------
pm i redux-saga-effects
yarn add datepicker
yarn add react-big-calendar
yarn add date-fns
yarn add react-scroll
