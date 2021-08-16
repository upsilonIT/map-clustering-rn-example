import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Pressable, View } from 'react-native'
import { StyleSheet } from 'react-native'

const defaultProps = {
  onZoomIn: () => {
    console.log('zoomIn')
  },
  onZoomOut: () => {
    console.log('zoomOut')
  },
}

type MapZoomPanelProps = {
  onZoomIn: () => void
  onZoomOut: () => void
} & typeof defaultProps

const MapZoomPanel = (props: MapZoomPanelProps): JSX.Element => {
  const panelProps = { ...defaultProps, ...props }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={panelProps.onZoomIn}>
        <AntDesign color="#000000" name="plus" size={24} />
      </Pressable>
      <Pressable style={styles.button} onPress={panelProps.onZoomOut}>
        <AntDesign color="#000000" name="minus" size={24} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignContent: 'stretch',
    position: 'absolute',
    right: 15,
    width: 50,
    top: '25%',
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 0.5,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
})

export default MapZoomPanel
