export interface WeekMaterial {
  week: number;
  title: string;
  subTitle: string;
  category: 'Foundation' | 'Classical Models' | 'Spectral Analysis' | 'Machine Learning' | 'Deep Learning' | 'Power Operations';
  subCpmk: string;
  summary: string;
  theoryTopics: string[];
  labTopic: string;
  slidePdf: string;
  problemSetPdf: string;
  worksheetPdf?: string;
  notebookUrl?: string;
  formulaLatex: string;
  codeSnippet: string;
  bloomHighlights: {
    c1_c2: string;
    c3_c4: string;
    c5_c6: string;
  };
}

export const courseMetadata = {
  courseName: "Analisis Deret Waktu dan Peramalan",
  courseCode: "TEE-412",
  credits: "3 SKS (2 Teori, 1 Praktikum)",
  semester: "Semester VI/VII (Ganjil 2026)",
  studyProgram: "S1 Teknik Elektro",
  faculty: "Fakultas Teknik",
  university: "Universitas Bengkulu (UNIB)",
  lecturer: {
    name: "Ir. Novalio Daratha, S.T., M.Sc., Ph.D.",
    nip: "197811102003121002",
    lab: "Laboratorium Sistem Tenaga dan Komputasi Cerdas",
    office: "Gedung Dekanat FT UNIB Lt. 2"
  },
  headOfDept: {
    name: "Ir. Afriyastuti Herawati, S.T., M.T.",
    nip: "197404162000032001",
    role: "Ketua Jurusan Teknik Elektro"
  },
  rpsPdf: "/documents/rps_deret_waktu_elektro.pdf",
  labManualPdf: "/documents/modul_praktikum_deret_waktu.pdf",
  utsBlueprintPdf: "/documents/kisi_kisi_mahasiswa_deret_waktu.pdf",
  uasBlueprintPdf: "/documents/kisi_kisi_uas_deret_waktu.pdf",
  capstoneGuidePdf: "/documents/panduan_proyek_akhir_deret_waktu.pdf",
  githubRepo: "novatha/deret-waktu-tee412",
  totalWeeks: 13,
  totalSemesterWeeks: 16,
  totalLabChapters: 12,
  cpmkList: [
    { code: "CPMK-1", desc: "Mampu menjelaskan konsep fundamental deret waktu, karakteristik stasioneritas, serta mendiagnosis sifat autokorelasi pada data sinyal dan beban kelistrikan." },
    { code: "CPMK-2", desc: "Mampu memformulasikan, mengestimasi parameter, serta memvalidasi model peramalan klasik parametrik (ARIMA/SARIMA/SARIMAX) dan State-Space (Discrete Kalman Filter)." },
    { code: "CPMK-3", desc: "Mampu menganalisis sinyal transien pada domain frekuensi dan multiresolusi waktu-frekuensi (FFT, PSD, Discrete Wavelet Transform)." },
    { code: "CPMK-4", desc: "Mampu merancang pipeline Machine Learning dan Deep Learning mutakhir (XGBoost, LSTM, GRU, 1D-CNN, Attention Transformer) untuk peramalan beban dan EBT." },
    { code: "CPMK-5", desc: "Mampu mendeteksi anomali kegagalan sistem tenaga (Autoencoder) serta mengintegrasikan peramalan probabilistik ke optimasi dispatching baterai mikrogrid." }
  ]
};

export function getColabUrl(notebookUrl?: string): string | undefined {
  if (!notebookUrl) return undefined;
  const filename = notebookUrl.split('/').pop();
  if (!filename) return undefined;
  return `https://colab.research.google.com/github/${courseMetadata.githubRepo}/blob/main/labs/${filename}`;
}

export const weeksData: WeekMaterial[] = [
  {
    week: 1,
    title: "Pengantar Deret Waktu & Dekomposisi Klasik",
    subTitle: "Taksonomi Komponen Tren, Musiman, Siklis, dan Residu pada Data Beban Listrik",
    category: "Foundation",
    subCpmk: "Sub-CPMK 1: Mampu mengidentifikasi komponen tren, musiman, siklis, dan iregular pada sinyal deret waktu sistem tenaga.",
    summary: "Memahami struktur fundamental deret waktu elektro, dekomposisi aditif vs multiplikatif, teknik pemulusan Moving Average, dan metrik akurasi evaluasi peramalan (MAE, RMSE, MAPE).",
    theoryTopics: [
      "Definisi data sekuensial sistem tenaga dan telemetri sensor",
      "Struktur Dekomposisi Aditif: y(t) = T(t) + S(t) + C(t) + I(t)",
      "Struktur Dekomposisi Multiplikatif: y(t) = T(t) * S(t) * C(t) * I(t)",
      "Ekstraksi Tren dengan Centered Moving Average (CMA)",
      "Metrik galat evaluasi: MAE, RMSE, MAPE, MASE"
    ],
    labTopic: "Modul 1: Eksplorasi Visual, Ekstraksi Musiman, dan Dekomposisi Klasik Data Beban Listrik",
    slidePdf: "/documents/ch1.pdf",
    problemSetPdf: "/documents/problem_set_ch1.pdf",
    worksheetPdf: "/documents/worksheet_ch1.pdf",
    notebookUrl: "/notebooks/modul_01_dekomposisi.ipynb",
    formulaLatex: "y_t = T_t + S_t + C_t + I_t \\quad \\text{atau} \\quad y_t = T_t \\times S_t \\times C_t \\times I_t",
    codeSnippet: `import pandas as pd
from statsmodels.tsa.seasonal import seasonal_decompose

df = pd.read_csv('hourly_load_pln.csv', parse_dates=['timestamp'], index_col='timestamp')
res = seasonal_decompose(df['load_mw'], model='additive', period=24)
res.plot()`,
    bloomHighlights: {
      c1_c2: "Definisi 4 komponen deret waktu dan kapan menggunakan model aditif vs multiplikatif.",
      c3_c4: "Perhitungan manual Centered Moving Average (CMA-5) dan analisis musiman ganda harian-mingguan.",
      c5_c6: "Evaluasi keandalan metrik MAPE saat beban mendekati nol & perancangan algoritma dekomposisi otomatis."
    }
  },
  {
    week: 2,
    title: "Stasioneritas & Analisis Korelogram",
    subTitle: "Stasioneritas Kuat vs Lemah, Uji Akar Unit (ADF/KPSS), dan Fungsi ACF/PACF",
    category: "Foundation",
    subCpmk: "Sub-CPMK 2: Mampu menguji stasioneritas data beban/daya dan menganalisis korelogram ACF/PACF.",
    summary: "Konsep stasioneritas lemah (kovarians), fenomena regresi lancung (*spurious regression*), diferensiasi pertama dan musiman, pengujian hipotesis ADF dan KPSS, serta interpretasi plot ACF/PACF.",
    theoryTopics: [
      "Kovarians Stasioner (Mean konstan, Variansi konstan, Autokovarians fungsi dari lag k)",
      "White Noise & Random Walk Process (y_t = y_{t-1} + e_t)",
      "Uji Augmented Dickey-Fuller (ADF) vs Uji KPSS",
      "Transformasi Diferensiasi Pertama & Box-Cox",
      "Fungsi Autokorelasi (ACF) dan Autokorelasi Parsial (PACF)"
    ],
    labTopic: "Modul 2: Uji Akar Unit dan Analisis Korelogram ACF/PACF",
    slidePdf: "/documents/ch2.pdf",
    problemSetPdf: "/documents/problem_set_ch2.pdf",
    worksheetPdf: "/documents/worksheet_ch2.pdf",
    notebookUrl: "/notebooks/modul_02_stasioneritas_acf_pacf.ipynb",
    formulaLatex: "\\Delta y_t = \\alpha y_{t-1} + \\sum_{i=1}^p \\beta_i \\Delta y_{t-i} + \\epsilon_t, \\quad \\rho_k = \\frac{\\gamma_k}{\\gamma_0}",
    codeSnippet: `from statsmodels.tsa.stattools import adfuller, kpss

adf_res = adfuller(df['active_power'])
print(f"ADF Stat: {adf_res[0]:.4f}, p-value: {adf_res[1]:.4f}")
kpss_res = kpss(df['active_power'], regression='c')
print(f"KPSS Stat: {kpss_res[0]:.4f}, p-value: {kpss_res[1]:.4f}")`,
    bloomHighlights: {
      c1_c2: "Definisi 3 syarat kovarians stasioner dan perbedaan hipotesis null uji ADF vs KPSS.",
      c3_c4: "Kalkulasi koefisien autokorelasi lag-1 dan diagnosis tipe ketidakstasioneran (Trend Stationary vs Difference Stationary).",
      c5_c6: "Evaluasi jebakan over-differencing dan perancangan skrip Python auto-stationary transformer."
    }
  },
  {
    week: 3,
    title: "Pemulusan Eksponensial & Holt-Winters",
    subTitle: "Single, Double (Holt), dan Triple Exponential Smoothing (Holt-Winters Aditif/Multiplikatif)",
    category: "Classical Models",
    subCpmk: "Sub-CPMK 3: Mampu menerapkan metode pemulusan eksponensial untuk peramalan beban jangka pendek.",
    summary: "Penurunan matematis Single ES (SES), model tren linier Holt, model musiman Holt-Winters (HW) tunggal dan ganda (Double Seasonal / DSHW), optimasi parameter smoothing dengan minimasi SSE, dan metrik evaluasi peramalan termasuk WAPE.",
    theoryTopics: [
      "Single Exponential Smoothing (SES): Rekursi pembobotan meluruh geometris",
      "Holt's Linear Trend & Damped Trend: Estimasi level L_t dan growth rate b_t",
      "Holt-Winters Seasonal (Aditif & Multiplikatif)",
      "Double Seasonal Holt-Winters (DSHW) untuk Beban Sistem Tenaga",
      "Metrik Evaluasi Peramalan PLTS/Sistem Tenaga (RMSE, MAPE, WAPE)"
    ],
    labTopic: "Modul 3: Peramalan Beban Jangka Pendek Menggunakan Holt-Winters",
    slidePdf: "/documents/ch3.pdf",
    problemSetPdf: "/documents/problem_set_ch3.pdf",
    worksheetPdf: "/documents/worksheet_ch3.pdf",
    notebookUrl: "/notebooks/modul_03_holt_winters.ipynb",
    formulaLatex: "\\hat{y}_{t+h|t} = (\\ell_t + h b_t) s_{t+h-m(k+1)}, \\quad \\ell_t = \\alpha \\frac{y_t}{s_{t-m}} + (1-\\alpha)(\\ell_{t-1} + b_{t-1})",
    codeSnippet: `from statsmodels.tsa.holtwinters import ExponentialSmoothing

hw = ExponentialSmoothing(train_load, seasonal_periods=24, trend='add', seasonal='mul', damped_trend=True)
hw_fit = hw.fit()
pred_24 = hw_fit.forecast(24)`,
    bloomHighlights: {
      c1_c2: "Peran bobot alpha dalam menentukan sensitivitas model terhadap fluktuasi data terbaru.",
      c3_c4: "Kalkulasi step-by-step 3 langkah Holt-Winters dan analisis peredaman tren (damped trend parameter).",
      c5_c6: "Evaluasi kegagalan model Holt-Winters saat hari libur nasional dan perancangan adaptif weighting."
    }
  },
  {
    week: 4,
    title: "Pemodelan AR, MA, ARMA & Kestabilan Z",
    subTitle: "Proses Autoregresif, Moving Average, Polinomial Karakteristik, dan Kriteria Informasi AIC/BIC",
    category: "Classical Models",
    subCpmk: "Sub-CPMK 4: Mampu memformulasikan model AR, MA, ARMA dan menguji kestabilan sistem pada bidang Z.",
    summary: "Representasi operator lag B, syarat kausalitas AR (akar polinomial di luar lingkaran satuan), syarat invertibilitas MA, persamaan Yule-Walker, fungsi autokorelasi teoritis, dan seleksi ordo AIC/BIC.",
    theoryTopics: [
      "Proses Autoregressive AR(p) dan Persamaan Yule-Walker",
      "Proses Moving Average MA(q) dan Teorema Representasi Wold",
      "Model Gabungan ARMA(p, q) dan Polinomial Karakteristik",
      "Syarat Kausalitas dan Invertibilitas pada Bidang Kompleks Z",
      "Estimasi Parameter: Conditional Least Squares vs Maximum Likelihood (MLE)",
      "Seleksi Model Berbasis Informasi: AIC, AICc, dan BIC"
    ],
    labTopic: "Modul 4: Estimasi Parameter ARMA, Plot Kestabilan Polinomial, dan Seleksi Ordo AIC",
    slidePdf: "/documents/ch4.pdf",
    problemSetPdf: "/documents/problem_set_ch4.pdf",
    worksheetPdf: "/documents/worksheet_ch4.pdf",
    notebookUrl: "/notebooks/modul_04_arma_kestabilan_z.ipynb",
    formulaLatex: "\\Phi(B) y_t = \\Theta(B) \\epsilon_t \\quad \\Longleftrightarrow \\quad \\left(1 - \\sum_{i=1}^p \\phi_i B^i\\right) y_t = \\left(1 + \\sum_{j=1}^q \\theta_j B^j\\right) \\epsilon_t",
    codeSnippet: `import numpy as np
from statsmodels.tsa.arima.model import ARIMA

# Evaluasi kestabilan akar polinomial
phi = np.array([1, -0.6, 0.25])
roots = np.roots(phi)
is_stable = np.all(np.abs(roots) > 1.0)
print(f"Akar: {roots}, Stabil: {is_stable}")`,
    bloomHighlights: {
      c1_c2: "Definisi invertibilitas proses MA dan kaitan akar polinomial terhadap lingkaran satuan bidang-Z.",
      c3_c4: "Penyelesaian manual matriks Yule-Walker untuk AR(2) dan penentuan variansi white noise sigma^2.",
      c5_c6: "Evaluasi trade-off penalti kompleksitas AIC vs BIC dan perancangan grid-search estimator ordo ARMA."
    }
  },
  {
    week: 5,
    title: "ARIMA Musiman (SARIMA) Metodologi Box-Jenkins",
    subTitle: "Siklus 4-Tahap Box-Jenkins: Identifikasi, Estimasi MLE, Diagnostik Ljung-Box, dan Peramalan",
    category: "Classical Models",
    subCpmk: "Sub-CPMK 5: Mampu merancang model SARIMA(p,d,q)(P,D,Q)_s untuk peramalan beban musiman PLN.",
    summary: "Integrasi diferensiasi non-musiman (d) dan musiman (D), formulasi lengkap SARIMA(p,d,q)(P,D,Q)_s, estimasi parameter MLE, uji diagnostik residu (Ljung-Box Q-test, plot normalitas), dan interval kepercayaan.",
    theoryTopics: [
      "Perluasan ARIMA ke Musiman: Struktur SARIMA(p,d,q)(P,D,Q)_s",
      "Diferensiasi Musiman: (1 - B^s)^D y_t",
      "Siklus 4 Langkah Box-Jenkins: Identifikasi -> Estimasi -> Diagnostik -> Forecasting",
      "Diagnostik Residu: Ljung-Box Q-Test, Uji Normalitas Jarque-Bera",
      "Perhitungan Interval Kepercayaan Peramalan (95% Confidence Bounds)"
    ],
    labTopic: "Modul 5: Pemodelan SARIMA 168-Jam Data Beban Kelistrikan dengan Auto-ARIMA",
    slidePdf: "/documents/ch5.pdf",
    problemSetPdf: "/documents/problem_set_ch5.pdf",
    worksheetPdf: "/documents/worksheet_ch5.pdf",
    notebookUrl: "/notebooks/modul_05_sarima_box_jenkins.ipynb",
    formulaLatex: "\\Phi_P(B^s)\\phi_p(B)(1-B)^d(1-B^s)^D y_t = \\Theta_Q(B^s)\\theta_q(B)\\epsilon_t",
    codeSnippet: `import pmdarima as pm

auto_model = pm.auto_arima(train_load, seasonal=True, m=24,
                           start_p=1, max_p=3, start_q=1, max_q=3,
                           d=1, D=1, stepwise=True, trace=True)
print(auto_model.summary())
fc, conf_int = auto_model.predict(n_periods=24, return_conf_int=True)`,
    bloomHighlights: {
      c1_c2: "Penjelasan arti setiap notasi pada SARIMA(1,1,1)(1,1,1)_24 untuk sistem tenaga.",
      c3_c4: "Interpretasi hasil uji Ljung-Box pada residu dan identifikasi pola underdifferencing/overdifferencing.",
      c5_c6: "Evaluasi performa SARIMA saat transisi musim hujan-kemarau dan perancangan pipeline Auto-SARIMA."
    }
  },
  {
    week: 6,
    title: "Model Regresi Dinamik Eksogen: SARIMAX & VAR",
    subTitle: "Fungsi Korelasi Silang (CCF), Model Transfer Function, dan Vector AutoRegression (VAR)",
    category: "Classical Models",
    subCpmk: "Sub-CPMK 6: Mampu mengintegrasikan variabel eksogen cuaca pada SARIMAX dan memodelkan sistem multivariat VAR.",
    summary: "Pengaruh variabel eksogen cuaca (temperatur, kelembaban, iradiasi surya) terhadap konsumsi daya listrik, Pre-whitening pada CCF, formulasi SARIMAX, identifikasi keterlambatan distributed lag, serta pengantar model multivariat VAR.",
    theoryTopics: [
      "Urgensi Variabel Eksogen di Sistem Tenaga (Sensitivitas beban terhadap pendingin udara)",
      "Fungsi Korelasi Silang (Cross-Correlation Function - CCF) dan Pre-whitening",
      "Formulasi Matematika Model SARIMAX dengan Matriks Eksogen X_t",
      "Model Transfer Function dan Distributed Lag",
      "Pengantar Vector AutoRegression (VAR) untuk Sistem Multivariat Multi-Bus"
    ],
    labTopic: "Modul 6: Peramalan Beban dengan Variabel Eksogen Suhu (SARIMAX) dan VAR 2-Bus",
    slidePdf: "/documents/ch6.pdf",
    problemSetPdf: "/documents/problem_set_ch6.pdf",
    worksheetPdf: "/documents/worksheet_ch6.pdf",
    notebookUrl: "/notebooks/modul_06_sarimax_var.ipynb",
    formulaLatex: "y_t = \\mathbf{X}_t \\boldsymbol{\\beta} + \\eta_t, \\quad \\Phi_P(B^s)\\phi_p(B)(1-B)^d(1-B^s)^D \\eta_t = \\Theta_Q(B^s)\\theta_q(B)\\epsilon_t",
    codeSnippet: `from statsmodels.tsa.statespace.sarimax import SARIMAX

model = SARIMAX(df['load_mw'], exog=df[['temp_c', 'humidity']],
                order=(1,1,1), seasonal_order=(1,1,0,24))
res = model.fit(disp=False)
print(res.summary())`,
    bloomHighlights: {
      c1_c2: "Tujuan prosedur pre-whitening sebelum menghitung fungsi korelasi silang (CCF).",
      c3_c4: "Analisis koefisien elastisitas suhu beta terhadap MW beban dan deteksi efek saturasi termal.",
      c5_c6: "Evaluasi ketergantungan model terhadap akurasi ramalan cuaca BMKG dan perancangan model VAR multi-gardu."
    }
  },
  {
    week: 7,
    title: "Discrete Kalman Filter & Representasi State-Space",
    subTitle: "Model Ruang Keadaan Stokastik Diskrit, Estimasi State-of-Charge Baterai, dan Denoising Sensor",
    category: "Classical Models",
    subCpmk: "Sub-CPMK 7: Mampu memformulasikan model sistem dinamis ke State-Space dan menurunkan algoritma Discrete Kalman Filter.",
    summary: "Representasi state-space linier diskrit, matriks derau proses Q dan pengukuran R, algoritma 2-tahap (Time Update vs Measurement Update), penentuan bobot optimal Kalman Gain K_k, konvergensi kovarians error P_k, dan estimasi SoC baterai BESS.",
    theoryTopics: [
      "Representasi Ruang Keadaan Diskrit: Persamaan State & Persamaan Pengukuran",
      "Karakteristik Derau Proses (Q) vs Derau Pengukuran (R)",
      "Tahap Prediksi (Time Update): Proyeksi status a priori & kovarians P^-",
      "Tahap Koreksi (Measurement Update): Kalman Gain, pembaharuan status a posteriori & kovarians P",
      "Perilaku Asimtotik Kalman Gain (R -> 0 vs R -> inf)",
      "Studi Kasus: Estimasi State-of-Charge (SoC) Baterai Lithium-ion"
    ],
    labTopic: "Modul 7: Implementasi Discrete Kalman Filter untuk Denoising Sensor Telemetri Tegangan dan Arus",
    slidePdf: "/documents/ch7.pdf",
    problemSetPdf: "/documents/problem_set_ch7.pdf",
    worksheetPdf: "/documents/worksheet_ch7.pdf",
    notebookUrl: "/notebooks/modul_07_kalman_filter.ipynb",
    formulaLatex: "\\mathbf{K}_k = \\mathbf{P}_k^- \\mathbf{H}^T (\\mathbf{H} \\mathbf{P}_k^- \\mathbf{H}^T + \\mathbf{R})^{-1}, \\quad \\hat{\\mathbf{x}}_k = \\hat{\\mathbf{x}}_k^- + \\mathbf{K}_k(\\mathbf{z}_k - \\mathbf{H}\\hat{\\mathbf{x}}_k^-)",
    codeSnippet: `class KalmanFilter1D:
    def __init__(self, A=1.0, H=1.0, Q=1e-5, R=0.04, x0=0.0, P0=1.0):
        self.A, self.H, self.Q, self.R = A, H, Q, R
        self.x, self.P = x0, P0

    def step(self, z):
        # Time Update
        x_minus = self.A * self.x
        P_minus = self.A * self.P * self.A + self.Q
        # Measurement Update
        K = P_minus * self.H / (self.H * P_minus * self.H + self.R)
        self.x = x_minus + K * (z - self.H * x_minus)
        self.P = (1 - K * self.H) * P_minus
        return self.x, self.P`,
    bloomHighlights: {
      c1_c2: "Definisi Best Linear Unbiased Estimator (BLUE) dan peran Kalman Gain K_k.",
      c3_c4: "Kalkulasi numerik 2 iterasi Kalman Filter untuk estimasi tegangan BESS dan analisis rasio Q/R.",
      c5_c6: "Evaluasi DKF vs EKF pada kurva non-linier baterai dan perancangan kelas Python KalmanFilter 2D."
    }
  },
  {
    week: 9,
    title: "Analisis Spektral & Dekomposisi Wavelet",
    subTitle: "Domain Frekuensi, FFT, Power Spectral Density (PSD), STFT, dan Discrete Wavelet Transform (DWT)",
    category: "Spectral Analysis",
    subCpmk: "Sub-CPMK 8: Mampu menganalisis sinyal pada domain frekuensi (FFT/PSD) dan waktu-frekuensi (DWT) untuk deteksi transien.",
    summary: "Keterbatasan domain waktu murni, Transformasi Fourier Diskrit (DFT/FFT), estimasi spektrum daya Welch PSD, Short-Time Fourier Transform (STFT), prinsip ketidakpastian Heisenberg-Gabor, Discrete Wavelet Transform (DWT), dan denoising wavelet sinyal transien.",
    theoryTopics: [
      "Transformasi Fourier Diskrit (DFT) dan Algoritma Fast Fourier Transform (FFT)",
      "Perhitungan Total Harmonic Distortion (THD) Sinyal Tegangan dan Arus",
      "Power Spectral Density (PSD) Metode Periodogram Welch",
      "Kelemahan FFT pada Sinyal Non-Stasioner & Prinsip STFT",
      "Discrete Wavelet Transform (DWT): Multi-Resolution Analysis (MRA)",
      "Denoising Sinyal dengan Universal Soft-Thresholding Donoho"
    ],
    labTopic: "Modul 8: Analisis Harmonisa FFT Sinyal Inverter dan Denoising Wavelet DWT pada Gangguan Kualitas Daya",
    slidePdf: "/documents/ch9.pdf",
    problemSetPdf: "/documents/problem_set_ch9.pdf",
    worksheetPdf: "/documents/worksheet_ch9.pdf",
    notebookUrl: "/notebooks/modul_08_fft_wavelet.ipynb",
    formulaLatex: "X[k] = \\sum_{n=0}^{N-1} x[n] e^{-j \\frac{2\\pi}{N} k n}, \\quad \\lambda = \\sigma \\sqrt{2 \\ln(N)}",
    codeSnippet: `import pywt
import numpy as np

# Dekomposisi Wavelet Daubechies 4 (db4) Level 3
coeffs = pywt.wavedec(noisy_signal, 'db4', level=3)
cA3, cD3, cD2, cD1 = coeffs

# Soft-Thresholding Donoho
sigma = np.median(np.abs(cD1)) / 0.6745
threshold = sigma * np.sqrt(2 * np.log(len(noisy_signal)))
clean_coeffs = [cA3] + [pywt.threshold(c, threshold, mode='soft') for c in [cD3, cD2, cD1]]
clean_signal = pywt.waverec(clean_coeffs, 'db4')`,
    bloomHighlights: {
      c1_c2: "Perbedaan koefisien aproksimasi (cA) vs detail (cD) pada dekomposisi piramida wavelet.",
      c3_c4: "Perhitungan frekuensi analog dari bin FFT dan analisis pergeseran energi sub-band DWT pada kerusakan bantalan motor.",
      c5_c6: "Evaluasi filter IIR Butterworth vs Wavelet Denoising pada sinyal surja petir dan perancangan detector sag otomatis."
    }
  },
  {
    week: 10,
    title: "Feature Engineering & Machine Learning untuk STLF",
    subTitle: "Sliding Window Supervised Learning, Fitur Siklis Kalender, XGBoost/LightGBM, dan Time Series CV",
    category: "Machine Learning",
    subCpmk: "Sub-CPMK 9: Mampu merumuskan problem deret waktu ke Supervised Learning, rekayasa fitur, dan pelatihan Gradient Boosting.",
    summary: "Transformasi deret waktu sekuensial menjadi format matriks supervised learning, pembuatan fitur lag dekat dan lag musiman, statistik rolling window, encoding kalender siklis (sin/cos), algoritma pohon Gradient Boosting (XGBoost/LightGBM), dan pencegahan data leakage dengan TimeSeriesSplit.",
    theoryTopics: [
      "Formulasi Supervised Learning Deret Waktu via Sliding Window",
      "Taksonomi Fitur: Fitur Lag (t-1, t-24, t-168), Fitur Rolling Statistics",
      "Encoding Fitur Kalender Siklis menggunakan Transformasi Trigonometri (Sin/Cos)",
      "Algoritma Gradient Boosted Trees: XGBoost dan LightGBM",
      "Bahaya Lookahead Data Leakage dan Solusi TimeSeriesSplit Cross-Validation",
      "Analisis Feature Importance (Gain & Shapley Values)"
    ],
    labTopic: "Modul 9: Pipeline End-to-End Rekayasa Fitur dan Pelatihan Model XGBoost untuk STLF",
    slidePdf: "/documents/ch10.pdf",
    problemSetPdf: "/documents/problem_set_ch10.pdf",
    worksheetPdf: "/documents/worksheet_ch10.pdf",
    notebookUrl: "/notebooks/modul_09_feature_engineering_xgboost.ipynb",
    formulaLatex: "x_{\\sin} = \\sin\\left(\\frac{2\\pi \\cdot \\text{jam}}{24}\\right), \\quad x_{\\cos} = \\cos\\left(\\frac{2\\pi \\cdot \\text{jam}}{24}\\right), \\quad \\mathcal{L}^{(t)} = \\sum_{i=1}^n l(y_i, \\hat{y}_i^{(t-1)} + f_t(x_i)) + \\Omega(f_t)",
    codeSnippet: `import xgboost as xgb
from sklearn.model_selection import TimeSeriesSplit

# Rekayasa Fitur Temporal
df['hour_sin'] = np.sin(2 * np.pi * df.index.hour / 24)
df['hour_cos'] = np.cos(2 * np.pi * df.index.hour / 24)
df['lag_24'] = df['load'].shift(24)
df['roll_mean_24'] = df['load'].shift(1).rolling(24).mean()

# TimeSeriesSplit CV
tscv = TimeSeriesSplit(n_splits=5)
model = xgb.XGBRegressor(n_estimators=500, learning_rate=0.03, max_depth=6)`,
    bloomHighlights: {
      c1_c2: "Definisi teknik sliding window dan alasan mengapa fitur kalender jam/bulan wajib di-encode secara siklis.",
      c3_c4: "Kalkulasi manual fitur lag/rolling window dan analisis feature importance pohon keputusan terhadap profil beban puncak.",
      c5_c6: "Evaluasi strategi recursive vs direct multi-step forecasting dan perancangan auto-tuning pipeline XGBoost."
    }
  },
  {
    week: 11,
    title: "Deep Learning Sekuensial: RNN, LSTM, & GRU",
    subTitle: "Arsitektur Gerbang Memori, Masalah Vanishing Gradient, dan Peramalan Daya EBT Surya/Angin",
    category: "Deep Learning",
    subCpmk: "Sub-CPMK 10: Mampu menyusun tensor sekuensial 3D, memahami mekanisme gerbang LSTM/GRU, dan melatih model deep learning.",
    summary: "Keterbatasan jaringan saraf feedforward MLP, arsitektur Recurrent Neural Network (RNN), algoritma Backpropagation Through Time (BPTT), masalah vanishing/exploding gradient, gerbang LSTM (Forget, Input, Output), arsitektur GRU yang efisien, dan peramalan daya PLTS fluktuatif.",
    theoryTopics: [
      "Struktur Recurrent Neural Network (RNN) Standar dan Hidden State",
      "Masalah Vanishing & Exploding Gradient pada BPTT Jangka Panjang",
      "Arsitektur Long Short-Term Memory (LSTM): Mekanisme Constant Error Carousel",
      "Fungsi 3 Gerbang LSTM: Forget Gate, Input Gate, dan Output Gate",
      "Arsitektur Gated Recurrent Unit (GRU): Reset Gate dan Update Gate",
      "Penyusunan Tensor 3D (Batch_Size, Seq_Len, Features) pada PyTorch"
    ],
    labTopic: "Modul 10: Pembuatan Model Deep Learning PyTorch LSTM/GRU untuk Peramalan Daya PLTS 24 Jam",
    slidePdf: "/documents/ch11.pdf",
    problemSetPdf: "/documents/problem_set_ch11.pdf",
    worksheetPdf: "/documents/worksheet_ch11.pdf",
    notebookUrl: "/notebooks/modul_10_lstm_seq2seq.ipynb",
    formulaLatex: "f_t = \\sigma(W_f [h_{t-1}, x_t] + b_f), \\quad C_t = f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t, \\quad h_t = o_t \\odot \\tanh(C_t)",
    codeSnippet: `import torch
import torch.nn as nn

class RenewableLSTM(nn.Module):
    def __init__(self, in_dim=5, hidden_dim=64, num_layers=2, out_steps=24):
        super().__init__()
        self.lstm = nn.LSTM(in_dim, hidden_dim, num_layers, batch_first=True, dropout=0.2)
        self.fc = nn.Linear(hidden_dim, out_steps)

    def forward(self, x):
        out, _ = self.lstm(x)
        return self.fc(out[:, -1, :])`,
    bloomHighlights: {
      c1_c2: "Fungsi dari masing-masing 3 gerbang LSTM dan struktur dimensi tensor 3D PyTorch.",
      c3_c4: "Kalkulasi manual pembaruan Cell State dan Hidden State satu langkah waktu LSTM.",
      c5_c6: "Evaluasi komputasi dan memori LSTM vs GRU pada edge device mikrogrid serta perancangan BiLSTM."
    }
  },
  {
    week: 12,
    title: "Arsitektur Sekuensial Lanjut: CNN-1D, Seq2Seq, & Attention",
    subTitle: "Temporal Convolutional Networks, Encoder-Decoder, dan Pengenalan Transformer Deret Waktu",
    category: "Deep Learning",
    subCpmk: "Sub-CPMK 11: Mampu merancang 1D-CNN temporal, arsitektur Seq2Seq, dan memahami mekanisme Self-Attention Transformer.",
    summary: "Operasi konvolusi 1D temporal, Causal & Dilated Convolutions untuk memperluas Receptive Field, arsitektur Encoder-Decoder (Seq2Seq) untuk peramalan multi-cakrawala, mekanisme Bahdanau dan Luong Attention, serta paradigma Transformer (PatchTST / Informer).",
    theoryTopics: [
      "1D Convolutional Neural Network untuk Ekstraksi Bentuk Gelombang Lokal",
      "Causal Convolutions & Dilated Convolutions (Temporal Convolutional Network)",
      "Arsitektur Encoder-Decoder (Seq2Seq) untuk Multi-Horizon Forecasting",
      "Mekanisme Scaled Dot-Product Attention: Query (Q), Key (K), dan Value (V)",
      "Pengenalan Arsitektur Transformer untuk Deret Waktu Skala Besar (PatchTST)",
      "Studi Kasus: Peramalan Profil Tegangan Multi-Bus Simultan"
    ],
    labTopic: "Modul 11: Implementasi Model Hibrida CNN-LSTM dengan Attention Mechanism untuk Profil Beban Multi-Bus",
    slidePdf: "/documents/ch12.pdf",
    problemSetPdf: "/documents/problem_set_ch12.pdf",
    worksheetPdf: "/documents/worksheet_ch12.pdf",
    notebookUrl: "/notebooks/modul_10_lstm_seq2seq.ipynb",
    formulaLatex: "\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{QK^T}{\\sqrt{d_k}} \\right) V, \\quad R_l = R_{l-1} + (K-1) \\times d_l",
    codeSnippet: `import torch
import torch.nn as nn
import torch.nn.functional as F

class ScaledDotProductAttention(nn.Module):
    def __init__(self, d_k):
        super().__init__()
        self.d_k = d_k

    def forward(self, Q, K, V):
        scores = torch.matmul(Q, K.transpose(-2, -1)) / np.sqrt(self.d_k)
        attn_weights = F.softmax(scores, dim=-1)
        return torch.matmul(attn_weights, V), attn_weights`,
    bloomHighlights: {
      c1_c2: "Definisi Causal Convolutions dan formula Scaled Dot-Product Attention.",
      c3_c4: "Perhitungan Effective Receptive Field (ERF) pada TCN 3-layer dan analisis matriks visualisasi Attention Weights.",
      c5_c6: "Evaluasi efisiensi inferensi real-time model Transformer vs Autoregressive RNN dan perancangan CNN-BiLSTM-Attention."
    }
  },
  {
    week: 13,
    title: "Deteksi Anomali Sistem Tenaga & Autoencoder",
    subTitle: "Taksonomi Anomali Kelistrikan, Isolation Forest, dan Rekonstruksi Galat LSTM Autoencoder",
    category: "Deep Learning",
    subCpmk: "Sub-CPMK 12: Mampu merancang sistem deteksi anomali tanpa pengawasan (Unsupervised) berbasis Autoencoder.",
    summary: "Taksonomi anomali deret waktu sistem tenaga (Point, Contextual, Collective anomalies), metode statistik Z-score dan CUSUM, algoritma Isolation Forest, arsitektur LSTM Autoencoder untuk deteksi berbasis galat rekonstruksi, serta metrik Precision, Recall, dan F1-Score pada dataset timpang (*class imbalance*).",
    theoryTopics: [
      "Taksonomi Anomali Data Kelistrikan: Titik Ekstrem, Kontekstual, dan Kolektif",
      "Metode Statistik Klasik: Uji Z-Score Bergerak dan Algoritma CUSUM",
      "Algoritma Isolation Forest: Partisi Ruang Acak dan Anomaly Score",
      "Deep Learning: LSTM Autoencoder Berbasis Rekonstruksi Galat",
      "Penentuan Ambang Batas Deteksi Dinamis Berbasis Statistik Galat Latih",
      "Evaluasi Kinerja pada Dataset Imbalance: Precision, Recall, F1-Score, dan AUROC"
    ],
    labTopic: "Modul 12: Deteksi Pencurian Listrik Smart Meter dan Anomali Transformator dengan LSTM Autoencoder",
    slidePdf: "/documents/ch13.pdf",
    problemSetPdf: "/documents/problem_set_ch13.pdf",
    worksheetPdf: "/documents/worksheet_ch13.pdf",
    notebookUrl: "/notebooks/modul_11_anomaly_autoencoder.ipynb",
    formulaLatex: "\\mathcal{L}_{\\text{recon}}(t) = \\frac{1}{D} \\sum_{i=1}^D (x_{t,i} - \\hat{x}_{t,i})^2, \\quad \\tau = \\mu_{\\text{loss}} + 3 \\cdot \\sigma_{\\text{loss}}",
    codeSnippet: `from sklearn.ensemble import IsolationForest
import numpy as np

# Isolation Forest untuk Deteksi Outlier Titik
iso = IsolationForest(contamination=0.02, random_state=42)
anomalies = iso.fit_predict(sensor_features) # -1: Anomali, 1: Normal

# Galat Rekonstruksi Autoencoder
recon_error = np.mean(np.square(X_test - X_recon), axis=(1, 2))
threshold = np.mean(train_recon_error) + 3.0 * np.std(train_recon_error)
is_anomaly = recon_error > threshold`,
    bloomHighlights: {
      c1_c2: "Definisi 3 tipe anomali data sistem tenaga dan prinsip deteksi berbasis kompresi bottleneck Autoencoder.",
      c3_c4: "Perhitungan metrik Precision, Recall, dan F1-Score dari Confusion Matrix deteksi pencurian smart meter.",
      c5_c6: "Evaluasi kelemahan alarm ambang statis pada degradasi isolasi transformator dan perancangan LSTM Autoencoder PyOD."
    }
  },
  {
    week: 14,
    title: "Integrasi Operasi Daya & Kuantisasi Ketidakpastian",
    subTitle: "Peramalan Probabilistik (Quantile Regression P10-P90), Optimasi BESS Mikrogrid, dan MPC",
    category: "Power Operations",
    subCpmk: "Sub-CPMK 13: Mampu mengkuantisasi ketidakpastian EBT dan mengintegrasikannya ke penjadwalan baterai BESS mikrogrid.",
    summary: "Kelemahan peramalan titik tunggal, formulasi Quantile Regression Loss (Pinball Loss), peramalan pita probabilitas P10-P50-P90, evaluasi PICP dan PINAW, integrasi peramalan ke Unit Commitment dan Model Predictive Control (MPC), serta optimasi arbitrase tarif BESS mikrogrid.",
    theoryTopics: [
      "Dari Point Forecast ke Probabilistic Forecast: Urgensi Kuantisasi Risiko",
      "Formulasi Pinball Loss / Quantile Regression untuk Batas Kuantil Tau",
      "Metrik Evaluasi Pita Ketidakpastian: PICP (Coverage) dan PINAW (Width)",
      "Integrasi Peramalan pada Unit Commitment (UC) dan Cadangan Putar (Spinning Reserve)",
      "Model Predictive Control (MPC) untuk Penjadwalan BESS pada Smart Microgrid",
      "Strategi Peak Shaving dan Arbitrase Tarif Listrik Waktu Penggunaan (ToU)"
    ],
    labTopic: "Modul 13: Peramalan Probabilistik Kuantil LightGBM dan Optimasi Dispatch BESS Mikrogrid",
    slidePdf: "/documents/ch14.pdf",
    problemSetPdf: "/documents/problem_set_ch14.pdf",
    worksheetPdf: "/documents/worksheet_ch14.pdf",
    notebookUrl: "/notebooks/modul_12_probabilistic_bess_mpc.ipynb",
    formulaLatex: "\\mathcal{L}_\\tau(y, \\hat{y}_\\tau) = \\max\\left( \\tau(y - \\hat{y}_\\tau), (1 - \\tau)(\\hat{y}_\\tau - y) \\right), \\quad \\min \\sum_{t=1}^{24} C(t) P_{\\text{grid}}(t) \\Delta t",
    codeSnippet: `import lightgbm as lgb

# Melatih 3 Model Kuantil (P10, P50, P90)
q_models = {}
for q in [0.10, 0.50, 0.90]:
    params = {'objective': 'quantile', 'alpha': q, 'learning_rate': 0.05}
    q_models[q] = lgb.train(params, lgb_train, num_boost_round=200)

p10 = q_models[0.10].predict(X_test)
p50 = q_models[0.50].predict(X_test)
p90 = q_models[0.90].predict(X_test)`,
    bloomHighlights: {
      c1_c2: "Definisi fungsi kerugian Pinball Loss dan tujuan operasional pita ketidakpastian P10-P90 bagi operator PLN.",
      c3_c4: "Kalkulasi keseimbangan daya mikrogrid, pengosongan baterai BESS, dan pembaruan State-of-Charge (SoC).",
      c5_c6: "Evaluasi trade-off PICP vs PINAW dan perancangan formulasi program matematika optimasi linier MILP/CVXPY."
    }
  }
];
