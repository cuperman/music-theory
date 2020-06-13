import { Note } from './notes';
import * as intervals from './intervals';

export type Chord = Note[];

export function majorChord(root: Note): Chord {
    return [intervals.perfect1st, intervals.major3rd, intervals.perfect5th].map((fn) => fn(root));
}

export function minorChord(root: Note): Chord {
    return [intervals.perfect1st, intervals.minor3rd, intervals.perfect5th].map((fn) => fn(root));
}
