/* ============================================================
   materi.js — Interaktivitas halaman materi (Bab)
   Tab struktur data, quiz logika, checklist praktikum
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Tabs (mis. Graf vs Tree) ---------- */
  document.querySelectorAll('[data-tabs]').forEach((group) => {
    const buttons = group.querySelectorAll('.materi-tab-btn');
    const panels = group.querySelectorAll('.materi-tab-panel');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tabTarget;
        buttons.forEach((b) => b.classList.remove('active'));
        panels.forEach((p) => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = group.querySelector(`[data-tab-panel="${target}"]`);
        if (panel) panel.classList.add('active');
      });
    });
  });

  /* ---------- 2. Mini quiz ekspresi logika ---------- */
  document.querySelectorAll('.logic-quiz').forEach((quiz) => {
    const options = quiz.querySelectorAll('.lq-opt');
    const feedback = quiz.querySelector('.lq-feedback');
    options.forEach((opt) => {
      opt.addEventListener('click', () => {
        if (quiz.dataset.answered === 'true') return;
        const isCorrect = opt.dataset.correct === 'true';
        opt.classList.add(isCorrect ? 'correct' : 'wrong');
        if (isCorrect) {
          quiz.dataset.answered = 'true';
          if (feedback) feedback.textContent = opt.dataset.msgCorrect || 'Benar! Kamu memahami operator logika ini.';
        } else {
          if (feedback) feedback.textContent = opt.dataset.msgWrong || 'Belum tepat, coba pikirkan lagi tabel kebenarannya.';
          setTimeout(() => opt.classList.remove('wrong'), 900);
        }
      });
    });
  });

  /* ---------- 3. Checklist praktikum + progress bar ---------- */
  document.querySelectorAll('.praktikum-card').forEach((card) => {
    const items = card.querySelectorAll('.pk-check-item');
    const fill = card.querySelector('.pk-progress-fill');
    const txt = card.querySelector('.pk-progress-txt');
    const updateProgress = () => {
      const done = card.querySelectorAll('.pk-check-item.done').length;
      const total = items.length;
      const pct = total ? Math.round((done / total) * 100) : 0;
      if (fill) fill.style.width = pct + '%';
      if (txt) txt.textContent = `${done}/${total} langkah selesai (${pct}%)`;
    };
    items.forEach((item) => {
      item.addEventListener('click', () => {
        item.classList.toggle('done');
        updateProgress();
      });
    });
    updateProgress();
  });

  /* ---------- 4. Kuis Evaluasi 15 soal ---------- */
  const QUIZ_DATA = [
    { topic: 'Struktur Data', q: 'Struktur data yang terdiri atas simpul (vertex) dan sisi (edge) yang menghubungkan antarsimpul disebut...',
      options: ['Graf', 'Antrean (Queue)', 'Larik (Array)', 'Tumpukan (Stack)'], correct: 0,
      explain: 'Graf adalah struktur data yang terdiri atas simpul dan sisi penghubung antarsimpul, tanpa harus berbentuk hierarki.' },
    { topic: 'Struktur Data', q: 'Simpul teratas atau simpul awal pada sebuah tree (pohon) disebut...',
      options: ['Leaf', 'Root', 'Edge', 'Sibling'], correct: 1,
      explain: 'Root adalah simpul teratas dalam tree, tempat semua cabang lain bermula.' },
    { topic: 'Struktur Data', q: 'Simpul pada tree yang tidak memiliki anak (cabang) lagi disebut...',
      options: ['Root', 'Parent', 'Leaf', 'Child'], correct: 2,
      explain: 'Leaf (daun) adalah simpul ujung pada tree yang tidak memiliki simpul anak.' },
    { topic: 'Struktur Data', q: 'Perbedaan utama tree dibanding graf pada umumnya adalah...',
      options: ['Tree tidak memiliki simpul', 'Tree tersusun hierarkis dan tidak memiliki siklus (loop)', 'Tree hanya boleh memiliki satu simpul', 'Tree tidak dapat digambar'], correct: 1,
      explain: 'Tree adalah graf khusus yang tersusun hierarkis (root → child → leaf) dan tidak memiliki siklus/loop.' },
    { topic: 'Struktur Data', q: 'Berikut ini contoh penerapan graf dalam kehidupan sehari-hari adalah...',
      options: ['Struktur folder di komputer', 'Peta rute jalan antarkota', 'Silsilah keluarga', 'Daftar isi buku'], correct: 1,
      explain: 'Peta rute jalan antarkota cocok dimodelkan sebagai graf karena kota dapat terhubung ke banyak kota lain tanpa hierarki tetap.' },
    { topic: 'Ekspresi & Operasi Logika', q: 'Sebuah ekspresi logika hanya dapat menghasilkan dua kemungkinan nilai, yaitu...',
      options: ['Besar dan Kecil', 'Benar (True) dan Salah (False)', 'Positif dan Negatif', 'Genap dan Ganjil'], correct: 1,
      explain: 'Ekspresi logika selalu bernilai Benar (True) atau Salah (False), tidak ada nilai lain.' },
    { topic: 'Ekspresi & Operasi Logika', q: 'Operator logika yang hasilnya Benar hanya jika kedua pernyataan bernilai Benar adalah...',
      options: ['OR', 'NOT', 'AND', 'XOR'], correct: 2,
      explain: 'Operator AND hanya menghasilkan Benar jika kedua operand bernilai Benar.' },
    { topic: 'Ekspresi & Operasi Logika', q: 'Operator logika yang hasilnya Benar jika salah satu dari dua pernyataan bernilai Benar adalah...',
      options: ['AND', 'OR', 'NOT', 'XOR'], correct: 1,
      explain: 'Operator OR menghasilkan Benar jika minimal salah satu pernyataan bernilai Benar.' },
    { topic: 'Ekspresi & Operasi Logika', q: 'Operator yang berfungsi membalik nilai kebenaran suatu pernyataan disebut...',
      options: ['AND', 'OR', 'NOT', 'XOR'], correct: 2,
      explain: 'Operator NOT membalik nilai kebenaran: Benar menjadi Salah, dan sebaliknya.' },
    { topic: 'Ekspresi & Operasi Logika', q: 'Nilai dari ekspresi (5 > 3) AND (2 > 4) adalah...',
      options: ['Benar', 'Salah', 'Tidak dapat ditentukan', 'Benar dan Salah'], correct: 1,
      explain: '(5 > 3) bernilai Benar, tetapi (2 > 4) bernilai Salah. Karena AND butuh keduanya Benar, hasil akhirnya Salah.' },
    { topic: 'Ekspresi & Operasi Logika', q: 'Nilai dari ekspresi (5 > 3) OR (2 > 4) adalah...',
      options: ['Benar', 'Salah', 'Tidak dapat ditentukan', 'Keduanya Salah'], correct: 0,
      explain: '(5 > 3) bernilai Benar. Karena OR cukup satu pernyataan Benar, maka hasil akhirnya Benar.' },
    { topic: 'Algoritma', q: 'Urutan langkah logis dan runtut untuk menyelesaikan suatu persoalan disebut...',
      options: ['Algoritma', 'Database', 'Flowchart saja', 'Sistem operasi'], correct: 0,
      explain: 'Algoritma adalah urutan langkah logis dan runtut untuk menyelesaikan sebuah persoalan.' },
    { topic: 'Algoritma', q: 'Berikut ini yang BUKAN merupakan ciri algoritma yang baik adalah...',
      options: ['Memiliki urutan langkah yang pasti', 'Berhingga (pasti berhenti)', 'Setiap langkah dapat dikerjakan (efektif)', 'Langkahnya boleh ambigu/tidak jelas'], correct: 3,
      explain: 'Algoritma yang baik harus jelas dan tidak ambigu di setiap langkahnya, bukan sebaliknya.' },
    { topic: 'Algoritma', q: 'Bentuk penyajian algoritma yang menggunakan simbol-simbol visual seperti persegi panjang dan belah ketupat disebut...',
      options: ['Pseudocode', 'Kalimat deskriptif', 'Flowchart (diagram alir)', 'Tabel kebenaran'], correct: 2,
      explain: 'Flowchart adalah bentuk penyajian algoritma secara visual menggunakan simbol-simbol standar seperti persegi panjang dan belah ketupat.' },
    { topic: 'Algoritma', q: 'Sebelum menyusun sebuah algoritma, langkah pertama yang paling penting dilakukan adalah...',
      options: ['Langsung menulis kode program', 'Memahami persoalan dengan jelas', 'Menggambar flowchart tanpa berpikir', 'Menentukan warna tampilan program'], correct: 1,
      explain: 'Memahami persoalan dengan jelas adalah langkah awal yang penting agar algoritma yang disusun benar-benar menyelesaikan masalah yang dimaksud.' },
  ];

  const quizContainer = document.getElementById('quiz-container');
  if (quizContainer) {
    const checkBtn = document.getElementById('quiz-check-btn');
    const resetBtn = document.getElementById('quiz-reset-btn');
    const progressTxt = document.getElementById('quiz-progress-txt');
    const scoreBanner = document.getElementById('quiz-score-banner');
    const scoreEl = document.getElementById('qsb-score');
    const msgEl = document.getElementById('qsb-msg');

    const renderQuiz = () => {
      quizContainer.innerHTML = QUIZ_DATA.map((item, qi) => `
        <div class="quiz-item" data-qindex="${qi}">
          <div class="quiz-item-head">
            <div class="quiz-num">${qi + 1}</div>
            <div>
              <p class="quiz-question">${item.q}</p>
              <span class="quiz-topic-tag"><i class="fa-solid fa-tag"></i> ${item.topic}</span>
            </div>
          </div>
          <div class="quiz-options">
            ${item.options.map((opt, oi) => `
              <div class="quiz-option" data-oindex="${oi}">
                <span class="qo-dot"></span>
                <span class="qo-label">${opt}</span>
              </div>
            `).join('')}
          </div>
          <div class="quiz-explain"><i class="fa-solid fa-lightbulb" style="color:var(--accent-2);margin-right:6px;"></i>${item.explain}</div>
        </div>
      `).join('');

      quizContainer.querySelectorAll('.quiz-item').forEach((itemEl) => {
        itemEl.querySelectorAll('.quiz-option').forEach((optEl) => {
          optEl.addEventListener('click', () => {
            if (itemEl.classList.contains('checked')) return;
            itemEl.querySelectorAll('.quiz-option').forEach((o) => o.classList.remove('selected'));
            optEl.classList.add('selected');
            updateProgress();
          });
        });
      });
    };

    const updateProgress = () => {
      const answered = quizContainer.querySelectorAll('.quiz-option.selected').length;
      if (progressTxt) progressTxt.textContent = `${answered}/${QUIZ_DATA.length} soal terjawab`;
    };

    const checkQuiz = () => {
      let score = 0;
      quizContainer.querySelectorAll('.quiz-item').forEach((itemEl) => {
        const qi = parseInt(itemEl.dataset.qindex, 10);
        const correctIndex = QUIZ_DATA[qi].correct;
        const selected = itemEl.querySelector('.quiz-option.selected');
        const selectedIndex = selected ? parseInt(selected.dataset.oindex, 10) : -1;
        const isCorrect = selectedIndex === correctIndex;
        if (isCorrect) score++;

        itemEl.classList.add('checked');
        itemEl.classList.toggle('is-correct', isCorrect);
        itemEl.classList.toggle('is-wrong', !isCorrect);

        itemEl.querySelectorAll('.quiz-option').forEach((optEl) => {
          const oi = parseInt(optEl.dataset.oindex, 10);
          if (oi === correctIndex) optEl.classList.add('correct-answer');
          if (optEl.classList.contains('selected') && oi !== correctIndex) optEl.classList.add('wrong-answer');
        });
      });

      if (scoreEl) scoreEl.textContent = `${score} / ${QUIZ_DATA.length}`;
      if (scoreBanner) {
        scoreBanner.classList.remove('is-pass', 'is-fail');
        scoreBanner.classList.add(score >= Math.ceil(QUIZ_DATA.length * 0.6) ? 'is-pass' : 'is-fail');
      }
      if (msgEl) {
        const pct = Math.round((score / QUIZ_DATA.length) * 100);
        if (pct === 100) msgEl.textContent = 'Sempurna! Kamu benar-benar memahami Bab 2 dengan baik. 🎉';
        else if (pct >= 60) msgEl.textContent = `Bagus! Skormu ${pct}%. Cek kembali penjelasan pada soal yang masih salah.`;
        else msgEl.textContent = `Skormu ${pct}%. Yuk baca ulang materi struktur data, logika, dan algoritma di atas, lalu coba lagi.`;
      }
      scoreBanner && scoreBanner.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const resetQuiz = () => {
      renderQuiz();
      updateProgress();
      if (scoreEl) scoreEl.textContent = `0 / ${QUIZ_DATA.length}`;
      if (msgEl) msgEl.textContent = 'Jawab semua soal di bawah, lalu periksa hasilnya di sini.';
      if (scoreBanner) scoreBanner.classList.remove('is-pass', 'is-fail');
    };

    renderQuiz();
    updateProgress();
    if (checkBtn) checkBtn.addEventListener('click', checkQuiz);
    if (resetBtn) resetBtn.addEventListener('click', resetQuiz);
  }

  /* ---------- 5. Reading progress dot pada TOC (opsional, scrollspy ringan) ---------- */
  const tocLinks = document.querySelectorAll('.materi-toc a');
  const sections = Array.from(tocLinks).map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = '#' + entry.target.id;
        const link = document.querySelector(`.materi-toc a[href="${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          tocLinks.forEach((l) => l.classList.remove('is-active'));
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    sections.forEach((s) => spy.observe(s));
  }

});