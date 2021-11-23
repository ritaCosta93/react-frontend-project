import { createContext } from 'react-dom';

export const AuthContext = createContext({
    isLoggedIn: false, 
    login: () => {},
    logout: () => {}
});