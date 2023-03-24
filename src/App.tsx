import { Widget } from "./components/Widget";
import { ContainerProjects, ContainerSkills, AboutMe, Banner, ContainerAboutMe, ContainerAll, ContainerHeader, ContainerSocials, ContainerTextAndPictures, Dropdown, LogoTitle, Presentation, ContainerAboutMeBackground, Projects } from "./styles/styles";

import ArthurPicture from "./assets/Arthur.jpeg"

import Html from "./assets/skills/html.png"
import Css from "./assets/skills/css.png"
import FireBase from "./assets/skills/firebase.png"
import JS from "./assets/skills/javascript.png"
import Node from "./assets/skills/node.png"
import React from "./assets/skills/react.png"
import Mongo from "./assets/skills/mongo.png"
import Jquery from "./assets/skills/jquery.png"
import TypeScript from "./assets/skills/typescript.png"

import CoffeeDelivery from "./assets/projects/coffee-delivery.png"
import AnimalDaSorte from "./assets/projects/animal-da-sorte.png"
import AutoSpo from "./assets/projects/auto-spo.png"
import GithubBlog from "./assets/projects/github-blog.png"
import ModaSalurt from "./assets/projects/moda-salurt.png"
import WatchMe from "./assets/projects/watchMe.png"
import NetworkigFeed from "./assets/projects/networking-feed.png"
import IgniteNews from "./assets/projects/ig-news.png"
import PomodoroTimer from "./assets/projects/PomodoroTimer.png"
import FinancialController from "./assets/projects/financial-controller.png"

import { GithubLogo, InstagramLogo, TwitterLogo, LinkedinLogo } from "phosphor-react"

const MySkills = [
  {
    title: "Html",
    imgUrl: Html,
    experience: "1 Ano e Meio",
  },
  {
    title: "Css",
    imgUrl: Css,
    experience: "1 Ano e Meio",
  },
  {
    title: "JS",
    imgUrl: JS,
    experience: "1 Ano e Meio",
  },
  {
    title: "React",
    imgUrl: React,
    experience: "1 Ano",
  },
  {
    title: "ReactNative",
    imgUrl: React,
    experience: "1 Ano ",
  },
  {
    title: "TypeScript",
    imgUrl: TypeScript,
    experience: "1 Ano",
  },
  {
    title: "Node",
    imgUrl: Node,
    experience: "1 Ano",
  },
  {
    title: "Mongo",
    imgUrl: Mongo,
    experience: "1 ano",
  },
  {
    title: "Jquery",
    imgUrl: Jquery,
    experience: "1 ano",
  },
  {
    title: "FireBase",
    imgUrl: FireBase,
    experience: "1 ano",
  },
]

const MyProjects = [
  {
    id: 1,
    projectName: "Coffee Delivery",
    imgUrl: CoffeeDelivery,
    repoUrl: "",
  },
  {
    id: 2,
    projectName: "Moda Salurt",
    imgUrl: ModaSalurt,
    repoUrl: "",
  },
  {
    id: 3,
    projectName: "Auto Spo",
    imgUrl: AutoSpo,
    repoUrl: "",
  },
  {
    id: 4,
    projectName: "Networkig Feed",
    imgUrl: NetworkigFeed,
    repoUrl: "",
  },
  {
    id: 5,
    projectName: "Github Blog",
    imgUrl: GithubBlog,
    repoUrl: "",
  },
  {
    id: 6,
    projectName: "WatchMe",
    imgUrl: WatchMe,
    repoUrl: "",
  },
  {
    id: 7,
    projectName: "Ignite News",
    imgUrl: IgniteNews,
    repoUrl: "",
  },
  {
    id: 8,
    projectName: "Pomodoro Timer",
    imgUrl: PomodoroTimer,
    repoUrl: "",
  },
  {
    id: 9,
    projectName: "Financial Controller",
    imgUrl: FinancialController,
    repoUrl: "",
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
                    
                    <a href="https://github.com/ArthurFilho"> <GithubLogo size={24} /> </a> 
                    
                    <a href="https://www.linkedin.com/in/arthur-filho/"> <LinkedinLogo size={24} /> </a>
                    
                    <a href="https://www.instagram.com/4rthur.tutu/"> <InstagramLogo size={24} /> </a>
                    
                    <a href="https://twitter.com/timoteo_arthur"> <TwitterLogo size={24} /> </a>
                    
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
                        <h1>{Skills.title}</h1>
                        <p>{Skills.experience}</p>
                      </div>
                  )
                })}
              
                </ContainerSkills>

                <ContainerProjects>

                  <h1>Projetos Feitos</h1>
                  
                  <Projects>
                    {MyProjects.map((repos)=> {
                      return(
                          <a key={repos.id} href={repos.repoUrl}>
                            <div>
                              <img src={repos.imgUrl} alt="" />
                              {/* <p>{repos.projectName}</p> */}
                            </div>
                          </a>
                      )
                    })}
                  </Projects>

                </ContainerProjects>

        <Widget />
      </ContainerAll>
  )
}
