/**
 * A reusable card component used to display information for both movies and interpreters.
 * * It renders an image, a title (with optional highlighting), and a description passed via children.
 * * @component
 * @param {Object} props - The component props.
 * @param {string} props.foto - The URL of the image to display.
 * @param {string} props.nombre - The name of the movie or interpreter.
 * @param {boolean} props.esNota10 - Flag to indicate if the item has a top rating (10), triggering specific styling.
 * @param {string} props.textoDestacado - The text to display if the item is highlighted (e.g., "Featured Movie").
 * @param {React.ReactNode} props.children - The content to display as the description or biography.
 * @returns {JSX.Element} The rendered article element representing the card.
 */
function ReusableCard(props) {
    const { foto, nombre, esNota10, textoDestacado } = props;

    /*
    This component has been made reusable for both interpreters and movies. 
    */
    return (

        <article
            className="article_card"
            aria-label={`Intérprete ${nombre}${esNota10 ? ', destacado' : ''}`}
        >
            {/* Interpreter image with hidden figcaption for screen readers */}
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={foto}
                    alt={`Foto de ${nombre}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{props.children}</figcaption>
            </figure>

            <header>
                <h2
                    className={`text-(--heading-h5-font-size) font-(--heading-h5-font-weight) leading-(--heading-h5-line-height) ${
                    esNota10 ? "text-red-600" : "text-gray-800"
                    }`}
                >
                    {/* Interpreter name */}
                    <strong>{nombre}</strong>
                    {esNota10 && <em> – {textoDestacado} </em>} {/* In this way we ensure the text is independent so it can be reused */} 
                </h2>
            </header>
            {/* Biography or description */}
            <p className="text-(--body-text-font-size) leading-(--body-text-line-height)">
                {props.children}
            </p>
        </article>

    );
}

export default ReusableCard;