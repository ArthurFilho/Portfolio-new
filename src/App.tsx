import { Widget } from "./components/Widget";
import { ContainerProjects, ContainerSkills, AboutMe, Banner, ContainerAboutMe, ContainerAll, ContainerHeader, ContainerSocials, ContainerTextAndPictures, Dropdown, LogoTitle, Presentation, ContainerAboutMeBackground, Projects, ImgProjects, ContainerButtonsProjects, ContainerExperienceSkill } from "./styles/styles";

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
import IgniteShop from "./assets/projects/ig-news.png"
import PomodoroTimer from "./assets/projects/PomodoroTimer.png"
import FinancialController from "./assets/projects/financial-controller.png"

import Typical from "react-typical"

import { GithubLogo, InstagramLogo, TwitterLogo, LinkedinLogo } from "phosphor-react"
import { useState } from "react";

interface skillsProps {
  id: number,
  title: string,
  imgUrl: string,
  experience: string,
}

interface projectProps {
  id: number,
  projectName: string,
  repoUrl?: string,
  imgUrl: string,
  urlGithub: string,
}

const MySkills : Array<skillsProps> = [
  {
    id: 1,
    title: "Html",
    imgUrl: Html,
    experience: "1 Ano e Meio",
  },
  {
    id: 2,
    title: "Css",
    imgUrl: Css,
    experience: "1 Ano e Meio",
  },
  {
    id: 3,
    title: "JS",
    imgUrl: JS,
    experience: "1 Ano e Meio",
  },
  {
    id: 4,
    title: "React",
    imgUrl: React,
    experience: "1 Ano",
  },
  {
    id: 5,
    title: "React Native",
    imgUrl: React,
    experience: "1 Ano ",
  },
  {
    id: 6,
    title: "TypeScript",
    imgUrl: TypeScript,
    experience: "1 Ano",
  },
  {
    id: 7,
    title: "Node",
    imgUrl: Node,
    experience: "1 Ano",
  },
  {
    id: 8,
    title: "Mongo",
    imgUrl: Mongo,
    experience: "1 ano",
  },
  {
    id: 9,
    title: "Jquery",
    imgUrl: Jquery,
    experience: "1 ano",
  },
  {
    id: 10,
    title: "FireBase",
    imgUrl: FireBase,
    experience: "1 ano",
  },
]

const MyProjects : Array<projectProps> = [
  {
    id: 1,
    projectName: "Coffee Delivery",
    imgUrl: CoffeeDelivery,
    repoUrl: "https://coffees-delivery.netlify.app",
    urlGithub: "",
  },
  {
    id: 2,
    projectName: "Moda Salurt",
    imgUrl: ModaSalurt,
    repoUrl: "https://moda-salurt.netlify.app",
    urlGithub: "",
  },
  {
    id: 3,
    projectName: "Auto Spo",
    imgUrl: AutoSpo,
    repoUrl: "https://auto-spo.netlify.app",
    urlGithub: "",
  },
  {
    id: 4,
    projectName: "Networkig Feed",
    imgUrl: NetworkigFeed,
    repoUrl: "https://networking-feed.netlify.app",
    urlGithub: "",
  },
  {
    id: 5,
    projectName: "Github Blog",
    imgUrl: GithubBlog,
    repoUrl: "https://github-blog-challenger.netlify.app",
    urlGithub: "",
  },
  {
    id: 6,
    projectName: "WatchMe",
    imgUrl: WatchMe,
    urlGithub: "",
    repoUrl: "",
  },
  {
    id: 7,
    projectName: "Ignite Shop",
    imgUrl: IgniteShop,
    repoUrl: "",
    urlGithub: "",
  },
  {
    id: 8,
    projectName: "Pomodoro Timer",
    imgUrl: PomodoroTimer,
    repoUrl: "https://pomodorotimerp.netlify.app",
    urlGithub: "",
  },
  {
    id: 9,
    projectName: "Financial Controller",
    imgUrl: FinancialController,
    urlGithub: "",
    repoUrl: "",
  },
]
 
export function App(){

  const [hoverProjects, setHoverProjects] = useState(0)

  const [hoverSkills, setHoverSkills] = useState(0)

  return(
      <ContainerAll> 

                <ContainerHeader>
                  
                  <LogoTitle>
                      Arthur Timóteo Bezerra Pereira Filho
                  </LogoTitle>

                  <Dropdown>
                    
                    <div>       
                     <a href="#home">Home</a>
                    </div>
                    
                    <div>
                      <a href="#projects">Projetos</a>
                    </div>
                    
                    <div>
                      <a href="mailto:peraarthur2018@hotmail.com"> Contato</a>   
                    </div>

                  </Dropdown>
                
                </ContainerHeader>
                 
                <Presentation id="home">
                  <ContainerTextAndPictures>
                    <div>
                      <h1>
                        <Typical
                          steps={['Hello, my name is Arthur 😎', 2000, 'Olá, meu nome é Arthur 😎', 2000]}
                          loop={Infinity}
                          wrapper="p"
                        />
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
                      <div onMouseOver={() => {setHoverSkills(Skills.id)}} onMouseOut={() => {setHoverSkills(0)}} key={Skills.id}>
                        {hoverSkills == Skills.id ? 
                        <ContainerExperienceSkill>
                          <img src={Skills.imgUrl} alt="" />
                          <p>{Skills.title}</p>
                          <h1>{Skills.experience}</h1>
                        </ContainerExperienceSkill>
                        : 
                        <>
                          <img src={Skills.imgUrl} alt="" />
                          <p>{Skills.title}</p>
                        </>
                        }
                      </div>
                  )
                })}
                              
                </ContainerSkills>

                <ContainerProjects id="projects">

                  <h1>Projetos Feitos</h1>
                  
                  <Projects>
                    {MyProjects.map((repos)=> {
                      return(
                            <div onMouseOver={() => {setHoverProjects(repos.id)}} onMouseOut={() => {setHoverProjects(0)}} key={repos.id}>
                            {hoverProjects == repos.id ? 
                            <>
                              <ImgProjects src={repos.imgUrl} alt="" />
                              
                              <ContainerButtonsProjects> 
                                <p>{repos.projectName}</p>
                                <div>
                                  
                                  <a href={repos.urlGithub}>Github</a> 

                                  {repos.repoUrl == '' ? '' : <a href={repos.repoUrl}>Site no Ar</a>}
                            
                                </div>
                              </ContainerButtonsProjects>
                            </>
                            :
                            <img src={repos.imgUrl} alt="" />
                          }
                              
                            </div>
                      )
                    })}
                  </Projects>

                </ContainerProjects>

        <Widget />
      </ContainerAll>
  )
}
