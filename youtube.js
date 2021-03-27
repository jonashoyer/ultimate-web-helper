let video = document.querySelector('.html5-video-container video');

const getVideo = () => {
  return video || (video = document.querySelector('.html5-video-container video'));
}

const setPlaybackRate = rate => {
  video.playbackRate = rate;

  const tooltipEl = document.querySelector('.ytp-tooltip-text');
  if (tooltipEl) tooltipEl.innerText = `${video.playbackRate.toFixed(2)}x`;
}

window.addEventListener("onwheel" in document ? "wheel" : "mousewheel", e => {
  if (!e.target?.classList.contains('ytp-play-button')) return;

  const video = getVideo();
  if (!video) return;

  e.preventDefault();
  
  const incr = 0 < e.wheelDeltaY;
  setPlaybackRate(video.playbackRate + (incr ? .05 : -.05));

  return false;
}, {
  passive: false
})

window.addEventListener('mousedown', e => {
  if (e.which != 2) return;
  if (!e.target?.classList.contains('ytp-play-button')) return;
  e.preventDefault();
  setPlaybackRate(1);
  return false;
})