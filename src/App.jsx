import HomePage from "./pages/HomePage.jsx";
import { Routes, Route, Navigate } from 'react-router-dom';
import InterpretersPage from "./pages/InterpretersPage.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import MoviesPage from "./pages/MoviesPage.jsx";  
import PageNotFound from "./pages/PageNotFound.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import AdminNavigationBar from "./components/AdminNavigationBar.jsx";
import Detail from "./pages/Detail.jsx";
import DiscsForm from "./pages/DiscsForm.jsx";

/**
 * Main application component that defines the routing structure.
 * * It handles the conditional rendering of the navigation bar based on authentication status
 * and sets up routes for Home, Movies, Interpreters, Detail view, Admin area, and a 404 page.
 * * @component
 * @returns {JSX.Element} The main router structure of the application.
 */
function App() {

  const isAuthenticated = true; // Change this to true or false to simulate an authenticated user

  return (
    <>
    <Routes>
      <Route path="/" element={ isAuthenticated ? <AdminNavigationBar /> : <NavigationBar /> }>
        <Route index element={<DiscsForm/>} />
        <Route path="discos" element={<DiscsForm />} />
        <Route path="peliculas" element={<MoviesPage/>} />
        <Route path="interpretes" element={<InterpretersPage/>}/>
        <Route path="detail/:id" element={<Detail/>}/>

        <Route path="admin" element={ isAuthenticated ? <AdminPage /> : <Navigate to="/" replace />}>

        </Route>

      </Route>
      <Route path="*" element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default App