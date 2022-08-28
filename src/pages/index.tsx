import Card from "../components/Card";
import {Content,  SubHeaderStyled, Wrapper } from "./styles";

export default function Home() {
  return (
    <Wrapper>
      <SubHeaderStyled title="Pedidos" text="últimos pedidos" labelButton="Novo Pedido"/>
      
      <Content>
        {[1,2,3,5,6,7,8].map((item, key) => (
          <Card
            key={key} 
            name='Fernando Santos'
            inputDate="28/08/2022"
            finalDate="28/08/2022"
            avatar="https://gravatar.com/avatar/f6152e4acd50e543936441fc918b2606?s=400&d=robohash&r=x"
          />
        ))}
      </Content>
    </Wrapper>

  )
}
