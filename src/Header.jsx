import {
	selectIsConnectedToRoom,
	useHMSActions,
	useHMSStore
} from "@100mslive/react-sdk";
import React, { useState } from "react";

function Header() {
	const isConnected = useHMSStore(selectIsConnectedToRoom);
	const hmsActions = useHMSActions();
	const [customActionToggle, setCustomActionToggle] = useState(false);
	const [customActionToggle2, setCustomActionToggle2] = useState(false);

	const handleCustomAction = () => {
		if (customActionToggle) {
			// Custom action logic 1
			console.log(hmsActions.setScreenShareEnabled(false));
		} else {
			// Custom action logic 2
			console.log(hmsActions.setScreenShareEnabled(true));
		}

		// Toggle the state
		setCustomActionToggle(!customActionToggle);
	};
	const params = {
        meetingURL: "https://anujtest.app.100ms.live/preview/aiq-gvg-juq?skip_preview=true",
        rtmpURLs: [],
        record: true
    };
	const handleCustomAction2 = () => {
		if (customActionToggle2) {
			// Custom action logic 1
			console.log(hmsActions.stopRTMPAndRecording());
		} else {
			// Custom action logic 2
			console.log(hmsActions.startRTMPOrRecording(params));
		}

		// Toggle the state
		setCustomActionToggle2(!customActionToggle2);
	};


	return (
		<header>
			<img
				className="logo"
				src="https://www.100ms.live/assets/logo.svg"
				alt="logo"
			/>
			{isConnected && (
				<div>
					<button
						id="leave-btn"
						className="btn-danger"
						onClick={() => hmsActions.leave()}
					>
						Leave Room
					</button>
					<button
						id="custom-btn"
						className="btn-primary"
						onClick={handleCustomAction}
					>
						{customActionToggle ? "Stop Screenshare" : "Start Screenshare"}
					</button>
					<button
						id="custom-btn2"
						className="btn-primary"
						onClick={handleCustomAction2}
					>
						{customActionToggle2 ? "Stop Recording" : "Start Recording"}
					</button>
				</div>
			)}
		</header>
	);
}



export default Header;
  