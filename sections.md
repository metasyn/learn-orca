# basics 

## about

[Orca][orca] is an esoteric programming language, designed to create
procedural sequencers in which each letter of the alphabet is an
[operation](#operators), where lowercase letters operate on [bang](#bangs), uppercase
letters operate each [frame](#frames). It was created by
[hundred rabbits][hundredrabbits], a research studio on a sailboat.

Orca is not a synthesizer, but a flexible livecoding environment
capable of sending [MIDI], [OSC][osc] & [UDP][udp] to your audio/visual
interfaces, like Ableton, Renoise, VCV Rack or SuperCollider.

For the purposes of this site, we've connected some drum racks and
synthesizers from [Enfer][enfer] in the bottom right and are patching them in as virtualized midi instruments. Normally, Orca will not make sound on its own, and rather just sends messages or data to external devices or
programs. Orca and Enfer are both creations of [Devine Lu Linvega][devine].

## navigation

Orca can be navigated a number of ways. You can try clicking a
particular coordinate on the grid, or use the arrow keys to move
the cursor around. Conveniently, you can also see a lot of
navigational commands by opening the javascript console. When
Orca starts, it prints out a number of commands:


### movement

```
Move North............... ArrowUp
Move East................ ArrowRight
Move South............... ArrowDown
Move West................ ArrowLeft
Move North(Leap)......... CmdOrCtrl+ArrowUp
Move East(Leap).......... CmdOrCtrl+ArrowRight
Move South(Leap)......... CmdOrCtrl+ArrowDown
Move West(Leap).......... CmdOrCtrl+ArrowLeft
```

### selection

Orca also has the concept of a selection. You can hold down
shift to make it larger.

```
Scale North.............. Shift+ArrowUp
Scale East............... Shift+ArrowRight
Scale South.............. Shift+ArrowDown
Scale West............... Shift+ArrowLeft
Scale North(Leap)........ CmdOrCtrl+Shift+ArrowUp
Scale East(Leap)......... CmdOrCtrl+Shift+ArrowRight
Scale South(Leap)........ CmdOrCtrl+Shift+ArrowDown
Scale West(Leap)......... CmdOrCtrl+Shift+ArrowLeftl
```

### cursor

Lastly, there is a concept of a cursor mode, kind of like VIM.
Normally, typing will only edit value under the head of the cursor
(the @ sign). If you switch to insert mode, you can type and the
cursor head will auto advance.
```
Toggle Insert Mode....... CmdOrCtrl+I
Toggle Block Comment..... CmdOrCtrl+/
Trigger Operator......... CmdOrCtrl+P
Reset.................... Escape
```

## concepts

### base36 numbers

Orca utilizes a unique base-36 number system:

-   0-9: normal
-   a-z: 10-35

Here is a table to make it clear:

| **0** | **1** | **2** | **3** | **4** | **5** | **6** | **7** | **8** | **9** | **A** | **B**  | 
| :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:    | 
| 0     | 1     | 2     | 3     | 4     | 5     | 6     | 7     | 8     | 9     | 10    | 11     |
| **C** | **D** | **E** | **F** | **G** | **H** | **I** | **J** | **K** | **L** | **M** | **N**  |
| 12    | 13    | 14    | 15    | 16    | 17    | 18    | 19    | 20    | 21    | 22    | 23     |
| **O** | **P** | **Q** | **R** | **S** | **T** | **U** | **V** | **W** | **X** | **Y** | **Z**  | 
| 24    | 25    | 26    | 27    | 28    | 29    | 30    | 31    | 32    | 33    | 34    | 35     |

Anytime you want to give a numeric value, you can give a letter as well.

### operators

Operators are mostly letters, and a few symbols. An operator takes up
one cell in the grid. Most operators have some type of input or output
on one of their adjacent tiles. Some operators are capable of moving;
others stay put. You can see a guide referencing the operators by
pressing `CmdOrCtrl+G`

Operators come in two main flavors: lower-case and upper-case. Lower-case
letters will operate on every [bang](#bang), and upper-case letters
will operate on every [frame](#frames).

Most operators take some number of inputs and produce some number of inputs.
The inputs and outputs are generally going to be on the top, bottom, or sides of the operator.

For example, take the D operator. It has two <span class="argument">inputs</span> and one <span class="output">output</span>.

<div class='operator-example'>
<div class='operator-row'>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
</div>

<div class='operator-row'>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext">the first input: the rate</span>
8
</div>
<div class='operator-cell tooltip'>
<span class="tooltiptext tooltip">the operator</span>
D
</div>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext">the second input: the modulo</span>
2
</div>
</div> 

<div class='operator-row'>
<div class='operator-cell '>
.
</div>
<div class='operator-cell tooltip output'>
<span class="tooltiptext tooltip">the output: a bang</span>
*
</div>
<div class='operator-cell'>
.
</div>
</div>
</div> <!-- example -->

Other operators have a larger number of inptus an outputs. For example, take X - it has three <span class='argument'>inputs</span> and one <span class='output'>output</span>:
<div class='operator-example'>
<div class='operator-row'>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
</div>

<div class='operator-row'>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext">an x coordinate relative to the operator</span>
1
</div>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext tooltip">a y coordinate relative to the operator</span>
1
</div>
<div class='operator-cell tooltip'>
<span class="tooltiptext">the operator</span>
X
</div>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext">the third input: a value</span>
7
</div>
</div>

<div class='operator-row'>
<div class='operator-cell '>
.
</div>
<div class='operator-cell '>
.
</div>
<div class='operator-cell '>
.
</div>
<div class='operator-cell '>
.
</div>
</div>

<div class='operator-row'>
<div class='operator-cell '>
.
</div>
<div class='operator-cell '>
.
</div>
<div class='operator-cell '>
.
</div>
<div class='operator-cell tooltip output'>
<span class="tooltiptext tooltip">the output: the input value offset by x, -y</span>
7
</div>
</div>
</div> <!-- example -->


### bangs

Bangs are what makes thing happen. Many operators only get triggered when they there is a bang
operator adjacent to them. The bang operator itself is a * character. For example, the D operator
causes a bang on an interval at its bottom location. Any adjacent operator will be triggered if it is
next to that particular cell.

## timing

Orca has a few relevant components related to timing:

 - clock
 - frames
 - tempo 

### clock

The clock can be started and stop with the spacebar. If a midi
device is contected as an input, the clock will be set from the
midi device, and Orca will respond to midi start and stop
messages.

### frames

For each tick of the clock, we move forward a frame. Frames can
be skiped or rewinded with an Orca command if needed, too. The
current frame number can be seen in the bottom right of the
window.

### tempo

The tempo, as expected, determines the BPM and rate that the
clock will tick. There are some relevant shortcuts as well:

```
Frame By Frame........... CmdOrCtrl+F
Reset Frame.............. CmdOrCtrl+Shift+R
Incr. Speed.............. >
Decr. Speed.............. <
Incr. Speed(10x)......... CmdOrCtrl+>
Decr. Speed(10x)......... CmdOrCtrl+<
```

# first notes

## the midi operator
For the purposes of learning, the easiest way to start making some sound is by using the midi operator.
The midi operator takes five <span class="arguments">inputs</span>. It has zero Orca <span class="output">outputs</span>
but as you  might expect, sends a midi message to a midi device.

<div class='operator-example'>
<div class='operator-row'>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
</div>

<div class='operator-row'>
<div class='operator-cell tooltip'>
<span class="tooltiptext">the operator</span>
:
</div>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext tooltip">a midi channel to send messages on (A = channel 10)</span>
A
</div>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext">an octave</span>
2
</div>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext">a note value</span>
F
</div>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext">a velocity value</span>
5
</div>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext">a duration value</span>
1
</div>
</div>

<div class='operator-row'>
<div class='operator-cell '>
.
</div>
<div class='operator-cell '>
.
</div>
<div class='operator-cell '>
.
</div>
<div class='operator-cell '>
.
</div>
<div class='operator-cell '>
.
</div>
<div class='operator-cell '>
.
</div>
</div>
</div>

### transpose table

The midi operator interprets any letter above the chromatic scale as a transpose value, for instance 3H, is equivalent to 4A.

| **0** | **1** | **2** | **3** | **4** | **5** | **6** | **7** | **8** | **9** | **A** | **B**  | 
| :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:   | :-:    | 
| _     | _     | _     | _     | _     | _     | _     | _     | _     | _     | A0    | B0     |
| **C** | **D** | **E** | **F** | **G** | **H** | **I** | **J** | **K** | **L** | **M** | **N**  |
| C0    | D0    | E0    | F0    | G0    | A0    | B0    | C1    | D1    | E1    | F1    | G1     | 
| **O** | **P** | **Q** | **R** | **S** | **T** | **U** | **V** | **W** | **X** | **Y** | **Z**  | 
| A1    | B1    | C2    | D2    | E2    | F2    | G2    | A2    | B2    | C3    | D3    | E3     | 


### banging away

However, you'll need to somehow send a bang to the operator.
Go ahead and try checking out some of the instruments that are already wired up via [Enfer][enfer].
An easy one to start with is the D operator.

Try adding the following:
```orca
.D......
..:03cf5
```
and making sure the clock is on my pressing space. Boom! We've made our first notes.
Quickly, I'm sure you'll find a single repeating note annoying. Why don't we add some chaos?

## randomization

We can add a random note value by using the R operator.

<div class='operator-example'>
<div class='operator-row'>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
</div>

<div class='operator-row'>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext">the first input: the minimum random value</span>
a
</div>
<div class='operator-cell tooltip'>
<span class="tooltiptext tooltip">the operator</span>
R
</div>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext">the second input: the maximum random value</span>
z
</div>
</div> 

<div class='operator-row'>
<div class='operator-cell '>
.
</div>
<div class='operator-cell tooltip output'>
<span class="tooltiptext tooltip">the output: a random value</span>
t
</div>
<div class='operator-cell'>
.
</div>
</div>
</div> <!-- example -->

So, lets try putting it above our note argument:

```orca
.D..aRz.
..:03cf5
```

## regularization

We can also create something interesting by varying regularly. One useful operator for this is the C operator.

<div class='operator-example'>
<div class='operator-row'>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
<div class='operator-cell'>
.
</div>
</div>

<div class='operator-row'>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext">the first input: the rate</span>
2
</div>
<div class='operator-cell tooltip'>
<span class="tooltiptext tooltip">the operator</span>
C
</div>
<div class='operator-cell tooltip argument'>
<span class="tooltiptext">the second input: the modulo</span>
7
</div>
</div> 

<div class='operator-row'>
<div class='operator-cell '>
.
</div>
<div class='operator-cell tooltip output'>
<span class="tooltiptext tooltip">the output: the clock value</span>
4
</div>
<div class='operator-cell'>
.
</div>
</div>
</div>

Try running the following:

```orca
..C.....
.D..aRz.
..:03cf5
```

Now lets make four of them!

```orca
..C.....
.D..aRz.
..:03cf5

..C.....
.D..aRz.
..:03cf5

..C.....
.D..aRz.
..:03cf5

..C.....
.D..aRz.
..:03cf5
```

# contributing

If you find this guide useful, and would like to contribute, PRs are welcome [here][learn-orca].
If you find [Orca][orca] or [Enfer][enfer] useful; please support [hunred rabbits][support].
 
<!-- LINKS -->
[learn-orca]: https://github.com/metasyn/learn-orca
[enfer]: https://github.com/neauoire/Enfer
[hundredrabbits]: https://100r.co/site/home.html
[support]: https://100r.co/site/support.html
[devine]: https://wiki.xxiivv.com/site/home.html
[orca]: https://github.com/hundredrabbits/Orca
[metasyn]: https://metasyn.github.io
[midi]: https://en.wikipedia.org/wiki/MIDI
[osc]: https://en.wikipedia.org/wiki/Open_Sound_Control
[udp]: https://en.wikipedia.org/wiki/User_Datagram_Protocol
