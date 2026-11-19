from pathlib import Path
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose

# 1. Membaca dataset beban listrik PLN / Gardu Induk (Interval: 1 Jam)
DATA_PATH = Path(__file__).resolve().parent / 'hourlyloadpln.csv'
df = pd.read_csv(DATA_PATH, sep=',')
df = df.dropna(how='all', axis=1)
# 2. Melakukan dekomposisi aditif dengan periode musiman harian (period=24 jam)
decomposition = seasonal_decompose(df['GroundTruth'], model='additive', period=24)

# 3. Mengekstrak masing-masing komponen
trend = decomposition.trend
seasonal = decomposition.seasonal
residual = decomposition.resid

# 4. Plot visualisasi 4-panel
fig = decomposition.plot()
fig.set_size_inches(10, 6)
plt.tight_layout()
plt.show()


