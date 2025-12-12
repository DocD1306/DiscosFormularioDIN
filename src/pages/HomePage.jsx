/**
 * Component that renders the home page of the application.
 * * It displays the main welcome title and a brief introductory text.
 * * @component
 * @returns {JSX.Element} JSX element containing the welcome message.
 */
function HomePage() {
    return (
      <>        
        <h1 id="main-section-title" className="font-heading-h1 main_section__title"> Bienvenido a la Página de Inicio </h1>
        <p className="body-text">
          Bienvenido a la página de inicio de la aplicación de películas.
        </p>
      </>
        
    );
}
export default HomePage;