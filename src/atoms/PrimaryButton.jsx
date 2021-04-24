import styled from 'styled-components';

export const PrimaryButton = ({children, className, onClick}) => {

  return (
    <>
      <StyledButton className={className} onClick={onClick} role="button">{children}</StyledButton>
    </>
  );
};

const StyledButton = styled.div`
  width: 50px;
  color: #fff;
  background-color: rgba(112, 112, 112, 0.8);
  padding: 0.5rem 1rem;
  margin-right: 1.5rem;
  text-align: center;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #fff;
    color: #707070;
  }
`;