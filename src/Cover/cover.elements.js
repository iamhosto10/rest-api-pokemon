import styled from "styled-components";

// color1: #D91A4D
// color2: #1790BF
// color3: #B6D936
// color4: #F2CB05
// color5: #A65D03
export const Cardcont = styled.section`
  width: 500px;
  height: 300px;
  display: flex;
  position: relative;
  transform: ${(props) =>
    props.length === 1
      ? "rotate(5deg) translate(140px)"
      : props.length === 2
      ? "rotate(4deg) translate(70px)"
      : "none"};
  div:nth-child(1) {
    position: absolute;
    left: 0;
    z-index: 3;
    transition: 100ms;
    transform: rotate(-5deg) translateY(10px);
    &:hover {
      transform: rotate(-5deg) translateY(0);
    }
  }
  div:nth-child(2) {
    position: absolute;
    left: 150px;
    z-index: 2;
    transition: 100ms;
    &:hover {
      transform: translateY(-10px);
    }
  }
  div:nth-child(3) {
    position: absolute;
    left: 300px;
    z-index: 1;
    transition: 100ms;
    transform: rotate(5deg) translateY(10px);
    &:hover {
      transform: rotate(5deg) translateY(0);
    }
  }
`;

export const Btncontainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  position: relative;
  width: 200px;
  height: 250px;
  border-radius: 16px;
  background-color: #1790bf;
  box-shadow: 3px 3px 10px;
  padding: 48px 0 24px 12px;
  overflow: hidden;
  cursor: pointer;
  .name {
    width: 150px;
    text-align: center;
    border-bottom-left-radius: 16px;
    background-color: #d91a4d;
    color: white;
    position: absolute;
    top: 0;
    right: 0;
  }
  .circle {
    position: absolute;
    width: 150px;
    height: 150px;
    background-color: #f2cb05;
    border-radius: 50%;
    top: 56px;
    left: 24px;
    z-index: 1;
  }
  .image {
    position: absolute;
    top: 56px;
    left: 24px;
    width: 150px;
    height: 150px;
    z-index: 2;
  }
`;

export const Boton = styled.div`
  position: relative;
  button {
    background-color: #d91a4d;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 32px;
    &:active {
      transform: translateY(5px);
    }
  }
  .shadow {
    position: absolute;
    top: 5px;
    z-index: -1;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #1790bf;
  }
`;
