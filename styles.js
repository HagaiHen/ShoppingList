import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 8.24%;
  box-shadow: 1px 0.5px 1px 0.1px black;
  display: flex;
  flex-direction: row;
  z-index: 2;
  background-color: #4b4747;
  justify-content: space-between;
`;


export const NavButtonContainer = styled.button`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  border: none;
  background-color: transparent;
  cursor: pointer;
  /* margin-right: 15px; */
  width: 100px;
  font-size: 18px; /* Updated font size */
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  color: ${(props) =>
    props.active ? "#BDFF51" : "white"}; /* Updated text color */
  font-family: sans-serif;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  :hover {
    color: #bdff51;
    cursor: pointer;
  }
`;

export const SelectedGreenBar = styled.div`
  width: 100%;
  height: 10%;
  background-color: #BDFF51;
  display: flex;
  align-self: flex-end;
  
`;

export const HeaderTitle = styled.div`
  margin-bottom: 15px;
`


export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
`

export const LogoAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  
`
export const Container = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #4b4747;
`;