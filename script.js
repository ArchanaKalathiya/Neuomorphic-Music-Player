document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const albumCover = document.getElementById('albumCover');
    const playPauseImg = document.getElementById('playPauseImg');
    const songNameDisplay = document.getElementById('songName');
    let songs = [
        { src: 'assets/SampleAudio1.mp3', name: 'Sample 1', cover: 'assets/music.png' },
        { src: 'assets/SampleAudio2.mp3', name: 'Sample 2', cover: 'assets/music.png' },
        { src: 'assets/SampleAudio3.mp3', name: 'Sample 3', cover: 'assets/music.png' },
        { src: 'assets/SampleAudio4.mp3', name: 'Sample 4', cover: 'assets/music.png' },
        { src: 'assets/SampleAudio5.mp3', name: 'Sample 5', cover: 'assets/music.png' },
    ];
    let currentSongIndex = 0;
    function loadSong(songIndex) {
        
        const song = songs[songIndex];
        audioPlayer.src = song.src;
        albumCover.src = song.cover;
        songNameDisplay.textContent = song.name;
        playPauseImg.src = 'assets/start.png';
    }
    function playNextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex); 
        audioPlayer.play();
    }

    function playPreviousSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex); 
        audioPlayer.play();
    }

    document.getElementById('next').addEventListener('click', playNextSong);
    document.getElementById('prev').addEventListener('click', playPreviousSong);

    audioPlayer.addEventListener('play', function() {
        albumCover.classList.add('rotating');
        playPauseImg.src = 'assets/pause.png';
    });

    audioPlayer.addEventListener('pause', function() {
        albumCover.classList.remove('rotating');
        playPauseImg.src = 'assets/start.png';
    });

    audioPlayer.addEventListener('ended', function() {
        albumCover.classList.remove('rotating');
        playPauseImg.src = 'assets/start.png'; 
    });

    document.getElementById('playPause').addEventListener('click', function() {
        if (audioPlayer.paused || audioPlayer.ended) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }
    });

    loadSong(currentSongIndex);
});
