import React, {useState} from "react";
import Logo from '../images/logo.png';
import SoleDivine from '../images/SoleDivine.png';
import cartIcon from '../images/Vector.png'
import heartIcon from '../images/Vector (1).png'
import userIcon from '../images/Group 9.png'
import searchIcon from '../images/lupaicon1 1.png'

function Header({}){


    return(
        <header>
            <section>
                <div className="logo-name">
                    <img src={Logo} alt="logo" className="logo" />
                    <img src={SoleDivine} alt="soledivine" className="name" />
                </div>
                <form className="search-container">
                    <input type="text" name="search-bar" id="search-bar" />
                    <button></button>
                </form>
                <div className="usuario">
                    <button><img src={userIcon} alt="entrar" /> <span>Entrar ou cadastrar-se</span></button>
                </div>                
                <div className="options">
                    <button className="cart-icon">
                        <img src={cartIcon} alt="carrinho" />
                    </button>
                    <button className="heart-icon">
                        <img src={heartIcon} alt="favoritos" />
                    </button>
                </div>
                
            </section>
            <nav>
                <ul>
                    <li><a href="#">Roupas</a></li>
                    <li><a href="#">Vestidos</a></li>
                    <li><a href="#">Bolsas</a></li>
                    <li><a href="#">Sapatos</a></li>
                    <li><a href="#">Acessórios</a></li>
                    <li><a href="#">Coleções</a></li>
                    <li><a href="#">Lojas físicas</a></li>
                </ul>
            </nav>


        </header>
    )
}

export default Header;