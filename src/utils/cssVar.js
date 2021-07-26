export function cssVar(n, v) {
  if (v) return '--' + n + ':' + v + ';';
}
