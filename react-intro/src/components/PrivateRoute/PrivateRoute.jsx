import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types";


function PrivateRoute({ children, isAdmin }) {
    
    if (isAdmin === false) {
        return <Navigate to="/" />
    }
    console.log(isAdmin);

    return children;
}

PrivateRoute.propTypes = {
    children: PropTypes.node,
    isAdmin: PropTypes.bool,
  };

  export default PrivateRoute