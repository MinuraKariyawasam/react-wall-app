import React from 'react';
import {Text, View } from 'react-native';


const CourseContent = (props) => {
    return (

        <View style={course.container}>
            
            <ImageBackground source = {require('../../assets/images/main01.jpg')} style={styles.image}/>
        
        	<View style={styles.titles}>
        
            <Text style={styles.title}>Course Content</Text>
        
            <Text style={styles.subTitle}>Follow the correct order</Text>

          </View>

        </View>

    )
}

export default CourseContent