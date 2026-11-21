# Session Summary

**Date & Time:** 2026-11-21 14:30  
**Course:** Analisis Deret Waktu dan Peramalan (TEE-412) — S1 Teknik Elektro FT UNIB

## Work Accomplished (Eksekusi Rekomendasi Pasca-SOAR)

1. **Starter Kit Template Laporan Proyek Akhir IEEE**:
   - Menyusun `labs/template_laporan_ieee.tex` (`IEEEtran` 2-kolom berbahasa Indonesia) lengkap dengan struktur 6 bagian wajib, protokol anti-*data leakage*, contoh tabel hasil, dan deklarasi penggunaan AI.
   - Mengompilasi pratinjau `labs/template_laporan_ieee.pdf` (156 KB), menyalin `.tex` & `.pdf` ke `web/public/documents/`, dan menautkannya pada `web/src/pages/rps.astro`.

2. **Skrip Otomatis Portofolio Rekap CPMK OBE (LAM Teknik / IABEE)**:
   - Membuat `private-exams/rekap_cpmk_obe.py` + dataset contoh `private-exams/contoh_nilai_mahasiswa.csv` (tetap aman ter-gitignore di `private-exams/`).
   - Menguji eksekusi end-to-end yang otomatis menghasilkan `rekap_hasil_cpmk.csv`, `ringkasan_portofolio_obe.md` (status `TERCAPAI` vs. `PERLU EVALUASI (CQI)`), dan grafik `grafik_ketercapaian_cpmk.png`.

3. **Kuis Self-Check Interaktif (C1–C3) untuk Seluruh 13 Minggu**:
   - Menyusun 39 soal pilihan ganda kontekstual (3 soal per minggu × 13 minggu) beserta umpan balik & pembahasan instan di `web/src/data/selfCheckQuizzes.ts` dan komponen `web/src/components/SelfCheckQuiz.astro`.
   - Menyematkan kuis interaktif murni sisi-klien (tanpa backend) pada seluruh 13 halaman `web/src/pages/materi/[week].astro`.

4. **Katalog 3 Dataset Praktikum Kelistrikan Terkurasi (`.CSV`, 168 Jam)**:
   - Membuat `labs/datasets/beban_cuaca_regional_168h.csv`, `plts_500kwp_iradiasi_168h.csv`, `smartmeter_anomaly_168h.csv`, dan `labs/datasets/README.md`, menyinkronkannya ke `web/public/datasets/`, serta menampilkannya di `web/src/pages/praktikum.astro` untuk praktikum Colab & fitur **Upload CSV** Virtual Studio.

5. **Draf Dokumen Deskripsi & Manual Ciptaan HKI (DJKI / LPPM UNIB)**:
   - Menyusun dan mengompilasi `hki/dokumen_pendaftaran_hki_tee412.tex` → `hki/dokumen_pendaftaran_hki_tee412.pdf` (559 KB) yang mencakup spesifikasi pendaftaran 2 HKI sekaligus: Program Komputer (Portal Web & Virtual Forecasting Studio) dan Modul Ajar OBE C1–C6.

6. **Verifikasi, Push GitHub, & Deployment Produksi**:
   - Memperbarui `Makefile`, membangun ulang Astro (`npm run build`, 18 halaman statis), mendorong commit ke `github.com/novatha/deret-waktu-tee412`, serta menyinkronkan dan mem-push `web/dist/` ke `github.com/novatha/ndaratha.my.id` (`main`) untuk deployment otomatis Vercel.
