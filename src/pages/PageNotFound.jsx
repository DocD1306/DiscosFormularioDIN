/**
 * Component that displays a 404 error page.
 * * This component is rendered when the user navigates to a route that does not exist in the application.
 * * @component
 * @returns {JSX.Element} JSX element containing the "Page not found" title.
 */
function PageNotFound() {
    return (
        <>
            <h1 className="font-heading-h1 main_section__title">Página no encontrada</h1>
        </>
    );
}

export default PageNotFound;