import react from "../assets/react.svg"

export function Bodypage(){
    return(
    
    <div>
    <div className="languages">
    <img className="iconl iconreact" src={react}/>
    </div>
    <div className="about">
    <h1 className="title abouttext">About me</h1>
    <div className="boxtext">
    <div className="imageplace">
    <div className="textAbout"> 
    Meu nome é Arthur, tenho 18 anos. Sou uma pessoa dinâmica, pontual, solícita e principalmente procuro me aprimorar e agregar conhecimento na área, estou nessa área para crescer e me desenvolver, sempre tentando melhorar a cada dia. Minhas skills atuais são React.js, JavaScript, HTML, CSS, BOOTSTRAP, Node(Básico) e estou estudando typescript e react native.
    </div>
    </div>
    </div>
    </div>
    </div>
    )

}

