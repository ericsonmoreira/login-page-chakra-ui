import { useContext } from 'react';
import { AuthContext } from '../providers/auth';

const useAuth = () => useContext(AuthContext);

export default useAuth; 