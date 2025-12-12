import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom"; 
import MainContent from "./MainContent.jsx";

/**
 * Navigation bar component for the administration area.
 * * It includes a responsive mobile menu, accessible navigation links, and a layout wrapper
 * for the main content rendered via `Outlet`.
 * * @component
 * @returns {JSX.Element} The rendered navigation bar and main content wrapper.
 */
function AdminNavigationBar() {
   /* State to control the opening/closing of the mobile menu */
    const [open, setOpen] = useState(false);

    return (
        <>
            <header>
                {/* We add 'aria-label' to the nav to identify this specific navigation 
                    if there were more than one on the page (e.g., footer, sidebar).
                */}
                <nav className="navigation_bar relative" aria-label="Navegación principal">

                    {/* Link to home.*/}
                    <Link to="/">
                        <h1 className="color_white font-heading-h1">Películas</h1>
                    </Link>

                    {/* Button Accessibility:
                        1. type="button": Prevents unexpected submit behaviors.
                        2. aria-label: Describes the action for users who cannot see the "☰" icon.
                        3. aria-expanded: Informs the screen reader if the menu is open (true) or closed (false).
                        4. aria-controls: Links this button to the menu it controls via its ID.
                    */}
                    <button 
                        type="button"
                        className="text-white text-3xl md:hidden"
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        aria-expanded={open}
                        aria-controls="menu-navegacion"
                    >
                        <span aria-hidden="true">☰</span>
                    </button>

                    {/* Semantic change: We use <ul> (unordered list) instead of a generic <div>.
                        This allows screen readers to announce "List of 3 items".
                        
                        We add id="menu-navegacion" to match the aria-controls of the button.
                    */}
                    <ul
                        id="menu-navegacion"
                        className={
                            open
                                ? "navigation_links flex flex-col items-center w-full absolute top-full left-0 bg-[var(--colorprimary)] z-50 py-4 gap-4 shadow-xl md:static md:flex-row md:w-auto md:shadow-none md:p-0 md:gap-10"
                                : "navigation_links hidden md:flex md:flex-row md:items-center md:gap-10"
                        }
                    >
                        {/* Each navigation item must go inside an <li> */}
                       <li>
                            {/* NavLink for the Home page:
                                - end: Ensures that the root route "/" does not partially match other routes.
                                - aria-current: Calculated dynamically. If isActive is true, assigns "page", 
                                  indicating to the screen reader that the link references the current page.
                                - onClick: Closes the mobile menu when an option is selected.
                            */}
                            <NavLink 
                                to="/" 
                                end
                                onClick={() => setOpen(false)} 
                                className="body-text color_white"
                                aria-current={({ isActive }) => isActive ? "page" : undefined}
                            >
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/peliculas" 
                                onClick={() => setOpen(false)} 
                                className="body-text color_white"
                                aria-current={({ isActive }) => isActive ? "page" : undefined}
                            >
                                Películas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/interpretes" 
                                onClick={() => setOpen(false)} 
                                className="body-text color_white"
                                aria-current={({ isActive }) => isActive ? "page" : undefined}
                            >
                                Intérpretes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to="/admin" 
                                onClick={() => setOpen(false)} 
                                className="body-text color_white"
                                aria-current={({ isActive }) => isActive ? "page" : undefined}
                            >
                                Administrador
                            </NavLink>
                        </li>
                    </ul>

                </nav>
            </header>

            {/* We wrap the Outlet in MainContent to maintain consistent layout across pages.*/}

            <main id="main-content" role="main" tabIndex="-1" className="main_content">
      
                {/* The aria-labelledby matches the main title that will be shown in the children pages */}
                <section aria-labelledby="main-section-title" className="w-full max-w-7xl text-center">
                
                    <Outlet />  

                </section>

            </main>
            {/* <MainContent>
            </MainContent> */}
        </>
    );
}

export default AdminNavigationBar;