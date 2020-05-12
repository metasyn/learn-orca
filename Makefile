.PHONY: pandoc

pandoc:
	pandoc \
		--standalone \
		--toc \
		--section-divs \
		--template=templates/main.pandoc \
		sections.md > sections.html

examples:
	python3 scripts/make_examples.py

watch:
	fswatch -0 sections.md | xargs -0 -I {} make pandoc
