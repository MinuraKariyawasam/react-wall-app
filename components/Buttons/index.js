import React from 'react';
import { TouchableOpacity , Text} from 'react-native';
import styles  from './styles'

const Buttons = ({ onPress, title, type }) => {

    //const backgroundColor ;
    //const textColor;

    if(type === 'primary'){
        backgroundColor = 'white';
        color = 'black';
    }else if(type === 'secondary'){
        backgroundColor = 'black';
        color = 'white';
    }


    return (


        <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, {backgroundColor: backgroundColor}]}>
          
        <Text style={[styles.appButtonText, {color: color}]}>{title}</Text>
      
        </TouchableOpacity>
    )
}

export default Buttons;