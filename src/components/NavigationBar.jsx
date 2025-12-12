import { Outlet, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import MainContent from "./MainContent.jsx";

/**
 * Public navigation bar component.
 * * This component renders the header with the logo, a hamburger menu for mobile devices,
 * and the list of navigation links. It also wraps the child routes (`Outlet`) within 
 * the `MainContent` layout component.
 * * @component
 * @returns {JSX.Element} The rendered public navigation bar and content wrapper.
 */
function NavigationBar() {
    /* State to control the opening/closing of the mobile menu */
    const [open, setOpen] = useState(false);

    return (
        <>
            <header>
                {/* We add 'aria-label' to the nav to identify this specific navigation 
                    if there were more than one on the page (e.g., footer, sidebar).
                */}
                <nav className="navigation_bar relative" aria-label="Navegación principal">

                    {/* Link to home. */}
                    <Link to="/">
                        <h1 className="color_white font-heading-h1">Películas</h1>
                    </Link>

                    {/* Button Accessibility Improvements:
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
                    </ul>

                </nav>
            </header>

            {/* We wrap the Outlet in MainContent to maintain consistent layout across pages. */}
            <MainContent>
                <Outlet />  
            </MainContent>
        </>
    );
}

export default NavigationBar;