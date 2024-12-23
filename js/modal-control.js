document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to all modals
    document.querySelectorAll('.modal').forEach(modal => {
        // When the modal is shown
        modal.addEventListener('shown.bs.modal', function () {
            const video = modal.querySelector('video');
            if (video) {
                video.play(); // Play the video
            }
        });

        // When the modal is hidden
        modal.addEventListener('hidden.bs.modal', function () {
            const video = modal.querySelector('video');
            if (video) {
                video.pause(); // Pause the video
                video.currentTime = 0; // Reset the video
            }
        });
    });
});
