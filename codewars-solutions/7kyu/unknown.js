function printerError(s) {
  const errors = s.match(/[^a-m]/g)?.length || 0;
  return `${errors}/${s.length}`;
}
