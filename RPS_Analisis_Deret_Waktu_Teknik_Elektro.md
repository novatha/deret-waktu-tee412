# RENCANA PEMBELAJARAN SEMESTER (RPS)
## PROGRAM STUDI TEKNIK ELEKTRO - FAKULTAS TEKNIK
### MATA KULIAH: ANALISIS DERET WAKTU DAN PERAMALAN (*TIME SERIES ANALYSIS AND FORECASTING*)

---

## 1. INFORMASI UMUM MATA KULIAH

| Item | Deskripsi |
| :--- | :--- |
| **Nama Mata Kuliah** | Analisis Deret Waktu dan Peramalan (*Time Series Analysis and Forecasting*) |
| **Kode Mata Kuliah** | TEE-412 |
| **Rumpun Mata Kuliah** | Sistem Tenaga Listrik, Sistem Kendali, & Komputasi Cerdas |
| **Bobot (SKS)** | 3 SKS (2 SKS Kuliah Teori, 1 SKS Praktikum Komputasi) |
| **Semester** | VI (Enam) / VII (Tujuh) |
| **Status Mata Kuliah** | Mata Kuliah Pilihan Keahlian |
| **Mata Kuliah Prasyarat** | 1. Matematika Teknik (Kalkulus & Aljabar Linier)<br>2. Probabilitas dan Statistik Teknik<br>3. Pemrosesan Sinyal Digital / Dasar Pemrograman (Python/MATLAB/Octave) |
| **Dosen Pengembang RPS** | Ir. Novalio Daratha, S.T., M.Sc., Ph.D. |
| **Koordinator KBK** | Koordinator KBK Teknik Elektro |
| **Ketua Jurusan / Prodi** | Ir. Afriyastuti Herawati, S.T., M.T. |

---

## 2. DESKRIPSI SINGKAT MATA KULIAH

Mata kuliah **Analisis Deret Waktu dan Peramalan** memberikan pemahaman mendalam tentang teori, metodologi, dan implementasi komputasi untuk menganalisis serta memprediksi data yang memiliki dependensi temporal dalam bidang teknik elektro. Mahasiswa akan mempelajari karakteristik data deret waktu keteknikan (seperti beban sistem tenaga, fluktuasi pembangkit EBT surya/angin, data sensor telemetri IoT, dan kualitas daya). 

Pembahasan mencakup metode statistik klasik (dekomposisi, pemulusan eksponensial, keluarga model ARMA/ARIMA/SARIMAX), estimasi *State-Space* linier (*Kalman Filter*), analisis domain frekuensi/wavelet, hingga pendekatan kecerdasan buatan mutakhir (*Machine Learning* dan *Deep Learning* seperti XGBoost, LSTM/GRU, dan dasar Transformer). Pembelajaran dilengkapi dengan praktikum berbasis proyek nyata (*Project-Based Learning*) menggunakan dataset riil sistem kelistrikan dan industri.

---

## 3. CAPAIAN PEMBELAJARAN LULUSAN (CPL) & CAPAIAN PEMBELAJARAN MATA KULIAH (CPMK)

### A. Capaian Pembelajaran Lulusan (CPL) yang Dibebankan pada Mata Kuliah

* **CPL-1 (Sains & Keteknikan)**: Mampu menerapkan pengetahuan matematika, sains, dan prinsip rekayasa teknik elektro untuk mengidentifikasi, memformulasi, dan menyelesaikan masalah peramalan dan pemodelan sistem dinamis.
* **CPL-2 (Perancangan & Eksperimen)**: Mampu merancang eksperimen komputasi, mengolah data deret waktu multivariat, menganalisis pola, serta menarik kesimpulan berbasis bukti matematis dan statistik.
* **CPL-3 (Penggunaan Perangkat Modern)**: Mampu memilih dan memanfaatkan teknik, keterampilan, serta perangkat komputasi modern (Python/MATLAB/Octave, *library* ML/DL) yang diperlukan untuk praktik rekayasa elektro.
* **CPL-4 (Tanggung Jawab & Komunikasi)**: Mampu mengomunikasikan hasil analisis keteknikan secara efektif dalam bentuk laporan teknis dan presentasi ilmiah.

---

### B. Capaian Pembelajaran Mata Kuliah (CPMK)

* **CPMK-1**: Mampu menjelaskan konsep dasar deret waktu keteknikan, komponen pembentuknya, serta melakukan uji stasioneritas dan analisis korelasi (CPL-1).
* **CPMK-2**: Mampu memodelkan dan mengevaluasi peramalan menggunakan metode statistik klasik (*Smoothing*, ARIMA, SARIMAX) dan estimasi *state-space* (*Kalman Filter*) pada sistem linier (CPL-1, CPL-2).
* **CPMK-3**: Mampu menganalisis sinyal deret waktu non-stasioner pada domain frekuensi dan waktu-frekuensi (FFT, Wavelet) untuk ekstraksi fitur dan deteksi anomali sistem elektro (CPL-1, CPL-2).
* **CPMK-4**: Mampu merancang, melatih, dan mengoptimalkan model *Machine Learning* (Tree-based) dan *Deep Learning* (LSTM, GRU, 1D-CNN) untuk peramalan multi-langkah (*multi-step ahead*) dan deteksi gangguan (CPL-2, CPL-3).
* **CPMK-5**: Mampu menyelesaikan studi kasus rekayasa kelistrikan riil (peramalan beban listrik, peramalan radiasi PV/angin, degradasi aset) dalam bentuk proyek berbasis tim (*Team-Based Project*) secara komprehensif (CPL-3, CPL-4).

---

### C. Sub-Capaian Pembelajaran Mata Kuliah (Sub-CPMK)

* **Sub-CPMK 1**: Mampu mengidentifikasi komponen tren, musiman, siklis, dan residu pada data kelistrikan serta memvisualisasikannya (Minggu 1).
* **Sub-CPMK 2**: Mampu menghitung ACF/PACF, menguji stasioneritas (ADF, KPSS), dan melakukan transformasi diferensiasi data (Minggu 2).
* **Sub-CPMK 3**: Mampu menerapkan metode pemulusan (*Moving Average*, Holt-Winters aditif/multiplikatif) untuk peramalan jangka pendek (Minggu 3).
* **Sub-CPMK 4**: Mampu menyusun persamaan proses AR, MA, ARMA, mengevaluasi kestabilan sistem pada bidang Z, dan memilih ordo berbasis AIC/BIC (Minggu 4).
* **Sub-CPMK 5**: Mampu menerapkan metodologi Box-Jenkins untuk pemodelan ARIMA dan SARIMA pada data beban bersiklus musiman (Minggu 5).
* **Sub-CPMK 6**: Mampu membangun model ARMAX dan SARIMAX dengan mengintegrasikan variabel eksogen (cuaca, suhu, hari libur) (Minggu 6).
* **Sub-CPMK 7**: Mampu memformulasikan model *State-Space* dan mengimplementasikan *Discrete Kalman Filter* untuk estimasi *state* & peredaman *noise* sinyal sensor (Minggu 7).
* **Sub-CPMK 8**: Mampu menganalisis spektrum frekuensi sinyal deret waktu menggunakan FFT dan dekomposisi Wavelet untuk deteksi transien/harmonisa (Minggu 9).
* **Sub-CPMK 9**: Mampu melakukan *feature engineering* temporal (*lag*, *rolling window*) dan menerapkan algoritma *Supervised Regression* (XGBoost/LightGBM) (Minggu 10).
* **Sub-CPMK 10**: Mampu merancang arsitektur RNN, LSTM, dan GRU untuk menangani ketergantungan temporal jangka panjang data EBT (Minggu 11).
* **Sub-CPMK 11**: Mampu menyusun model *Seq2Seq* / 1D-CNN dan menjelaskan prinsip *Attention Mechanism* untuk peramalan multi-step (Minggu 12).
* **Sub-CPMK 12**: Mampu menerapkan metode *Anomaly Detection* (Autoencoder, Isolation Forest) pada profil konsumsi daya dan sensor kelistrikan (Minggu 13).
* **Sub-CPMK 13**: Mampu mengintegrasikan peramalan ke dalam optimasi operasi sistem tenaga (*Unit Commitment* / manajemen BESS) dan kuantisasi ketidakpastian (Minggu 14).
* **Sub-CPMK 14**: Mampu mempresentasikan laporan akhir proyek peramalan sistem elektro secara sistematis dan ilmiah (Minggu 15).

---

## 4. MATRIKS KORELASI CPL TERHADAP CPMK

| CPMK | CPL-1 (Sains & Enjiniring) | CPL-2 (Perancangan & Analisis) | CPL-3 (Perangkat Modern) | CPL-4 (Komunikasi & Etika) |
| :---: | :---: | :---: | :---: | :---: |
| **CPMK-1** | ✅ (Tinggi) | ✅ (Sedang) | ⬜ | ⬜ |
| **CPMK-2** | ✅ (Tinggi) | ✅ (Tinggi) | ✅ (Sedang) | ⬜ |
| **CPMK-3** | ✅ (Tinggi) | ✅ (Tinggi) | ✅ (Sedang) | ⬜ |
| **CPMK-4** | ⬜ | ✅ (Tinggi) | ✅ (Tinggi) | ⬜ |
| **CPMK-5** | ⬜ | ✅ (Tinggi) | ✅ (Tinggi) | ✅ (Tinggi) |

---

## 5. RENCANA KEGIATAN PEMBELAJARAN MINGGUAN (16 MINGGU)

```
Keterangan Metode:
- Kuliah Teori: Interactive Lecturing, Contextual Learning, Small Group Discussion (SGD)
- Praktikum: Problem-Based Learning (PBL), Case Method, Project-Based Learning (PjBL)
```

| Mg | Sub-CPMK (Kemampuan Akhir) | Bahan Kajian (Materi Pokok) | Bentuk & Metode Pembelajaran [Estimasi Waktu] | Pengalaman Belajar & Tugas Mahasiswa | Kriteria & Bentuk Penilaian | Bobot Penilaian (%) |
| :---: | :--- | :--- | :--- | :--- | :--- | :---: |
| **1** | Mampu mengidentifikasi karakteristik dan komponen dasar deret waktu kelistrikan (Sub-CPMK 1) | • Karakteristik deret waktu teknik elektro (Profil beban, daya PV, fluktuasi tegangan, telemetri IoT).<br>• Komponen data: Tren, Musiman (*Seasonality* harian/mingguan/tahunan), Siklik, dan Residu/Noise.<br>• Model Aditif vs. Multiplikatif. | • Kuliah & Diskusi [TM: 2x50"]<br>• Praktikum 1: Visualisasi & Dekomposisi Klasik (Python: `statsmodels`) [P: 1x170"] | Mengunduh dataset beban listrik PLN/IEEE, melakukan visualisasi, serta mengekstraksi komponen tren dan musiman. | • Ketepatan dekomposisi sinyal<br>• Rubrik Partisipasi & Laporan Praktikum 1 | 3% |
| **2** | Mampu menguji stasioneritas dan menganalisis autokorelasi sinyal (Sub-CPMK 2) | • Konsep Stasioneritas (Kuat vs. Lemah/Kovarians).<br>• Uji Stasioneritas: ADF (*Augmented Dickey-Fuller*), KPSS.<br>• Fungsi Autokorelasi (ACF) dan *Partial Autocorrelation Function* (PACF).<br>• Transformasi data: *Differencing*, *Log Transform*, *Power Transform*. | • Kuliah & Latihan Soal [TM: 2x50"]<br>• Praktikum 2: Uji ADF/KPSS & Analisis Correlogram [P: 1x170"] | Menganalisis stasioneritas data daya gardu distribusi dan menentukan ordo *differencing* ($d$) yang tepat. | • Ketepatan interpretasi correlogram (ACF/PACF)<br>• Kuis 1 (LMS) | 4% |
| **3** | Mampu menerapkan metode pemulusan data untuk peramalan jangka pendek (Sub-CPMK 3) | • *Simple Moving Average* (SMA) & *Weighted Moving Average* (WMA).<br>• *Simple Exponential Smoothing* (SES) - Brown.<br>• *Holt's Linear Trend* & *Holt-Winters Seasonal Smoothing* (Aditif & Multiplikatif).<br>• Metrik evaluasi dasar: MAE, MSE, RMSE, MAPE. | • Kuliah Interaktif [TM: 2x50"]<br>• Praktikum 3: Peramalan Beban Jangka Pendek (*Very Short-Term Load Forecasting*) [P: 1x170"] | Membandingkan performa metode pemulusan eksponensial pada profil beban hari kerja vs. hari libur. | • Akurasi perhitungan metrik evaluasi<br>• Laporan Praktikum 3 | 4% |
| **4** | Mampu memodelkan dan mengevaluasi model AR, MA, dan ARMA (Sub-CPMK 4) | • Model *AutoRegressive* (AR($p$)) dan representasi operator *lag* $B$.<br>• Model *Moving Average* (MA($q$)).<br>• Model gabungan ARMA($p,q$).<br>• Kriteria kestabilan (*invertibility* & *stationarity* pada bidang Z / akar polinomial).<br>• Kriteria seleksi model: AIC, AICc, BIC. | • Kuliah & *Problem Solving* [TM: 2x50"]<br>• Praktikum 4: Identifikasi dan Estimasi Ordo ARMA [P: 1x170"] | Menentukan ordo $p$ dan $q$ berdasarkan plot ACF/PACF dan nilai AIC terkecil untuk pemodelan data sensor getaran. | • Ketepatan analisis kestabilan matematis<br>• Tugas Mandiri 1 | 5% |
| **5** | Mampu merancang model ARIMA dan SARIMA dengan metodologi Box-Jenkins (Sub-CPMK 5) | • Formulasi ARIMA($p,d,q$).<br>• Perluasan Musiman: SARIMA($p,d,q$)($P,D,Q$)$_s$.<br>• Metodologi Box-Jenkins 3-Tahap: Identifikasi, Estimasi Parameter (MLE/OLS), Uji Diagnostik Residu (Ljung-Box Test).<br>• *Residual Diagnostics* & *White Noise Checking*. | • Kuliah & Studi Kasus [TM: 2x50"]<br>• Praktikum 5: *Pipeline* Lengkap SARIMA untuk Data Listrik Berkala [P: 1x170"] | Melakukan peramalan beban listrik per-jam untuk 168 jam ke depan (1 minggu) menggunakan SARIMA dan memvalidasi independensi residual. | • Kelengkapan tahapan Box-Jenkins<br>• Laporan Praktikum 5 | 5% |
| **6** | Mampu membangun model dengan variabel eksogen (ARMAX/SARIMAX & VAR) (Sub-CPMK 6) | • Formulasi ARMAX dan SARIMAX.<br>• Seleksi dan korelasi silang (*Cross-Correlation Function* - CCF) variabel eksogen (Suhu udara, radiasi matahari, kelembaban, indeks tarif).<br>• Pengantar *Vector AutoRegression* (VAR) untuk data multi-kanal/multi-bus. | • Kuliah & Diskusi [TM: 2x50"]<br>• Praktikum 6: Pemodelan SARIMAX dengan Pengaruh Suhu [P: 1x170"] | Menguji dampak variabel suhu terhadap peramalan beban pendingin ruangan (*HVAC load*) gedung. | • Ketepatan pemodelan transfer function & eksogen<br>• Kuis 2 | 5% |
| **7** | Mampu menerapkan Kalman Filter untuk estimasi state dan filtrasi sinyal (Sub-CPMK 7) | • Representasi Ruang Keadaan (*State-Space Representation*).<br>• Persamaan Diskrit *State-Space* Sistem Dinamis Linier.<br>• Algoritma *Discrete Kalman Filter*: Tahap Prediksi (*Time Update*) dan Tahap Koreksi (*Measurement Update*).<br>• Matriks Kovariansi Gangguan ($Q$) dan Derau Pengukuran ($R$).<br>• Aplikasi: Estimasi *State-of-Charge* (SoC) baterai & filtrasi sensor arus/tegangan. | • Kuliah & Simulasi Numerik [TM: 2x50"]<br>• Praktikum 7: Implementasi Kalman Filter pada Sinyal Sensor Bising [P: 1x170"] | Menulis algoritma Kalman Filter dari nol (*from scratch*) untuk memulihkan sinyal telemetri sensor yang terdistorsi derau Gaussian. | • Kemampuan formulasi matriks state-space & konvergensi filter<br>• Laporan Praktikum 7 | 6% |
| **8** | **UJIAN TENGAH SEMESTER (UTS)** | **Materi Minggu 1 s.d. Minggu 7** (Evaluasi CPMK-1 dan CPMK-2) | **Ujian Tertulis & Analisis Kasus Komputasi [Waktu: 120 Menit]** | Mengerjakan soal analisis teoritis, perhitungan manual/skrip, dan interpretasi model peramalan statistik. | • Rubrik Penilaian UTS (Ketepatan matematis, penalaran konsep, interpretasi output) | **20%** |
| **9** | Mampu melakukan analisis domain frekuensi dan transformasi wavelet pada sinyal deret waktu (Sub-CPMK 8) | • Transformasi Fourier Diskrit (DFT / FFT) dan *Power Spectral Density* (PSD).<br>• Kelemahan Fourier pada sinyal non-stasioner/transien.<br>• *Short-Time Fourier Transform* (STFT).<br>• *Discrete Wavelet Transform* (DWT) & *Wavelet Packet Decomposition*.<br>• Aplikasi: Deteksi harmonisa beban non-linier dan gangguan busur api (*arc fault*). | • Kuliah [TM: 2x50"]<br>• Praktikum 8: Ekstraksi Fitur Spektral & Dekomposisi Wavelet [P: 1x170"] | Mendeteksi frekuensi dominan dan anomali transien pada sinyal arus motor listrik induksi menggunakan DWT. | • Ketepatan identifikasi harmonisa & dekomposisi sub-band<br>• Laporan Praktikum 8 | 4% |
| **10** | Mampu merancang rekayasa fitur temporal dan menerapkan algoritma Machine Learning (Sub-CPMK 9) | • Formulasi peramalan deret waktu sebagai *Supervised Learning* (*Sliding Window Technique*).<br>• *Feature Engineering*: *Lag features*, *Rolling window statistics* (Mean, Std, Max), *Exponential weights*, *Cyclical encoding* (sin/cos untuk jam/hari).<br>• Algoritma *Tree-Based*: Random Forest, XGBoost, LightGBM.<br>• Strategi Validasi: *Time Series Cross-Validation* (*Expanding Window* & *Rolling Window*). | • Kuliah [TM: 2x50"]<br>• Praktikum 9: *Short-Term Load Forecasting* (STLF) dengan XGBoost [P: 1x170"] | Membangun pipeline machine learning lengkap dengan rekayasa fitur kalender dan lag untuk memprediksi beban sistem tenaga. | • Kualitas rekayasa fitur dan evaluasi tanpa *data leakage*<br>• Tugas Mandiri 2 | 5% |
| **11** | Mampu merancang arsitektur Deep Learning RNN, LSTM, dan GRU (Sub-CPMK 10) | • Keterbatasan ANN/MLP konvensional pada data urutan waktu.<br>• Arsitektur *Recurrent Neural Network* (RNN) & masalah *Vanishing/Exploding Gradient*.<br>• Arsitektur *Long Short-Term Memory* (LSTM): *Forget Gate, Input Gate, Output Gate, Cell State*.<br>• *Gated Recurrent Unit* (GRU): *Update Gate, Reset Gate*.<br>• Normalisasi Data: *Min-Max Scaling*, *StandardScaler* khusus data berurutan. | • Kuliah & Analisis Arsitektur [TM: 2x50"]<br>• Praktikum 10: Peramalan Daya Pembangkit Surya (PV) / Angin dengan LSTM [P: 1x170"] | Melatih arsitektur LSTM dan GRU menggunakan PyTorch/TensorFlow untuk memprediksi daya keluaran PLTS berbasis data iradiasi matahari. | • Ketepatan penyiapan dimensi tensor sekuensial dan kurva *loss* konvergen<br>• Laporan Praktikum 10 | 5% |
| **12** | Mampu menyusun arsitektur sekuensial lanjut (1D-CNN, Seq2Seq, & Attention) (Sub-CPMK 11) | • *Temporal Convolutional Networks* (1D-CNN) untuk ekstraksi pola lokal deret waktu.<br>• Arsitektur *Encoder-Decoder* (Seq2Seq) untuk *multi-horizon forecasting*.<br>• Konsep *Self-Attention Mechanism* dan pengenalan arsitektur *Transformer* untuk deret waktu (*Informer / PatchTST*).<br>• Komparasi komputasi: Efisiensi waktu komputasi vs. Akurasi peramalan. | • Kuliah Interaktif [TM: 2x50"]<br>• Praktikum 11: Multi-Step Ahead Forecasting (24 Jam) dengan Model Seq2Seq / 1D-CNN [P: 1x170"] | Merancang model untuk memprediksi profil beban 24 jam ke depan secara simultan (*multi-output/recursive forecasting*). | • Analisis performa multi-horizon dan stabilitas error akumulatif<br>• Laporan Praktikum 11 | 5% |
| **13** | Mampu menerapkan metode deteksi anomali pada sistem kelistrikan (Sub-CPMK 12) | • Taksonomi Anomali: *Point anomalies, Contextual anomalies, Collective anomalies*.<br>• Metode Non-parametrik & Berbasis Densitas: *Isolation Forest*, *Local Outlier Factor* (LOF).<br>• Metode Rekonstruksi Berbasis *Deep Learning*: *LSTM Autoencoder*.<br>• Aplikasi: Deteksi pencurian listrik (*Non-Technical Losses*), kebocoran isolasi, anjloknya tegangan (*voltage sag*). | • Kuliah & Studi Kasus Industri [TM: 2x50"]<br>• Praktikum 12: Deteksi Pencurian Listrik & Anomali Sensor Smart Meter [P: 1x170"] | Mengembangkan model LSTM Autoencoder untuk mendeteksi manipulasi konsumsi listrik pada *smart meter* pelanggan. | • Metrik evaluasi anomali: Precision, Recall, F1-Score, ROC-AUC<br>• Laporan Praktikum 12 | 4% |
| **14** | Mampu mengintegrasikan peramalan ke dalam operasi daya dan kuantisasi ketidakpastian (Sub-CPMK 13) | • Integrasi hasil peramalan pada *Unit Commitment* (UC), *Economic Dispatch* (ED), dan *Model Predictive Control* (MPC).<br>• Kuantisasi Ketidakpastian: *Probabilistic Forecasting* (Interval Prediksi, *Quantile Loss Regression*, *Conformal Prediction*).<br>• Studi Kasus: Manajemen baterai BESS pada *Smart Microgrid* berbasis prediksi cuaca dan harga listrik dinamis. | • Kuliah Terapan [TM: 2x50"]<br>• Simulasi: Penjadwalan BESS Mikrogrid dengan Data Ramalan Beban & PV [P: 1x170"] | Menghitung interval kepercayaan 90% peramalan daya PV dan mensimulasikan strategi pengisian/pengosongan baterai. | • Ketepatan perumusan interval probabilitas & analisis teknis-ekonomis | 4% |
| **15** | Mampu mempresentasikan dan mendemonstrasikan proyek capstone deret waktu keteknikan (Sub-CPMK 14) | **Presentasi & Demonstrasi Proyek Akhir Berbasis Tim (*Team-Based Project*)** | • Seminar Kelas & Demo Program [TM: 2x50" + P: 1x170"] | Mahasiswa secara berkelompok (3-4 orang) mempresentasikan hasil implementasi end-to-end solusi peramalan pada dataset riil pilihan. | • Rubrik Penilaian Presentasi, Kualitas Kode Program, dan Penguasaan Materi | **10%** |
| **16** | **UJIAN AKHIR SEMESTER (UAS)** | **Materi Minggu 9 s.d. Minggu 14 & Kompilasi Laporan Proyek** (Evaluasi CPMK-3, 4, dan 5) | **Pengumpulan Dokumen Laporan Proyek Komprehensif / Ujian Berbasis Komputer** | Mengumpulkan naskah laporan ilmiah proyek akhir berformat standar IEEE beserta repositori kode program terstruktur. | • Rubrik Penilaian Laporan Ilmiah Proyek Akhir (Struktur, Metodologi, Analisis Komparasi, Kesimpulan) | **20%** |

---

## 6. SISTEM PENILAIAN DAN EVALUASI HASIL BELAJAR

Evaluasi dilakukan secara berkelanjutan (*Continuous Assessment*) berbasis Outcome-Based Education (OBE) dengan rincian instrumen sebagai berikut:

### A. Bobot Komponen Penilaian

| No | Komponen Evaluasi | CPMK yang Dinilai | Bobot (%) |
| :---: | :--- | :--- | :---: |
| 1 | **Aktivitas Partisipatif & Kuis (LMS)** | CPMK-1, CPMK-2 | 10% |
| 2 | **Tugas Praktikum & Laporan Mingguan** | CPMK-1, CPMK-2, CPMK-3, CPMK-4 | 25% |
| 3 | **Ujian Tengah Semester (UTS)** | CPMK-1, CPMK-2 | 20% |
| 4 | **Proyek Akhir Berbasis Tim (*Team-Based Project*)**: <br>• Presentasi & Demo Kode (10%)<br>• Laporan Ilmiah Format IEEE (15%) | CPMK-3, CPMK-4, CPMK-5 | 25% |
| 5 | **Ujian Akhir Semester (UAS)** | CPMK-3, CPMK-4, CPMK-5 | 20% |
| **Total** | | | **100%** |

---

### B. Konversi Nilai Akhir Angka ke Huruf

| Nilai Angka ($N$) | Nilai Huruf | Bobot | Kategori Kelulusan |
| :---: | :---: | :---: | :---: |
| $N \ge 85$ | **A** | 4.00 | Sangat Baik (Istimewa) |
| $80 \le N < 85$ | **A-** | 3.70 | Sangat Baik |
| $75 \le N < 80$ | **B+** | 3.30 | Baik |
| $70 \le N < 75$ | **B** | 3.00 | Baik |
| $65 \le N < 70$ | **B-** | 2.70 | Cukup Baik |
| $60 \le N < 65$ | **C+** | 2.30 | Cukup |
| $55 \le N < 60$ | **C** | 2.00 | Cukup |
| $45 \le N < 55$ | **D** | 1.00 | Kurang (Tidak Lulus) |
| $N < 45$ | **E** | 0.00 | Gagal |

---

## 7. DAFTAR TEMA PROYEK AKHIR MAHASISWA (*PROJECT-BASED LEARNING*)

Setiap kelompok mahasiswa wajib memilih salah satu tema studi kasus nyata berikut:

1. **Sistem Tenaga & Energi Terbarukan**:
   * *Short-Term Load Forecasting (STLF)* Subsistem Kelistrikan Regional dengan Fitur Cuaca Multi-Lokasi.
   * Peramalan Daya Luaran Pembangkit Listrik Tenaga Bayu (PLTB) / Tenaga Surya (PLTS) Menggunakan Model Hibrida Wavelet-LSTM.
   * Peramalan Harga Pasar Tenaga Listrik (*Locational Marginal Pricing Forecasting*).
2. **Kualitas Daya & Keandalan Peralatan Listrik**:
   * Deteksi dan Klasifikasi Gangguan Harmonisa Sinyal Tegangan Gardu Induk Berbasis STFT dan 1D-CNN.
   * Estimasi Sisa Umur Pakai (*Remaining Useful Life* - RUL) Transformator Daya Berbasis Deret Waktu Data *Dissolved Gas Analysis* (DGA).
   * Deteksi Anomali Getaran Bantalan (*Bearing*) Motor Induksi 3-Fasa.
3. **Smart Grid, IoT, & Manajemen Energi**:
   * Deteksi Anomali Konsumsi Energi dan Pencurian Listrik pada Data Meter Pintar (*Smart Meter*) Skala Besar.
   * Optimalisasi Manajemen Penyimpanan Energi Baterai (BESS) Berbasis *Model Predictive Control* dengan Prediksi Permintaan Puncak.

---

## 8. DAFTAR PUSTAKA DAN SUMBER BELAJAR

### Pustaka Utama (Wajib):
1. **Box, G. E. P., Jenkins, G. M., Reinsel, G. C., & Ljung, G. M.** (2015). *Time Series Analysis: Forecasting and Control* (5th ed.). John Wiley & Sons.
2. **Hyndman, R. J., & Athanasopoulos, G.** (2021). *Forecasting: Principles and Practice* (3rd ed.). OTexts: Melbourne, Australia. (Akses terbuka daring: `otexts.com/fpp3`).
3. **Fei, S., & He, Y.** (2020). *Load Forecasting in Electric Power Systems: Models and Methods*. Springer.
4. **Grewal, M. S., & Andrews, A. P.** (2014). *Kalman Filtering: Theory and Practice with MATLAB* (4th ed.). Wiley-IEEE Press.

### Pustaka Pendukung:
1. **Benidis, K., Rangapuram, S. S., Flunkert, V., et al.** (2022). *Deep Learning for Time Series: A Survey*. IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 45(6), 8037–8055.
2. **Brownlee, J.** (2020). *Deep Learning for Time Series Forecasting: Predict the Future with MLPs, CNNs and LSTMs in Python*. Machine Learning Mastery.
3. **Mallat, S.** (2008). *A Wavelet Tour of Signal Processing: The Sparse Way* (3rd ed.). Academic Press.
4. **IEEE Transactions on Power Systems & IEEE Transactions on Smart Grid** (Jurnal rujukan artikel studi kasus terkini).

### Perangkat Lunak & Lingkungan Komputasi:
* **Bahasa Pemrograman**: Python 3.10+ / GNU Octave / MATLAB.
* **Libraries Utama**: `numpy`, `pandas`, `scipy`, `statsmodels`, `scikit-learn`, `xgboost`, `pytorch` / `tensorflow`, `filterpy`, `pywavelets`.
* **Platform**: Jupyter Notebook / Google Colab / Visual Studio Code.
