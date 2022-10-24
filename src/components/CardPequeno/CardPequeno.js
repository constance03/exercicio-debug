import React from "react";
import {
  ImgCardPequeno,
  LayoutCardPequeno,
  TituloCardPequeno,
  InfosCardPequeno
} from "./styles";

export function CardPequeno(props) {
  return (
    <LayoutCardPequeno>
      <ImgCardPequeno src={props.imagem} />
      <InfosCardPequeno>
        <TituloCardPequeno>{props.nome}</TituloCardPequeno>
        <p>{props.descricao}</p>
      </InfosCardPequeno>
    </LayoutCardPequeno>
  );
}
