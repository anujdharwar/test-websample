import React from "react";
import {
  useDevices,
  DeviceType
} from "@100mslive/react-sdk";

const DeviceSettings = ({ handleDeviceSelection }) => {
  const { allDevices, selectedDeviceIDs, updateDevice } = useDevices();

  const handleDeviceChange = (deviceId, deviceType) => {
    updateDevice({
      deviceId,
      deviceType
    });
  };

  if (!allDevices || Object.keys(allDevices).length === 0) {
    return null; // Render nothing if allDevices is undefined or empty
  }

  return (
    <div>
      <h3>Device Settings</h3>
      <div>
        <h4>Video Input:</h4>
        <select
          value={selectedDeviceIDs[DeviceType.videoInput]}
          onChange={(e) =>
            handleDeviceChange(e.target.value, DeviceType.videoInput)
          }
        >
          {allDevices[DeviceType.videoInput]?.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h4>Audio Input:</h4>
        <select
          value={selectedDeviceIDs[DeviceType.audioInput]}
          onChange={(e) =>
            handleDeviceChange(e.target.value, DeviceType.audioInput)
          }
        >
          {allDevices[DeviceType.audioInput]?.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h4>Audio Output:</h4>
        <select
          value={selectedDeviceIDs[DeviceType.audioOutput]}
          onChange={(e) =>
            handleDeviceChange(e.target.value, DeviceType.audioOutput)
          }
        >
          {allDevices[DeviceType.audioOutput]?.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DeviceSettings;
