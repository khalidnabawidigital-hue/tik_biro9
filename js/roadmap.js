/* ============================================================
   roadmap.js — Data & render Roadmap Pembelajaran 1 Tahun
   Sumber: Buku Siswa Informatika SMP/MTs Kelas IX (Kemendikbudristek, 2022)
   ============================================================ */

/* ---------- 1. DATA BAB (hasil analisis Buku Siswa) ---------- */
const BAB_DATA = [
  {
    num: 1, id: 'bab1', href: 'bab1.html',
    title: 'Informatika SMP',
    icon: 'fa-solid fa-diagram-project',
    semester: 'ganjil', accent: 'ganjil', difficulty: 'mudah', noJP: false,
    desc: 'Mengingat kembali & memetakan keterhubungan 9 elemen Informatika yang dipelajari sejak kelas VII–VIII, sebagai pijakan belajar kelas IX.',
    why: 'Agar siswa memiliki gambaran utuh keterkaitan antarelemen Informatika sebelum mendalami materi kelas IX.',
    capaian: 'Siswa mampu menjelaskan hakikat Informatika dan menyusun peta konsep keterhubungan elemen-elemen Informatika.',
    kompetensi: ['Berpikir reflektif & analitis', 'Membuat peta konsep', 'Merencanakan aktivitas belajar 1 tahun'],
    materi: ['Apa itu Informatika', 'Informatika & Profil Pelajar Pancasila', 'Elemen Informatika SMP', 'Rencana Pembelajaran Kelas IX'],
    pertemuan: 1, jp: 2, project: '—', praktikum: 'Peta Konsep Informatika (kerja kelompok)', refleksi: 'Kesiapan & harapan belajar Informatika Kelas IX',
    kataKunci: 'Peta pikiran, Informatika, BK, TIK, SK, JKI, AD, AP, DSI, PLB, Profil Pelajar Pancasila',
  },
  {
    num: 2, id: 'bab2', href: 'bab2.html',
    title: 'Berpikir Komputasional',
    icon: 'fa-solid fa-sitemap',
    semester: 'ganjil', accent: 'ganjil', difficulty: 'sedang', noJP: false,
    desc: 'Mendalami struktur data graf & pohon (tree), ekspresi-operasi logika, serta algoritma sebagai dasar penyelesaian masalah.',
    why: 'Berpikir komputasional adalah landasan berpikir untuk seluruh elemen Informatika lainnya.',
    capaian: 'Siswa mampu menganalisis persoalan menggunakan struktur data graf/pohon dan menyusun algoritma penyelesaiannya.',
    kompetensi: ['Merepresentasikan data dengan graf & tree', 'Menyusun ekspresi logika', 'Menyusun algoritma runtut'],
    materi: ['Struktur Data (Graf & Tree)', 'Ekspresi & Operasi Logika', 'Algoritma'],
    pertemuan: 3, jp: 6, project: '—', praktikum: 'Aktivitas Hitam Putih, Jalar Keluar', refleksi: 'Manfaat berpikir komputasional pada masalah sehari-hari',
    kataKunci: 'Berpikir komputasional, penyelesaian masalah, algoritma, struktur data, ekspresi logika, operasi logika',
  },
  {
    num: 3, id: 'bab3', href: 'bab3.html',
    title: 'Teknologi Informasi & Komunikasi',
    icon: 'fa-solid fa-file-lines',
    semester: 'ganjil', accent: 'ganjil', difficulty: 'sedang', noJP: false,
    desc: 'Mengintegrasikan konten aplikasi perkantoran (dokumen, lembar kerja, presentasi), lalu membangun eksistensi digital lewat blog & vlog.',
    why: 'Kemampuan mengolah dan menyajikan informasi digital dibutuhkan di sekolah maupun dunia kerja mendatang.',
    capaian: 'Siswa mampu mengintegrasikan konten lintas aplikasi perkantoran serta membuat blog dan vlog sederhana.',
    kompetensi: ['Integrasi dokumen–lembar kerja–presentasi', 'Membuat & mengelola blog', 'Memproduksi vlog sederhana'],
    materi: ['Integrasi Konten Aplikasi Perkantoran', 'Blog', 'Vlog'],
    pertemuan: 4, jp: 8, project: 'Buku Tahunan Kelas', praktikum: 'Laporan Keuangan Sederhana, Blog & Vlog Sederhana', refleksi: 'Etika berbagi konten di ruang digital',
    kataKunci: 'Aplikasi perkantoran, word processing, aplikasi presentasi, pengolah lembar kerja, blog/vlog, analisis tujuan & konten',
  },
  {
    num: 4, id: 'bab4', href: 'bab4.html',
    title: 'Sistem Komputer',
    icon: 'fa-solid fa-desktop',
    semester: 'ganjil', accent: 'suplemen', difficulty: 'mudah', noJP: true,
    desc: 'Tidak ada jam pelajaran khusus di kelas IX — bab ini mengajak siswa mengingat kembali kebiasaan baik menggunakan komputer dari kelas VII–VIII.',
    why: 'Menjaga kebiasaan penggunaan komputer yang sehat & aman tetap relevan sepanjang jenjang SMP.',
    capaian: 'Siswa mampu menerapkan kebiasaan penggunaan komputer yang baik dan memahami konsep CS Unplugged.',
    kompetensi: ['Ergonomi penggunaan komputer', 'Kesadaran CS Unplugged'],
    materi: ['Kebiasaan Baik Ber-komputer', 'Posisi Duduk yang Benar', 'Konsep CS Unplugged'],
    pertemuan: 0, jp: 0, project: '—', praktikum: '—', refleksi: 'Kebiasaan menggunakan komputer sehari-hari',
    kataKunci: 'Sistem komputer, ergonomi, CS Unplugged',
    suplemen: true,
  },
  {
    num: 5, id: 'bab5', href: 'bab5.html',
    title: 'Jaringan Komputer & Internet',
    icon: 'fa-solid fa-network-wired',
    semester: 'genap', accent: 'suplemen', difficulty: 'mudah', noJP: true,
    desc: 'Tidak ada jam pelajaran khusus — siswa diajak membuat karya kreatif (poster/komik/video) untuk mengingatkan penggunaan internet yang aman.',
    why: 'Kesadaran keamanan berinternet perlu terus disegarkan meski tanpa alokasi jam pelajaran formal.',
    capaian: 'Siswa mampu mengampanyekan praktik baik penggunaan internet yang aman melalui karya kreatif.',
    kompetensi: ['Kesadaran keamanan berinternet', 'Kolaborasi membuat karya kampanye'],
    materi: ['Etika & Keamanan Berinternet', 'Karya Kampanye (poster/komik/video)'],
    pertemuan: 0, jp: 0, project: 'Karya Kampanye Internet Aman (opsional)', praktikum: '—', refleksi: 'Pengalaman pribadi ber-internet aman',
    kataKunci: 'Jaringan komputer, internet, keamanan berinternet',
    suplemen: true,
  },
  {
    num: 6, id: 'bab6', href: 'bab6.html',
    title: 'Analisis Data',
    icon: 'fa-solid fa-chart-simple',
    semester: 'genap', accent: 'suplemen', difficulty: 'mudah', noJP: true,
    desc: 'Tidak ada jam pelajaran khusus — mengingat kembali pengertian data & informasi serta praktik baik mengolah data sehari-hari.',
    why: 'Kepekaan terhadap data adalah bekal penting sebelum masuk ke pemrograman berbasis data di bab-bab berikutnya.',
    capaian: 'Siswa mampu membedakan data dan informasi serta mengenali praktik baik pengolahan data.',
    kompetensi: ['Membedakan data vs informasi', 'Kepekaan terhadap kualitas data'],
    materi: ['Pengertian Data & Informasi', 'Praktik Baik Analisis Data Sehari-hari'],
    pertemuan: 0, jp: 0, project: '—', praktikum: '—', refleksi: 'Contoh data yang ditemui sehari-hari',
    kataKunci: 'Data, informasi, analisis data',
    suplemen: true,
  },
  {
    num: 7, id: 'bab7', href: 'bab7.html',
    title: 'Algoritma & Pemrograman',
    icon: 'fa-solid fa-code',
    semester: 'genap', accent: 'genap', difficulty: 'sulit', noJP: false,
    desc: 'Bab terpanjang: dari perbandingan Scratch–Blockly, literasi numerik & sains, modularisasi program, hingga konverter sistem bilangan & parity bit.',
    why: 'Pemrograman modular adalah keterampilan inti Informatika untuk menyusun solusi yang efisien dan dapat digunakan ulang.',
    capaian: 'Siswa mampu membuat program modular (fungsi/prosedur) untuk memecahkan persoalan numerasi, sains, dan konversi bilangan.',
    kompetensi: ['Pemrograman visual (Scratch & Blockly)', 'Membuat fungsi & prosedur', 'Konversi sistem bilangan & parity bit'],
    materi: ['Scratch vs Blockly', 'Literasi Numerik', 'Modularisasi Program (1 & 2)', 'Literasi Sains', 'Konverter Sistem Bilangan', 'Parity Bit', 'Wrap Up', 'Modul Tambahan: Unplugged & Ozobot'],
    pertemuan: 10, jp: 20, project: 'Hitung Rata-rata, Hitung KKM, Pertumbuhan 3 Hari/N Hari, Poster Konverter Bilangan', praktikum: 'Modul Fungsi Kuadrat, Volume Tabung, Konverter Biner–Oktal–Desimal', refleksi: 'Kesulitan memodularkan program & cara mengatasinya',
    kataKunci: 'Pemrograman visual, algoritma, Scratch, Blockly, parameter, fungsi, prosedur, sistem bilangan, parity bit, ozobot',
  },
  {
    num: 8, id: 'bab8', href: 'bab8.html',
    title: 'Dampak Sosial Informatika',
    icon: 'fa-solid fa-shield-halved',
    semester: 'genap', accent: 'genap', difficulty: 'sedang', noJP: false,
    desc: 'Memahami keamanan data & informasi, ragam ancaman siber, serta perkakas dan kebiasaan untuk melindungi data pribadi.',
    why: 'Literasi keamanan digital melindungi siswa dari kejahatan siber yang makin marak di kehidupan sehari-hari.',
    capaian: 'Siswa mampu mengidentifikasi ancaman keamanan data dan menerapkan langkah perlindungan informasi.',
    kompetensi: ['Mengenali phising, malware & rekayasa sosial', 'Menerapkan otentikasi & enkripsi dasar', 'Mengelola cookie & privasi'],
    materi: ['Keamanan Data & Informasi', 'Perkakas Melindungi Data & Informasi', 'Meningkatkan Keamanan Informasi'],
    pertemuan: 2, jp: 4, project: '—', praktikum: 'Eksplorasi Situs dengan Cookie, Rancang Autentikasi Ruang Rahasia', refleksi: 'Pengalaman pribadi terkait ancaman siber',
    kataKunci: 'Keamanan data & informasi, peretasan, information theft, fraud, otentikasi, enkripsi',
  },
  {
    num: 9, id: 'bab9', href: 'bab9.html',
    title: 'Praktik Lintas Bidang',
    icon: 'fa-solid fa-microchip',
    semester: 'genap', accent: 'genap', difficulty: 'sulit', noJP: false,
    desc: 'Puncak pembelajaran: merancang 4 proyek IoT & robotika menggunakan Arduino dan PictoBlox — dari lampu lalu lintas hingga robot line follower.',
    why: 'Menerapkan seluruh elemen Informatika sekaligus dalam proyek nyata lintas bidang (hardware + software + sains).',
    capaian: 'Siswa mampu merancang dan memprogram sistem IoT sederhana serta robot line follower.',
    kompetensi: ['Merangkai rangkaian Arduino & sensor', 'Memprogram dengan PictoBlox', 'Mengintegrasikan sensor cahaya & kelembapan'],
    materi: ['IoT Sensor Sederhana (Lampu Lalu Lintas)', 'IoT Sensor Cahaya Tanaman', 'IoT Sensor Kelembapan Tanah', 'Robot Line Follower'],
    pertemuan: 6, jp: 12, project: 'Lampu Lalu Lintas IoT, Sensor Cahaya Tanaman, Sensor Kelembapan Tanah, Robot Line Follower', praktikum: '4 modul praktikum Arduino + PictoBlox', refleksi: 'Tantangan merangkai hardware & memprogram sensor',
    kataKunci: 'IoT, Arduino, LED, PictoBlox, sensor cahaya, sensor kelembapan, robot line follower',
  },
];

const DIFF_LABEL = { mudah: 'Mudah', sedang: 'Sedang', sulit: 'Sulit' };

/* ---------- 2. Progress (localStorage) ---------- */
function getProgress(id) {
  return parseInt(localStorage.getItem('ix_progress_' + id) || '0', 10);
}

/* ---------- 3. Render dashboard statistics ---------- */
function renderDashboard() {
  const el = document.getElementById('dash-grid');
  if (!el) return;

  const activeChapters = BAB_DATA.filter(b => !b.suplemen);
  const totalPertemuan = BAB_DATA.reduce((s, b) => s + b.pertemuan, 0);
  const totalJP = BAB_DATA.reduce((s, b) => s + b.jp, 0);
  const totalProject = BAB_DATA.filter(b => b.project && b.project !== '—').length;
  const totalPraktikum = BAB_DATA.filter(b => b.praktikum && b.praktikum !== '—').length;

  const stats = [
    { icon: 'fa-solid fa-layer-group', val: BAB_DATA.length, lbl: 'Jumlah BAB' },
    { icon: 'fa-solid fa-calendar-week', val: totalPertemuan, lbl: 'Jumlah Pertemuan' },
    { icon: 'fa-solid fa-flask', val: totalPraktikum, lbl: 'Bab dengan Praktikum' },
    { icon: 'fa-solid fa-diagram-project', val: totalProject, lbl: 'Bab dengan Proyek' },
    { icon: 'fa-solid fa-clock', val: totalJP + ' JP', lbl: 'Estimasi Jam Pelajaran' },
    { icon: 'fa-solid fa-bolt', val: activeChapters.length, lbl: 'Bab dengan JP Aktif' },
  ];

  el.innerHTML = stats.map((s, i) => `
    <div class="dash-card reveal" style="transition-delay:${i * 60}ms">
      <i class="${s.icon}"></i>
      <div class="val">${s.val}</div>
      <div class="lbl">${s.lbl}</div>
    </div>
  `).join('');
}

/* ---------- 4. Render BAB cards along the circuit track ---------- */
function renderRoadmap(filter = 'all') {
  const track = document.getElementById('circuit-track');
  if (!track) return;

  const list = BAB_DATA.filter(b => filter === 'all' || b.semester === filter);

  track.innerHTML = list.map((b, i) => {
    const progress = b.suplemen ? 0 : getProgress(b.id);
    const diffClass = b.difficulty;
    const nodeLabel = b.suplemen ? '<i class="fa-solid fa-rotate"></i>' : b.num;

    return `
    <div class="bab-row reveal" style="transition-delay:${i * 70}ms" data-accent="${b.accent}">
      <div class="bab-node ${b.suplemen ? 'no-jp' : ''}" title="${b.suplemen ? 'Materi tanpa JP khusus' : 'Bab ' + b.num}">
        <span class="pulse"></span>${nodeLabel}
      </div>
      <div class="bab-card ${b.suplemen ? 'suplemen' : ''}" style="--card-accent:var(--grad-${b.accent === 'suplemen' ? 'ganjil' : b.accent})">
        <div class="bab-card-top">
          <div class="bab-card-icon"><i class="${b.icon}"></i></div>
          <span class="bab-tag ${diffClass}">${DIFF_LABEL[b.difficulty]}</span>
        </div>
        <h3>Bab ${b.num} · ${b.title}</h3>
        <p class="bab-desc">${b.desc}</p>

        <div class="bab-meta-row">
          <span class="meta-chip"><i class="fa-solid fa-calendar-day"></i> ${b.pertemuan > 0 ? b.pertemuan + ' pertemuan' : 'Tanpa JP khusus'}</span>
          ${b.jp > 0 ? `<span class="meta-chip"><i class="fa-solid fa-clock"></i> ${b.jp} JP</span>` : ''}
          <span class="meta-chip"><i class="fa-solid fa-key"></i> ${b.semester === 'ganjil' ? 'Semester Ganjil' : 'Semester Genap'}</span>
        </div>

        <div class="bab-card-details">
          <div class="detail-block">
            <b>Capaian Pembelajaran</b>
            <span>${b.capaian}</span>
          </div>
          <div class="detail-block">
            <b>Apa yang dipelajari</b>
            <ul>${b.materi.map(m => `<li>${m}</li>`).join('')}</ul>
          </div>
          <div class="detail-block">
            <b>Kompetensi yang diperoleh</b>
            <ul>${b.kompetensi.map(k => `<li>${k}</li>`).join('')}</ul>
          </div>
          ${b.project && b.project !== '—' ? `<div class="detail-block"><b>Proyek</b><span>${b.project}</span></div>` : ''}
          ${b.praktikum && b.praktikum !== '—' ? `<div class="detail-block"><b>Praktikum</b><span>${b.praktikum}</span></div>` : ''}
          <div class="detail-block">
            <b>Refleksi</b>
            <span>${b.refleksi}</span>
          </div>
        </div>

        ${b.suplemen ? `
        <div class="supplement-box">
          <b><i class="fa-solid fa-circle-info"></i> Materi Tambahan (Sumber Eksternal — Refresh &amp; Update)</b>
          Bab ini tidak punya JP khusus di Buku Siswa Kelas IX. Halaman babnya memuat ringkasan pengingat kelas VII–VIII dari buku,
          ditambah kotak terpisah berlabel jelas berisi refresh materi &amp; info terkini dari luar Buku Siswa.
        </div>` : ''}

        <div class="progress-wrap">
          <div class="progress-label"><span>Progress</span><span class="progress-val">${progress}%</span></div>
          <div class="progress-track"><div class="progress-fill" style="width:${progress}%"></div></div>
        </div>

        <a href="${b.href}" class="btn-belajar">
          Mulai Belajar <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>`;
  }).join('');

  // Draw circuit trace after cards are in DOM
  requestAnimationFrame(drawCircuitTrace);

  // Re-observe reveal elements added dynamically
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('in-view'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    track.querySelectorAll('.reveal').forEach(el => io.observe(el));
  } else {
    track.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
  }
}

/* ---------- 5. Draw the animated SVG circuit line through node centers ---------- */
function drawCircuitTrace() {
  const track = document.getElementById('circuit-track');
  const svg = document.getElementById('circuit-svg');
  if (!track || !svg) return;

  const nodes = track.querySelectorAll('.bab-node');
  if (!nodes.length) { svg.innerHTML = ''; return; }

  const trackRect = track.getBoundingClientRect();
  const points = Array.from(nodes).map(n => {
    const r = n.getBoundingClientRect();
    return { x: r.left + r.width / 2 - trackRect.left, y: r.top + r.height / 2 - trackRect.top };
  });

  svg.setAttribute('width', trackRect.width);
  svg.setAttribute('height', trackRect.height);
  svg.setAttribute('viewBox', `0 0 ${trackRect.width} ${trackRect.height}`);

  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const midY = (points[i - 1].y + points[i].y) / 2;
    d += ` C ${points[i - 1].x} ${midY}, ${points[i].x} ${midY}, ${points[i].x} ${points[i].y}`;
  }

  svg.innerHTML = `
    <defs>
      <linearGradient id="circuitGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#6C5CE7"/>
        <stop offset="100%" stop-color="#00D9C0"/>
      </linearGradient>
    </defs>
    <path d="${d}" class="base"></path>
    <path d="${d}" class="progress"></path>
  `;
}

/* ---------- 6. Semester tab handling ---------- */
function initSemesterTabs() {
  const tabs = document.querySelectorAll('.semester-tab');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderRoadmap(tab.dataset.filter);
    });
  });
}

/* ---------- 7. Flow strip (Peta Perjalanan Belajar mini BAB1->BAB9) ---------- */
function renderFlowStrip() {
  const el = document.getElementById('flow-strip');
  if (!el) return;
  el.innerHTML = BAB_DATA.map((b, i) => `
    <a href="${b.suplemen ? '#roadmap' : b.href}" class="flow-node" title="Bab ${b.num} · ${b.title}">${b.num}</a>
    ${i < BAB_DATA.length - 1 ? '<i class="fa-solid fa-arrow-right-long flow-arrow"></i>' : ''}
  `).join('');
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderDashboard();
  renderRoadmap('all');
  initSemesterTabs();
  renderFlowStrip();
  window.addEventListener('resize', () => requestAnimationFrame(drawCircuitTrace));
});
