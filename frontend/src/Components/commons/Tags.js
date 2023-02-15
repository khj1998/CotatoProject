import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const TagsBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.gray[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.gray[2]};
    }
  }
`;

const Tags = ({ tags }) => {
  return (
    <TagsBlock>
        {/* tags props 각 태그 항목 Link 경로는 ?tag={tag} 로! */}
      {tags.map(tag => (
        <Link className="tag" to={`/?tag=${tag}`} key={tag}>
          #{tag}
        </Link>
      ))}
    </TagsBlock>
  );
};

export default Tags;