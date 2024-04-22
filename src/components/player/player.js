export default class AudioPlayer {
  constructor(selector = '.player', audio = []) {
    this.playerElem = document.querySelector(selector);
    this.audio = audio;
    this.currentAudio = null;
    this.createPlayerElements();
    this.audioContext = null;
  }

  createVisualiser() {
    this.audioContext = new AudioContext();
    this.src = this.audioContext.createMediaElementSource(this.audioElem);
    this.src.connect(analyser);
    analyser.connect(this.audioContext.destination);
  }

  createPlayerElements() {
    this.audioElem = document.createElement('audio');
    const playListElem = document.createElement('div');
    playListElem.classList.add('playlist');
    const playElem = document.createElement('button');
    playElem.classList.add('play');
    playElem.innerHTML = '<i class="fa fa-play"></i>';

    this.playerElem.appendChild(this.audioElem);
    this.playerElem.appendChild(playListElem);

    this.createPlayListElements(playListElem);
  }

  createPlayListElements(playListElem) {
    this.audio.forEach((audio) => {
      const audioItem = document.createElement('a');
      audioItem.href = audio.url;
      this.setEventListener(audioItem);
      playListElem.appendChild(audioItem);
    });
  }

  setEventListener(audioItem) {
    this.audioElem.addEventListener('timeupdate', () => {
      let audioProgress = Math.floor((this.audioElem.currentTime / this.audioElem.duration) * 100);
      const circular = document.querySelector('.progress');
      circular.value = audioProgress;
    });

    this.playerElem.addEventListener('click', (e) => {
      e.preventDefault();

      const isCurrentAudio =
        audioItem.getAttribute('href') == (this.currentAudio && this.currentAudio.getAttribute('href'));

      if (isCurrentAudio && !this.audioElem.paused) {
        this.setPlay(false);
        this.audioElem.pause();
      } else if (isCurrentAudio && this.audioElem.paused) {
        this.setPlay(true);
        this.audioElem.play();
      } else {
        if (this.currentAudio) {
          this.setPlay(false);
        }
        this.currentAudio = audioItem;
        this.setPlay(true);
        this.audioElem.src = this.currentAudio.getAttribute('href');
        this.audioElem.play();
      }
    });
  }

  setPlay(state) {
    if (state == true) {
      this.playerElem.classList.add('is-playing');
    } else {
      this.playerElem.classList.remove('is-playing');
    }
  }
}
