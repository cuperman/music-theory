import { Note } from '../notes';
import { Step } from '../steps';

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
