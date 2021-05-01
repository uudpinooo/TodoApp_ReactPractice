// 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 ContextAPI 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜

import { memo, useContext } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from "../atoms/PrimaryButton";
import { Context } from '../providers/Provider';

export const CompleteTodo = memo(() => {
  const { incompleteLists, setIncompleteLists, completeLists, setCompleteLists } = useContext(Context)

  const onClickBack = (todo, index) => {
    const newLists = [...completeLists];
    newLists.splice(index, 1);
    setCompleteLists(newLists);
    setIncompleteLists([...incompleteLists, todo]);
  }

  return (
    <>
      <StyledDiv>
        <h3>Completed</h3>
        <ul>
          {completeLists.map((todo, index) => {
            return (
              <StyledLi key={index}>
                {`・${todo}`}
                <StyledBtns>
                  <PrimaryButton onClick={() => onClickBack(todo, index)}>戻す</PrimaryButton>
                </StyledBtns>
              </StyledLi>
            );
          })}
        </ul>
      </StyledDiv>
    </>
  );
});

// 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 Redux 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜

// import { memo } from 'react';
// import { useDispatch } from 'react-redux';
// import styled from 'styled-components';
// import { PrimaryButton } from "../atoms/PrimaryButton";
// import { onClickBack } from '../reducks/lists/actions';

// export const CompleteTodo = memo(({ completeTodos }) => {
//   const dispatch = useDispatch();

//   return (
//     <>
//       <StyledDiv>
//         <h3>Completed</h3>
//         <ul>
//           {completeTodos.map((todo, index) => {
//             return (
//               <StyledLi key={index}>
//                 {`・${todo}`}
//                 <StyledBtns>
//                   <PrimaryButton onClick={() => dispatch(onClickBack(todo, index))}>戻す</PrimaryButton>
//                 </StyledBtns>
//               </StyledLi>
//             );
//           })}
//         </ul>
//       </StyledDiv>
//     </>
//   );
// });

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
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