import { Note } from './notes';
import { Step } from './steps';
import { Chord } from './chords';
import { Mode } from './modes';

export function normalize(notes: Note[]): Note[] {
  return notes.map((note) => {
    const normal = note % 12;
    if (normal === -0) {
      return 0;
    } else if (normal < 0) {
      return normal + Step.OCTAVE;
    } else {
      return normal;
    }
  });
}

export function chordInMode(chord: Chord, mode: Mode) {
  const notesInMode = normalize(chord).map((note) => mode.includes(note));
  return !notesInMode.includes(false);
}
