import React, {useState} from 'react';
import {StyledTitles, StyledContents, StyledSeparator} from './styled'

export const TabsPanels = ({titles, contents}) => {
  //let titles = ['Tab 1', 'Tab 2', 'Tab 3'];
  //let contents = ['Content 1', 'Content 2', 'Content 3'];

  const[selectedTab, setSelectedTab] = useState(0);

  return (
    <>
    <div style={{flexDirection: 'row'}}>
        {titles.map((title, index)=> {
          let activeMenu = index===selectedTab? {fontWeight: 'bold'} : {};
          return <StyledTitles key={'title_'+index} id={'title_'+index} onClick={()=> setSelectedTab(index)} style={activeMenu}>{title}</StyledTitles>;
        })}
        </div>
        <div style={{flexDirection: 'row'}}>
        <StyledSeparator/>
        {contents.map((content, index)=> {
          return selectedTab===index && <StyledContents key={'content_'+index} id={'content_'+index}>{content}</StyledContents>;
        })}
        </div>
    </>
  )
}