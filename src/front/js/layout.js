import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";

import Account from "./pages/private";
import { Login } from "./pages/login";
import ResetPassword from "./component/ResetPassword";
import ForgotPassword from "./component/ForgotPassword";
import Signup from "./pages/signup";
import injectContext from "./store/appContext";
import About from "./pages/about";
import Menu from "./pages/calendar";
import Favorites from "./pages/favorites";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import RecipeCategories from "./component/recipes/recipeCategories";
import Recipes from "./component/recipes/recipe";
import recipeCard from "./component/recipes/recipeCard";
import { recipeNutrition } from "./component/recipes/recipeNutrition";
import RecipeDetail from "./component/recipes/recipeDetail";

import Highlights from "./pages/highlights";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "")
    return <BackendURL />;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Highlights />} path="/features" />
            <Route element={<RecipeCategories />} path="/categories" />
            <Route element={<Recipes />} path="/recipes/:category" />
            <Route element={<Login />} path="/login" />
            <Route element={<ForgotPassword />} path="/forgot-password" />
            <Route element={<ResetPassword />} path="/recoverPassword" />
            <Route element={<Signup />} path="/signup" />
            <Route element={<Account />} path="/account" />
            <Route element={<About />} path="/about" />
            <Route element={<Menu />} path="/menu" />
            <Route element={<Favorites />} path="/favorites" />
            {/* <Route element={<ShoppingList />} path="/shoppinglist" /> */}
            <Route element={<Demo />} path="/demo" />
            <Route element={<RecipeDetail />} path="/recipeDescription/:id" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
