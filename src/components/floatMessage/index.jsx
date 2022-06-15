import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {StyledDiv} from './styled';
//Actions
import allActions from "./../../actions";

export const FloatMessage = () => {
    const floatMessage = useSelector((state) => state.globalReducer.floatMessage);
    const dispatch = useDispatch();

    console.log('FloatMessage')
    console.log(floatMessage)
    

    useEffect(() => {
        setTimeout(function() { 
            dispatch(allActions.globalActions.setFloatMessage({text: "", state: 0, activate: false})); 
        }, 5000);
      }, [floatMessage.activate]);

    return (<>
            {floatMessage.activate && <StyledDiv>{floatMessage.text}</StyledDiv>}
        </>
    )
}
