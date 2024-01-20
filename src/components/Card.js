import React from "react";

function Card({imagem, titulo, preco}){
    return(
        <div className="cards">
            <img src={imagem} alt="" />
            <span>{titulo}</span>
            <h4>{preco}</h4>
        </div>

    )
}

export default Card;