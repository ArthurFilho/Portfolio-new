import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 800px;
    height: 90%;
    border: 4px solid #AB222E;
    border-radius: 6px;
    background: rgb(39 39 42);
    color: #f4f4f5;
    padding-top: 75rem;
    overflow: scroll;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  img {
        width: 600px;
        margin-top: 30px;   
        object-fit: cover;
    }
`

export const CloseButton = styled(Dialog.DialogClose)`
  float: right;
  background: transparent;
  border: 0;
  line-height: 0;
  cursor: pointer;
  color: #f4f4f5;
`

export const TittleContainer = styled.div`
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
`

export const ImageTestBug = styled.img`
`