let notes = [];

module.exports = {
  all: () => notes,
  create: (note) => {
    note.id = Date.now();
    notes.push(note);
    return note;
  }
};