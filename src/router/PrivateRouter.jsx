import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const { user } = useSelector((state) => state.auth);

	 var getsession = window.sessionStorage.getItem("apıkey");
 
  return (user ? user : getsession ) ? <Outlet />:<Navigate to="/login" />; 
  
};

export default PrivateRouter;
