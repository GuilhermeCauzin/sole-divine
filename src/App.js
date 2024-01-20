import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Slideshow from './components/Slideshow'
import imagem1 from './images/Rectangle 33.jpg'
import imagem2 from './images/image 2.jpg'
import imagem3 from './images/image 3.jpg';
import newyearCollection from './images/newyearcollection.jpg'
import Produtos from './components/Produtos'


import imagem4 from './images/image 6.jpg'
import imagem5 from './images/image 7.jpg'
import imagem6 from './images/image 8.jpg';

function App() {

	const produtos = [
		{
			"imagem":imagem1,
			"titulo":'Blazer de alogdão nobre preto feminino',
			"preco":'R$ 1.900',
		},
		{
			"imagem":imagem2,
			"titulo":'Vestido de algodão preto feminino',
			"preco":'R$ 10.050',
		},
		{
			"imagem":imagem3,
			"titulo":'Jaqueta de couro preta feminino',
			"preco":'R$ 8.300',
		}
	]

	const produtos2 = [
		{
			"imagem":imagem4,
			"titulo":'Conjunto de couro feminino',
			"preco":'R$ 11.900',
		},
		{
			"imagem":imagem5,
			"titulo":'Conjunto Denim feminino',
			"preco":'R$ 4.050',
		},
		{
			"imagem":imagem6,
			"titulo":'Sobretudo de seda branco feminino',
			"preco":'R$ 10.300',
		}
	]

	return (
		<div className="App">
			<Header/>

			<Slideshow/>
			
			<Produtos produtos={produtos} />

			<section className='collection-container'>
				<img src={newyearCollection} alt="" />
			</section>

			<Produtos produtos={produtos2} />

			<Footer/>
		</div>
	);
}


// <Card imagem={imagem1} titulo={'Blazer de alogdão nobre preto feminino'} preco={'R$ 1.900'} />
// <Card imagem={imagem2} titulo={'Vestido de algodão preto feminino'} preco={'R$ 10.050'} />
// <Card imagem={imagem3} titulo={'Jaqueta de couro preta feminino'} preco={'R$ 8.300'} />

export default App;