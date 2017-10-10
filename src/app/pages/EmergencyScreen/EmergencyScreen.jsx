import React from 'react';
import ButtonAction from '../../../framework/util/ButtonAction';
import WithButtonConfigs from '../../../framework/containers/WithButtonConfigs';
import './emergency_screen.css';

export const EmergencyScreenComponent = () => {
  return (
    <div id='emergency-screen-page'>
      <div id='emergency-question'>
        <h2 className='emergency-header'>Send</h2>
        <h1 className='emergency-header-large'>EMERGENCY</h1>
        <h2 className='emergency-header'>beacon?</h2>
      </div>
      <div className='yes-button'>
        <span>Tap to confirm</span>
        <div className='emergency-confirmation' alt='' />
      </div>
      <div className='no-button'>
        <span>&laquo;press left to Cancel</span>
      </div>
    </div>
  );
};

// This code can be used to retrieve location when the website
// moves to HTTPS
/*
function showPosition(position) {
  console.log('Latitude: ', position.coords.latitude);
  console.log('Longitude: ', position.coords.longitude);
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}
*/
export const logAndNavigateToConfirmation = () => {
  ButtonAction.goToPage('/emergency-confirmation');
  console.log('Latitude: ', -33.8629344);
  console.log('Longitude: ', 151.20858810000004);
  console.log('TimeStamp: ', new Date(Date.now()).toLocaleString());
};

export const EmergencyScreenButtons = {
  LEFT: () => ButtonAction.goToPage('/'),
  SCREEN: () => logAndNavigateToConfirmation(),
};

export default WithButtonConfigs(EmergencyScreenComponent, EmergencyScreenButtons);
