const songName = document.getElementById('song-name');
const bandName = document.getElementById('band-name');
const cover = document.getElementById('cover');
const song = document.getElementById('audio');
const play =document.getElementById('play');
const next =document.getElementById('next');
const previous =document.getElementById('previous');

const viuvaNegra ={
    songName : 'Elastic Heart-Viuva Negra',
    artist : 'Sia',
    file : 'Elastic_Heart-Viuva_Negra'
};

const sambaCriolo ={
    songName : 'Vida de Negro',
    artist : 'Dorival Caimmi',
    file : 'vidaDeNegro'
};

const iceBaby ={
    songName : 'Ice Ice Baby',
    artist : 'Vanilla Ice',
    file : 'iceIceBaby'
};


let isPlaying = false;

const playlist = [ viuvaNegra, sambaCriolo, iceBaby ];
let index = 0;

function playSong(){
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong(){
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    
    song.pause();
    isPlaying = false;
}

    function playPauseDecider(){
        if (isPlaying === true){
            pauseSong();
        }
        else {
            playSong();
        }
    }

    function initilizeSong(){
        cover.src = `images/${playlist[index].file}.webp`;
        song.src = `songs/${playlist[index].file}.mp3`; 
        songName.innerText = playlist[index].songName;
        bandName.innerText = playlist[index].artist;
    }

    function previousSong(){
        if (index === 0){
            index = playlist.length-1;
        }
        else{
            index -= 1;
        }
        initilizeSong();
        playSong();
        
    }

    function nextSong(){
        if (index === playlist.length-1){
            index = playlist.length-1;
        }
        else{
            index += 1;
        }
        initilizeSong();
        playSong();
        
    }

    initilizeSong();

play.addEventListener('click', playPauseDecider);
previous.addEventListener('click', previousSong) ;
next.addEventListener('click', nextSong);                                                                                                               