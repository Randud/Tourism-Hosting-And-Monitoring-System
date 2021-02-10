import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/action.auth';

import Button from '@material-ui/core/Button';
const Navbar = ({ isAuthenticated, logout }) => {
  const authorizedLinks = (
    <>

        <Link to="/" onClick={logout}>
          Logout
        </Link>

    </>
  );

  const guestLinks = (
    <Fragment>
        <Button> <Link to="/login">Log In</Link>  </Button>
        <Button> <Link to="/signup">Sign Up</Link></Button>
    </Fragment>
  );


  return (
<div>
      <nav>
        
            {/* <Link to="/"><HomeIcon /></Link> */}

          {
            <Fragment>
              {isAuthenticated ? authorizedLinks : guestLinks}
            </Fragment>
          }
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { logout })(Navbar);
