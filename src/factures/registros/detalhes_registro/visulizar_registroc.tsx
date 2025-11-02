import { styled } from "styled-components";
type props = {
  ativo:any
}
type color = {
  color:string
}
export default {
  Area:styled.div`
    /* align-items: center; */
    background: #fff;
      padding: 25px  0;

     
     @media screen and (min-width:560px) {
        padding: 25px ;
    }


  `,
  Chip:styled.div<color>`
    padding: 5px;
    font-weight: bold;
    border-radius: 5px;
    color:${({color})=>{
      return color ? color:"blue"
    }} ;
    font-size: 12px;
     @media screen and (min-width:560px) {
               font-size:14px;


    }
  `,
  Container: styled.div`
  position: relative;
    max-width: 800px;
    margin:  auto;
    box-sizing:border-box;
    font-family: Arial, sans-serif;
     @media screen and (min-width:560px) {
           padding: 30px;
               box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);


    }

  `,
  imagemArea:styled.div`
  display: flex;
  gap: 25px;
  border: 0;
  `,
  ImagemItemRecebido:styled.div`
  display: flex;
  flex-direction: column;
  font-size: 11px;
  gap:5px;
  `,
  Card: styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap:35px;
    padding:15px 20px;
    margin-bottom: 20px;
    @media screen and (max-width: 560px){
          gap: 10px;

    }
  `,
   CardCentro: styled.div`
    border-radius: 8px;
    padding:15px 20px;
    @media screen and (min-width:560px) {
    display: flex;
    justify-content: space-between;
    gap: 15px;
        margin-bottom: 20px;


    }
  `,

  StatusContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  `,

  AreaItemJust:styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
  
  `,
   AreaItemJustCenter:styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 5px;
    gap: 5px;
    @media screen and (min-width:560px) {
    flex-direction: row;
        align-items: center;


    }
  
  `,
  StatusItem: styled.div<{ active?: boolean }>`
    flex: 1;
    text-align: center;
    color: ${(props) => (props.active ? "#fff" : "#999")};
    background: ${(props) => (props.active ? "#4caf50" : "#e0e0e0")};
    border-radius: 20px;
    padding: 10px;
    margin: 0 5px;
    font-size: 12px;
  `,
  Button: styled.button<props>`
  display:${({ativo})=>{
      return ativo ? "block":"none"
    }};;
    background-color: ${({ativo})=>{
      return ativo ? "#4caf50":"#6e6966"
    }};
    color: #fff;
    border: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;

    &:hover {
      background-color: ${({ativo})=>{
      return ativo ? "#45a049":"#99938f"
    }};
    }
     &:active {
     transform: scale(0.97);
    }
  `,
  ItemImage: styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 15px;
     @media screen and (min-width:560px) {
       width: 100px;
    height: 100px;

    }
  `,
  ItemDetails: styled.div`
   display: flex;
  flex-direction: column;
  gap: 10px;
   margin: 10px 0;

    
  `,
  SummaryRow: styled.div`
    display: flex;
    justify-content: space-between;
    


  `,
  heanderPedido:styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    gap: 10px;
  `,
  tituloPedido:styled.h4`
    font-size: 14px;
    color:var(--cor-texto-label);
    background-color: #d5d5f7;
    padding: 2px;
  `,
  status:styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: var(--cor-texto-titulo);
  `,
  Image: styled.img`
       width:100%;
    height:200px;
    border-radius: 5%;
    object-fit: cover;
    @media screen and (min-width:560px) {
       width:150px;
    height:150px;
    border-radius: 5%;
    object-fit: cover;
    }
    `,
    description:styled.div`
    width: 100%;
    word-wrap: break-word;
    `,
    Label:styled.span`
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      color: #4B0082;
      font-size: 12px;

       @media screen and (min-width:560px) {
        font-size:12px;
    }
    `,
    LabelSubtitulo:styled.span`
      font-family: "Inter", sans-serif;
      font-weight: 500;
      color: #6C757D;
      word-wrap:break-word;
      font-size: 12px;
      @media screen and (min-width:560px) {
               font-size:12px;
    }
     
      `,
      edit:styled.div`
      margin: 0;
        
      `

}