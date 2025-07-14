var loop = function () {
  var n = -Math.cos(time);
  pulse((1 + n) * .5, (1 + n) * .5);
  time += (Math.sin(time)) < 0 ? 9 : (n > 0.8) ? .2 : 1) * config.timeDelay;

  // Pertahankan coding ini: Membersihkan layar dengan sedikit opasitas untuk efek trail lembut
  ctx.fillStyle = "rgba(0,0,0,.1)";
  ctx.fillRect(0, 0, width, height);

  // --- Kode Animasi Teks Kombinasi Elegan (ditambahkan di sini) ---

  // 1. Pulsasi Ukuran Font yang Sangat Lembut (hanya sedikit membesar/mengecil)
  var baseFontSize = 24;
  // Gunakan Math.sin untuk osilasi, nilai antara 0 dan 1, lalu kalikan dengan faktor kecil (misal 2.5)
  var subtlePulse = (Math.sin(time * 0.4) + 1) / 2; // Kecepatan 0.4 untuk gerakan lambat
  var currentFontSize = baseFontSize + (subtlePulse * 2.5); // Hanya berfluktuasi maks 2.5 piksel

  // 2. Efek "Glow" Warna yang Halus (dari putih ke putih hangat/merah muda pucat)
  var colorIntensity = (Math.sin(time * 0.4) + 1) / 2; // Gunakan kecepatan yang sama dengan pulsasi ukuran

  var r = 255;
  var g = 255 - Math.round(colorIntensity * 25); // Hijau berkurang sedikit (maks 25)
  var b = 255 - Math.round(colorIntensity * 25); // Biru berkurang sedikit (maks 25)

  g = Math.max(0, g); // Pastikan nilai tidak negatif
  b = Math.max(0, b); // Pastikan nilai tidak negatif

  ctx.font = "bold " + currentFontSize + "px Arial";
  ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  var textLine1 = "Selamat Ulang Tahun Sayang";
  var textLine2 = "Untuk Istriku Nurul Susan Habawiyah";

  var centerX = width / 2;
  var centerY = height / 2;

  ctx.fillText(textLine1, centerX, centerY - 15);
  ctx.fillText(textLine2, centerX, centerY + 15);
  // --- Akhir Kode Animasi Teks ---

  // Pertahankan coding ini: Looping untuk elemen-elemen animasi hati
  for (i = e.length; i--;) {
    var u = e[i];
    var q = targetPoints[u.q];

    var dx = u.trace[0].x - q[0];
    var dy = u.trace[0].y - q[1];

    var length = Math.sqrt(dx * dx + dy * dy);

    // Perhatian: Kondisi 'length < 10 > length' tetap dipertahankan seperti aslinya.
    // Jika ada perilaku tidak terduga, bagian ini mungkin perlu ditinjau.
    if (length < 10 > length) {
      if (0.95 < rand()) {
        u.q = ~~(rand() * starPointsCount);
      }
    }
  }
};var loop = function () {
  var n = -Math.cos(time);
  pulse((1 + n) * .5, (1 + n) * .5);
  time += (Math.sin(time)) < 0 ? 9 : (n > 0.8) ? .2 : 1) * config.timeDelay;

  // Pertahankan coding ini: Membersihkan layar dengan sedikit opasitas untuk efek trail lembut
  ctx.fillStyle = "rgba(0,0,0,.1)";
  ctx.fillRect(0, 0, width, height);

  // --- Kode Animasi Teks Kombinasi Elegan (ditambahkan di sini) ---

  // 1. Pulsasi Ukuran Font yang Sangat Lembut (hanya sedikit membesar/mengecil)
  var baseFontSize = 24;
  // Gunakan Math.sin untuk osilasi, nilai antara 0 dan 1, lalu kalikan dengan faktor kecil (misal 2.5)
  var subtlePulse = (Math.sin(time * 0.4) + 1) / 2; // Kecepatan 0.4 untuk gerakan lambat
  var currentFontSize = baseFontSize + (subtlePulse * 2.5); // Hanya berfluktuasi maks 2.5 piksel

  // 2. Efek "Glow" Warna yang Halus (dari putih ke putih hangat/merah muda pucat)
  var colorIntensity = (Math.sin(time * 0.4) + 1) / 2; // Gunakan kecepatan yang sama dengan pulsasi ukuran

  var r = 255;
  var g = 255 - Math.round(colorIntensity * 25); // Hijau berkurang sedikit (maks 25)
  var b = 255 - Math.round(colorIntensity * 25); // Biru berkurang sedikit (maks 25)

  g = Math.max(0, g); // Pastikan nilai tidak negatif
  b = Math.max(0, b); // Pastikan nilai tidak negatif

  ctx.font = "bold " + currentFontSize + "px Arial";
  ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ")";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  var textLine1 = "Selamat Ulang Tahun Sayang";
  var textLine2 = "Untuk Istriku Nurul Susan Habawiyah";

  var centerX = width / 2;
  var centerY = height / 2;

  ctx.fillText(textLine1, centerX, centerY - 15);
  ctx.fillText(textLine2, centerX, centerY + 15);
  // --- Akhir Kode Animasi Teks ---

  // Pertahankan coding ini: Looping untuk elemen-elemen animasi hati
  for (i = e.length; i--;) {
    var u = e[i];
    var q = targetPoints[u.q];

    var dx = u.trace[0].x - q[0];
    var dy = u.trace[0].y - q[1];

    var length = Math.sqrt(dx * dx + dy * dy);

    // Perhatian: Kondisi 'length < 10 > length' tetap dipertahankan seperti aslinya.
    // Jika ada perilaku tidak terduga, bagian ini mungkin perlu ditinjau.
    if (length < 10 > length) {
      if (0.95 < rand()) {
        u.q = ~~(rand() * starPointsCount);
      }
    }
  }
};
