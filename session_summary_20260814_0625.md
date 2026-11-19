# Ringkasan Sesi Pengembangan: Website Astro & Bahan Ajar Analisis Deret Waktu

**Tanggal**: 14 Agustus 2026  
**Mata Kuliah**: Analisis Deret Waktu dan Peramalan (*Time Series Analysis and Forecasting* - TEE-412 / 3 SKS)  
**Program Studi**: S1 Teknik Elektro, Fakultas Teknik, Universitas Bengkulu  
**Dosen Pengampu**: Ir. Novalio Daratha, S.T., M.Sc., Ph.D.  
**Ketua Jurusan**: Ir. Afriyastuti Herawati, S.T., M.T.  

---

## 1. Pekerjaan yang Telah Diselesaikan
1. **Pembuatan Seluruh Bahan Ajar Semester (Minggu 1 s.d. 14)**:
   - **Slide Beamer Modern (16:9)**: `ch1.pdf` s.d. `ch14.pdf` lengkap dengan format presentasi profesional.
   - **Lembar Soal Problem Set Taksonomi Bloom (C1–C6)**: `problem_set_ch1.pdf` s.d. `problem_set_ch14.pdf` berbasis LaTeX rapi dan estetis.
   - **Dokumen Silabus RPS OBE**: `rps_deret_waktu_elektro.pdf` (16 Minggu terstruktur).
   - **Buku Petunjuk Praktikum**: `modul_praktikum_deret_waktu.pdf` (14 Modul hands-on Python/PyTorch).
2. **Pembangunan Website Perkuliahan Berbasis Astro Framework**:
   - Direktori proyek: `web/`
   - Dibangun dengan Astro SSG modern, vanilla CSS design token system (Dark/Light mode switchable), dan Chart.js live simulation engine.
   - Semua dokumen PDF materi diintegrasikan dan dapat diunduh langsung melalui web.
   - **Halaman Web yang Tersedia**:
     - `index.html` (Beranda interaktif, filter kategori materi, pencarian instan, mini simulator deret waktu).
     - `rps/index.html` (Silabus kurikulum OBE, CPMK 1–5, dan jadwal 16 minggu).
     - `praktikum/index.html` (Daftar 14 modul praktikum hands-on).
     - `sandbox/index.html` (Laboratorium virtual interaktif simulasi sinyal beban PLN, PLTS, dan tuning Kalman Filter).
     - `materi/minggu-[1-14]/index.html` (Halaman modul perkuliahan dinamis dengan formulasi matematika KaTeX, pokok bahasan, cuplikan kode Python, dan tautan unduh slide/soal).
3. **Kompilasi & Build Berhasil**:
   - `npm run build` sukses mengompilasi 17 rute statis tanpa galat.
   - Dev server aktif berjalan di `http://localhost:4323`.

---

## 2. Struktur Berkas Proyek Web
- `web/src/data/courseData.ts` : Basis data TypeScript seluruh materi kuliah & CPMK.
- `web/src/layouts/Layout.astro` : Shell utama dengan navigasi kaca (*glassmorphism*), footer, dan theme switch.
- `web/src/components/WeekCard.astro` : Kartu modul mingguan responsif.
- `web/src/pages/index.astro` : Halaman utama beranda & filter interaktif.
- `web/src/pages/rps.astro` : Halaman silabus RPS OBE.
- `web/src/pages/praktikum.astro` : Halaman panduan 14 modul laboratorium.
- `web/src/pages/sandbox.astro` : Laboratorium virtual deret waktu & Discrete Kalman Filter.
- `web/src/pages/materi/[week].astro` : Halaman dinamis materi perkuliahan mingguan.
- `web/public/documents/` : Penyimpanan seluruh berkas PDF (RPS, Modul Praktikum, Slide `ch*.pdf`, dan Problem Set `problem_set_*.pdf`).
