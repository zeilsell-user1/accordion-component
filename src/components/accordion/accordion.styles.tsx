import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;
 
export const TileContainer = styled.div<{ width:number }>`
  width: ${(props) => props.width}%;
  margin: 2vh;
  border: 2vh;
  background-color: transparent;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 40%) 3px 5px 6px 1px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
 
export const GradiantOverlay = styled.div`
  background: linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, #000 100%);
  border-radius: 15px;
  height: 100%;
`;
 
