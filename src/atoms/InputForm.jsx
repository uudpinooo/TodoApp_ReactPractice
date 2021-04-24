import { useState } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from './PrimaryButton';

export const InputForm = ({inCompleteTodos, setInCompleteTodos}) => {
  const [value, setValue] = useState("");
  const onChangeInput = (e) => setValue(e.target.value);

  const onClickSubmit = () => {
    setInCompleteTodos([...inCompleteTodos, value]);
    setValue("");
  }

  return (
    <>
    <StyledDiv>
        <StyledInput onChange={onChangeInput} value={value} type="text" placeholder="Todoを入力してください" />
        <StyledButton onClick={onClickSubmit}>送信</StyledButton>
    </StyledDiv>

    </>
  );
};

const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  height: 2rem;
  width: 30vw;
  margin: 0 1rem 0;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  outline: none;
`;

const StyledButton = styled(PrimaryButton)`
  background-color: #c97586;
  align-self: center;
  &:hover {
    color: #c97586;
  }
`;