import React, {useState} from "react";

function DivineSlider({setaesquerda, setadireita, slides}){
    const [slideAtual, setSlideAtual] = useState(1);
    

    // Condição para mover para o próximo slidewrapper e mover entre o slidewrapper atual
    const handleProximoSlide = () => {
        if(slideAtual == slides.lenght){
            setSlideAtual(1);
            handleTrocaWrapper();
        }
        setSlideAtual(slideAtual+1);
    };
    // Condição para mover para o slidewrapper anterior e mover entre o slidewrapper atual
    const handleSlideAnterior = () => {
        if(slideAtual == 1){
            setSlideAtual(slides.lenght);
            handleTrocaWrapper();
        }
        setSlideAtual(slideAtual-1);
    };

    const handleTrocaWrapper = () => {

    }

    // Stylesheet da aplicação, to fazendo dentro do código pra não precisar de mais de um arquivo
    const styles = { 
        sliderContainer:{
            display:'flex',
            alignItems:'center',
            userSelect:'none',
        },
        slidesWrapper:{
            display:'flex',
            flexFlow:'row nowrap',
            height:'100%',
            width:'100%',
            overflow:'hidden'
        },
        slides:{
            height:'100%',
            width:'100%'
        },
        setasWrapper:{
            display:'flex',
            justifyContent:'space-between',
            position:'absolute',
            width:'100%',
            alignItems:'center',
            zIndex:'2',
        },
        setaL:{

        },
        setaR:{

        },
        setaEsquerda:{
            width:'40px',
            height:'40px',
            cursor:'pointer',
            userSelectable:'none',
        },
        setaDireita:{
            width:'40px',
            height:'40px',
            cursor:'pointer',
            userSelect:'none',
        },
    }
    

    return(
        <div style={styles.sliderContainer}>
            <div style={styles.slidesWrapper} id='slideWrapper'>
                { slides ?
                    slides.map((slide)=>(
                       <div style={styles.slides} key={slide.key}>
                            <img src={slide.imagem} alt={slide.alt} draggable='false' />
                       </div> 
                    )): null
                }
            </div>

            <div style={styles.setasWrapper}>
                <div style={styles.setaL} onClick={handleSlideAnterior} >
                    {
                        setaesquerda ? <img src={setaesquerda}alt="setaesquerda" draggable='false'/> : <SetaEsquerda style={styles.setaEsquerda}/>
                    }
                </div>
                <div style={styles.setaR} onClick={handleProximoSlide} >
                    {
                        setadireita ? <img src={setadireita}alt="setadireita" draggable='false'/> : <SetaDireita style={styles.setaDireita}/>
                    }
                </div>
            </div>
        </div>
    );
}

// Setas default caso não seja declarada nenhuma seta nos parâmetros
function SetaEsquerda({style, childStyle}){
    return(
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(-90)" style={style}>
                <path d="M19.9201 15.0499L13.4001 8.52989C12.6301 7.75989 11.3701 7.75989 10.6001 8.52989L4.08008 15.0499" stroke="#F5F5F5" stroke-width="1.5"  stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" style={childStyle ? childStyle : null} />
        </svg>
    );
};

function SetaDireita({style, childStyle}){
    return(
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)" style={style}>
            <path d="M19.9201 15.0499L13.4001 8.52989C12.6301 7.75989 11.3701 7.75989 10.6001 8.52989L4.08008 15.0499" stroke="#F5F5F5" stroke-width="1.5"  stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" style={childStyle ? childStyle : null} />
        </svg>
    );
};


export default DivineSlider;