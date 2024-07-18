import React, {useContext} from 'react';
import Content from './Content';
import Lightswitch from './LightSwitch';
import { DarkModeContext } from './pages/Dashboard/DarkMode';

function Container() {
    const {darkMode} = useContext(DarkModeContext);
    return (
        <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
            <Content/>
            <Lightswitch />
        </div>
    )
}

export default Container