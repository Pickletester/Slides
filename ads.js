document.addEventListener('DOMContentLoaded', () => {

    // --- YOUR AD CONFIGURATION ---

    // Your list of ads and their durations in milliseconds (1000ms = 1 second)
    const adPlaylist = [
        { file: 'logo[67].jpg', duration: 30000 }, // 30 seconds
        { file: 'SCG_Level Up Pickleball_MissionMovement_845x314.jpg', duration: 10000 }, // 10 seconds
        { file: 'Lifeline Physical Therapy_Aches-and-Pains_Sept25.png', duration: 10000 }, // 10 seconds
        { file: 'Kitchen Play 8.jpg', duration: 10000 }, // 10 seconds
        { file: 'Digital Billboard (15).png', duration: 10000 }, // 10 seconds
        { file: 'Comcast CB_LevelUp-PickleBall_Sponsor-ENT_LED-Sign_845x314_10.25_Final.jpg', duration: 10000 }, // 10 seconds
        { file: '2025-09-23 Eber Insurance-2[75].jpg', duration: 10000 }  // 10 seconds
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
