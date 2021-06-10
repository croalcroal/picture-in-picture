const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select a media stream, pass the video element, then play
async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		}
	} catch (error) {
		console.log('Whoopsie, error here', error);
	}
}

button.addEventListener('click', async () => {
	// Disable button
	button.disabled = true;
	// Start picture in picture
	await videoElement.requestPictureInPicture();
	// Reset button
	button.disabled = false;
});


// On load
selectMediaStream();