export function toCamelCase(text: string): string {
  return text.replace(/-\w/g, clearAndUpper);
}

export function clearAndUpper(text: string): string {
  return text.replace(/-/, '').toUpperCase();
}
