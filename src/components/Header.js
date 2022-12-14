import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandle = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              {isAuth ? <button onClick={logoutHandle}>Logout</button> : <button>Login</button>}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
