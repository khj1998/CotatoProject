import styled from 'styled-components';
import { Link } from 'react-router-dom';

   const Element = styled.div`
          align-items: center;
          height: 250px;
          width: 100%;
          font-size: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-align: center;
          position: absolute;
          transform: translate( -8%, 500%);
   `;

const InstaBlock = styled.div`
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 2rem;
  width: 30%;
  height: 80%;
  max-width: 350px;
  min-width: 145px;
  background-color: bisque;
  border-radius: 5px;
     position: absolute;
     display: flex;
     flex-direction: column;
     justify-content: center;
  transform: translate(-50%, -150%);
`;

const CafeBlock = styled.div`
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 2rem;
  width: 30%;
  height: 80%;
  max-width: 350px;
  min-width: 145px;
  background-color: bisque;
   border-radius: 5px;
   position: absolute;
   display: flex;
   flex-direction: column;
   justify-content: center;
  transform: translate(70%, -150%);
`;


const SnsTemplate = () => {
    return (
         <Element>
         <InstaBlock>
        <a href = "https://instagram.com/cotato_official?igshid=NDk5N2NlZjQ=" target="_blank">
             <pre>
             <p>Instagram</p>
              <img src = "https://t1.daumcdn.net/cfile/tistory/99B6AB485D09F2132A"
              width="30%" height="30%" align="center" position="relative"/>
            </pre>
            </a>
          </InstaBlock>

            <CafeBlock>
        <a href = "https://cafe.naver.com/cotato" target="_blank">
          <pre>
            <p>NaverCafe</p>
            <img src = "https://velog.velcdn.com/images/kkaerrung/post/184aa8e1-f039-4104-afe4-f970598b6423/image.png" width="30%" height="30%" align="center" position="relative"/>
            </pre>
              </a>
          </CafeBlock>

      </Element>
    );
};

export default SnsTemplate;