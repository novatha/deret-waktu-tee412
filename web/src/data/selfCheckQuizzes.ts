export interface QuizQuestion {
  level: 'C1' | 'C2' | 'C3';
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export const selfCheckQuizzes: Record<number, QuizQuestion[]> = {
  1: [
    {
      level: 'C1',
      question: 'Manakah yang merupakan 4 komponen klasik pembentuk deret waktu beban listrik?',
      options: [
        'Tren, Musiman, Siklis, dan Residu (Iregular)',
        'Mean, Median, Modus, dan Variansi',
        'Frekuensi, Amplitudo, Fase, dan Harmonisa',
        'Input, Hidden State, Cell State, dan Output'
      ],
      answerIndex: 0,
      explanation: 'Dekomposisi klasik memisahkan sinyal deret waktu menjadi Tren (T), Musiman (S), Siklis (C), dan Residu/Iregular (I/R).'
    },
    {
      level: 'C2',
      question: 'Kapan model dekomposisi Multiplikatif lebih tepat daripada Aditif pada data konsumsi listrik industri?',
      options: [
        'Ketika nilai daya sering bernilai tepat nol atau negatif',
        'Ketika amplitudo fluktuasi musiman membesar proporsional terhadap kenaikan tren beban',
        'Ketika sinyal tidak memiliki komponen tren sama sekali',
        'Ketika interval pencuplikan lebih cepat dari 1 detik'
      ],
      answerIndex: 1,
      explanation: 'Pada model multiplikatif (y = T × S × R), variasi musiman meningkat seiring bertambahnya level tren beban.'
    },
    {
      level: 'C3',
      question: 'Jika beban 3 hari berurutan adalah 44 MW, 48 MW, dan 50 MW, berapakah nilai 3-Centered Moving Average (3-SMA) pada titik tengah?',
      options: ['46,00 MW', '47,33 MW', '48,00 MW', '49,00 MW'],
      answerIndex: 1,
      explanation: '3-SMA = (44 + 48 + 50) / 3 = 142 / 3 = 47,33 MW.'
    }
  ],
  2: [
    {
      level: 'C1',
      question: 'Apakah hipotesis nol (H0) pada uji Augmented Dickey-Fuller (ADF)?',
      options: [
        'Data sudah stasioner murni di sekitar rata-rata',
        'Data memiliki akar unit (non-stasioner)',
        'Residual berdistribusi normal Gaussian',
        'Tidak terdapat korelasi silang antar variabel'
      ],
      answerIndex: 1,
      explanation: 'Pada uji ADF, H0 menyatakan sinyal memiliki unit root (non-stasioner); p-value < 0,05 menolak H0 sehingga data stasioner.'
    },
    {
      level: 'C2',
      question: 'Jika uji ADF menghasilkan p-value = 0,65 dan uji KPSS menghasilkan p-value = 0,01, apakah status kestasioneran data?',
      options: [
        'Stasioner Murni (Kuadran I)',
        'Trend-Stationary Process (TSP)',
        'Non-Stasioner / Difference-Stationary Process (DSP)',
        'White Noise sempurna'
      ],
      answerIndex: 2,
      explanation: 'ADF gagal menolak non-stasioner (p > 0,05) dan KPSS menolak stasioner (p < 0,05) menegaskan sinyal bersifat DSP dan wajib didiferensiasi.'
    },
    {
      level: 'C3',
      question: 'Diberikan tegangan busbar V = [0,98; 1,02; 1,00; 1,04] p.u. Berapakah hasil diferensiasi ordo-1 pada titik ke-3 (ΔV_3 = V_3 − V_2)?',
      options: ['+0,04 p.u.', '-0,02 p.u.', '+0,02 p.u.', '-0,04 p.u.'],
      answerIndex: 1,
      explanation: 'ΔV_3 = V_3 - V_2 = 1,00 - 1,02 = -0,02 p.u.'
    }
  ],
  3: [
    {
      level: 'C1',
      question: 'Tiga parameter pemulusan yang diestimasi pada metode Holt-Winters musiman adalah:',
      options: [
        'p, d, dan q',
        'Alpha (level), Beta (tren), dan Gamma (musiman)',
        'Q (process noise), R (sensor noise), dan K (gain)',
        'Learning rate, batch size, dan epoch'
      ],
      answerIndex: 1,
      explanation: 'Holt-Winters mengoptimalkan α (level ℓ_t), β (tren b_t), dan γ (musiman s_t).'
    },
    {
      level: 'C2',
      question: 'Mengapa MAPE tidak dapat dipakai langsung untuk mengevaluasi peramalan daya PLTS 24 jam?',
      options: [
        'Karena daya PLTS selalu lebih besar dari beban PLN',
        'Karena pada malam hari daya aktual bernilai 0 kW sehingga memicu pembagian nol',
        'Karena MAPE hanya berlaku untuk model LSTM',
        'Karena MAPE tidak memerlukan data aktual'
      ],
      answerIndex: 1,
      explanation: 'MAPE membagi error dengan |y_t|; saat y_t = 0 (malam hari), nilainya tak terdefinisi. Gunakan WAPE, nRMSE, atau MAE.'
    },
    {
      level: 'C3',
      question: 'Pada SES dengan α = 0,4 dan level sebelumnya ℓ_1 = 100 MW, jika beban aktual y_2 = 110 MW, berapakah estimasi level baru ℓ_2?',
      options: ['102,0 MW', '104,0 MW', '106,0 MW', '108,0 MW'],
      answerIndex: 1,
      explanation: 'ℓ_2 = α·y_2 + (1 − α)·ℓ_1 = 0,4(110) + 0,6(100) = 44 + 60 = 104,0 MW.'
    }
  ],
  4: [
    {
      level: 'C1',
      question: 'Ciri khas korelogram teoritis untuk proses AR(p) murni yang stasioner adalah:',
      options: [
        'ACF terpotong tajam setelah lag p, PACF meluruh',
        'ACF meluruh eksponensial/sinusoidal, PACF terpotong tajam setelah lag p',
        'ACF dan PACF keduanya bernilai nol di semua lag',
        'ACF selalu bernilai +1 di semua lag'
      ],
      answerIndex: 1,
      explanation: 'Model AR(p) memiliki PACF yang terpotong (cutoff) setelah lag p dan ACF yang meluruh (tailing off).'
    },
    {
      level: 'C2',
      question: 'Syarat kestabilan (kausalitas) proses AR(p) pada bidang kompleks Z adalah:',
      options: [
        'Seluruh kutub (poles z = 1/B) berada di dalam lingkaran satuan |z| < 1',
        'Seluruh kutub berada tepat pada lingkaran satuan |z| = 1',
        'Seluruh koefisien φ_i harus bertanda positif',
        'Nilai AIC harus negatif'
      ],
      answerIndex: 0,
      explanation: 'Ekuivalen dengan akar polinomial Φ(B)=0 di luar lingkaran satuan (|B|>1), seluruh pole z=B^(-1) wajib berada di dalam |z|<1.'
    },
    {
      level: 'C3',
      question: 'Untuk proses AR(1): y_t = 0,8 y_{t-1} + ε_t, apakah sistem stabil dan di mana letak kutub z-nya?',
      options: [
        'Tidak stabil, kutub di z = 1,25',
        'Stabil, kutub di z = 0,80 (di dalam lingkaran satuan)',
        'Marginal, kutub di z = 1,00',
        'Tidak dapat ditentukan tanpa nilai σ²'
      ],
      answerIndex: 1,
      explanation: 'Polinomial 1 − 0,8B = 0 memberi B = 1,25 sehingga pole z = 1/B = 0,80 (|z| < 1 → stabil).'
    }
  ],
  5: [
    {
      level: 'C1',
      question: 'Urutan tiga tahapan utama Metodologi Box-Jenkins yang benar adalah:',
      options: [
        'Peramalan → Diferensiasi → Normalisasi',
        'Identifikasi → Estimasi Parameter → Uji Diagnostik Residual',
        'Training → Pruning → Quantization',
        'FFT → DWT → Rekonstruksi'
      ],
      answerIndex: 1,
      explanation: 'Siklus Box-Jenkins terdiri atas Identifikasi ordo, Estimasi parameter (MLE/OLS), dan Uji Diagnostik residual sebelum peramalan.'
    },
    {
      level: 'C2',
      question: 'Agar model SARIMA dinyatakan layak pada Uji Ljung-Box residual, nilai p-value yang diharapkan adalah:',
      options: [
        'p-value < 0,01 (menolak H0)',
        'p-value > 0,05 (gagal menolak H0: residual adalah white noise)',
        'p-value tepat sama dengan 0',
        'p-value selalu lebih kecil dari nilai AIC'
      ],
      answerIndex: 1,
      explanation: 'H0 uji Ljung-Box menyatakan residual bebas autokorelasi (white noise); p > 0,05 menandakan tidak ada pola tersisa.'
    },
    {
      level: 'C3',
      question: 'Pada data beban listrik per-jam dengan pola berulang setiap hari, berapakah nilai periode musiman s pada SARIMA(p,d,q)(P,D,Q)_s?',
      options: ['s = 7', 's = 12', 's = 24', 's = 60'],
      answerIndex: 2,
      explanation: 'Data berinterval 1 jam dengan siklus harian memiliki 24 titik per siklus (s = 24).'
    }
  ],
  6: [
    {
      level: 'C1',
      question: 'Dalam model SARIMAX untuk peramalan beban pendingin gedung, manakah yang berperan sebagai variabel eksogen (X_t)?',
      options: [
        'Beban listrik gedung pada jam t (y_t)',
        'Temperatur udara dan kelembaban lingkungan',
        'Residual inovasi ε_t',
        'Ordo diferensiasi d'
      ],
      answerIndex: 1,
      explanation: 'Variabel eksogen (X_t) adalah faktor penggerak eksternal seperti suhu, kelembaban, iradiasi, atau indikator hari libur.'
    },
    {
      level: 'C2',
      question: 'Mengapa prosedur pre-whitening diperlukan sebelum membaca fungsi korelasi silang (CCF)?',
      options: [
        'Untuk menghapus autokorelasi internal seri masukan agar tidak muncul korelasi silang lancung',
        'Untuk mengubah data menjadi positif semua',
        'Untuk memperbesar jumlah parameter model VAR',
        'Untuk menghilangkan seluruh tren dari data uji saja'
      ],
      answerIndex: 0,
      explanation: 'Autokorelasi kuat dalam seri X_t dapat menciptakan korelasi semu pada CCF; pre-whitening mengisolasi hubungan sebab-akibat lag yang sesungguhnya.'
    },
    {
      level: 'C3',
      question: 'Suatu sistem VAR(1) 2-gardu memiliki matriks koefisien dengan nilai eigen λ_1 = 0,8 dan λ_2 = 0,5. Apakah sistem tersebut stabil?',
      options: [
        'Tidak stabil karena λ_1 + λ_2 > 1',
        'Stabil dan stasioner karena seluruh |λ_i| < 1',
        'Tidak stabil karena kedua nilai eigen real positif',
        'Tidak dapat ditentukan tanpa fungsi IRF'
      ],
      answerIndex: 1,
      explanation: 'Sistem VAR(1) stabil jika seluruh nilai eigen matriks koefisien A_1 memiliki modulus kurang dari 1 (|λ_i| < 1).'
    }
  ],
  7: [
    {
      level: 'C1',
      question: 'Dua fase utama dalam setiap iterasi algoritma Discrete Kalman Filter adalah:',
      options: [
        'Forward Pass dan Backward Pass',
        'Time Update (Prediksi) dan Measurement Update (Koreksi)',
        'Encoding dan Decoding',
        'Dekomposisi dan Rekonstruksi'
      ],
      answerIndex: 1,
      explanation: 'Kalman Filter bekerja rekursif melalui tahap Time Update (proyeksi state) dan Measurement Update (koreksi menggunakan Kalman Gain).'
    },
    {
      level: 'C2',
      question: 'Jika derau pengukuran sensor sangat besar (R → ∞), bagaimanakah perilaku Kalman Gain K_k?',
      options: [
        'K_k → 1 sehingga filter sepenuhnya mengikuti sensor',
        'K_k → 0 sehingga filter mengabaikan sensor dan mempercayai prediksi model',
        'K_k → ∞ sehingga estimasi divergen',
        'K_k tidak dipengaruhi oleh matriks R'
      ],
      answerIndex: 1,
      explanation: 'Karena K = P^- H^T (H P^- H^T + R)^(-1), ketika R → ∞ maka K → 0 sehingga bobot inovasi sensor menuju nol.'
    },
    {
      level: 'C3',
      question: 'Jika kovarians prediksi P_1^- = 1,00 dan variansi derau sensor R = 0,25 (H = 1), berapakah Kalman Gain K_1?',
      options: ['0,20', '0,50', '0,80', '1,25'],
      answerIndex: 2,
      explanation: 'K_1 = P_1^- / (P_1^- + R) = 1,00 / (1,00 + 0,25) = 1,00 / 1,25 = 0,80.'
    }
  ],
  9: [
    {
      level: 'C1',
      question: 'Pada dekomposisi Discrete Wavelet Transform (DWT), komponen manakah yang menangkap gangguan transien frekuensi tinggi?',
      options: [
        'Koefisien Aproksimasi (cA)',
        'Koefisien Detail (cD)',
        'Rata-rata DC sinyal',
        'Komponen tren linier'
      ],
      answerIndex: 1,
      explanation: 'Koefisien Detail (cD) merupakan keluaran high-pass filter yang menangkap transien cepat dan perubahan tepi tajam.'
    },
    {
      level: 'C2',
      question: 'Mengapa FFT standar kurang memadai untuk mendeteksi waktu terjadinya voltage sag berdurasi 3 siklus?',
      options: [
        'FFT tidak bisa memproses bilangan real',
        'FFT memetakan sinyal secara global sehingga kehilangan lokalisasi waktu terjadinya transien',
        'FFT hanya bekerja pada frekuensi di atas 10 kHz',
        'FFT selalu menghasilkan spektrum nol untuk sinyal AC'
      ],
      answerIndex: 1,
      explanation: 'Basis sinusoida FFT membentang di seluruh durasi rekaman sehingga menunjukkan frekuensi yang ada tanpa memberi tahu kapan transien terjadi.'
    },
    {
      level: 'C3',
      question: 'Sinyal dicuplik pada f_s = 1600 Hz dan didekomposisi DWT 3-level. Rentang frekuensi berapakah yang dicakup sub-band D_1?',
      options: ['0–100 Hz', '100–200 Hz', '200–400 Hz', '400–800 Hz'],
      answerIndex: 3,
      explanation: 'Frekuensi Nyquist f_N = f_s/2 = 800 Hz. Level 1 membelah [0, 800] menjadi A_1=[0,400] Hz dan D_1=[400,800] Hz.'
    }
  ],
  10: [
    {
      level: 'C1',
      question: 'Mengapa fitur jam (0–23) sebaiknya di-encode memakai sin(2πh/24) dan cos(2πh/24)?',
      options: [
        'Agar jumlah kolom berkurang menjadi satu',
        'Agar jarak siklis antara pukul 23:00 dan 00:00 tetap berdekatan secara matematis',
        'Agar model XGBoost tidak memerlukan fitur lag',
        'Agar nilai beban listrik menjadi stasioner'
      ],
      answerIndex: 1,
      explanation: 'Encoding siklis memetakan waktu ke lingkaran satuan sehingga transisi 23:00 → 00:00 berjarak kontinu, bukan melompat 23 satuan.'
    },
    {
      level: 'C2',
      question: 'Manakah praktik berikut yang MENIMBULKAN data leakage pada peramalan beban berbasis Machine Learning?',
      options: [
        'Menggunakan TimeSeriesSplit (Expanding Window) untuk validasi',
        'Menghitung rolling_mean_24 dengan df["load"].shift(1).rolling(24).mean()',
        'Menggunakan random K-Fold CV atau memanggil StandardScaler.fit_transform() sebelum train/test split',
        'Menggunakan fitur lag_24 dan lag_168'
      ],
      answerIndex: 2,
      explanation: 'Random K-Fold mencampur masa depan ke data latih, dan scaling sebelum split membocorkan statistik distribusi masa depan.'
    },
    {
      level: 'C3',
      question: 'Untuk beban berturut-turut y_10=160, y_11=165, y_12=150, y_13=170 MW, berapakah rolling_mean_3 kausal untuk memprediksi y_13?',
      options: ['158,33 MW', '161,67 MW', '165,00 MW', '170,00 MW'],
      answerIndex: 0,
      explanation: 'Rolling mean kausal hanya memakai 3 jam sebelum t=13: (160 + 165 + 150) / 3 = 475 / 3 = 158,33 MW (tanpa y_13).'
    }
  ],
  11: [
    {
      level: 'C1',
      question: 'Pada PyTorch dengan batch_first=True, apakah arti dimensi tensor masukan LSTM berbentuk (32, 24, 4)?',
      options: [
        '32 epoch, 24 layer, 4 neuron',
        '32 sampel per batch, 24 langkah waktu (lookback), dan 4 fitur masukan',
        '32 fitur, 24 batch, dan 4 langkah waktu',
        '32 hidden units, 24 output, dan 4 gate'
      ],
      answerIndex: 1,
      explanation: 'Format batch_first=True pada PyTorch adalah (Batch_Size, Sequence_Length, Input_Features) = (32, 24, 4).'
    },
    {
      level: 'C2',
      question: 'Komponen utama arsitektur LSTM yang mencegah masalah vanishing gradient pada sekuens panjang adalah:',
      options: [
        'Fungsi aktivasi step biner',
        'Jalur aditif Cell State (C_t = f_t ⊙ C_{t-1} + i_t ⊙ C̃_t) sebagai Constant Error Carousel',
        'Penghapusan seluruh bias jaringan',
        'Pengacakan urutan langkah waktu setiap epoch'
      ],
      answerIndex: 1,
      explanation: 'Pembaruan aditif pada Cell State memungkinkan gradien mengalir lintas waktu tanpa menyusut eksponensial.'
    },
    {
      level: 'C3',
      question: 'Diketahui C_{t-1} = 2,0, Forget Gate f_t = 0,8, Input Gate i_t = 0,6, dan kandidat C̃_t = 0,5. Berapakah Cell State baru C_t?',
      options: ['1,60', '1,90', '2,10', '2,50'],
      answerIndex: 1,
      explanation: 'C_t = f_t·C_{t-1} + i_t·C̃_t = (0,8)(2,0) + (0,6)(0,5) = 1,60 + 0,30 = 1,90.'
    }
  ],
  12: [
    {
      level: 'C1',
      question: 'Apakah syarat utama Causal Convolution pada 1D-CNN untuk peramalan deret waktu?',
      options: [
        'Kernel harus berukuran minimal 10',
        'Keluaran pada waktu t hanya boleh bergantung pada masukan hingga waktu t (tidak melihat masa depan)',
        'Semua bobot konvolusi harus bernilai sama',
        'Hanya boleh memakai 1 lapisan konvolusi'
      ],
      answerIndex: 1,
      explanation: 'Causal convolution menggeser padding ke kiri agar neuron waktu t tidak pernah mengakses data t+1 atau sesudahnya.'
    },
    {
      level: 'C2',
      question: 'Mengapa Transformer berbasis patching (seperti PatchTST) lebih efisien untuk deret waktu panjang L dibanding Transformer titik-per-titik?',
      options: [
        'Karena meniadakan seluruh layer linear',
        'Karena mengelompokkan beberapa titik ke dalam patch sehingga menekan kompleksitas kuadratik O(L²) Self-Attention',
        'Karena mengubah masalah menjadi regresi linier biasa',
        'Karena tidak memerlukan normalisasi data'
      ],
      answerIndex: 1,
      explanation: 'Patching menurunkan jumlah token dari L menjadi L/P, memangkas biaya memori dan komputasi Self-Attention sebesar faktor P².'
    },
    {
      level: 'C3',
      question: 'Sebuah 1D-CNN 3-layer memakai kernel K = 3 dengan dilatasi d_1 = 1, d_2 = 2, d_3 = 4 (R_0 = 1). Berapakah Effective Receptive Field R_3?',
      options: ['7 titik', '9 titik', '15 titik', '24 titik'],
      answerIndex: 2,
      explanation: 'R_1 = 1 + 2(1) = 3; R_2 = 3 + 2(2) = 7; R_3 = 7 + 2(4) = 15 titik.'
    }
  ],
  13: [
    {
      level: 'C1',
      question: 'Profil konsumsi kWh smart meter yang mendatar drastis selama 10 hari berturut-turut akibat bypass kabel tergolong sebagai:',
      options: [
        'Point Anomaly',
        'Collective Anomaly',
        'White Noise',
        'Trend-Stationary Signal'
      ],
      answerIndex: 1,
      explanation: 'Rangkaian titik berurutan yang bersama-sama membentuk pola tak lazim selama periode tertentu adalah Collective Anomaly.'
    },
    {
      level: 'C2',
      question: 'Mengapa LSTM Autoencoder untuk deteksi pencurian listrik hanya dilatih pada dataset pelanggan normal?',
      options: [
        'Karena data anomali terlalu besar ukurannya',
        'Agar model hanya pandai merekonstruksi pola normal sehingga pola curang memicu galat rekonstruksi (MSE) tinggi',
        'Agar akurasi selalu mencapai 100%',
        'Karena Autoencoder tidak mendukung label biner di tahap evaluasi'
      ],
      answerIndex: 1,
      explanation: 'Dengan mempelajari manifold konsumsi normal saja, penyimpangan pola akan gagal direkonstruksi dan melonjak melampaui ambang τ.'
    },
    {
      level: 'C3',
      question: 'Jika hasil deteksi menghasilkan TP = 45, FP = 15, dan FN = 5, berapakah nilai Precision dan Recall?',
      options: [
        'Precision = 75%, Recall = 90%',
        'Precision = 90%, Recall = 75%',
        'Precision = 80%, Recall = 80%',
        'Precision = 95%, Recall = 85%'
      ],
      answerIndex: 0,
      explanation: 'Precision = TP/(TP+FP) = 45/60 = 75%; Recall = TP/(TP+FN) = 45/50 = 90%.'
    }
  ],
  14: [
    {
      level: 'C1',
      question: 'Fungsi kerugian yang digunakan untuk melatih model peramalan probabilistik berbasis kuantil (P10, P50, P90) adalah:',
      options: [
        'Cross-Entropy Loss',
        'Pinball (Quantile) Loss',
        'Hinge Loss',
        'Cosine Similarity Loss'
      ],
      answerIndex: 1,
      explanation: 'Pinball Loss L_τ(y, ŷ) = max(τ(y − ŷ), (τ − 1)(y − ŷ)) memberi penalti asimetris sesuai target kuantil τ.'
    },
    {
      level: 'C2',
      question: 'Mengapa model dengan PICP = 99% tetapi PINAW sangat lebar (misal 90% kapasitas sistem) dianggap kurang baik?',
      options: [
        'Karena gagal memenuhi target coverage 80%',
        'Karena pita prediksi terlalu lebar sehingga tidak tajam/informatif dan memicu cadangan putar terlalu mahal',
        'Karena selalu melanggar batas SoC baterai',
        'Karena tidak dapat dihitung pada daya PLTS'
      ],
      answerIndex: 1,
      explanation: 'Peramalan probabilistik yang unggul harus terkalibrasi (PICP dekat target) sekaligus tajam (PINAW sekecil mungkin).'
    },
    {
      level: 'C3',
      question: 'Jika ramalan beban 500 kW, ramalan PV 350 kW, dan BESS menyuplai pengosongan 100 kW, berapakah sisa daya yang harus diimpor dari grid PLN?',
      options: ['50 kW', '100 kW', '150 kW', '250 kW'],
      answerIndex: 0,
      explanation: 'Defisit bersih ΔP = 500 − 350 = 150 kW. Setelah disuplai BESS 100 kW, sisa impor grid P_grid = 150 − 100 = 50 kW.'
    }
  ]
};
