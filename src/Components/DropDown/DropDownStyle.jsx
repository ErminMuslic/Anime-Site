import styled from 'styled-components';

export const DropDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 8vw;
  background-color: #343338;
  height: 100vh;
  position: fixed;
  top: 5vh;
  left: 0;
  padding-top: 20px;
`;

export const DropDownItem = styled.p`
  color: white;
  padding: 10px;
  margin: 0;
  cursor: pointer;
  &:hover {
    background-color: #454545;
  }
`;
