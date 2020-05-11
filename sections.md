## about
Orca is an esoteric programming language, designed to create
procedural sequencers in which each letter of the alphabet is an
operation, where lowercase letters operate on bang, uppercase
letters operate each frame. It was created by
[hundred rabbits][hundredrabbits], a research studio on a sailboat.

Orca is not a synthesizer, but a flexible livecoding environment
capable of sending MIDI, OSC & UDP to your audio/visual
interfaces, like Ableton, Renoise, VCV Rack or SuperCollider.

For the purposes of this site, we've connected some drum racks and
synthesizers from [Enfer][enfer] in the bottom right and are patching them in as virtualized midi instruments. Normally, Orca will not make sound on its own, and
rather just sends messages or data to external devices or
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
Incr. Speed.............. &gt;
Decr. Speed.............. &lt;
Incr. Speed(10x)......... CmdOrCtrl+&gt;
Decr. Speed(10x)......... CmdOrCtrl+&lt;
```

<!-- LINKS -->
[enfer]: https://github.com/neauoire/Enfer
[hundredrabbits]: https://100r.co/site/home.html
[devine]: https://wiki.xxiivv.com/site/home.html
[metasyn]: https://metasyn.github.io