# Portal Perkuliahan Analisis Deret Waktu & Peramalan (TEE-412)

Portal web statis dan laboratorium virtual berbasis **Astro** untuk mata kuliah **Analisis Deret Waktu dan Peramalan (TEE-412, 3 SKS)**, Program Studi S1 Teknik Elektro, Fakultas Teknik Universitas Bengkulu (UNIB).

- **URL Produksi**: `https://www.ndaratha.my.id/deret-waktu`
- **Dosen Pengampu**: Ir. Novalio Daratha, S.T., M.Sc., Ph.D.

## Struktur Proyek

```text
Deret Waktu/
├── RPS_Analisis_Deret_Waktu_Teknik_Elektro.md   # RPS OBE (Markdown)
├── rps_deret_waktu_elektro.tex / .pdf           # RPS OBE (LaTeX/PDF)
├── ch{1..7,9..14}.tex / .pdf                    # 13 Slide Beamer Perkuliahan
├── problem_set_ch{1..7,9..14}.tex / .pdf        # 13 Problem Sets (Bloom C1-C6)
├── worksheet_ch{1..7,9..14}.tex / .pdf          # 13 Lembar Kerja Mahasiswa (C1-C6)
├── modul_praktikum_deret_waktu.tex / .pdf       # Buku Panduan Praktikum (12 Bab)
├── kisi_kisi_mahasiswa_deret_waktu.tex / .pdf   # Kisi-Kisi UTS Mahasiswa
├── kisi_kisi_uas_deret_waktu.tex / .pdf         # Kisi-Kisi UAS Mahasiswa
├── panduan_proyek_akhir_deret_waktu.tex / .pdf  # Panduan, Template IEEE & Rubrik PjBL
├── private-exams/                               # [GITIGNORED] Naskah, Kunci, & Rubrik UTS/UAS
├── latihanbab1/                                 # Dataset & Skrip Praktikum Bab 1
├── labs/requirements.txt                        # Dependensi Python Praktikum
└── web/                                         # Portal Web Astro + Virtual Forecasting Studio
    ├── public/documents/                        # PDF publik yang dilayani portal
    └── src/
        ├── components/                          # Navbar, Footer, WeekCard, ForecastingStudio, DocSidebar
        ├── data/courseData.ts                   # Single source of truth metadata & 13 modul
        └── pages/                               # Beranda, RPS, Katalog Materi, Praktikum, Sandbox
```

## Perintah Pengembangan (`web/`)

| Perintah | Keterangan |
| :--- | :--- |
| `npm install` | Memasang dependensi Astro & Chart.js |
| `npm run dev` | Menjalankan server lokal di `http://localhost:4321/deret-waktu` |
| `npm run build` | Membangun situs statis produksi ke `web/dist/` |
| `npm run preview` | Pratinjau hasil build produksi secara lokal |

## Alur Pembaruan Bahan Ajar (LaTeX → Web)

1. Sunting berkas `.tex` publik di direktori induk dan kompilasi dengan `pdflatex`.
2. Salin berkas `.pdf` publik terbaru ke `web/public/documents/` (pastikan tidak menyalin isi `private-exams/`).
3. Perbarui metadata di `web/src/data/courseData.ts` bila ada dokumen baru.
4. Jalankan `npm run build` di direktori `web/` dan sinkronkan `web/dist/` ke repositori deploy `ndaratha.my.id`.
