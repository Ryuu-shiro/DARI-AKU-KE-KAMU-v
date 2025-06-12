function mulaiSurprise() {
  // Hilangkan layar pembuka
  document.getElementById('intro-screen').style.display = 'none';
  
  // Mainkan musik
  const musik = document.getElementById('musik');
  musik.play();
  
  // Aktifkan semua animasi bunga
  document.body.classList.remove('not-loaded');
  
  // Munculkan foto setelah delay
  setTimeout(() => {
    document.querySelectorAll('.buti-foto').forEach(img => {
      img.classList.add('muncul');
    });
  }, 3000);
  
  // Tampilkan marquee setelah 4 detik
  setTimeout(() => {
    const marquee = document.getElementById("marqueeText");
    if (marquee) {
      marquee.style.display = "block";
      
      // Hilangkan setelah 8 detik (cukup scroll satu kali)
      setTimeout(() => {
        marquee.style.display = "none";
      }, 8000);
    }
  }, 4000);
}
