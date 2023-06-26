import TokenService from 'repository/TokenService';

const { createContext, useState, useContext, useEffect } = require('react');

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const token = TokenService.getToken();
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const login = (token) => {
    TokenService.setToken(token);
    setAccessToken(token);
  };

  const logout = () => {
    TokenService.removeToken();
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>{children}</AuthContext.Provider>
  );
}
export default AuthProvider;

/**
 * privateRoute (접근권한)
 * eslint, prettier, husky
 * redux - toolkit
 * 
 * 내일 8시 - 10시
 */