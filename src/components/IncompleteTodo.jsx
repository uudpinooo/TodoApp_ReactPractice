// 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 ContextAPI 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜

import { memo, useContext } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from "../atoms/PrimaryButton";
import { Context } from "../providers/Provider";

export const IncompleteTodo = memo(() => {
  const { incompleteLists, setIncompleteLists, completeLists, setCompleteLists, deleteLists, setDeleteLists } = useContext(Context)

  const onClickDone = (todo, index) => {
    const newLists = [...incompleteLists];
    newLists.splice(index, 1);
    setIncompleteLists(newLists);
    setCompleteLists([...completeLists, todo]);
  }

  const onClickDelete = (todo, index) => {
    const newLists = [...incompleteLists];
    newLists.splice(index, 1);
    setIncompleteLists(newLists);
    setDeleteLists([...deleteLists, todo]);
  }

  return (
    <>
      <StyledDiv>
        <h3>Todos</h3>
        <ul>
          {incompleteLists.map((todo, index) => {
            return (
              <StyledLi key={index}>
                {`・${todo}`}
                <StyledBtns>
                  <PrimaryButton onClick={() => onClickDone(todo, index)}>完了</PrimaryButton>
                  <PrimaryButton onClick={() => onClickDelete(todo, index)}>削除</PrimaryButton>
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
// import { onClickDelete, onClickDone } from '../reducks/lists/actions';

// export const IncompleteTodo = memo(({ inCompleteTodos }) => {
//   const dispatch = useDispatch();

//   return (
//     <>
//       <StyledDiv>
//         <h3>Todos</h3>
//         <ul>
//           {inCompleteTodos.map((todo, index) => {
//             return (
//               <StyledLi key={index}>
//                 {`・${todo}`}
//                 <StyledBtns>
//                   <PrimaryButton onClick={() => dispatch(onClickDone(todo, index))}>完了</PrimaryButton>
//                   <PrimaryButton onClick={() => dispatch(onClickDelete(todo, index))}>削除</PrimaryButton>
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
  border-right: 1px rgba(112, 112, 112, 0.3) solid;
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

