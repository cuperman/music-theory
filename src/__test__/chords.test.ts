import { Note } from '../notes';
import { Step } from '../steps';
import * as chords from '../chords';

describe('chords', () => {
  describe('majorChord', () => {
    test('C Major', () => {
      expect(chords.majorChord(Note.C)).toEqual([Note.C, Note.E, Note.G]);
    });

    test('B Major', () => {
      expect(chords.majorChord(Note.B)).toEqual([
        Note.B,
        Note.D_SHARP + Step.OCTAVE,
        Note.F_SHARP + Step.OCTAVE
      ]);
    });
  });

  describe('minorChord', () => {
    test('C Minor', () => {
      expect(chords.minorChord(Note.C)).toEqual([Note.C, Note.E_FLAT, Note.G]);
    });

    test('A Minor', () => {
      expect(chords.minorChord(Note.A)).toEqual([
        Note.A,
        Note.C + Step.OCTAVE,
        Note.E + Step.OCTAVE
      ]);
    });

    test('B Minor', () => {
      expect(chords.minorChord(Note.B)).toEqual([
        Note.B,
        Note.D + Step.OCTAVE,
        Note.F_SHARP + Step.OCTAVE
      ]);
    });
  });
});
