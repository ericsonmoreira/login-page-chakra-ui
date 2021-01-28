import useLocalStorage from './useLocalStorage';

/**
 * Hook para tratar da autenticação de usuário.
 */
function useAuth() {
  const [token] = useLocalStorage('token', '');

  const isAuthenticated = () => {
    // TODO: saber se o token é válido
    if (token) return true;
    return false;
  };

  return { isAuthenticated };
}

export default useAuth;
