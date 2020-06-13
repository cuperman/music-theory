import { Note, Step, majorChord, minorChord, ionianMode, normalize, chordInMode } from '../index';

describe('notes', () => {
  describe('Note', () => {
    test('C is 0', () => {
      expect(Note.C).toEqual(0);
    });
  });
});

describe('steps', () => {
  describe('Step', () => {
    test('HALF', () => {
      expect(Note.E + Step.HALF).toEqual(Note.F);
    });

    test('WHOLE', () => {
      expect(Note.C + Step.WHOLE).toEqual(Note.D);
    });

    test('OCTAVE', () => {
      expect(Note.C + Step.OCTAVE).toEqual(12);
    });
  });
});

describe('chords', () => {
  describe('majorChord', () => {
    test('C Major', () => {
      expect(majorChord(Note.C)).toEqual([Note.C, Note.E, Note.G]);
    });
  });

  describe('minorChord', () => {
    test('C Minor', () => {
      expect(minorChord(Note.C)).toEqual([Note.C, Note.E_FLAT, Note.G]);
    });

    test('A Minor', () => {
      expect(minorChord(Note.A)).toEqual([Note.A, Note.C + Step.OCTAVE, Note.E + Step.OCTAVE]);
    });
  });
});

describe('modes', () => {
  describe('ionianMode', () => {
    it('is a major scale', () => {
      expect(ionianMode(Note.C)).toEqual([Note.C, Note.D, Note.E, Note.F, Note.G, Note.A, Note.B]);
    });
  });
});

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

    test('C major chord is in C major scale', () => {
      expect(chordInMode(cMajorChord, cMajorScale)).toBeTruthy();
    });

    test('C minor chord is not in C major scale', () => {
      expect(chordInMode(cMinorChord, cMajorScale)).toBeFalsy();
    });

    test('A minor chord is in C major scale', () => {
      expect(chordInMode(aMinorChord, cMajorScale)).toBeTruthy();
    });
  });
});
