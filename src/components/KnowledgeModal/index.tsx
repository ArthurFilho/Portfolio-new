import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  CloseButton,
  Content,
  Overlay,
  TittleContainer,
} from './styles'

import Certificado1 from '../../assets/knowledge/DVWBATBP30HT295114.png'
import Certificado2 from '../../assets/knowledge/DVWBATBPF36EL295104.png'
import Certificado3 from '../../assets/knowledge/DVWBATBPF36FI295104.png'
import Certificado4 from '../../assets/knowledge/DVWBATBPF36RE295104.png'

 export function KnowledgeModal() {
  return (
    <Dialog.Portal>
      <Overlay>

      <Content>

            <TittleContainer> 
                <CloseButton>
                <X size={24} />
                </CloseButton>
                <Dialog.Title> Certificado </Dialog.Title>
            </TittleContainer>

                <img src={Certificado1} alt="" />
                <img src={Certificado2} alt="" />
                <img src={Certificado3} alt="" />
                <img src={Certificado4} alt="" />

      </Content>

      </Overlay>
    </Dialog.Portal>
  )
}
