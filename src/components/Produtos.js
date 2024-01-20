import React from "react";
import Card from './Card'
import StEsquerda from '../images/setaesquerda.png'
import StDireita from '../images/setadireita.png'

function Produtos({produtos}){

return(
    <div className="produtos-container">
        <div className="seta st-esquerda"><img src={StEsquerda} alt="" /></div>
            <div className="wrapper">
                {produtos.map((produto) => (
                    <Card imagem={produto.imagem} titulo={produto.titulo} preco={produto.preco} />
                ))}
            </div>
        <div className="seta st-direita"><img src={StDireita} alt="" /></div>
    </div>
)

}

export default Produtos