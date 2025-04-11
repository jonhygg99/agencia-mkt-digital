export function cleanText(text: string) {
  // Elimina los asteriscos, los saltos de línea y los espacios en exceso
  return text
    .replace(/\*\*/g, "") // Elimina los asteriscos
    .replace(/\n/g, " ") // Reemplaza los saltos de línea por espacios
    .replace(/\s+/g, " ") // Reemplaza múltiples espacios por un solo espacio
    .trim(); // Elimina espacios al inicio y al final
}
