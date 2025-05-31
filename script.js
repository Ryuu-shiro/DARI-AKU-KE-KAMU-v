onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll('.buti-foto').forEach(img => {
      img.classList.add('muncul');
    });
  }, 4000); // muncul setelah 3 detik (setelah bunga mekar)
});
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll('.buti-foto').forEach(img => {
      img.classList.add('muncul');
    });
  }, 3000); // Ubah timing ini sesuai waktu bunga mekar
});
window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelectorAll('.buti-foto').forEach(img => {
      img.classList.add('muncul');
    });
  }, 3000); // muncul 3 detik setelah load (bunga mekar dulu)
});