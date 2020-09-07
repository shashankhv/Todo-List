

import styled from '@emotion/styled'

import {Modal} from 'antd'


export const WholeContainer = styled.div`

`
export const Head = styled.div`
height : 32vh;
background-position: center;
`

export const Header = styled.p`
font-family: Gabriela;
font-style: normal;
font-weight: normal;
font-size: 50px;
line-height: 45px;
text-align: center;
margin-top: 35px;
color: #ffffff;
position: absolute;
top: 0;
width: 100%;
`

export const Sub = styled.p`
font-family: Gabriela;
font-style: normal;
font-weight: bold;
font-size: 40px;
color: #ffffff;

`

export const StyledInput = styled.input`
width : 35vw;
height : 40px;
font-family: Gabriela;
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 28px;
outline : none;
color: #000000;
`

export const Main = styled.div`
display : flex;
flex-direction : column;
align-items : center;
justify-content : flex-start;

`
export const InputSpan = styled.span`
display: flex;
`

export const RightContaniner = styled.div`
border : 3px solid #ffffff;
width: 27vw;
height: 400px;
overflow: hidden;
:hover{
    overflow-y : auto;


}
padding : 10px;
box-sizing: border-box;
background: #ffffff;
::-webkit-scrollbar {
    width: 4px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #000000; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: gray; 
    
    
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }


box-sizing: border-box;
background: #000000;


`

export const Container = styled.div`
border : 3px solid #ffffff;
width: 27vw;
height: 400px;
overflow: hidden;
:hover{
    overflow-y : auto;
}
padding : 10px;
box-sizing: border-box;
background: #000000;
::-webkit-scrollbar {
    width: 4px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #000000; 
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: gray; 
    
    
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
`

export const List =styled.ul`
font-family: Gabriela;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 60px;

color: #ffffff;
`

export const IconSpan = styled.span`
justify-content : space-between;
width : 60px;
display : flex;
`

export const Icon = styled.img`
cursor : pointer;
`
export const TodoSpan = styled.span`
display : flex; 
justify-content : space-between;
max-width : inherit;
`
export const Stroke = styled.span`
font-family: Gabriela;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 14px;
color: #ffffff;
text-decoration: line-through;
text-decoration-color: grey;


`

export const MainContainer = styled.div`
width: 100%;

height: auto;
display: flex;
justify-content: space-around;
`

export const TextSpan = styled.span`
max-width: 17vw;
overflow-wrap: break-word;
font-family: Gabriela;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 20px;
color: #ffffff;
`
export const SubHead = styled.p`

font-family: Gabriela;
    font-style: normal;
    font-weight: bold;
    font-size: 27px;
    line-height: 0px;
`


export const CustomModal = styled(Modal)`

  .ant-modal-content {
    .ant-modal-body {
      padding: 0;
      margin: 0;
    }
  }

`