import { Note } from './src/index';
import * as chords from './src/chords';
import * as modes from './src/modes';

const notes = {
  A: Note.A,
  'A#': Note.A_SHARP,
  B: Note.B,
  C: Note.C,
  'C#': Note.C_SHARP,
  D: Note.D,
  'D#': Note.D_SHARP,
  E: Note.E,
  F: Note.F,
  'F#': Note.F_SHARP,
  G: Note.G,
  'G#': Note.G_SHARP
};

const chordFunctions = {
  Major: chords.majorChord,
  'Major 7th': chords.major7thChord,
  'Major 11th': chords.major11thChord,
  Minor: chords.minorChord,
  'Minor 7th': chords.minor7thChord,
  'Dominant 7th': chords.dominant7thChord,
  'Dominant 9th': chords.dominant9thChord,
  Diminished: chords.diminishedChord,
  'Suspended 2': chords.suspended2Chord,
  'Suspended 4': chords.suspended4Chord,
  Augmented: chords.augmentedChord
};

const allChords: { [name: string]: chords.Chord } = {};

Object.entries(notes).forEach(([rootName, rootNote]) => {
  Object.entries(chordFunctions).forEach(([chordName, chordFn]) => {
    const name = [rootName, chordName].join(' ');
    allChords[name] = chordFn(rootNote);
  });
});

console.log('all chords', allChords);

const eMajorScale = modes.ionianMode(Note.E);
const allChordsInEMajor = Object.entries(allChords).filter(([_name, chord]) => {
  return modes.chordInMode(chord, eMajorScale);
});

console.log('all chords in E Major', allChordsInEMajor);

const cMajorScale = modes.ionianMode(Note.C);
const allChordsInCMajor = Object.entries(allChords).filter(([_name, chord]) => {
  return modes.chordInMode(chord, cMajorScale);
});

console.log('all chords in C Major', allChordsInCMajor);
