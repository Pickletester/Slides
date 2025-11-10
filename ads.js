document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded. Starting ad script.');

    // --- YOUR AD CONFIGURATION ---
    const adPlaylist = [
        { file: 'ad1.jpg', duration: 30000 }, // 30 seconds
        { file: 'ad2.jpg', duration: 10000 }, // 10 seconds
        { file: 'ad3.png', duration: 10000 }, // 10 seconds
        { file: 'ad4.jpg', duration: 10000 }, // 10 seconds
        { file: 'ad5.png', duration: 10000 }, // 10 seconds
        { file: 'ad6.jpg', duration: 10000 }, // 10 seconds
        { file: 'ad7.jpg', duration: 10000 }  // 10 seconds
    ];
    // --- END CONFIGURATION ---

    const player = document.getElementById('adPlayer');

    if (!player) {
        console.error('Image player element (#adPlayer) not found! Script stopping.');
        return;
    } else {
        console.log('Player element found.');
    }

    function playNextAd(index) {
        // Check if the index is valid
        if (index < 0 || index >= adPlaylist.length) {
            console.error(`Invalid ad index: ${index}. Restarting loop.`);
            index = 0; // Reset to 0 to be safe
        }

        const ad = adPlaylist[index];
        
        if (!ad || !ad.file) {
            console.error(`Ad data is missing or malformed for index: ${index}. Skipping.`);
            const nextIndex = (index + 1) % adPlaylist.length;
            playNextAd(nextIndex); // Immediately try the next one
            return;
        }

        // Set the image player's source
        player.src = ad.file;
        console.log(`Displaying: ${ad.file} (Duration: ${ad.duration / 1000}s)`);

        // Add error handling for THIS image
        player.onerror = () => {
            console.error(`---!!! FAILED TO LOAD IMAGE: ${ad.file} !!!---`);
            console.error("--- Check if this filename and extension (.jpg / .png) are EXACTLY correct in GitHub. ---");
        };
        
        player.onload = () => {
             console.log(`Successfully loaded: ${ad.file}`);
        };

        // Calculate the next ad's index
        const nextIndex = (index + 1) % adPlaylist.length;

        // Set a timer to switch to the next ad
        setTimeout(() => {
            console.log(`Timer finished for ${ad.file}. Loading next ad (index ${nextIndex}).`);
            playNextAd(nextIndex);
        }, ad.duration);
    }

    // Start the loop with the first ad (index 0)
    console.log('Starting ad loop...');
    playNextAd(0);
});
