import { useState, useEffect } from "react";

function getStorageValue<T>(key: string, defaultValue: T): T {
  const saved = localStorage.getItem(key);
  if (saved !== null) {
    try {
      return JSON.parse(saved) as T;
    } catch {
      return defaultValue;
    }
  }
  return defaultValue;
}

export const useLocalStorage = <T,>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] => {
  const [value, setValue] = useState<T>(() =>
    getStorageValue(key, defaultValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const updateValue = (newValue: T) => {
    setValue(newValue);
  };

  return [value, updateValue];
};
