declare namespace Protocol {
  declare type List = {
    _id: string,
    protocolo: string,
    apresentante: string,
    tipo: string,
    imagem: string,
    entrada: number,
    vencimento: number
  };

  declare type Create = {
    protocolo: string,
    apresentante: string,
    tipo: string,
    entrada: number,
    vencimento: number
  };

}