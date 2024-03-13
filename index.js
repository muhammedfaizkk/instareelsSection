

// var videoSources = [
//     './assets/video/video1.mp4',
//     './assets/video/video2.mp4',
//     './assets/video/video3.mp4',
//     './assets/video/video4.mp4'
//   ];

//   // Reference to the video container
//   var videoContainer = document.getElementById('videoContainer');

//   // Loop through the video sources and create video elements dynamically
//   videoSources.forEach(function(source) {
//     var videoElement = document.createElement('video');
//     videoElement.controls = true;
//     videoElement.loop = true;
//     videoElement.className = 'w-100';

//     var sourceElement = document.createElement('source');
//     sourceElement.src = source;
//     sourceElement.type = 'video/mp4';

//     videoElement.appendChild(sourceElement);
//     videoContainer.appendChild(videoElement);
//   });