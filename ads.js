document.addEventListener('DOMContentLoaded', () => {

    // --- YOUR AD CONFIGURATION ---
    // This list uses the new, simple filenames.
    // Make sure your files on GitHub are renamed to match!

    const adPlaylist = [
        // Original: logo[67].jpg
        { file: 'ad1.jpg', duration: 30000 }, // 30 seconds
        
        // Original: SCG_Level Up Pickleball_MissionMovement_845x314.jpg
        { file: 'ad2.jpg', duration: 10000 }, // 10 seconds
        
        // Original: Lifeline Physical Therapy_Aches-and-Pains_Sept25.png
        { file: 'ad3.png', duration: 10000 }, // 10 seconds
        
        // Original: Kitchen Play 8.jpg
        { file: 'ad4.jpg', duration: 10000 }, // 10 seconds
        
        // Original: Digital Billboard (15).png
        { file: 'ad5.png', duration: 10000 }, // 10 seconds
        
        // Original: Comcast CB_LevelUp-PickleBall...Final.jpg
        { file: 'ad6.jpg', duration: 10000 }, // 10 seconds
        
        // Original: 2025-09-23 Eber Insurance-2[75].jpg
        { file: 'ad7.jpg', duration: 10000 }  // 10 seconds
    ];

    // --- END CONFIGURATION ---


    const player = document.getElementById('adPlayer');

    if (!player) {
        console.error('Image player element (#adPlayer) not found!');
        return;
    }

    function playNextAd(index) {
        // Get the ad from the playlist
        const ad = adPlaylist[index];
        
        // Set the image player's source
        player.src = ad.file;
        
        console.log(`Displaying: ${ad.file} (Duration: ${ad.duration / 1000}s)`);

        // Calculate the next ad's index, looping back to 0
        const nextIndex = (index + 1) % adPlaylist.length;

        // Set a timer to switch to the next ad
        setTimeout(() => {
            playNextAd(nextIndex);
        }, ad.duration);
    }

    // Start the loop with the first ad (index 0)
    playNextAd(0);
});
