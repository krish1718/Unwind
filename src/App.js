import { useState, createContext, useMemo } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage";
import LandingPageNavbar from "./components/LandingPageNavbar";
import Footer from "./components/LoggedInContent/Footer";
import Header from "./components/LoggedInContent/Header";
import MainContent from "./components/LoggedInContent/MainContent";
import Navigation from "./components/LoggedInContent/Navigation";
import { LoginForm } from "./components/Login/LoginForm";
import LoginForm2 from "./components/Login/LoginForm2";

// Context
const usernameContext = createContext({
  username: [],
  setUsername: () => {},
});
const passwordContext = createContext({
  password: [],
  setPassword: () => {},
});
const AdminUsernameContext = createContext({
  AdminUsername: [],
  setAdminUsername: () => {},
});
const AdminPasswordContext = createContext({
  AdminPassword: [],
  setAdminPassword: () => {},
});

function App() {
  const [loginView, setLoginView] = useState(true);
  // const [loginView, setLoginView] = useState(false);

  // useContext
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [AdminUsername, setAdminUsername] = useState();
  const [AdminPassword, setAdminPassword] = useState();
  const usernameVal = useMemo(() => ({ username, setUsername }), [username]);
  const passwordVal = useMemo(() => ({ password, setPassword }), [password]);
  const AdminUsernameVal = useMemo(
    () => ({ AdminUsername, setAdminUsername }),
    [AdminUsername]
  );
  const AdminPasswordVal = useMemo(
    () => ({ AdminPassword, setAdminPassword }),
    [AdminPassword]
  );

  // Upper Login Admin bar
  // const [upperBar, setUpperBar] = useState(true);
  // const [upperBar, setUpperBar] = useState(false);

  const [landingpagevisibility, setLandingpagevisibility] = useState(true);

  return (
    <div className="App">
      <usernameContext.Provider value={usernameVal}>
        <passwordContext.Provider value={passwordVal}>
          <AdminUsernameContext.Provider value={AdminUsernameVal}>
            <AdminPasswordContext.Provider value={AdminPasswordVal}>
              {/* <div>{loginView ? <LoginForm /> : <AdminForm />}</div> */}
              <div>
                {landingpagevisibility ? (
                  <>
                    <LandingPageNavbar
                      setLandingpagevisibility={setLandingpagevisibility}
                    />
                    <LandingPage
                      setLandingpagevisibility={setLandingpagevisibility}
                    />
                    <Footer />
                  </>
                ) : loginView ? (
                  <LoginForm setLoginView={setLoginView} />
                ) : (
                  <Navigation setLoginView={setLoginView} />
                )}
              </div>
              {/* <div>{loginView ? <LoginForm2 /> : <Navigation />}</div> */}
            </AdminPasswordContext.Provider>
          </AdminUsernameContext.Provider>
        </passwordContext.Provider>
      </usernameContext.Provider>
    </div>
  );
}

export default App;
export {
  usernameContext,
  passwordContext,
  AdminUsernameContext,
  AdminPasswordContext,
};
