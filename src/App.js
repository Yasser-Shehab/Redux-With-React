import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/index";
import UserProfile from "./components/UserProfile";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const loginHandle = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <>
      <Header />
      {isAuth ? <UserProfile /> : <Auth onLogin={loginHandle} />}
      <Counter />
    </>
  );
}

export default App;
