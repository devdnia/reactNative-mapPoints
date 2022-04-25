import React from "react"
import { StyleSheet, Dimensions, Button, View } from "react-native"


export default ({ onPressLeft, textLeft, togglePointsFilter }) => {
    return (
        <View style={styles.panel}>
            <Button title={ textLeft }  onPress={ onPressLeft } />
            <Button title="Mostrar/Ocultar" onPress={ togglePointsFilter } />
        </View>
    )
}

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})