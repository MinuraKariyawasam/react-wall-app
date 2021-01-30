import React from 'react';
import { View, Text } from 'react-native';
import { ImageBackground } from 'react-native';
import Buttons from '../Buttons/index';
import styles  from './styles'

const MainItems = (props) => {


    return (

        <View style={styles.carContainer}>

        <ImageBackground source = {require('../../assets/images/main01.jpg')} style={styles.image}/>
        
        	<View style={styles.titles}>
        
            <Text style={styles.title}>MindGrow</Text>
        
            <Text style={styles.subTitle}>Grow your mindset</Text>

          </View>

          <View style={styles.button}>

          <Buttons title="Start the Course" type = ""/>
          
          </View>
          
          <Text style={styles.footer}>Developed by Minura Kariyawasam</Text>
      
      </View>

    );
}

export default MainItems