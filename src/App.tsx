import { Widget } from "./components/Widget";
import { AboutMe, Banner, ContainerAll, ContainerHeader, Dropdown, LogoTitle } from "./styles/styles";

export function App(){
  return(
      <ContainerAll> 

                <ContainerHeader>
                  
                  <LogoTitle>
                      Arthur Timóteo Bezerra Pereira Filho
                  </LogoTitle>

                  <Dropdown>
                    
                    <div>       
                      Home 
                    </div>
                    
                    <div>
                      Projects
                    </div>
                    
                    <div>
                      <a href="mailto:peraarthur2018@hotmail.com"> Contact</a>   
                    </div>

                  </Dropdown>
                
                </ContainerHeader>

                <AboutMe>
                  <div>
                    <h1>
                      Olá, meu nome é <strong>Arthur</strong> 😎
                    </h1>

                    <p>
                      Eu sou um desenvolvedor frontend capaz de criar soluções inovadoras e proporcionar uma 
                      experiência única aos usuários. Meu comprometimento e dedicação constantes me permitem 
                      aprimorar minhas habilidades e buscar sempre a excelência em cada projeto desenvolvido. 
                      Eu sempre busco ter criatividade e determinação para alcançar os objetivos propostos.
                    </p>
                  </div>

                  <span></span>
                </AboutMe>

                <Banner>
                </Banner>

                

        <Widget />
      </ContainerAll>
  )
}
