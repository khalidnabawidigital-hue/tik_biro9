/* js/bab4.js — interaksi halaman Bab 4 (Vanilla ES6) */
(function () {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* ---------- Tujuan ---------- */
  const goals = [
    'Menjelaskan pentingnya kebiasaan baik saat menggunakan komputer.',
    'Mengidentifikasi posisi duduk dan pengaturan tempat kerja yang ergonomis.',
    'Mengenali kebiasaan berkomputer yang perlu diterapkan sehari-hari.',
    'Menjelaskan pengertian dasar CS Unplugged.',
    'Memberi contoh kegiatan belajar Informatika tanpa komputer.',
    'Merefleksikan kebiasaanmu dan memilih satu kebiasaan baik untuk diterapkan.'
  ];
  $('b4-goals').innerHTML = goals.map((g, i) =>
    '<div class="b4-box b4-goal"><span class="n">' + (i + 1) + '</span><p>' + esc(g) + '</p></div>').join('');

  /* ---------- Checklist generik ---------- */
  function checklist(listId, barId, fbId, items, feedback) {
    const list = $(listId), bar = $(barId), fb = $(fbId);
    list.innerHTML = items.map((t, i) =>
      '<label><input type="checkbox" data-i="' + i + '"><span>' + esc(t) + '</span></label>').join('');
    const boxes = Array.from(list.querySelectorAll('input'));
    function update() {
      const done = boxes.filter((b) => b.checked).length;
      bar.style.width = (done / items.length * 100) + '%';
      const missing = items.filter((_, i) => !boxes[i].checked);
      fb.innerHTML = feedback(done, items.length, missing);
    }
    boxes.forEach((b) => b.addEventListener('change', update));
  }
  const li = (arr) => '<ul>' + arr.map((m) => '<li>' + esc(m) + '</li>').join('') + '</ul>';

  checklist('posture-list', 'posture-bar', 'posture-fb', [
    'Punggungku tersangga sandaran, tegak atau sedikit bersandar.',
    'Kepalaku tegak dan seimbang, tidak terus menunduk.',
    'Bagian atas layar sejajar atau sedikit di bawah mataku.',
    'Bahuku rileks, tidak terangkat.',
    'Sikuku dekat badan dan ditekuk sekitar 90–120°.',
    'Pergelangan tanganku lurus saat mengetik atau memakai mouse.',
    'Telapak kakiku menapak lantai (atau pijakan).',
    'Layarku tidak silau dan cahaya ruangan cukup.'
  ], (d, n, miss) => {
    if (d === 0) return 'Centang item di atas untuk melihat umpan balik.';
    if (d === n) return '<strong>Keren!</strong> Semua poin sudah sesuai. Jangan lupa mengubah posisi dan beristirahat dari layar secara berkala.';
    const head = d >= n - 2 ? '<strong>Hampir sempurna!</strong>' : '<strong>Ada beberapa hal yang bisa diperbaiki</strong> — satu langkah kecil sudah cukup untuk mulai.';
    return head + ' Coba perhatikan:' + li(miss.slice(0, 4));
  });

  checklist('habit-list', 'habit-bar', 'habit-fb', [
    'Aku menjaga makanan dan minuman jauh dari perangkat.',
    'Aku menutup aplikasi/tab yang tidak kubutuhkan.',
    'Aku merahasiakan kata sandiku dan log out dari komputer bersama.',
    'Aku memberi nama file dengan jelas dan menyimpannya rapi.',
    'Aku mematikan perangkat dengan benar setelah selesai.',
    'Aku beristirahat sejenak dari layar saat belajar cukup lama.'
  ], (d, n, miss) => {
    if (d === 0) return 'Centang kebiasaan yang sudah rutin kamu lakukan.';
    if (d === n) return '<strong>Luar biasa!</strong> Pertahankan, dan ajak temanmu melakukan hal yang sama.';
    return '<strong>' + d + ' dari ' + n + ' kebiasaan sudah rutin.</strong> Pilih satu yang belum, lalu coba lakukan mulai hari ini: ' + esc(miss[0].replace(/^Aku /, '').replace(/\.$/, '')) + '.';
  });

  /* ---------- Skenario pilihan ---------- */
  const scenarios = [
    { q: 'Kamu mengerjakan tugas di laptop sambil tiduran dan kepalamu terus menunduk. Apa yang sebaiknya dilakukan?',
      o: ['Lanjut saja sampai selesai.', 'Pindah ke meja, tegakkan badan, dan naikkan layar agar sejajar pandangan.', 'Tutup layar dan tidak mengerjakan tugas.'], a: 1,
      e: 'Pindah ke meja dan menaikkan layar membuat kepala lebih tegak. Tugas tetap bisa selesai dengan posisi yang lebih nyaman.' },
    { q: 'Layar komputermu menghadap jendela sehingga terlihat silau. Tindakan yang tepat?',
      o: ['Memicingkan mata agar tetap terbaca.', 'Mengubah arah layar atau menutup tirai agar tidak silau.', 'Memajukan badan sedekat mungkin ke layar.'], a: 1,
      e: 'Mengatur arah layar atau cahaya mengurangi silau tanpa mengubah posisi tubuhmu menjadi tidak nyaman.' },
    { q: 'Kamu sudah lama mengerjakan tugas dan mulai merasa tidak nyaman duduk. Apa langkah terbaik?',
      o: ['Berhenti sejenak, ubah posisi, dan beristirahat dari layar.', 'Duduk lebih lama agar cepat selesai.', 'Menyalahkan kursi lalu tidak belajar lagi.'], a: 0,
      e: 'Bekerja terlalu lama dalam posisi yang sama tidak dianjurkan. Mengubah posisi dan beristirahat berkala membantu tubuh tetap nyaman.' }
  ];
  $('sc-wrap').innerHTML = scenarios.map((s, i) =>
    '<div class="b4-sc" data-i="' + i + '"><p class="q">' + (i + 1) + '. ' + esc(s.q) + '</p><div class="b4-opts">' +
    s.o.map((t, j) => '<button type="button" class="b4-opt" data-j="' + j + '">' + esc(t) + '</button>').join('') +
    '</div><div class="b4-fb" aria-live="polite" hidden></div></div>').join('');
  document.querySelectorAll('.b4-sc').forEach((box) => {
    const s = scenarios[box.dataset.i], fb = box.querySelector('.b4-fb');
    box.querySelectorAll('.b4-opt').forEach((btn) => btn.addEventListener('click', () => {
      const j = +btn.dataset.j, ok = j === s.a;
      box.querySelectorAll('.b4-opt').forEach((b) => { b.classList.remove('selected', 'wrong'); });
      btn.classList.add(ok ? 'correct' : 'wrong');
      if (ok) box.querySelectorAll('.b4-opt').forEach((b) => (b.disabled = true));
      fb.hidden = false;
      fb.innerHTML = (ok ? '<strong>Tepat!</strong> ' : '<strong>Belum tepat, coba pilihan lain.</strong> ') + (ok ? esc(s.e) : '');
    }));
  });

  /* ---------- Simulasi urutan (CS Unplugged) ---------- */
  const steps = ['Siapkan gelas bersih', 'Masukkan teh celup ke gelas', 'Tuang air panas ke gelas', 'Tunggu beberapa menit', 'Angkat teh celup', 'Tambahkan gula lalu aduk'];
  let order = [];
  const ol = $('ord-list'), ofb = $('ord-fb');
  function shuffle() {
    do { order = steps.map((_, i) => i).sort(() => Math.random() - 0.5); } while (order.every((v, i) => v === i));
    drawOrder(false); ofb.textContent = 'Atur urutan, lalu klik Periksa Urutan.';
  }
  function drawOrder(mark) {
    ol.innerHTML = order.map((v, pos) =>
      '<li class="' + (mark ? (v === pos ? 'ok' : 'bad') : '') + '"><span class="n">' + (pos + 1) + '.</span><span class="t">' + esc(steps[v]) + '</span>' +
      '<button type="button" data-d="-1" data-p="' + pos + '" aria-label="Naikkan langkah ' + esc(steps[v]) + '"' + (pos === 0 ? ' disabled' : '') + '>▲</button>' +
      '<button type="button" data-d="1" data-p="' + pos + '" aria-label="Turunkan langkah ' + esc(steps[v]) + '"' + (pos === order.length - 1 ? ' disabled' : '') + '>▼</button></li>').join('');
  }
  ol.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b || b.disabled) return;
    const p = +b.dataset.p, q = p + +b.dataset.d;
    [order[p], order[q]] = [order[q], order[p]];
    drawOrder(false);
    const nb = ol.querySelector('button[data-p="' + q + '"][data-d="' + b.dataset.d + '"]'); if (nb) nb.focus();
  });
  $('ord-check').addEventListener('click', () => {
    drawOrder(true);
    const wrong = order.filter((v, i) => v !== i).length;
    ofb.innerHTML = wrong === 0
      ? '<strong>Urutan tepat!</strong> Ini contoh <em>algoritma</em>: langkah yang jelas dan berurutan. Kalau urutannya tertukar (misal gula sebelum air), hasilnya berbeda — sama seperti program komputer.'
      : '<strong>Masih ada ' + wrong + ' langkah yang belum pada tempatnya</strong> (ditandai merah). Pikirkan: apa yang harus ada lebih dulu sebelum langkah itu?';
  });
  $('ord-shuffle').addEventListener('click', shuffle);
  shuffle();

  /* ---------- Kuis (satu soal per layar) ---------- */
  const Q = [
    { q: 'Apa fokus Sistem Komputer di kelas IX?', o: ['Mempelajari seluruh sistem komputer dari awal', 'Mengingat kembali kebiasaan baik menggunakan komputer', 'Merakit komputer', 'Membuat aplikasi besar'], a: 1,
      e: 'Bab ini berfungsi sebagai pengingat kebiasaan baik berkomputer dari kelas VII dan VIII, dan tidak memiliki JP khusus.' },
    { q: 'Posisi layar yang lebih tepat adalah…', o: ['Jauh di bawah pandangan agar mata istirahat', 'Bagian atas layar sejajar atau sedikit di bawah mata', 'Tepat di atas kepala', 'Di samping dan badan menoleh'], a: 1,
      e: 'Layar yang sejajar pandangan membuat kepala tetap tegak dan tidak terus menunduk.' },
    { q: 'Pernyataan yang paling tepat tentang lengan saat mengetik…', o: ['Pergelangan ditekuk ke atas', 'Bahu terangkat tinggi', 'Siku dekat badan, ditekuk sekitar 90–120°, pergelangan lurus', 'Lengan diluruskan penuh ke depan'], a: 2,
      e: 'Siku yang ditekuk dekat badan dan pergelangan lurus membantu lengan tetap rileks.' },
    { q: 'Jika sudah lama duduk di depan layar, sebaiknya…', o: ['Tetap diam sampai selesai', 'Mengubah posisi dan beristirahat dari layar secara berkala', 'Menaikkan kecerahan layar sebesar mungkin', 'Menunduk lebih dekat ke layar'], a: 1,
      e: 'Posisi yang sama terlalu lama kurang baik, jadi ubah posisi dan beri jeda.' },
    { q: 'CS Unplugged adalah…', o: ['Aplikasi yang hanya berjalan tanpa internet', 'Cara belajar konsep Informatika tanpa harus selalu memakai komputer', 'Perangkat keras untuk mencabut kabel', 'Bahasa pemrograman'], a: 1,
      e: 'CS Unplugged memakai kegiatan, permainan, atau kartu untuk memahami konsep Informatika.' },
    { q: 'Menyusun langkah membuat teh secara berurutan melatih konsep…', o: ['Algoritma (urutan langkah)', 'Memasang kabel jaringan', 'Mengganti RAM', 'Membersihkan keyboard'], a: 0,
      e: 'Urutan langkah yang jelas dan tepat adalah inti dari algoritma.' },
    { q: 'Hasil checklist “Periksa Posisi Dudukmu” berfungsi sebagai…', o: ['Diagnosis penyakit', 'Alat refleksi edukatif untuk memperbaiki kebiasaan', 'Penilaian bentuk tubuh', 'Syarat lulus bab'], a: 1,
      e: 'Checklist hanya membantu kamu memperhatikan kebiasaan; bukan diagnosis kesehatan.' }
  ];
  let qi = 0, score = 0, picked = null, answers = [];
  const main = $('qz-main'), bCheck = $('qz-check'), bNext = $('qz-next'), bReset = $('qz-reset');
  function showQ() {
    const x = Q[qi]; picked = null; bCheck.hidden = false; bCheck.disabled = true; bNext.hidden = true; bReset.hidden = true;
    main.innerHTML = '<div class="b4-qn">Soal ' + (qi + 1) + ' dari ' + Q.length + '</div><p class="qz-text">' + esc(x.q) + '</p><div class="b4-opts">' +
      x.o.map((t, j) => '<button type="button" class="b4-opt" data-j="' + j + '">' + String.fromCharCode(65 + j) + '. ' + esc(t) + '</button>').join('') +
      '</div><div class="b4-fb" id="qz-fb" aria-live="polite" hidden></div>';
    main.querySelectorAll('.b4-opt').forEach((b) => b.addEventListener('click', () => {
      main.querySelectorAll('.b4-opt').forEach((o) => o.classList.remove('selected'));
      b.classList.add('selected'); picked = +b.dataset.j; bCheck.disabled = false;
    }));
  }
  bCheck.addEventListener('click', () => {
    if (picked === null) return;
    const x = Q[qi], ok = picked === x.a; if (ok) score++;
    answers.push({ ok, picked });
    main.querySelectorAll('.b4-opt').forEach((o) => {
      o.disabled = true; const j = +o.dataset.j;
      if (j === x.a) o.classList.add('correct'); else if (j === picked) o.classList.add('wrong');
      o.classList.remove('selected');
    });
    const fb = $('qz-fb'); fb.hidden = false;
    fb.innerHTML = (ok ? '<strong>Benar!</strong> ' : '<strong>Belum tepat.</strong> Jawaban yang benar: ' + String.fromCharCode(65 + x.a) + '. ') + esc(x.e);
    bCheck.hidden = true; bNext.hidden = false;
    bNext.innerHTML = (qi === Q.length - 1 ? 'Lihat Skor' : 'Soal Berikutnya') + ' <i class="fa-solid fa-arrow-right"></i>';
  });
  bNext.addEventListener('click', () => { if (qi < Q.length - 1) { qi++; showQ(); } else finish(); });
  function finish() {
    const msg = score === Q.length ? 'Luar biasa! Kamu menguasai materi bab ini.' : score >= 5 ? 'Bagus! Baca lagi bagian yang masih keliru.' : 'Ayo baca ulang materinya, lalu coba lagi.';
    main.innerHTML = '<div class="b4-qn">Hasil Akhir</div><p class="qz-text" style="font-size:1.4rem"><i class="fa-solid fa-trophy"></i> Skor: ' + score + ' / ' + Q.length + '</p><p>' + msg + '</p><div id="b4-qres">' +
      Q.map((x, i) => '<div class="rv">' + (answers[i].ok ? '✅' : '❌') + ' <strong>' + (i + 1) + '.</strong> ' + esc(x.q) + '<br><span style="opacity:.85">Jawaban benar: ' + esc(x.o[x.a]) + '. ' + esc(x.e) + '</span></div>').join('') + '</div>';
    bCheck.hidden = true; bNext.hidden = true; bReset.hidden = false;
  }
  bReset.addEventListener('click', () => { qi = 0; score = 0; answers = []; showQ(); main.scrollIntoView({ behavior: 'smooth', block: 'center' }); });
  showQ();

  /* ---------- Refleksi (localStorage dengan penanganan gagal) ---------- */
  const KEY = 'informatika9_bab4_refleksi', rf = ['rf1', 'rf2', 'rf3'], rfb = $('rf-fb');
  const NOTE = rfb.innerHTML;
  try { const d = JSON.parse(localStorage.getItem(KEY) || 'null'); if (d) rf.forEach((id, i) => { $(id).value = d[i] || ''; }); } catch (e) { /* abaikan */ }
  $('rf-save').addEventListener('click', () => {
    try { localStorage.setItem(KEY, JSON.stringify(rf.map((id) => $(id).value))); rfb.innerHTML = '<strong>Tersimpan</strong> di browser/perangkat ini. Jawaban belum dikirim ke guru.'; }
    catch (e) { rfb.innerHTML = '<strong>Gagal menyimpan</strong> (penyimpanan browser tidak tersedia). Salin jawabanmu secara manual.'; }
  });
  $('rf-clear').addEventListener('click', () => {
    rf.forEach((id) => { $(id).value = ''; });
    try { localStorage.removeItem(KEY); } catch (e) { /* abaikan */ }
    rfb.innerHTML = NOTE;
  });
})();
