.PHONY: pandoc examples watch serve format lint
.ONESHELL:

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

serve:
	python3 -m http.server 8000

format:
	prettier --write js/*
	eslint --fix js/*

lint:
	eslint js/*

tmux:
	tmux new-session -d -s "learn-orca" \; \
    new-window \; \
    send-keys 'make serve' C-m \; \
		rename-window "serve" \; \
		new-window \; \
    send-keys 'make watch' C-m \; \
		rename-window "watch" \; \
		select-window -t 0
	tmux attach-session -t "learn-orca"
