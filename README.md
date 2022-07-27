# learn-orca

learn-orca is a site for learning how to use [Orca](https://100r.co/site/orca.html).

# developing

Requires [pandoc](https://pandoc.org)

```
git submodule update
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

- make changes
- run `make pandoc` if needed
- run the linter and formatter
- does the site load? do examples load?
- use [git-send-email](https://git-send-email.io) to send a patch to ~metasyn/public-inbox@lists.sr.ht

# license

```
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <http://unlicense.org/>
```
