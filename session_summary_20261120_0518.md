# Session Summary

**Date & Time:** 2026-11-20 05:18  
**Course:** Analisis Deret Waktu dan Peramalan (TEE-412) — S1 Teknik Elektro FT UNIB

## Work Accomplished

1. **Audit & Analisis SWOT Proyek**:
   - Mengaudit seluruh ekosistem mata kuliah (RPS OBE, 13 modul LaTeX Beamer/Problem Sets/Worksheets, Buku Praktikum 12 bab, paket UTS, skrip Python, dan portal web Astro 7).
   - Mengidentifikasi kekuatan, kelemahan, peluang, ancaman, serta menyusun matriks TOWS dan prioritas Quick Wins & Penguatan Jangka Menengah.

2. **Quick Wins (Kebersihan, Keamanan, Bug Fixes, & Git Baseline)**:
   - Memisahkan dokumen rahasia ujian (`naskah_uts_*`, `kunci_uts_*`, `kriteria_uts_*`) ke `private-exams/` dengan pembaruan path logo (`../assets/logo_unib.png`) dan proteksi `.gitignore`.
   - Menghapus 195 file artefak build LaTeX, file uji `temp_test.*`, serta duplikasi folder tidak terpakai `web/public/pdf/` (~5,6 MB).
   - Menyinkronkan `worksheet_ch1.pdf` terbaru dan mempublikasikan `kisi_kisi_mahasiswa_deret_waktu.pdf` ke `web/public/documents/`.
   - Memperbaiki bug navigasi Minggu 7 ↔ Minggu 9 di `web/src/pages/materi/[week].astro`, menyelaraskan label 13 modul / 16 minggu OBE di seluruh komponen web, membuat `DocSidebar.astro` dinamis, serta menambahkan baris Minggu 8 (UTS), Minggu 15 (Proyek), dan Minggu 16 (UAS) di `rps.astro`.
   - Menghilangkan *data leakage* sintetis pada `ForecastingStudio.astro` dengan mengganti mode SARIMA dan LSTM menjadi estimator kausal penuh berbasis data sensor historis, memperbaiki satuan derau dinamis (`MW`/`kW`/`°C`), dan memperbaiki ekspor CSV.
   - Memperbaiki path CSV relatif portabel pada `latihanbab1/latihanbab1.py`.
   - Menginisialisasi repositori Git lokal dan membuat commit baseline.

3. **Paket Lengkap UAS & Panduan Proyek Akhir IEEE (LaTeX → PDF)**:
   - Membuat & mengompilasi dokumen publik: `kisi_kisi_uas_deret_waktu.tex/.pdf` dan `panduan_proyek_akhir_deret_waktu.tex/.pdf` (8 tema, protokol anti-leakage, struktur IEEE 2-kolom, rubrik Presentasi 10% & Laporan 15%), lalu menautkannya di `courseData.ts` dan `rps.astro`.
   - Membuat & mengompilasi dokumen rahasia di `private-exams/`: `naskah_uas_deret_waktu.tex/.pdf`, `kunci_uas_deret_waktu.tex/.pdf`, dan `kriteria_uas_deret_waktu.tex/.pdf` (CPMK-3/4/5, 6 soal C1–C6, 100 poin).
   - Menambahkan `Makefile` untuk otomatisasi kompilasi LaTeX, sinkronisasi PDF/notebook publik, pembersihan artefak, dan build Astro, serta memperbarui `web/README.md` dan `labs/requirements.txt`.

4. **Bundel 12 Notebook Praktikum (`.ipynb` siap Google Colab) & Bundel Lokal KaTeX/Lucide**:
   - Menghasilkan 12 notebook mandiri (`labs/modul_01_dekomposisi.ipynb` s.d. `labs/modul_12_probabilistic_bess_mpc.ipynb`), memvalidasi sintaks AST seluruh sel, melakukan *smoke-test* eksekusi (Modul 1, 7, 12 berjalan sukses), dan menautkan tombol unduh `.ipynb` pada `praktikum.astro` & `materi/[week].astro`.
   - Menghapus ketergantungan CDN `unpkg.com` (Lucide) dan `cdn.jsdelivr.net` (MathJax) dari `web/src/layouts/Layout.astro`, menggantinya dengan bundel lokal `katex` (CSS + 19 font `.woff2` + `auto-render`) dan 37 ikon `lucide` ter-*tree-shake*.
   - Memverifikasi `npm run build` membangun 18 halaman statis secara bersih tanpa galat dan tanpa ketergantungan skrip CDN eksternal.

## Next Steps
- Opsional: Sinkronkan `web/dist/` ke repositori produksi `ndaratha.my.id` untuk memperbarui situs Vercel.
- Opsional: Tambahkan tautan remote GitHub (private/public sesuai kebutuhan; `private-exams/` sudah di-ignore secara penuh).
