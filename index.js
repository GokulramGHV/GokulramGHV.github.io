let darkMode = false;
document.getElementById('sun').style.display = 'none';
function toggle() {
  darkMode = !darkMode;
  const video_dark = document.getElementById('back_video_dark');
  const video_light = document.getElementById('back_video_light');
  if (darkMode) {
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'block';
    document.getElementsByTagName('HTML')[0].classList.add('dark');
    if (video_dark) video_dark.classList.remove('opacity-0');
    if (video_light) video_light.classList.add('opacity-0');
  } else {
    document.getElementById('moon').style.display = 'block';
    document.getElementById('sun').style.display = 'none';
    document.getElementsByTagName('HTML')[0].classList.remove('dark');
    if (video_dark) video_dark.classList.add('opacity-0');
    if (video_light) video_light.classList.remove('opacity-0');
  }
}

function createVideoElement(url, id, hidden) {
  const video = document.createElement('video');
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.style.height = '100vh';
  video.style.width = '100%';
  video.style.objectFit = 'cover';
  if (hidden)
    video.classList.add('fixed', 'top-0', 'left-0', 'z-0', 'opacity-0');
  else video.classList.add('fixed', 'top-0', 'left-0', 'z-0');
  video.preload = 'auto';
  video.src = url;
  // 'https://res.cloudinary.com/di4swkq4j/video/upload/v1679815224/light_gk1exr.mp4';
  video.id = id;
  document.getElementsByTagName('body')[0].appendChild(video);
}

window.addEventListener('load', () => {
  if (window.innerWidth < 600) {
    createVideoElement(
      'https://res.cloudinary.com/di4swkq4j/video/upload/v1679815224/light_gk1exr.mp4',
      'back_video_light'
    );
    createVideoElement(
      'https://res.cloudinary.com/di4swkq4j/video/upload/v1679815228/dark_blsdgj.mp4',
      'back_video_dark',
      true
    );
  } else {
    const viewer = document.createElement('spline-viewer');
    viewer.id = 'spline-viewer';
    viewer.style.height = '100vh';
    viewer.style.width = '100%';
    viewer.classList.add('fixed', 'top-0', 'left-0', 'z-0');
    viewer.url = 'https://prod.spline.design/CLT1A4tbF20C1Ynx/scene.splinecode';
    viewer['loading-anim'] = true;
    document.getElementsByTagName('body')[0].appendChild(viewer);
    const viewer_selection = document.getElementById('spline-viewer');
    viewer_selection.shadowRoot.querySelector('#logo').remove();
  }
});

let viewProjects = false;
document.getElementById('projects').style.display = 'none';
function setViewProjects() {
  viewProjects = !viewProjects;
  if (viewProjects) {
    document.getElementById('projects').style.display = 'flex';
    document.getElementById('projects').classList.add('elementToPopIn');
    setTimeout(() => {
      document.getElementById('home').style.display = 'none';
      document.getElementById('spline-viewer').style.display = 'none';
    }, 500);
  } else {
    document.getElementById('spline-viewer').style.display = 'block';
    document.getElementById('home').style.display = 'flex';
    document.getElementById('projects').classList.remove('elementToPopIn');
    document.getElementById('projects').classList.add('elementToPopOut');
    setTimeout(() => {
      document.getElementById('projects').style.display = 'none';
    }, 500);
  }
}
