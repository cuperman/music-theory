import { Note } from '../notes';
import { Step } from '../steps';
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
});
