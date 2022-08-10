import { useIsFocused } from '@react-navigation/native'
import axios from 'axios'
import React, { FC, useEffect, useRef } from 'react'
import { NativeModules, TouchableOpacity } from 'react-native'
import { Alert } from 'react-native'
import BarcodeMask from 'react-native-barcode-mask'
import RNFS from 'react-native-fs'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

import {
  CameraContainer,
  CameraView,
  Container,
  Icon,
  SubTitle,
  Title,
} from './components/scan_add'
import ScanIcon from './components/ScanIcon'

export const ScanAndAddScreen = () => {
  const devices = useCameraDevices()
  const cameraRef = useRef<Camera>(null)
  const isFocused = useIsFocused()
  const [hasPermission, setHasPermission] = React.useState<boolean>(false)

  // const [showVerifyAadhar, setShowVerifyAadhar] = useState<IAadharProps>()
  // const [manualEntryFormActive, setManualEntryFormActive] =
  //   useState<boolean>(false)

  const device = devices.back

  const onPhotoCaptured = async (ref: any) => {
    const photo = await ref.current.takePhoto({
      flash: 'off',
    })

    console.log('photo', photo)
    const base64image = await RNFS.readFile(photo.path, 'base64')
    console.log('base64image', base64image)
    // const payload = {
    //   docType:
    //     selectedDocument === 'aadharCard'
    //       ? 'ADHAR'
    //       : selectedDocument === 'drivingLicence'
    //       ? 'DRVLC'
    //       : 'PANCR',
    //   frontSideDocument: base64image,
    //   backSideDocument: 'string',
    // }

    const payload = {
      docType: 'ADHAR',
      frontSideDocument: base64image,
      backSideDocument: 'string',
    }

    try {
      const response: any = await axios.post(
        'https://asli-documents-service.dev.in.affinidi.io/api/v1/documents/extract-document',
        payload
      )

      console.log('response', response)
    } catch (error) {
      console.log('error', error)
    }

    // Alert.alert('here', JSON.stringify(response?.data))
  }

  console.log('printing from package')
  useEffect(() => {
    ;(async () => {
      const cameraPermission = await Camera.getCameraPermissionStatus()
      if (cameraPermission !== 'authorized') {
        const status = await Camera.requestCameraPermission()
        setHasPermission(status === 'authorized')
      } else {
        setHasPermission(cameraPermission === 'authorized')
      }
    })()
  }, [])

  return (
    <Container>
      {!!device && (
        <CameraContainer>
          <Title>Scan front side</Title>
          <SubTitle>
            Place ID in front of your phone to scan automatically
          </SubTitle>
          <CameraView
            ref={cameraRef}
            photo={true}
            device={device}
            isActive={isFocused}
          />

          <BarcodeMask
            outerMaskOpacity={1}
            edgeColor='#FFFFFF'
            height={hp(30)}
            width={wp(90)}
            showAnimatedLine={true}
          />
        </CameraContainer>
      )}
      <TouchableOpacity
        onPress={() => {
          console.log('pic clicked')
          onPhotoCaptured(cameraRef)
        }}
      >
        <ScanIcon />
      </TouchableOpacity>
    </Container>
  )
}
