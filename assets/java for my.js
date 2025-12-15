function startMusic() {
  const music = document.getElementById("bgMusic");
  music.volume = 0.45; // smooth volume
  music.play().catch(e => console.log("Autoplay blocked"));
}
