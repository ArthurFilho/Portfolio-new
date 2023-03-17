import { Widget } from "./components/Widget";
import { ContainerSkills, AboutMe, Banner, ContainerAboutMe, ContainerAll, ContainerHeader, ContainerSocials, ContainerTextAndPictures, Dropdown, LogoTitle, Presentation, ContainerAboutMeBackground } from "./styles/styles";

import ArthurPicture from "./assets/Arthur.jpeg"

import Html from "./assets/skills/html.png"
import Css from "./assets/skills/css.png"
import FireBase from "./assets/skills/firebase.png"
import JS from "./assets/skills/javascript.png"
import Node from "./assets/skills/node.png"
import React from "./assets/skills/react.png"
import Sass from "./assets/skills/sass.png"
import Mongo from "./assets/skills/mongo.png"
import Jquery from "./assets/skills/jquery.png"
import TypeScript from "./assets/skills/typescript.png"

import { GithubLogo, InstagramLogo, TwitterLogo, LinkedinLogo } from "phosphor-react"

const MySkills = [
  {
    imgUrl: Html,
  },
  {
    imgUrl: Css,
  },
  {
    imgUrl: JS,
  },
  {
    imgUrl: React,
  },
  {
    imgUrl: React,
  },
  {
    imgUrl: TypeScript,
  },
  {
    imgUrl: Node,
  },
  {
    imgUrl: Sass,
  },
  {
    imgUrl: Mongo,
  },
  {
    imgUrl: Jquery,
  },
  {
    imgUrl: FireBase,
  },
]
 
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

                

                {/* <Banner>
                </Banner> */}

              <ContainerAboutMeBackground>
                <ContainerAboutMe>

                    <span></span> 

                    <AboutMe>
                      <p>
                          Eu sou um desenvolvedor frontend capaz de criar soluções inovadoras e proporcionar uma 
                          experiência única aos usuários. Meu comprometimento e dedicação constantes me permitem 
                          aprimorar minhas habilidades e buscar sempre a excelência em cada projeto desenvolvido. 
                          Eu sempre busco ter criatividade e determinação para alcançar os objetivos propostos.
                      </p>


                      <div>
                        <ul>
                          <li>
                            Nome: Arthur 
                          </li>

                          <li>
                            Idade: 18 
                          </li>
                        </ul>
                        <ul>
                          <li>
                            Contato: peraarthur2018@gmail.com
                          </li>

                          <li>
                            Endereço: Sergipe - Aracaju
                          </li>
                        </ul>
                      </div>
                    </AboutMe>


                </ContainerAboutMe>
              </ContainerAboutMeBackground>

                <ContainerSkills>
              
                {MySkills.map((Skills) => {
                  return(
                    <div>
                      <img src={Skills.imgUrl} alt="" />
                    </div>
                  )
                })}
              
                </ContainerSkills>

        <Widget />
      </ContainerAll>
  )
}
