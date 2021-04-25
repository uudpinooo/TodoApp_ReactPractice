import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addTodo } from '../reducks/lists/actions';
import { PrimaryButton } from './PrimaryButton';

export const InputForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const onClickSubmit = (value, e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <>
      <StyledDiv>
        <form onSubmit={e => onClickSubmit(value, e)}>
          <StyledInput onChange={e => setValue(e.target.value)} value={value} type="text" placeholder="Todoを入力してください" />
        </form>
        <StyledButton onClick={e => onClickSubmit(value, e)}>追加</StyledButton>
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