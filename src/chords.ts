// reference: https://www.edmprod.com/different-chord-types/

import { Note } from './notes';
import * as intervals from './intervals';

export type Chord = Note[];

function makeChord(root: Note, intervals: intervals.Interval[]): Chord {
  return intervals.map((fn) => fn(root));
}

export function majorChord(root: Note): Chord {
  return makeChord(root, [
    intervals.perfect1st,
    intervals.major3rd,
    intervals.perfect5th
  ]);
}

export function minorChord(root: Note): Chord {
  return makeChord(root, [
    intervals.perfect1st,
    intervals.minor3rd,
    intervals.perfect5th
  ]);
}

export function diminishedChord(root: Note): Chord {
  return makeChord(root, [
    intervals.perfect1st,
    intervals.minor3rd,
    intervals.diminished5th
  ]);
}

export function major7thChord(root: Note): Chord {
  return makeChord(root, [
    intervals.perfect1st,
    intervals.major3rd,
    intervals.perfect5th,
    intervals.major7th
  ]);
}

export function minor7thChord(root: Note): Chord {
  return makeChord(root, [
    intervals.perfect1st,
    intervals.minor3rd,
    intervals.perfect5th,
    intervals.minor7th
  ]);
}

export function dominant7thChord(root: Note): Chord {
  return makeChord(root, [
    intervals.perfect1st,
    intervals.major3rd,
    intervals.perfect5th,
    intervals.minor7th
  ]);
}

export function suspended2Chord(root: Note): Chord {
  return makeChord(root, [
    intervals.perfect1st,
    intervals.major2nd,
    intervals.perfect5th
  ]);
}

export function suspended4Chord(root: Note): Chord {
  return makeChord(root, [
    intervals.perfect1st,
    intervals.major4th,
    intervals.perfect5th
  ]);
}

export function augmentedChord(root: Note): Chord {
  return makeChord(root, [
    intervals.perfect1st,
    intervals.major3rd,
    intervals.augmented5th
  ]);
}

export function dominant9thChord(root: Note): Chord {
  return makeChord(root, [
    intervals.perfect1st,
    intervals.major3rd,
    intervals.perfect5th,
    intervals.minor7th,
    intervals.major9th
  ]);
}

export function major11thChord(root: Note): Chord {
  return makeChord(root, [
    intervals.perfect1st,
    intervals.major3rd,
    intervals.perfect5th,
    intervals.major7th,
    intervals.major9th,
    intervals.perfect11th
  ]);
}
