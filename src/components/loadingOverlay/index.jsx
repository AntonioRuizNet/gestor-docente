import React from 'react'
import { Spinner } from 'react-bootstrap'
import { ContainerBlock, Overlay, Title } from "./styled";


export default function LoadingOverlay() {
    return (
        <Overlay>
            <ContainerBlock>
                <Spinner animation="border" variant="light" />
                <Title>Cargando...</Title>
            </ContainerBlock>
        </Overlay>
    )
}