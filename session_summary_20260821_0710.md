# Ringkasan Sesi: Analisis & Perbaikan Komprehensif Bahan Ajar Minggu ke-2

**Tanggal**: 21 Agustus 2026  
**Mata Kuliah**: Analisis Deret Waktu dan Peramalan (*Time Series Analysis and Forecasting* - TEE-412 / 3 SKS)  
**Program Studi**: S1 Teknik Elektro, Fakultas Teknik, Universitas Bengkulu  
**Dosen Pengampu**: Ir. Novalio Daratha, S.T., M.Sc., Ph.D.  
**Ketua Jurusan**: Ir. Afriyastuti Herawati, S.T., M.T.  

---

## 1. Kelemahan yang Diidentifikasi pada Materi Minggu 2
1. **Kurangnya Penguatan Matematis pada Uji KPSS**: Sebelumnya uji KPSS hanya disebutkan secara kualitatif tanpa formula pengujian Lagrange Multiplier (LM test).
2. **Ketiadaan Matriks Keputusan Silang ADF vs KPSS**: Mahasiswa belum dibekali panduan 4 kuadran diagnostik untuk membedakan kondisi *Strictly Stationary*, *Difference-Stationary* (DSP), *Trend-Stationary* (TSP), dan *Structural Break*.
3. **Ketidakhadiran Hubungan Unit Root dengan Stabilitas Sistem Kendali LTI**: Belum dijelaskan kaitan pole $z = \phi$ pada lingkaran satuan bidang-Z dengan persistensi galat tak hingga (*infinite memory*).
4. **Transformasi Non-Stasioneritas Variansi Belum Tercantum**: Belum ada formulasi transformasi stabilisasi variansi Box-Cox / Logaritmik untuk mengatasi data berfluktuasi heteroskedastik.
5. **Fungsi Python Praktikum Kurang Lengkap**: Fungsi praktikum Modul 2 sebelumnya hanya memanggil ADF tanpa mengevaluasi KPSS secara otomatis.

---

## 2. Perbaikan & Pembaruan yang Telah Dilakukan
1. **Slide Beamer ([`ch2.tex`](file:///Users/novaliodaratha/Documents/2026/mengajar/Deret%20Waktu/ch2.tex))**:
   - Ditambahkan slide konsep *Unit Root* dalam perspektif bidang kompleks Z dan stabilitas sistem LTI.
   - Ditambahkan formulasi dekomposisi dan statistik LM pada uji KPSS.
   - Ditambahkan tabel 4 kuadran keputusan diagnostik ADF vs KPSS.
   - Ditambahkan formulasi transformasi Box-Cox untuk stabilisasi variansi sinyal.
   - Diperbarui contoh kode Python evaluasi komparatif ADF-KPSS.
   - Telah dikompilasi ulang menjadi [**`ch2.pdf`**](file:///Users/novaliodaratha/Documents/2026/mengajar/Deret%20Waktu/web/public/documents/ch2.pdf) (11 Halaman bebas galat).
2. **Buku Petunjuk Praktikum ([`modul_praktikum_deret_waktu.tex`](file:///Users/novaliodaratha/Documents/2026/mengajar/Deret%20Waktu/modul_praktikum_deret_waktu.tex))**:
   - Diperbarui fungsi `check_stationarity_full()` pada Modul 2 agar menguji ADF dan KPSS secara simultan serta memberikan keputusan otomatis 4 kuadran.
   - Telah dikompilasi ulang menjadi [**`modul_praktikum_deret_waktu.pdf`**](file:///Users/novaliodaratha/Documents/2026/mengajar/Deret%20Waktu/web/public/documents/modul_praktikum_deret_waktu.pdf) (18 Halaman bebas galat).
3. **Sinkronisasi Web Public Documents**:
   - Seluruh dokumen PDF terbaru telah disalin ke `web/public/documents/`.
