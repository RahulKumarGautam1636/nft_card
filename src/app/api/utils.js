export const isEmpty = (obj) => {
    console.log(obj);
    for (const prop in obj) {
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
    return true;
}