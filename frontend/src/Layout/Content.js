import React from "react";
import styled from 'styled-components';
export default function AboutPage() {
  return (
    <div className="content">
    <Element>
     <Container>
        <Image>
              <img
                    width="40%"
                    height="50%"
                    src="https://velog.velcdn.com/images/kkaerrung/post/0f00c4b1-c4a6-4e78-873e-cd794b44e246/image.jpg"
                    alt="logo"/>
        </Image>
        <StyledDiv>
      <h4><h2><p>코테이토는</p></h2><p>서울, 경기 지역 대학생들의 IT 연합 동아리입니다</p>
                 <p>개발자, 기획자, 디자이너가 모여 자신의 전공 지식을 공유하고, </p>
                 <p>스터디와 프로젝트를 진행합니다. </p>
                 <p>함께 감자에서 회오리 감자로 성장해봅시다.</p>
                 </h4>
           </StyledDiv>
           </Container>
         </Element>
      </div>

     );
   }
   const Container = styled.div`
          width: 60%;
          align: center;
      `;
   const Element = styled.div`
           margin-top: 40px;
          align-items: center;
          height:20hw;
          width: 110vw;
          font-size: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-align: center;
          position: absolute;
          display: grid;
          transform: translate( -2%, -10%);
   `;
   const Image = styled.div`
          transform: translate( 5%, +100% );
          align: center;
          width: 100%;
          height: 100%;

   `;

   const StyledDiv = styled.div`
          margin: 0 auto;
          width: 70%;
          height: 50%;
          display: flex;
          flex-flow: row wrap;
          transform: translate( 70%, -20% );
          align: center;
   `;