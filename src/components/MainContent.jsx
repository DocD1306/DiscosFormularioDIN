/**
 * Wrapper component for the main content of the application.
 * * It provides a semantic `<main>` element with accessibility attributes and a section
 * that expects a title with the ID `main-section-title` to be present within the children.
 * * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the main content area.
 * @returns {JSX.Element} The rendered main content wrapper.
 */
function MainContent({ children }) {
  return (
    <main id="main-content" role="main" tabIndex="-1" className="main_content">
      
      {/* The aria-labelledby matches the main title that will be shown in the children pages*/}
      <section aria-labelledby="main-section-title" className="w-full max-w-7xl text-center">
      
        {children}

      </section>

    </main>
  );
}

export default MainContent;