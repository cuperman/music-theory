import { Note } from './notes';

export function perfect1st(root: Note): Note {
    return root;
}

export function minor3rd(root: Note): Note {
    return root + 3;
}

export function major3rd(root: Note): Note {
    return root + 4;
}

export function perfect5th(root: Note): Note {
    return root + 7;
}
