.PHONY: all latex sync-pdf web hki-bundle clean

PUBLIC_TEX := rps_deret_waktu_elektro.tex \
              modul_praktikum_deret_waktu.tex \
              kisi_kisi_mahasiswa_deret_waktu.tex \
              kisi_kisi_uas_deret_waktu.tex \
              panduan_proyek_akhir_deret_waktu.tex \
              kuesioner_evaluasi_obe_cqi.tex \
              $(wildcard ch*.tex problem_set_ch*.tex worksheet_ch*.tex)

PUBLIC_PDF := $(PUBLIC_TEX:.tex=.pdf)

all: sync-pdf web

latex:
	@for f in $(PUBLIC_TEX); do \
		echo "Compiling $$f..."; \
		pdflatex -interaction=nonstopmode "$$f" > /dev/null; \
		pdflatex -interaction=nonstopmode "$$f" > /dev/null; \
	done
	@$(MAKE) clean

sync-pdf:
	@mkdir -p web/public/documents web/public/notebooks web/public/datasets
	@for f in $(PUBLIC_PDF); do \
		if [ -f "$$f" ]; then cp "$$f" web/public/documents/; fi; \
	done
	@if [ -f labs/template_laporan_ieee.tex ]; then cp labs/template_laporan_ieee.tex labs/template_laporan_ieee.pdf web/public/documents/; fi
	@if ls labs/*.ipynb >/dev/null 2>&1; then cp labs/*.ipynb web/public/notebooks/; fi
	@if ls labs/datasets/*.csv >/dev/null 2>&1; then cp labs/datasets/*.csv web/public/datasets/; fi
	@echo "Synced public PDFs, IEEE template, notebooks, & CSV datasets to web/public/ (private-exams/ excluded)."

web:
	cd web && ASTRO_TELEMETRY_DISABLED=1 npm run build

hki-bundle:
	cd hki && pdflatex -interaction=nonstopmode cover_kompilasi_modul_ajar.tex > /dev/null
	cd hki && pdflatex -interaction=nonstopmode dokumen_pendaftaran_hki_tee412.tex > /dev/null && pdflatex -interaction=nonstopmode dokumen_pendaftaran_hki_tee412.tex > /dev/null
	cd hki && pdflatex -interaction=nonstopmode surat_pernyataan_hki_tee412.tex > /dev/null
	python3 hki/build_hki_bundle.py
	@$(MAKE) clean

clean:
	rm -f *.aux *.bbl *.blg *.fdb_latexmk *.fls *.lof *.log *.lot *.nav *.out *.snm *.synctex.gz *.toc *.vrb
	rm -f private-exams/*.aux private-exams/*.log private-exams/*.out
	rm -f hki/*.aux hki/*.log hki/*.out hki/*.toc
