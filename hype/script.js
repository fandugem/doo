window.onload = function() {
    const video = document.getElementById('background-video');

    // Example of changing video source
    video.src = "path-to-another-video.mp4";
    video.load();  // Reload the video to apply the change
};

document.body.addEventListener("click", function() {
    alert("You clicked the page!");
});
