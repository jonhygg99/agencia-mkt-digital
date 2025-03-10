export function cleanText(text: string) {
  // Elimina los asteriscos y los saltos de línea
  return text.replace(/\*\*/g, "").replace(/\n/g, " ").trim();
}
