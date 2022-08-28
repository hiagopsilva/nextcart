import Router from "next/router";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import ProtocolAPI from "../services/api";
import {Content,  SubHeaderStyled, Wrapper } from "./styles";

export default function Home() {
  const [dataProtocols, setDataProtocols] = useState([]);

  const fetchProtocols = async () => {
    const response = await ProtocolAPI.list()

    setDataProtocols(response);
  }

  useEffect(() => {
    fetchProtocols()
  },[]);

  return (
    <Wrapper>
      <SubHeaderStyled 
        title="Pedidos" 
        text="últimos pedidos" 
        labelButton="Novo Pedido"
        onClick={() => Router.push('/newProtocol')}
      />
      
      <Content>
        {dataProtocols.map((item: Protocol.List) => (
          <Card
            key={item._id} 
            name={item.protocolo}
            inputDate={item.entrada}
            finalDate={item.vencimento}
            avatar={item.imagem}
            apresentante={item.apresentante}
            typeProtocol={item.tipo}
          />
        ))}
      </Content>
    </Wrapper>

  )
}
