export const TOKEN_KEY = '@emporio-serrana-Token';
export const isAuthenticated = () =>
  (localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY)) !==
  null;
export const getToken = () =>
  localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY);
export const login = (token, storage) =>
  storage === 'session'
    ? sessionStorage.setItem(TOKEN_KEY, token)
    : localStorage.setItem(TOKEN_KEY, token);
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
};
