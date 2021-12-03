import { Navigate,useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';


const Logout = () => {
    // const navigate = useNavigate();
    // const { user, logout } = useContext(AuthContext);
    // useEffect(() => {
    //     authService.logout(user.accessToken)
    //         .then(() => {
    //             logout();
    //             navigate('/');
    //         })
    // }, [])

    // return null;
};

export default Logout;