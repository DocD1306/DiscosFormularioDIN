/**
 * Component that renders the administration dashboard welcome page.
 * * It displays a welcome message and title specific to the admin area.
 * * @component
 * @returns {JSX.Element} JSX element containing the admin welcome title and message.
 */
function AdminPage() {
    return (
        <>
            <h1 id="main-section-title" className="font-heading-h1 main_section__title"> Bienvenido a la página de Administrador </h1>
            <p className="body-text">
                Bienvenido a la página de administrador.
            </p>
        </>
    );
}

export default AdminPage;