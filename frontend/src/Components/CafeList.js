import React from 'react';
import styled from 'styled-components';
import CafeItem from './CafeItem';

const CafeListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: '제목',
  description: '내용',
  url: 'https://google.com',
  urlToImage: 'https://via.placeholder.com/160',
};

const CafeList = () => {
  return (
    <CafeListBlock>
      <CafeItem article={sampleArticle} />
      <CafeItem article={sampleArticle} />
      <CafeItem article={sampleArticle} />
      <CafeItem article={sampleArticle} />
      <CafeItem article={sampleArticle} />
      <CafeItem article={sampleArticle} />
    </CafeListBlock>
  );
};

export default CafeList;