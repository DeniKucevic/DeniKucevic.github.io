import React, { useState } from "react";
import Header from "./Layout/Header";
import Login from "./Layout/ProfileRoutes/components/Login";
import Register from "./Layout/ProfileRoutes/components/Register";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoutes from "./Layout/ProfileRoutes/ProfileRoutes";
import PrivateRoutes from "./Layout/PublicRoutes/PublicRoutes";
import Main from "./Layout/PublicRoutes/components/Main";
import Business from "./Layout/PublicRoutes/components/Business";
import Entertainment from "./Layout/PublicRoutes/components/Entertainment";
import Health from "./Layout/PublicRoutes/components/Health";
import Science from "./Layout/PublicRoutes/components/Science";
import Sports from "./Layout/PublicRoutes/components/Sports";
import technology from "./Layout/PublicRoutes/components/Technology";
import Covid19 from "./Layout/PublicRoutes/components/Covid19/Covid19";
import ProfilesAll from "./Layout/PrivateRoutes/components/ProfilesAll";
import Profile from "./Layout/PrivateRoutes/components/Profile";
import Footer from "./Layout/Footer";
import ProfileRoutes from "./Layout/ProfileRoutes/ProfileRoutes";
import SearchNews from "./Layout/PrivateRoutes/components/SearchNews";

const App = () => {
  const [seacrh, setSearch] = useState("");
  const [selectorCount, setSelectorCount] = useState("rs");
  const [selectorCat, setSelectorCat] = useState("");

  return (
    <BrowserRouter>
      <Header
        onStateChange={setSearch}
        onCountChange={setSelectorCount}
        onCatChange={setSelectorCat}
      />
      <Switch>
        <ProfileRoutes component={Login} exact path="/login" />
        <ProfileRoutes component={Register} exact path="/register" />
        <PublicRoutes
          component={Main}
          onCountChange={selectorCount}
          onCatChange={selectorCat}
          exact
          path="/"
        />
        <PublicRoutes
          component={Business}
          onCountChange={selectorCount}
          exact
          path="/business"
        />
        <PublicRoutes
          component={Entertainment}
          onCountChange={selectorCount}
          exact
          path="/entertainment"
        />
        <PublicRoutes component={Covid19} exact path="/covid19" />
        <PublicRoutes
          component={Health}
          onCountChange={selectorCount}
          exact
          path="/health"
        />
        <PublicRoutes
          component={Science}
          onCountChange={selectorCount}
          exact
          path="/science"
        />
        <PublicRoutes
          component={Sports}
          onCountChange={selectorCount}
          exact
          path="/sports"
        />
        <PublicRoutes
          component={technology}
          onCountChange={selectorCount}
          exact
          path="/technology"
        />
        <PrivateRoutes component={ProfilesAll} exact path="/allusers" />
        <PrivateRoutes component={Profile} exact path="/profile" />
        <PrivateRoutes
          component={SearchNews}
          newState={seacrh}
          exact
          path="/searchednews"
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
