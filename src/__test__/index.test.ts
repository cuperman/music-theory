import {
  Note,
  Step,
  majorChord,
  minorChord,
  ionianMode,
  aeolianMode,
  normalize,
  chordInMode
} from '../index';

describe('utils', () => {
  describe('normalize', () => {
    it('tranlates all notes to the zero position', () => {
      expect(
        normalize([
          Note.A,
          Note.B + Step.OCTAVE,
          Note.C - Step.OCTAVE,
          Note.D + 2 * Step.OCTAVE,
          Note.E - 2 * Step.OCTAVE
        ])
      ).toEqual([Note.A, Note.B, Note.C, Note.D, Note.E]);
    });
  });

  describe('chordInMode', () => {
    const cMajorChord = majorChord(Note.C);
    const cMinorChord = minorChord(Note.C);
    const aMinorChord = minorChord(Note.A);

    const cMajorScale = ionianMode(Note.C);
    const aMinorScale = aeolianMode(Note.A);

    test('C major chord is in C major scale', () => {
      expect(chordInMode(cMajorChord, cMajorScale)).toBeTruthy();
    });

    test('C minor chord is not in C major scale', () => {
      expect(chordInMode(cMinorChord, cMajorScale)).toBeFalsy();
    });

    test('A minor chord is in C major scale', () => {
      expect(chordInMode(aMinorChord, cMajorScale)).toBeTruthy();
    });

    test('C major chord is in A minor scale', () => {
      expect(chordInMode(cMajorChord, aMinorScale)).toBeTruthy();
    });
  });
});
