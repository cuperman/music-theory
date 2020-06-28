# music-theory

## Notes

There are 12 different notes

- A
- A#/Bb
- B
- C
- C#/Db
- D
- D#/Eb
- E
- F
- F#/Gb
- G
- G#/Ab

### Using notes

```ts
import { Note } from 'music-theory';

const a = Note.A;
const aSharp = Note.A_SHARP;
const bFlat = Note.B_FLAT;
```

## Steps

Types of steps

- Half steps: +1 note (semitone)
- Whole steps: 2 half steps
- Octaves: 12 half steps

### Using steps

```ts
import { Note, Step } from 'music-theory';

const a = Note.A;

const aSharp = a + Step.HALF;
const b = a + Step.WHOLE;
const a1 = a + Step.OCTAVE;
```

## Intervals

- Perfect 1st (+0 semitones)
- Major 2nd (+2 semitones)
- Minor 3rd (+3 semitones)
- Major 3rd (+4 semitones)
- Major 4th (+5 semitones)
- Diminished 5th (+6 semitones)
- Perfect 5th (+7 semitones)
- Augmented 5th (+8 semitones)
- Diminished 7th (+9 semitones)
- Minor 7th (+10 semitones)
- Major 7th (+11 semitones)
- Major 9th (+14 semitones)
- Perfect 11th (+17 semitones)

There are more, but this is all I needed to build the chords.

Reference: [https://en.wikipedia.org/wiki/Interval\_(music)](<https://en.wikipedia.org/wiki/Interval_(music)>)

### Using intervals

```ts
import { Note, perfect5th } from 'music-theory';

const rootNote = Note.C;

const fifths = [rootNote, perfect5th(rootNote)];
```

## Chords

- Major
- Minor
- Diminished
- Major 7th
- Minor 7th
- Dominant 7th
- Suspended 2
- Suspended 4
- Augmented
- Dominant 9th
- Major 11th
- Diminished 7th
- Half-diminished 7th

There are more chords, but I started with the ones described here: [https://www.edmprod.com/different-chord-types/](https://www.edmprod.com/different-chord-types/)

### Using chords

```ts
import { Note, majorChord, minorChord } from 'music-theory';

const cMajor = majorChord(Note.C);
const aMinor = minorChord(Note.A);
```

## Modes

1. Ionian (Major)
2. Dorian
3. Phrygian
4. Lydian
5. Mixolydian
6. Aeolian (Natural Minor)
7. Locrian

Reference: [https://en.wikipedia.org/wiki/Mode\_(music)](<https://en.wikipedia.org/wiki/Mode_(music)>)

### Using modes

```ts
import {
  Note,
  ionianMode,
  aeolianMode,
  majorChord,
  chordInMode
} from 'music-theory';

const cMajorScale = ionianMode(Note.C);
const aMinorScale = aeolianMode(Note.A);

// All Major chords in the C Major scale
const majorChords = cMajorScale.map((note) => majorChord(note));
const majorChordsInCMajor = majorChords.filter((chord) =>
  chordInMode(chord, cMajorScale)
);
```
