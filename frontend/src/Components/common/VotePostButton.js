import styled from "styled-components";
import Button from "./Button";

const VotePostButtonBlock = styled.div`
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
    button + button {
      margin-left: 0.5rem;
    }
`;

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
`;

const VotePostButton = ({onCancel, onPublish}) => {
    return (
        <VotePostButtonBlock>
            <StyledButton onClick={onPublish}>
                투표 생성
            </StyledButton>
            <StyledButton onClick={onCancel}>취소</StyledButton>
        </VotePostButtonBlock>
    );
};

export default VotePostButton;