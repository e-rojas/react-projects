import useLocalStorage from 'use-local-storage';

const useColorTheme = () => {
  // there are 3 themes system, roboto, and mono  and should be a selectTheme hook
  // the default theme is system
  const [theme, setTheme] = useLocalStorage('theme', 'system');

  const selectTheme = (theme: string) => {
    setTheme(theme);
  };

  return { theme, selectTheme };
};

export default useColorTheme;
