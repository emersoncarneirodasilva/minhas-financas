import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;    
  border-radius: 5px;  
  padding: 15px 0px;
  gap: 10px;
  box-shadow: 0px 0px 5px #ccc;
  background-color: #fff;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: black;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;  
  color: white;
  background-color: #0c9696;
  cursor: pointer;
  
  &:hover {
    background-color: #32b1b1;
  }
`;