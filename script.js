const btn = document.getElementById("btnSurprise");
const secret = document.getElementById("secret");

btn.addEventListener("click", () => {
  secret.classList.toggle("hidden");

  // ปล่อย confetti กระจายทั่วจอ
  const end = Date.now() + 1000;
  (function frame() {
    confetti({
      particleCount: 8,
      spread: 80,
      origin: { x: Math.random(), y: Math.random() * 0.5 }
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
});
