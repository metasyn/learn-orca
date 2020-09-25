# learn-orca

learn-orca is a site for learning how to use [Orca](https://github.com/hundredrabbits/Orca).

# developing

Requires [pandoc](https://pandoc.org)

This repo also has submodules. You can either:
```
# clone with reference
git clone --recursive [URL to Git repo]

# or run this after cloning
git submodule update --init
```

This site uses pandoc to convert markdown to html. The html is then loaded via an iframe.

To make/update the sections:
```
make pandoc
```

To make/update the examples (requires python3):
```
make examples
```

If you're developing, you can run:
```
make serve
```
to start a simple web server for testing (requires python3).

You can run:
```
make watch
```
to automatically call pandoc on files changes. This requires [fswatch](https://github.com/emcrisostomo/fswatch).

Formatting and linting - If you have eslint and prettier installed, you can run:
```
make format
make lint
```
which should help you find bugs/issues in the code.
You can install them with `npm install`.

# adding sections

Simply update `sections.md` and run `make pandoc`.

# adding operators

Operators are in `js/main.js`. Each operator specifies some rows, inputs, and outputs.

# contributing

* make changes
* run `make pandoc` if needed
* run the linter and formatter
* does the site load? do examples load?
* make a PR!


# license

MIT
