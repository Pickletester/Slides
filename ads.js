document.addEventListener('DOMContentLoaded', () => {

    // --- YOUR AD CONFIGURATION ---

    // IMPORTANT: Change this if your files are .webm, .mov, etc.
    const fileExtension = '.mp4';

    // Your list of ads and their durations in milliseconds (1000ms = 1 second)
    const adPlaylist = [
        { file: 'logo[67]', duration: 30000 }, // 30 seconds
        { file: 'SCG_Level Up Pickleball_MissionMovement_845x314', duration: 10000 }, // 10 seconds
        { file: 'Lifeline Physical Therapy_Aches-and-Pains_Sept25', duration: 10000 }, // 10 seconds
        { file: 'Kitchen Play 8', duration: 10000 }, // 10 seconds
        { file: 'Digital Billboard (15)', duration: 10000 }, // 10 seconds
        { file: 'Comcast CB_LevelUp-PickleBall_Sponsor-ENT_LED-Sign_845x314_10.25_Final', duration: 10000 }, // 10 seconds
        { file: '2025-09-23 Eber Insurance-2[75]', duration: 10000 }  // 10 seconds
    ];

    // --- END CONFIGURATION ---


    const player = document.getElementById('adPlayer');

    if (!player) {
        console.error('Video player element (#adPlayer) not found!');
        return;
    }

    function playNextAd(index) {
        // Get the ad from the playlist
        const ad = adPlaylist[index];
        
        // Set the video player's source
        const adSource = ad.file + fileExtension;
        player.src = adSource;
        
        // Load and play the new video
        player.load();
        player.play().catch(error => {
            console.warn(`Autoplay failed for ${adSource}: ${error}`);
            // This is just a safeguard; the 'muted' attribute should prevent this.
        });

        console.log(`Playing: ${ad.file} (Duration: ${ad.duration / 1000}s)`);

        // Calculate the next ad's index, looping back to 0
        const nextIndex = (index + 1) % adPlaylist.length;

        // Set a timer to switch to the next ad
        // This uses your specified duration, not the video's actual length,
        // which is better for a fixed ad schedule.
        setTimeout(() => {
            playNextAd(nextIndex);
        }, ad.duration);
    }

    // Start the loop with the first ad (index 0)
    playNextAd(0);
});
