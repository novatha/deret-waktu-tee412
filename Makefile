.PHONY: all latex sync-pdf web clean

PUBLIC_TEX := rps_deret_waktu_elektro.tex \
              modul_praktikum_deret_waktu.tex \
              kisi_kisi_mahasiswa_deret_waktu.tex \
              kisi_kisi_uas_deret_waktu.tex \
              panduan_proyek_akhir_deret_waktu.tex \
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
	@mkdir -p web/public/documents
	@for f in $(PUBLIC_PDF); do \
		if [ -f "$$f" ]; then cp "$$f" web/public/documents/; fi; \
	done
	@echo "Synced public PDFs to web/public/documents/ (private-exams/ excluded)."

web:
	cd web && ASTRO_TELEMETRY_DISABLED=1 npm run build

clean:
	rm -f *.aux *.bbl *.blg *.fdb_latexmk *.fls *.lof *.log *.lot *.nav *.out *.snm *.synctex.gz *.toc *.vrb
	rm -f private-exams/*.aux private-exams/*.log private-exams/*.out
