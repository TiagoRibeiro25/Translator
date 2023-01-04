const PRE_KEY = "text-translator_";

export function getLocalStorage(key: string) {
  const finalKey = PRE_KEY + key;
  return localStorage[finalKey] || null;
}

export function setLocalStorage(key: string, value: string) {
  const finalKey = PRE_KEY + key;
  localStorage[finalKey] = value;
}

export function removeLocalStorage(key: string) {
  const finalKey = PRE_KEY + key;
  localStorage.removeItem(finalKey);
}
