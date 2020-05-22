# learn-orca

learn-orca is a site for learning how to use [Orca](https://github.com/hundredrabbits/Orca).

# setup

Requires [pandoc](https://pandoc.org)

```
git submodule update
```

This site uses pandoc to convert markdown to html. The html is then loaded via an iframe.

To make/update the sections:
```
make pandoc
```

To make/update the examples:
```
make examples
```

If you're developing, you can run:
```
make serve
```
to start a simple web server for testing.

You can run:
```
make watch
```
to automatically call pandoc on files changes. This requires [fswatch](https://github.com/emcrisostomo/fswatch).

Additionally you can format and lint your javascript with:
```
make format
make lint
```

which should help you find bugs/issues in the code.

# adding sections

Simply update `sections.md` and run `make pandoc`.

# adding operators

Operators are in `js/main.js`. Each operator specifies some rows, inputs, and outputs.


# license

MIT
