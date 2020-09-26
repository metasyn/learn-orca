#!/usr/bin/env python

import json
import glob

EXAMPLES_FOLDER = "orca-examples/"

if __name__ == '__main__':
    ret = {}
    files = [
        f for f in glob.glob(EXAMPLES_FOLDER + "**/*.orca", recursive=True)
        if ('osc' not in f) and ('benchmark' not in f) and ('udp' not in f)
    ]

    for path in files:
        print(path)
        with open(path, 'r') as fp:
            contents = fp.read()
            name = path.split(EXAMPLES_FOLDER)[1][:-5]
            ret[name] = contents

    json_string = json.dumps(ret)
    output = "window.examples = " + json_string
    with open('js/examples.js', 'w') as fp:
        fp.write(output)
