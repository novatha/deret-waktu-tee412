# Session Summary

**Date & Time:** 2026-11-21 14:05  
**Course:** Analisis Deret Waktu dan Peramalan (TEE-412) — S1 Teknik Elektro FT UNIB

## Work Accomplished

1. **Prioritas 1 — GitHub Remote & Tombol "Buka di Google Colab" 1-Klik**:
   - Menghapus duplikat minor `latihanbab1/modul_praktikum_deret_waktu.pdf`.
   - Menambahkan helper `getColabUrl()` di `web/src/data/courseData.ts` dan tombol 1-klik **Buka di Colab** (`https://colab.research.google.com/github/novatha/deret-waktu-tee412/blob/main/labs/modul_*.ipynb`) pada `web/src/pages/praktikum.astro` dan `web/src/pages/materi/[week].astro`.
   - Membuat repositori publik GitHub `novatha/deret-waktu-tee412` sebagai *remote backup* penuh seluruh sumber publik (LaTeX, 12 notebook praktikum, portal Astro) dengan `private-exams/` tetap 100% terisolasi via `.gitignore`.

2. **Prioritas 2 — Fitur Upload CSV Mandiri di Virtual Forecasting Studio**:
   - Menambahkan tombol **Upload CSV** + parser CSV tangguh di `web/src/components/ForecastingStudio.astro` (mendukung pemisah `,` atau `;`, deteksi otomatis kolom numerik/waktu, hingga 168 titik terakhir, dan seluruh 4 estimator kausal + ekspor CSV).
   - Menambahkan ikon lokal `ExternalLink` dan `Upload` ke bundel Lucide di `web/src/layouts/Layout.astro`.

3. **Prioritas 3 — Kunci Jawaban & Pedoman Penskoran Problem Sets (13 Modul, C1–C6)**:
   - Menyusun dan mengompilasi `private-exams/kunci_problem_sets_deret_waktu.tex/.pdf` yang memuat solusi terverifikasi secara numerik dan pedoman penskoran untuk seluruh 13 Problem Sets (Bab 1–7, 9–14, level Bloom C1–C6), aman tersimpan di `private-exams/` (gitignored).

4. **Build & Deployment Produksi**:
   - Membangun ulang portal Astro (`npm run build`, 18 halaman statis) dan memverifikasi 12/12 tautan Colab serta tombol Upload CSV.
   - Menyinkronkan `web/dist/` ke `ndaratha.my.id/public/deret-waktu/` dan mendorong perubahan ke GitHub `main` untuk memicu pembaruan Vercel.
