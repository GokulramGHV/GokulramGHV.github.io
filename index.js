let darkMode = false;
document.getElementById('sun').style.display = 'none';
function toggle() {
  darkMode = !darkMode;
  if (darkMode) {
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'block';
    document.getElementsByTagName('HTML')[0].classList.add('dark');
    const video = document.getElementById('back_video');
    if (video)
      video.src =
        'https://res.cloudinary.com/di4swkq4j/video/upload/v1679815228/dark_blsdgj.mp4';
  } else {
    document.getElementById('moon').style.display = 'block';
    document.getElementById('sun').style.display = 'none';
    document.getElementsByTagName('HTML')[0].classList.remove('dark');
    const video = document.getElementById('back_video');
    if (video) video.src = 'assets/light.mp4';
  }
}

window.addEventListener('load', () => {
  if (window.innerWidth < 600) {
    const video = document.createElement('video');
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.height = '100vh';
    video.style.width = '100%';
    video.style.objectFit = 'cover';
    video.classList.add('fixed', 'top-0', 'left-0', 'z-0');
    video.preload = 'auto';
    video.src =
      'https://res.cloudinary.com/di4swkq4j/video/upload/v1679815224/light_gk1exr.mp4';
    video.id = 'back_video';
    document.getElementsByTagName('body')[0].appendChild(video);
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
    document.getElementById('home').classList.add('elementToFadeOut');
    document.getElementById('home').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
    document.getElementById('projects').classList.add('elementToFadeIn');
    document.getElementById('toggle').innerHTML = 'Back to Home';
  } else {
    document.getElementById('projects').classList.add('elementToFadeOut');
    document.getElementById('projects').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.getElementById('home').classList.add('elementToFadeIn');
    document.getElementById('toggle').innerHTML = 'View Projects';
  }
}
