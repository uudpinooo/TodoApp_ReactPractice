// 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜 ContextAPI 〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜

import { memo, useContext } from 'react';
import styled from 'styled-components';
import { PrimaryButton } from "../atoms/PrimaryButton";
import { Context } from '../providers/Provider';

export const DeleteTodo = memo(() => {
  const { incompleteLists, setIncompleteLists, deleteLists, setDeleteLists } = useContext(Context);

  const onClickBack = (todo, index) => {
    const newLists = [...deleteLists];
    newLists.splice(index, 1);
    setDeleteLists(newLists);
    setIncompleteLists([...incompleteLists, todo]);
  }

  const onClickDelete = (todom, index) => {
    const newLists = [...deleteLists];
    newLists.splice(index, 1);
    setDeleteLists(newLists);
  }

  return (
    <>
      <StyledDiv>
        <ul>
          {deleteLists.map((todo, index) => {
            return (
              <StyledLi key={index}>
                {`・${todo}`}
                <StyledBtns>
                  <PrimaryButton onClick={() => onClickBack(todo, index)}>戻す</PrimaryButton>
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
// import { onClickBack } from '../reducks/lists/actions';

// const testData = ["おわったこと１", "おわったこと２", "おわったこと３"];

// export const DeleteTodo = memo(({}) => {
//   const dispatch = useDispatch();

//   return (
//     <>
//       <StyledDiv>
//         <ul>
//           {testData.map((todo, index) => {
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
  width: 30vw;
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