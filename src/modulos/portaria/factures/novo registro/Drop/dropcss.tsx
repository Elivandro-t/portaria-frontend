import { styled } from "styled-components";

export default {
 PreviewImage:styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 8px;
`,

 Text:styled.p`
  color: #4b5563;
  font-size: 15px;
  text-align: center;
`,

 RemoveButton:styled.button`
  position: absolute;
  top: 2px;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 50%;
  width: 28px;
  height: 28px;

  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #dc2626;
  }
`,
Div:styled.div`

    
`
}
