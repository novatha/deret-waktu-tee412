#!/usr/bin/env python3
"""
Merakit satu berkas PDF utuh ber-bookmark (Contoh Ciptaan 2 DJKI: Buku/Modul Ajar)
dari seluruh PDF publik mata kuliah Analisis Deret Waktu dan Peramalan (TEE-412).
Dokumen rahasia di private-exams/ TIDAK PERNAH disertakan.
"""

from pathlib import Path
from pypdf import PdfWriter

ROOT = Path(__file__).resolve().parent.parent
HKI_DIR = ROOT / "hki"
OUT_PDF = HKI_DIR / "kompilasi_modul_ajar_obe_tee412.pdf"

WEEKS = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14]

SECTIONS = [
    ("Sampul & Daftar Isi", [
        ("Sampul Kompilasi Modul Ajar OBE", HKI_DIR / "cover_kompilasi_modul_ajar.pdf"),
    ]),
    ("Bagian I - Kurikulum & RPS OBE", [
        ("RPS Analisis Deret Waktu & Peramalan (TEE-412)", ROOT / "rps_deret_waktu_elektro.pdf"),
    ]),
    ("Bagian II - Buku Panduan Praktikum (12 Bab)", [
        ("Modul Praktikum Komputasi Cerdas", ROOT / "modul_praktikum_deret_waktu.pdf"),
    ]),
    ("Bagian III - Panduan Proyek Akhir, Kisi-Kisi, & OBE-CQI", [
        ("Panduan & Rubrik Proyek Akhir IEEE", ROOT / "panduan_proyek_akhir_deret_waktu.pdf"),
        ("Contoh Template Laporan IEEE 2-Kolom", ROOT / "labs" / "template_laporan_ieee.pdf"),
        ("Kisi-Kisi UTS Mahasiswa", ROOT / "kisi_kisi_mahasiswa_deret_waktu.pdf"),
        ("Kisi-Kisi UAS Mahasiswa", ROOT / "kisi_kisi_uas_deret_waktu.pdf"),
        ("Instrumen Umpan Balik Mahasiswa (OBE-CQI)", ROOT / "kuesioner_evaluasi_obe_cqi.pdf"),
    ]),
    ("Bagian IV - 13 Modul Slide Perkuliahan (Beamer)", [
        (f"Minggu {w:02d} - Slide Perkuliahan (ch{w}.pdf)", ROOT / f"ch{w}.pdf") for w in WEEKS
    ]),
    ("Bagian V - 13 Problem Sets (Taksonomi Bloom C1-C6)", [
        (f"Minggu {w:02d} - Problem Set C1-C6", ROOT / f"problem_set_ch{w}.pdf") for w in WEEKS
    ]),
    ("Bagian VI - 13 Lembar Kerja Mahasiswa (Worksheets)", [
        (f"Minggu {w:02d} - Worksheet Mahasiswa", ROOT / f"worksheet_ch{w}.pdf") for w in WEEKS
    ]),
]


def build_bundle() -> None:
    writer = PdfWriter()
    total_files = 0
    for sec_title, items in SECTIONS:
        sec_parent = None
        for label, pdf_path in items:
            if not pdf_path.exists():
                raise FileNotFoundError(f"PDF wajib tidak ditemukan: {pdf_path}")
            start_page = len(writer.pages)
            writer.append(str(pdf_path))
            if sec_parent is None:
                sec_parent = writer.add_outline_item(sec_title, start_page)
            writer.add_outline_item(label, start_page, parent=sec_parent)
            total_files += 1

    writer.add_metadata({
        "/Title": "Kompilasi Modul Ajar OBE - Analisis Deret Waktu dan Peramalan (TEE-412)",
        "/Author": "Ir. Novalio Daratha, S.T., M.Sc., Ph.D.",
        "/Subject": "Lampiran Contoh Ciptaan Hak Cipta (DJKI / LPPM Universitas Bengkulu)",
        "/Keywords": "Time Series, Forecasting, Power Systems, OBE, TEE-412, UNIB",
    })
    with OUT_PDF.open("wb") as fh:
        writer.write(fh)

    size_mb = OUT_PDF.stat().st_size / (1024 * 1024)
    print(f"Berhasil merakit {total_files} berkas ({len(writer.pages)} halaman, {size_mb:.2f} MB) -> {OUT_PDF}")


if __name__ == "__main__":
    build_bundle()
