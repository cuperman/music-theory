import { Note } from '../notes';
import { Step } from '../steps';
import * as chords from '../chords';
import * as modes from '../modes';

describe('modes', () => {
  describe('ionianMode', () => {
    it('is a major scale', () => {
      expect(modes.ionianMode(Note.C)).toEqual([
        Note.C,
        Note.D,
        Note.E,
        Note.F,
        Note.G,
        Note.A,
        Note.B
      ]);
    });
  });

  describe('dorianMode', () => {
    test('D Dorian has the same notes as C Ionian', () => {
      expect(modes.dorianMode(Note.D)).toEqual([
        Note.D,
        Note.E,
        Note.F,
        Note.G,
        Note.A,
        Note.B,
        Note.C + Step.OCTAVE
      ]);
    });
  });

  describe('phrygianMode', () => {
    test('E Phrygian has the same notes as C Ionian', () => {
      expect(modes.phrygianMode(Note.E)).toEqual([
        Note.E,
        Note.F,
        Note.G,
        Note.A,
        Note.B,
        Note.C + Step.OCTAVE,
        Note.D + Step.OCTAVE
      ]);
    });
  });

  describe('lydianMode', () => {
    test('F Lydian has the same notes as C Ionian', () => {
      expect(modes.lydianMode(Note.F)).toEqual([
        Note.F,
        Note.G,
        Note.A,
        Note.B,
        Note.C + Step.OCTAVE,
        Note.D + Step.OCTAVE,
        Note.E + Step.OCTAVE
      ]);
    });
  });

  describe('mixolydianMode', () => {
    test('G Mixolydian has the same notes as C Ionian', () => {
      expect(modes.mixolydianMode(Note.G)).toEqual([
        Note.G,
        Note.A,
        Note.B,
        Note.C + Step.OCTAVE,
        Note.D + Step.OCTAVE,
        Note.E + Step.OCTAVE,
        Note.F + Step.OCTAVE
      ]);
    });
  });

  describe('aeolianMode', () => {
    test('A Aeolian has the same notes as C Ionian', () => {
      expect(modes.aeolianMode(Note.A)).toEqual([
        Note.A,
        Note.B,
        Note.C + Step.OCTAVE,
        Note.D + Step.OCTAVE,
        Note.E + Step.OCTAVE,
        Note.F + Step.OCTAVE,
        Note.G + Step.OCTAVE
      ]);
    });
  });

  describe('locrianMode', () => {
    test('B Locrian has the same notes as C Ionian', () => {
      expect(modes.locrianMode(Note.B)).toEqual([
        Note.B,
        Note.C + Step.OCTAVE,
        Note.D + Step.OCTAVE,
        Note.E + Step.OCTAVE,
        Note.F + Step.OCTAVE,
        Note.G + Step.OCTAVE,
        Note.A + Step.OCTAVE
      ]);
    });
  });

  describe('noteInMode', () => {
    const cMajorScale = modes.ionianMode(Note.C);
    const bMajorScale = modes.ionianMode(Note.B);

    test('C is in C major scale', () => {
      expect(modes.noteInMode(Note.C, cMajorScale)).toBeTruthy();
    });

    test('C# is not in C major scale', () => {
      expect(modes.noteInMode(Note.C_SHARP, cMajorScale)).toBeFalsy();
    });

    test('A# is in B major scale', () => {
      expect(modes.noteInMode(Note.C_SHARP, bMajorScale)).toBeTruthy();
    });
  });

  describe('chordInMode', () => {
    const cMajorChord = chords.majorChord(Note.C);
    const cMinorChord = chords.minorChord(Note.C);
    const aMinorChord = chords.minorChord(Note.A);

    const cMajorScale = modes.ionianMode(Note.C);
    const bMajorScale = modes.ionianMode(Note.B);
    const aMinorScale = modes.aeolianMode(Note.A);

    test('C major chord is in C major scale', () => {
      expect(modes.chordInMode(cMajorChord, cMajorScale)).toBeTruthy();
    });

    test('C minor chord is not in C major scale', () => {
      expect(modes.chordInMode(cMinorChord, cMajorScale)).toBeFalsy();
    });

    test('A minor chord is in C major scale', () => {
      expect(modes.chordInMode(aMinorChord, cMajorScale)).toBeTruthy();
    });

    test('C major chord is in A minor scale', () => {
      expect(modes.chordInMode(cMajorChord, aMinorScale)).toBeTruthy();
    });
  });
});
