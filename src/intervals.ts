import { Note } from './notes';

export type Interval = (root: Note) => Note;

export function perfect1st(root: Note): Note {
  return root;
}

export function major2nd(root: Note): Note {
  return root + 2;
}

export function minor3rd(root: Note): Note {
  return root + 3;
}

export function major3rd(root: Note): Note {
  return root + 4;
}

export function major4th(root: Note): Note {
  return root + 5;
}

export function diminished5th(root: Note): Note {
  return root + 6;
}

export function perfect5th(root: Note): Note {
  return root + 7;
}

export function augmented5th(root: Note): Note {
  return root + 8;
}

export function diminished7th(root: Note): Note {
  return root + 9;
}

export function minor7th(root: Note): Note {
  return root + 10;
}

export function major7th(root: Note): Note {
  return root + 11;
}

export function major9th(root: Note): Note {
  return root + 14;
}

export function perfect11th(root: Note): Note {
  return root + 17;
}
