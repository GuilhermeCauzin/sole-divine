import React from "react";
import Logo from '../images/logo.png';
import instagramIcon from '../images/instagram.png';    
import facebookIcon from '../images/facebook.png'

function Footer({}){
    return(
        <footer>
            <section>
                <div>
                    <h3>Fale Conosco</h3>
                    <ul>
                        <li>
                            Perguntas frequentes
                        </li>
                        <li>
                            Atendimento ao cliente
                        </li>
                        <li>
                            Pedidos e entregas
                        </li>
                        <li>
                            Devoluções
                        </li>
                        <li>
                            Formas de pagamento
                        </li>
                        <li>
                            Termos e condições
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="sobrenos">
                        <h3>Sobre a SoleDivine</h3>
                        <ul>
                            <li>Quem somos</li>
                            <li>Parcerias</li>
                            <li>Nosso app</li>
                        </ul>
                    </div>
                    <div className="social">
                        <h3>Social</h3>
                        <ul>
                            <li><img src={instagramIcon} alt="Instagram" /></li>
                            <li><img src={facebookIcon} alt="Facebook" /></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>Benefícios</h3>
                    <ul>
                        <li>Programa de afiliados</li>
                        <li>Cartão SoleDivine</li>
                        <li>Programa de parcerias</li>
                    </ul>
                </div>
            </section>
            <hr />
            <div className="content">
                <img src={Logo} alt="" />
                <span>© Copyright 2023 SoleDivine. Todos os direitos reservados.</span>
            </div>
        </footer>
    )
}

export default Footer;