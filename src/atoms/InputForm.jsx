import styled from 'styled-components';

export const InputForm = () => {
  return (
    <>
      <label>
        やること<br />
        <StyledInput type="text" name="todo" placeholder="Todoを入力してください" />
      </label>
    </>
  );
};

const StyledInput = styled.input`
  border: none;
  border-radius: 5px;
  height: 2.5rem;
  width: 30vw;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  outline: none;
`;