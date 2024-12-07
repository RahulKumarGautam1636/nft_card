

export const waitFor = async (time) => await new Promise((resolve) => setTimeout(resolve, time));

export function isInvalidText(text) {
  return !text || text.trim() === '';
}

export const parseData = (obj) => JSON.parse(JSON.stringify(obj));
