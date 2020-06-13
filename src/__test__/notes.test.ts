import { Note, normalizeNote, normalizeNotes } from '../notes';
import { Step } from '../steps';
import * as modes from '../modes';

describe('notes', () => {
  describe('Note', () => {
    test('C is 0', () => {
      expect(Note.C).toEqual(0);
    });

    test('B is 11', () => {
      expect(Note.B).toEqual(11);
    });
  });

  describe('normalizeNote', () => {
    test('same note', () => {
      expect(normalizeNote(Note.C)).toEqual(Note.C);
      expect(normalizeNote(Note.B)).toEqual(Note.B);
    });

    test('octaves higher', () => {
      expect(normalizeNote(Note.C + Step.OCTAVE)).toEqual(Note.C);
      expect(normalizeNote(Note.B + 2 * Step.OCTAVE)).toEqual(Note.B);
    });

    test('octaves lower', () => {
      expect(normalizeNote(Note.C - Step.OCTAVE)).toEqual(Note.C);
      expect(normalizeNote(Note.B - 2 * Step.OCTAVE)).toEqual(Note.B);
    });
  });

  describe('normalizeNotes', () => {
    it('tranlates all notes to the zero position', () => {
      expect(normalizeNotes(modes.ionianMode(Note.C))).toEqual([
        Note.C,
        Note.D,
        Note.E,
        Note.F,
        Note.G,
        Note.A,
        Note.B
      ]);

      expect(normalizeNotes(modes.ionianMode(Note.B))).toEqual([
        Note.B,
        Note.C_SHARP,
        Note.D_SHARP,
        Note.E,
        Note.F_SHARP,
        Note.G_SHARP,
        Note.A_SHARP
      ]);
    });
  });
});
