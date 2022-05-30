import React from 'react'
import { ContainerBlock, Overlay, HeaderPanelBlock, PanelBlock } from "./styled";
import { MdClose } from "react-icons/md";

export default function ModalPanel({info, closePanel}) {
    return (
        <>
        <Overlay>
        <ContainerBlock>
                <PanelBlock>
                <HeaderPanelBlock>
                    <div onClick={() => closePanel(false)}>{<MdClose/>}</div>
                </HeaderPanelBlock>
                {info}
                </PanelBlock>
        </ContainerBlock>
        </Overlay>
        </>
    )
}