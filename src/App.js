import React, { useEffect } from "react";
import "./styles.css";
import JoinForm from "./JoinForm";
import Header from "./Header";
import Footer from "./Footer";
import Conference from "./Conference";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from "@100mslive/react-sdk";
import DeviceSettings from "./DeviceSettings";

export default function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom); // Retrieve the current connection status from the HMS store
  const hmsActions = useHMSActions(); // Get the HMS actions for interacting with the SDK

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave(); // When the component is about to unload (e.g., user closes the page), leave the room if currently connected
      }
    };
  }, [hmsActions, isConnected]);

  const handleDeviceSelection = (deviceId, deviceType) => {
    // Handle device selection logic here
    // You can implement the logic to update the selected device based on the user's selection
  };

  return (
    <div className="App">
      <Header /> // Render the Header component

      {/* Conditionally render either the Conference and Footer components if connected, or the JoinForm component if not connected */}
      {isConnected ? (
        <>
          <Conference /> // Render the Conference component
          <Footer /> // Render the Footer component
        </>
      ) : (
        <JoinForm /> // Render the JoinForm component
      )}

      <DeviceSettings handleDeviceSelection={handleDeviceSelection} /> // Render the DeviceSettings component and pass the handleDeviceSelection function as a prop
    </div>
  );
}
