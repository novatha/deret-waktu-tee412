# Ringkasan Sesi Pembaruan Portal Web Analisis Deret Waktu & Peramalan
**Tanggal & Waktu**: 21 Agustus 2026, 09:23 WIB  
**Mata Kuliah**: Analisis Deret Waktu dan Peramalan (TEE-412 / 3 SKS) — Program Studi S1 Teknik Elektro, Universitas Bengkulu  
**Status**: Berhasil Dimutakhirkan, Disinkronkan, dan Dideploy ke Produksi (`https://www.ndaratha.my.id/deret-waktu/`)

---

## 1. Pembaruan Bahan Ajar dari `/Users/novaliodaratha/Documents/2026/mengajar/Deret Waktu`
- **Slide Beamer 16:9 Terbaru**:
  - `ch2.pdf`: Stasioneritas, Diferensiasi, dan Uji ADF/KPSS.
  - `ch3.pdf`: Model Autoregresif (AR) dan Estimasi Yule-Walker.
  - `ch4.pdf`: Model Moving Average (MA) dan Invertibilitas.
  - `ch5.pdf`: Model ARMA Campuran dan Kriteria AIC/BIC.
  - `ch6.pdf`: Model ARIMA Non-Stasioner & Metodologi Box-Jenkins.
- **Problem Sets & Latihan Soal (Bloom C1–C6)**:
  - `problem_set_ch2.pdf` & `problem_set_ch3.pdf`.
- **Diktat Modul Praktikum Komprehensif**:
  - `modul_praktikum_deret_waktu.pdf` (312 KB) mencakup panduan lab Python/Statsmodels dari Modul 1 hingga Modul 14.

---

## 2. Sinkronisasi Aset & Web Portal
- Seluruh file PDF (`ch1.pdf` s.d `ch14.pdf`, `problem_set_ch1.pdf` s.d `problem_set_ch14.pdf`, `rps_deret_waktu_elektro.pdf`, `modul_praktikum_deret_waktu.pdf`) telah disinkronkan ke direktori `web/public/documents/` dan `web/public/pdf/`.
- Kompilasi build Astro berhasil (18 halaman statis).
- Aset web statis disinkronkan ke `ndaratha.my.id/public/deret-waktu/`.

---

## 3. Deployment Produksi
- Perubahan berhasil dikomit dan dipush ke cabang `main` di GitHub.
- Deployment Vercel production berhasil dengan status *Ready*.
- Terverifikasi live di: [https://www.ndaratha.my.id/deret-waktu/](https://www.ndaratha.my.id/deret-waktu/).
