import { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme-preference';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [isInitialized, setIsInitialized] = useState(false);

  // Inicializa o tema na primeira renderização (client-side only)
  useEffect(() => {
    const root = window.document.documentElement;

    // Verifica se há uma preferência salva
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;

    if (stored) {
      // Usa a preferência salva do usuário
      setTheme(stored);
      root.classList.remove('light', 'dark');
      root.classList.add(stored);
    } else {
      // Detecta o tema do sistema operacional
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = systemPrefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      root.classList.remove('light', 'dark');
      root.classList.add(initialTheme);
      localStorage.setItem(STORAGE_KEY, initialTheme);
    }

    setIsInitialized(true);
  }, []);

  // Atualiza o DOM quando o tema muda
  useEffect(() => {
    if (!isInitialized) return;

    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, isInitialized]);

  // Escuta mudanças no tema do sistema
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      // Só atualiza automaticamente se o usuário não definiu uma preferência manual
      const hasUserPreference = localStorage.getItem(STORAGE_KEY) !== null;
      if (!hasUserPreference) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const setLight = useCallback(() => setTheme('light'), []);
  const setDark = useCallback(() => setTheme('dark'), []);

  return {
    theme,
    toggleTheme,
    setLight,
    setDark,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    isInitialized,
  };
}
