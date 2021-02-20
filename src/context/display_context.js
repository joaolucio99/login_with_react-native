import React , { createContext } from 'react'
import Styles_mob from '../styles/mobile/__all__';
import Styles_tab from '../styles/tablet/__all__';

const Device = require('react-native-device-detection');
const DisplayContext = createContext({});

export const DisplayProvider = props => {

    let tablet = Device.isTablet;
    let Styles;
        
    tablet ? Styles = Styles_tab : Styles = Styles_mob

    return (
        <DisplayContext.Provider value={{
            display: {
                Styles,
                tablet
            }
        }}>
            {props.children}
        </DisplayContext.Provider>
    )
}

export default DisplayContext