import React from 'react';
import Toast from 'react-native-simple-toast';

export function ToastMessage(message,place) {
    let data='';
    data = place === 'top'?  Toast.TOP :  place === 'center' ? Toast.CENTER : Toast.BOTTOM
    return (Toast.showWithGravity(message, Toast.SHORT, data))
}
