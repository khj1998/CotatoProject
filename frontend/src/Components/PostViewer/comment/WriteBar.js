import React from 'react';
import Input from '../common/Input';

const WriteBar = ({ onChange }) => {
    return <Input name="writeBar"
                  type="text"
                  placeholder="댓글을 입력해주세요"
                  onChange={ onChange }
           />;
};

export default WriteBar;