import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { PrimaryButton } from "../atoms/PrimaryButton";
import { onClickBack } from '../reducks/lists/actions';

const testData = ["おわったこと１", "おわったこと２", "おわったこと３"];

export const DeleteTodo = ({}) => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledDiv>
        <ul>
          {testData.map((todo, index) => {
            return (
              <StyledLi key={index}>
                {`・${todo}`}
                <StyledBtns>
                  <PrimaryButton onClick={() => dispatch(onClickBack(todo, index))}>戻す</PrimaryButton>
                </StyledBtns>
              </StyledLi>
            );
          })}
        </ul>
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 33vw;
  padding: 0 2rem;
`;

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledBtns = styled.div`
  display: flex;
  margin-left: auto;
`;