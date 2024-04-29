import { Routes, Route } from "react-router-dom"

import { SignUp } from "../pages/SignUp"
import { SignIn } from "../pages/SignIn"
import { Profile } from "../pages/Profile"
import { NewMovie } from "../pages/NewMovie"
import { MyMovies } from "../pages/MyMovies"
import { MovieInfo } from "../pages/MovieInfo"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/newmovie" element={<NewMovie />} />
      <Route path="/mymovies" element={<MyMovies />} />
      <Route path="/movieinfo/:id" element={<MovieInfo />} />
    </Routes>
  )
}
