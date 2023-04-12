import { Widget } from "./components/Widget";
import { ContainerProjects, KnowledgeContainer, ContainerSkills, AboutMe, Banner, ContainerAboutMe, ContainerAll, ContainerHeader, ContainerSocials, ContainerTextAndPictures, Dropdown, LogoTitle, Presentation, ContainerAboutMeBackground, Projects, ImgProjects, ContainerButtonsProjects, ContainerExperienceSkill, WorkContainer, Footer, ButtonNotAllowed, ButtonAllowed } from "./styles/styles";

import ArthurPicture from "./assets/Arthur.jpeg"
import ArthurPicture01 from "./assets/Arthur1.png"

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
import AutoSpo from "./assets/projects/auto-spo.png"
import GithubBlog from "./assets/projects/github-blog.png"
import ModaSalurt from "./assets/projects/moda-salurt.png"
import WatchMe from "./assets/projects/watchMe.png"
import NetworkigFeed from "./assets/projects/networking-feed.png"
import IgniteShop from "./assets/projects/ig-news.png"
import PomodoroTimer from "./assets/projects/PomodoroTimer.png"
import FinancialController from "./assets/projects/financial-controller.png"

import ProgBR from "./assets/knowledge/progbr.png";
import RocketSeat from "./assets/knowledge/Rocketseat.png";

import TypeIt from "typeit-react";

import Curriculo from "./assets/documents/Arthur_Filho.pdf";

import AOS from 'aos';
import 'aos/dist/aos.css';

import Devices from "./assets/devices.svg";

import { Tilt } from 'react-tilt';

import { 
  GithubLogo, 
  InstagramLogo, 
  TwitterLogo, 
  LinkedinLogo, 
  FileArrowDown, 
  Envelope, 
  DeviceMobile, 
  Globe, 
  Monitor, 
  Users,
  ArrowUp, } 
from "phosphor-react";

import * as Dialog from '@radix-ui/react-dialog';

import { useState, useEffect } from "react";
import { KnowledgeModal } from "./components/KnowledgeModal";
import { api } from "./components/lib/api"

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

interface repositoriesProps {
  public_repos: string,
}
const MySkills : Array<skillsProps> = [
  {
    id: 1,
    title: "Html",
    imgUrl: Html,
    experience: "2 Anos",
  },
  {
    id: 2,
    title: "Css",
    imgUrl: Css,
    experience: "2 Anos",
  },
  {
    id: 3,
    title: "JS",
    imgUrl: JS,
    experience: "2 Anos",
  },
  {
    id: 4,
    title: "React",
    imgUrl: React,
    experience: "1 Ano e meio",
  },
  {
    id: 5,
    title: "React Native",
    imgUrl: React,
    experience: "1 Ano",
  },
  {
    id: 6,
    title: "TypeScript",
    imgUrl: TypeScript,
    experience: "1 ano e meio",
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
    urlGithub: "https://github.com/ArthurFilho/coffee-Delivery-Challenger",
    repoUrl: "https://coffees-delivery.netlify.app",
  },
  {
    id: 2,
    projectName: "Moda Salurt",
    imgUrl: ModaSalurt,
    urlGithub: "https://github.com/ArthurFilho/Moda-Salurt",
    repoUrl: "https://moda-salurt.netlify.app",
  },
  {
    id: 3,
    projectName: "Auto Spo",
    imgUrl: AutoSpo,
    urlGithub: "https://github.com/ArthurFilho/AutoSpo-Project",
    repoUrl: "https://auto-spo.netlify.app",
  },
  {
    id: 4,
    projectName: "Networkig Feed",
    imgUrl: NetworkigFeed,
    urlGithub: "https://github.com/ArthurFilho/Networking-feed",
    repoUrl: "https://networking-feed.netlify.app",
  },
  {
    id: 5,
    projectName: "Github Blog",
    imgUrl: GithubBlog,
    urlGithub: "https://github.com/ArthurFilho/GITHUB-Blog",
    repoUrl: "https://github-blog-challenger.netlify.app",
  },
  {
    id: 6,
    projectName: "WatchMe",
    imgUrl: WatchMe,
    urlGithub: "https://github.com/ArthurFilho/WatchMe",
    repoUrl: "",
  },
  {
    id: 7,
    projectName: "Ignite Shop",
    imgUrl: IgniteShop,
    urlGithub: "https://github.com/ArthurFilho/Ignite-Shop",
    repoUrl: "",
  },
  {
    id: 8,
    projectName: "Pomodoro Timer",
    imgUrl: PomodoroTimer,
    urlGithub: "https://github.com/ArthurFilho/Pomodoro-Timer",
    repoUrl: "https://pomodorotimerp.netlify.app",
  },
  {
    id: 9,
    projectName: "Financial Controller",
    imgUrl: FinancialController,
    urlGithub: "https://github.com/ArthurFilho/Financial-Controller",
    repoUrl: "",
  },
]



const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
 
export function App(){

  const [ hoverProjects, setHoverProjects ] = useState(0)

  const [ hoverSkills, setHoverSkills ] = useState(0)

  const [ knowledgeSelected, setKnowledgeSelected ] = useState(true)

  const [ repositories, setRepositories ] = useState({} as repositoriesProps)

  async function RepositoriesLoad () {

    const response = await api.get('/users/arthurfilho')
    setRepositories(response.data)

  }

  useEffect(() => {
    RepositoriesLoad()
  }, [])

  AOS.init({
    duration: 500,
  });

  return(
      <ContainerAll> 

                <ContainerHeader id="home">
                  
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

                      <TypeIt 
                          options={{
                          speed: 100,
                          waitUntilVisible: true,
                        }}>
                        Olá, meu nome é <strong>Arthur</strong> 😎
                      </TypeIt>
                       
                      </h1>

                      <p>
                      Estou em busca de me tornar o melhor programador que posso ser.
                      Sou muito dedicado e comprometido em alcançar esse objetivo.
                      </p>
                    </div>

                  <img src={ArthurPicture01} />

                  </ContainerTextAndPictures>
                    
                  <ContainerSocials>
                    
                    <a href="https://github.com/ArthurFilho"> <GithubLogo size={24} /> </a> 
                    
                    <a href="https://www.linkedin.com/in/arthur-filho/"> <LinkedinLogo size={24} /> </a>
                    
                    <a href="https://www.instagram.com/4rthur.tutu/"> <InstagramLogo size={24} /> </a>
                    
                    <a href="https://twitter.com/timoteo_arthur"> <TwitterLogo size={24} /> </a>

                  </ContainerSocials>
                 
                </Presentation>

              <ContainerAboutMeBackground>
                <ContainerAboutMe data-aos="zoom-in">

                  <img src={ArthurPicture} /> 

                    <AboutMe>
                        
                        <p> 
                            Eu sou um desenvolvedor frontend capaz de criar soluções inovadoras e proporcionar uma 
                            experiência única aos usuários. <br /> Meu comprometimento e dedicação constantes me permitem 
                            aprimorar minhas habilidades e buscar sempre a excelência em cada projeto desenvolvido. 
                            Eu sempre busco ter criatividade e determinação para alcançar os objetivos propostos.
                        </p>


                        <div>
                         
                          <ul>
                            <li>
                              Nome: Arthur Filho
                            </li>

                            <li>
                              Idade: 18 
                            </li>
                          </ul>
                          <ul>
                            <li>
                              Celular: 75 98342-5163
                            </li>

                            <li>
                              Endereço: Sergipe - Aracaju
                            </li>
                          </ul>
                        </div>

                        <div> 
                          
                          <a href={Curriculo} download="Curriculo"> Currículo <FileArrowDown size={24} /> </a> 
                          
                          <a href="mailto:peraarthur2018@gmail.com"> Email <Envelope size={24} /> </a> 

                        </div>
                        
                    </AboutMe>

                </ContainerAboutMe>
              </ContainerAboutMeBackground>

                    <ContainerProjects id="projects">

                    <h1>Projetos pessoais feitos: {repositories.public_repos}</h1>

                      <Projects>
                        {MyProjects.map((repos)=> {
                          return(
                                <div data-aos="fade-right" onMouseOver={() => {setHoverProjects(repos.id)}} onMouseOut={() => {setHoverProjects(0)}} key={repos.id}>
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
                        <a href="https://github.com/ArthurFilho?tab=repositories">Ver todos os projetos no github</a>
                      </Projects>   

                    </ContainerProjects>

                    <WorkContainer>

                        <h1> Metodologias que utilizo </h1>

                        <div data-aos="flip-down"> 
                        
                          <ul>
                          
                          <Tilt options={defaultOptions}>
                            <li> 

                            <Monitor size={32} />
                            
                              <h2> Densevolvimento front-end </h2> 

                              <p> 
                                Um desenvolvimento focado na criação de aplicações e outros projetos web, 
                                com o objetivo de fornecer uma experiência agradável ao usuário e uma otimização eficiente do site. 
                              </p>
                            
                            </li>
                          </Tilt>
                          
                          <Tilt options={defaultOptions}>
                            <li>

                              <DeviceMobile size={32} />

                              <h2> Desenvolvimento Mobile </h2>
                              
                              <p>
                                Um desenvolvimento focado no mobile
                                Promovendo uma boa experiência e uma boa otimização do app.
                              </p>

                            </li>
                          </Tilt>
                            
                          <Tilt options={defaultOptions}>
                            <li>
                              
                              <Globe size={32} />

                               <h2> Desenvolvimento web </h2> 

                              <p>
                                Um desenvolvimento focado na criação de sites, páginas únicas, e-commerce e outras aplicações. 
                                Promovendo uma boa experiência e uma boa otimização do site.
                              </p>
                            
                            </li>
                          </Tilt>  
                          
                          <Tilt options={defaultOptions}>
                            <li>

                              <img src={Devices} alt="" />

                              <h2> Desenvolvimento Responsivo </h2>

                              <p> 
                                Aplicação web responsiva, disponível para todos os dispositivos móveis, tornando o site mais prático e acessível. 
                                Ou aplicações 100% mobile, como aplicativos. 
                              </p>

                            </li>
                          </Tilt>

                          <Tilt options={defaultOptions}>
                            <li>

                              <Users size={32} />

                              <h2> Experiência do usuário </h2>

                              <p>
                                Aplicações voltadas a um conjunto de elementos e fatores de um serviço, produto ou sistema que tem como objetivo 
                                promover uma boa experiência para o usuário.
                              </p>

                            </li>
                          </Tilt>
                          
                          </ul>
                        </div>

                    </WorkContainer>


                <ContainerSkills>

                  <h2>Linguagens que utilizo</h2>
              
                    <span>
                      {MySkills.map((Skills) => {
                        return(
                            <div data-aos="flip-up" onMouseOver={() => {setHoverSkills(Skills.id)}} onMouseOut={() => {setHoverSkills(0)}} key={Skills.id}>
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
                    </span>
                                  
                </ContainerSkills>

                <KnowledgeContainer data-aos="flip-down">
                            <h1> Qualificações e certificado  </h1>

                            <div>
                              <ul>
                                <li> 
                                  <button onClick={() => {setKnowledgeSelected(true)}}> 
                                    <img src={ProgBR} width={32} alt="" /> Programador Br Full stack 
                                  </button> 
                                </li>
                                
                                <li> 
                                  <button onClick={() => {setKnowledgeSelected(false)}}> 
                                    <img src={RocketSeat} width={32} alt="" /> RocketSeat Ignite 
                                  </button> 
                                </li>
                              </ul>

                                <span> 
                                    { knowledgeSelected == true ?
                                        <>
                                          <h2> Conhecimentos adquiridos no curso do ProgBr </h2>
                                          <p> - HTML, CSS, JAVASCRIPT, BOOTSTRAP, JQUERY, FIREBASE, ELECTRON, MONGODB, NODEJS, REACT. </p>
                                          <Dialog.Root>
                                            <Dialog.Trigger asChild>
                                              <ButtonAllowed> Certificado </ButtonAllowed>
                                            </Dialog.Trigger>
                                            <KnowledgeModal />
                                          </Dialog.Root>
                                        </>
                                         :
                                        <>
                                          <h2> Conhecimentos adquiridos no curso da rocketseat </h2>
                                          <p> - REACTJ.JS, REACT-NATIVE E NODE.JS. </p>
                                          <ButtonNotAllowed> Em Processo </ButtonNotAllowed>
                                          
                                        </>
                                    }
                                </span>
                            </div>
                </KnowledgeContainer>

                <Footer>
                  
                  <h1>Arthur Timóteo Bezerra Pereira Filho © 2023</h1>
                    
                    <div>
                      <a href="https://github.com/ArthurFilho"> <GithubLogo size={24} /> </a> 
                      
                      <a href="https://www.linkedin.com/in/arthur-filho/"> <LinkedinLogo size={24} /> </a>
                      
                      <a href="https://www.instagram.com/4rthur.tutu/"> <InstagramLogo size={24} /> </a>
                      
                      <a href="https://twitter.com/timoteo_arthur"> <TwitterLogo size={24} /> </a>
                    </div>

                    <h1> <a href="#home"> <ArrowUp size={32} /> Voltar para home <ArrowUp size={32} /> </a> </h1>

                </Footer>

        <Widget />
      </ContainerAll>
  )
}
