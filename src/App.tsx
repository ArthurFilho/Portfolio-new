import { Widget } from "./components/Widget";
import { Banner, ContainerAboutMe, ContainerAll, ContainerHeader, ContainerSocials, ContainerTextAndPictures, Dropdown, LogoTitle, Presentation } from "./styles/styles";

import ArthurPicture from "./assets/Arthur.jpeg"

import { GithubLogo, InstagramLogo, TwitterLogo, LinkedinLogo } from "phosphor-react"
 
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

                <Presentation>
                  <ContainerTextAndPictures>
                    <div>
                      <h1>
                        Olá, meu nome é <strong>Arthur</strong> 😎
                      </h1>

                      <p>
                      Estou em busca de me tornar o melhor programador que posso ser.
                      Sou muito dedicado e comprometido em alcançar esse objetivo.
                      </p>
                    </div>

                  <img src={ArthurPicture} />

                  </ContainerTextAndPictures>
                    
                  <ContainerSocials>
                    
                    <a href="https://github.com/ArthurFilho"><GithubLogo size={24} /></a> 
                    
                    <a href="https://www.linkedin.com/in/arthur-filho/"><LinkedinLogo size={24} /></a>
                    
                    <a href="https://www.instagram.com/4rthur.tutu/"><InstagramLogo size={24} /> </a>
                    
                    <a href="https://twitter.com/timoteo_arthur"><TwitterLogo size={24} /></a>
                    
                  </ContainerSocials>
                 
                </Presentation>

                

                <Banner>
                </Banner>

                <ContainerAboutMe>
                  <p>
                      Eu sou um desenvolvedor frontend capaz de criar soluções inovadoras e proporcionar uma 
                      experiência única aos usuários. Meu comprometimento e dedicação constantes me permitem 
                      aprimorar minhas habilidades e buscar sempre a excelência em cada projeto desenvolvido. 
                      Eu sempre busco ter criatividade e determinação para alcançar os objetivos propostos.
                  </p>
                </ContainerAboutMe>

        <Widget />
      </ContainerAll>
  )
}
