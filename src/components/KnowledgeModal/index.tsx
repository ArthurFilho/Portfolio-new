import { X } from 'phosphor-react'
import {
  ButtonAndTittle,
  Content,
} from './styles'

import Certificado1 from '../../assets/knowledge/DVWBATBP30HT295114.png'
import Certificado2 from '../../assets/knowledge/DVWBATBPF36EL295104.png'
import Certificado3 from '../../assets/knowledge/DVWBATBPF36FI295104.png'
import Certificado4 from '../../assets/knowledge/DVWBATBPF36RE295104.png'



 export function KnowledgeModal({ isOpen, setModalOpen, children }: any) {
  const modalStyle = {
    height: '100vh', 
  };

  const ButtonClose = {
    cursor: 'pointer',
  }

  if (isOpen) {
    return (
        <Content style={modalStyle}>

            <ButtonAndTittle>
              <h1> Certificado </h1>
              <X onClick={setModalOpen} style={ButtonClose} size={24} />
            </ButtonAndTittle>
          
          
                <img src={Certificado1} alt="" />
                <img src={Certificado2} alt="" />
                <img src={Certificado3} alt="" />
                <img src={Certificado4} alt="" />
          
        </Content>
    )
  }

  return null
}