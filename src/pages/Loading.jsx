import React from 'react'
import { LoadingContainer } from '../style'
import RingLoader  from 'react-spinners/RingLoader'


const Loading = () => {
  return (
    <LoadingContainer>
        <RingLoader color="hsla(0, 0%, 100%, 1)" /><p>    Buscando Detalhes do Filme...</p>
    </LoadingContainer>
  )
}

export default Loading