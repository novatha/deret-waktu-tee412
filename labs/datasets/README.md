# Katalog Dataset Praktikum — Analisis Deret Waktu & Peramalan (TEE-412)

Seluruh berkas CSV di bawah ini siap diunduh dan langsung digunakan pada:
1. **12 Notebook Google Colab** di folder `labs/`
2. **Fitur Upload CSV** di Virtual Forecasting Studio (`https://www.ndaratha.my.id/deret-waktu/sandbox`)

| Berkas Dataset | Dimensi | Kolom Utama | Relevansi Modul |
| :--- | :---: | :--- | :--- |
| `beban_cuaca_regional_168h.csv` | 168 baris (1 minggu, per-jam) | `Timestamp`, `Load_MW`, `Temp_C`, `Humidity_Pct`, `Is_Weekend` | Modul 1, 3, 5, 6 (SARIMAX), 9 (XGBoost), & Virtual Studio |
| `plts_500kwp_iradiasi_168h.csv` | 168 baris (1 minggu, per-jam) | `Timestamp`, `PV_Power_kW`, `Irradiance_Wm2`, `Panel_Temp_C` | Modul 10 (LSTM/Seq2Seq), 12 (Quantile P10–P90 & BESS), & Virtual Studio |
| `smartmeter_anomaly_168h.csv` | 168 baris (1 minggu, per-jam) | `Timestamp`, `Power_kW`, `Voltage_V`, `Is_Anomaly_Label` | Modul 11 (Isolation Forest & LSTM Autoencoder) — memuat 1 *point anomaly* (t=42) dan 1 *collective anomaly/bypass* (t=110–128) |
