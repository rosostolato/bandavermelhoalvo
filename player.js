$(document).ready(function () {
    var playlist = [
        { name: "Minha Religião É Cristo", mp3: "Songs/01 - Minha Religião É Cristo.mp3" },
        { name: "Doce Ilusão", mp3: "Songs/02 - Doce Ilusão.mp3" },
        { name: "Mare Oblivio", mp3: "Songs/03 - Mare Oblivio.mp3" },
        { name: "Própria Prisão", mp3: "Songs/04 - Própria Prisão.mp3" },
        { name: "Perdido (Faixa Bônus)", mp3: "Songs/05 - Perdido (Faixa Bônus).mp3" }
    ];

    var numTracks = playlist.length;
    var currentTrack = Math.floor(Math.random() * numTracks);

    var player = $(".player").jPlayer({
        ready: function () {
            // configura a faixa inicial do jPlayer
            player.jPlayer("setMedia", playlist[currentTrack])

            // reproduzir a faixa atual. Se não quiser que o player comece a tocar automaticamente
            // retirar esta linha
            player.playCurrent();

        },
        ended: function () {
            // quando terminar de tocar uma música, ir para a próxima
            player.playNext();

        },
        play: function () {
            // quando começar a tocar, escrever o nome da faixa sendo executada
            $('.player-current-track').text(playlist[currentTrack].name);

        },
        swfPath: 'Script',
        supplied: "mp3",
        cssSelectorAncestor: "",
        cssSelector: {
            play: '.player-play',
            pause: ".player-pause",
            stop: ".player-stop",
            seekBar: ".player-timeline",
            playBar: ".player-timeline-control"
        },
        size: {
            width: "1px",
            height: "1px"
        }
    });

    player.playCurrent = function () {
        player.jPlayer("setMedia", playlist[currentTrack]).jPlayer("play");
    }

    player.playNext = function () {
        currentTrack = (currentTrack == (numTracks - 1)) ? 0 : ++currentTrack;
        player.playCurrent();
    };

    player.playPrevious = function () {
        currentTrack = (currentTrack == 0) ? numTracks - 1 : --currentTrack;
        player.playCurrent();
    };

    $('.player-next').click(function () {
        player.playNext();

    });

    $('.player-prev').click(function () {
        player.playPrevious();
    });
});