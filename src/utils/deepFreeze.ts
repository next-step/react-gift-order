export function deepFreeze<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  Object.getOwnPropertyNames(obj).forEach((prop) => {
    const propValue = (obj as Record<string, unknown>)[prop];

    if (propValue && typeof propValue === 'object') {
      deepFreeze(propValue);
    }
  });

  return Object.freeze(obj);
}
