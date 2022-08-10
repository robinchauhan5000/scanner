import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Camera } from 'react-native-vision-camera'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #000;
  opacity: 0.5;
`

export const CameraContainer = styled.View`
  flex: 1;
  position: relative;
`
export const CameraView = styled(Camera)`
  flex: 1;
`

export const Title = styled.Text`
  color: #ffffff;
  position: absolute;
  z-index: 1;
  align-self: center;
  margin-top: ${hp(5)}px;

  font-size: ${hp(2.5)}px;
`

export const SubTitle = styled.Text`
  color: #ffffff;
  position: absolute;
  z-index: 1;
  align-self: center;
  margin-top: ${hp(10)}px;

  font-size: ${hp(2)}px;
  text-align: center;
  width: ${wp(80)}px;
`

export const Icon = styled.TouchableOpacity`
  position: absolute;
  bottom: ${hp(5)}px;
  align-self: center;
`
