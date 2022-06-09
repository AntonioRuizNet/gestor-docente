import React from 'react';
//import {StyledModal} from './styled'

export const TabsPanels = ({titles, contents}) => {
  return (
    <>
        {titles.map(title=> {return <div>title</div>;})}
        <hr/>
        {contents.map(content=> {return <div>content</div>;})}
    </>
  )
}