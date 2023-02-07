import React from "react";
import styled from 'styled-components';


export default function Gate() {
  return (
      <Element>
      <Container>
      <Start>
  <pre> <img src = "https://velog.velcdn.com/images/kkaerrung/post/f977fb62-589d-49cb-9bf7-75ce56bdb1b5/image.png" width = "30%" height = "30%" align="center"></img>
              <h3>SEMINAR</h3>
              <h5>매주 금요일 5시에</h5>
              <h5> 정규세션이 이뤄집니다</h5></pre>
     </Start>
     <Start1>
       <pre><img src = "https://velog.velcdn.com/images/kkaerrung/post/b6ee9083-59d4-4d2f-973c-571c312454e3/image.png" width = "30%" height = "30%" align="center"></img>
                   <h3> INTRODUCE</h3>
                   <h5> 코테이토를</h5>
                   <h5> 소개합니다.</h5></pre>

     </Start1>
      <Start2>
           <pre>  <img src = "https://velog.velcdn.com/images/kkaerrung/post/94a608e2-1f5d-4356-b51c-47c0bc73b770/image.png" width = "30%" height = "30%" align="center"></img>
                        <h3>PROJECT</h3>
                        <h5>다양한 주제로</h5>
                        <h5>프로젝트가 진행됩니다</h5></pre>
      </Start2>
       <Start3>
         <pre><img src = "https://velog.velcdn.com/images/kkaerrung/post/7cb1eba6-7ae4-46e8-a79d-c99f1ed29dde/image.png" width = "30%" height = "30%" align="center"></img>
              <h3>NETWORKING</h3>
              <h5> 다양한 친목 프로그램이</h5>
            <h5> 준비되어 있습니다.</h5></pre>
            </Start3>

             <Start5>
             <pre><img src = "https://velog.velcdn.com/images/kkaerrung/post/a0920822-5621-4fdc-96ef-489ac5cd3d59/image.png" width = "30%" height = "30%" align="center"></img>
              <h3> ANNOUNCEMENT</h3>
              <h5>공지사항은</h5>
              <h5> 필독해주시길 바랍니다.</h5></pre>
             </Start5>
                <Start6>
                   <pre>  <img src = "https://velog.velcdn.com/images/kkaerrung/post/c6e71c6b-9d73-474d-b646-898661e11102/image.png" width = "30%" height = "30%" align="center"></img>
                              <h3>STUDY</h3>
                              <h5> 다양한 주제로</h5>
                              <h5> 스터디가 진행됩니다.</h5></pre>

                                                 </Start6>
     </Container>
     </Element>
  );
}
const Container = styled.div`
    width: 80vw;
    height: 100hw;
    position: flex;

`;
const Element = styled.div`
        margin-top: 30px;
                 align-items: center;
                 height:100hw;
                 width: 100vw;
                 font-size: 1rem;
                 display: flex;
                 flex-direction: column;
                 justify-content: center;
                 font-align: center;
                 position: absolute;
                 display: grid;
                 transform: translate( -2%, 25%);



`;

const Start = styled.div`
  margin: 0 auto;
    width: 15%;
    height: 20%;
    min-width: 130px;
    max-width: 250px;
    display: flex;
    flex-flow: row wrap;
    transform: translate( -10%, 100% );
     background-color: rgb(255, 219, 137);
     text-align: center;
     font-size: 0.8rem;
     background-position: center;
     background-position: center top;

`;

const Start1 = styled.div`
  margin: 0 auto;
    width: 15%;
    height: 20%;
    min-width: 130px;
    max-width: 250px;
    display: flex;
    flex-flow: row wrap;
    transform: translate( 100%, 120% );
     background-color: rgb(255, 216, 169);
     text-align: center;
     background-position: center top;
     font-size: 0.8rem;
     object-fit:cover;

`;
const Start2 = styled.div`
  margin: 0 auto;
    width: 15%;
    height: 20%;
    min-width: 130px;
    max-width: 250px;
    display: flex;
    flex-flow: row wrap;
    transform: translate( 100%, -100% );
     background-color: rgb(255, 212, 178);
     text-align: center;
     font-size: 0.8rem;
`;
const Start3 = styled.div`
  margin: 0 auto;
     width: 15%;
     height: 20%;
     min-width: 130px;
     max-width: 250px;
     display: flex;
     flex-flow: row wrap;
     transform: translate( -10%, -80% );
      background-color: rgb(255, 233, 177);
      text-align: center;
      font-size: 0.8rem;
`;

const Start5 = styled.div`
  margin: 0 auto;
     width: 15%;
     height: 20%;
     min-width: 130px;
     max-width: 250px;
     display: flex;
     flex-flow: row wrap;
     transform: translate( -120%, -300%);
      background-color: rgb(250, 234, 177);
      text-align: center;
      font-size: 0.8rem;


`;
const Start6 = styled.div`
  margin: 0 auto;
     width: 15%;
     height: 20%;
     min-width: 130px;
     max-width: 250px;
     display: flex;
     flex-flow: row wrap;
     transform: translate( -120%, -280%);
      background-color: rgb(250, 214, 165);
      text-align: center;
      font-size: 0.8rem;
`;

const s = styled.div`
    text-align: center;

`;