import { Navigate } from 'react-router-dom';
import PropTypes from "prop-types";

function PrivateRoute({ children, isAdmin}) {

    console.log(isAdmin);

    if (isAdmin == "false") {
        console.log(isAdmin);
        return <Navigate to="/" replace/>
    }

    return children;

}

PrivateRoute.propTypes = {
    children: PropTypes.node,
    isAdmin: PropTypes.bool,
  };

  export default PrivateRoute