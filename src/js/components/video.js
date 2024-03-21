document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("myVideo");

  video.addEventListener("timeupdate", () => {
    let currentTime = video.currentTime;
    let duration = video.duration;
    let halfDuration = duration / 2;


    if (currentTime <= halfDuration) {
      // Увеличиваем скорость воспроизведения в начале видео
      video.playbackRate = 1.5; // Примерно удваиваем скорость
    } else {
      // Снижаем скорость воспроизведения ближе к середине
      video.playbackRate = 1; // Возвращаем нормальную скорость
    }
  });
});
