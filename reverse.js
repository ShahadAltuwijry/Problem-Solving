function solve(eq) {
  let att = eq
    .split(/([+*\/-])/)
    .reverse()
    .join("");
  return att;
}
