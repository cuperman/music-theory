import { Note } from '../notes';

describe('notes', () => {
  describe('Note', () => {
    test('C is 0', () => {
      expect(Note.C).toEqual(0);
    });

    test('B is 11', () => {
      expect(Note.B).toEqual(11);
    });
  });
});
