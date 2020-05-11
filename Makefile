.PHONY: pandoc

pandoc:
	pandoc \
		--standalone \
		--toc \
		--section-divs \
		--template=templates/main.pandoc \
		sections.md > sections.html
