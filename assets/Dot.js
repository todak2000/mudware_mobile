import React from 'react'
import { StyleSheet, View} from 'react-native'
import Svg, { Path} from 'react-native-svg';

 function Dot(props){
     const {color} = props
    return (

        <View >
            <Svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M0.99998 0.833374H6.33331C7.20398 0.833374 7.94531 1.39004 8.21998 2.16671H11.6666C12.1768 2.16668 12.6677 2.36159 13.0388 2.71156C13.41 3.06154 13.6334 3.54011 13.6633 4.04937L13.6666 4.16671V9.50004C13.6667 10.0102 13.4718 10.501 13.1218 10.8722C12.7718 11.2434 12.2932 11.4668 11.784 11.4967L11.6666 11.5H8.99998C8.58635 11.5 8.18289 11.3718 7.84514 11.133C7.50739 10.8942 7.25195 10.5567 7.11398 10.1667H1.66665V13.5C1.66665 13.6769 1.59641 13.8464 1.47138 13.9714C1.34636 14.0965 1.17679 14.1667 0.99998 14.1667C0.823169 14.1667 0.653599 14.0965 0.528575 13.9714C0.403551 13.8464 0.333313 13.6769 0.333313 13.5V1.50004C0.333313 1.32323 0.403551 1.15366 0.528575 1.02864C0.653599 0.903612 0.823169 0.833374 0.99998 0.833374ZM8.33331 3.50004V9.50004C8.33333 9.66333 8.39328 9.82093 8.50179 9.94296C8.6103 10.065 8.75981 10.1429 8.92198 10.162L8.99998 10.1667H11.6666C11.8299 10.1667 11.9875 10.1067 12.1096 9.99823C12.2316 9.88972 12.3095 9.74021 12.3286 9.57804L12.3333 9.50004V4.16671C12.3333 4.00342 12.2733 3.84582 12.1648 3.72379C12.0563 3.60177 11.9068 3.52381 11.7446 3.50471L11.6666 3.50004H8.33331ZM6.33331 2.16671H1.66665V8.83337H6.99998V2.83337C6.99996 2.67009 6.94001 2.51248 6.8315 2.39046C6.723 2.26844 6.57348 2.19048 6.41131 2.17137L6.33331 2.16671Z" fill={color}/>
            </Svg>
        </View>
        
    )
}
export default Dot