

export const waitFor = async (time) => await new Promise((resolve) => setTimeout(resolve, time));

export function isInvalidText(text) {
  return !text || text.trim() === '';
}
