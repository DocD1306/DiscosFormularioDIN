import { useParams, Link, useNavigate } from "react-router-dom";
import movies from "../data/movies-interpreters.js";

/**
 * Component that renders the detailed view for a specific item (Movie or Actor).
 * * This component utilizes the `id` parameter from the URL to determine which view to render:
 * * 1. **Movie View:** If the `id` does not contain a hyphen, it searches for the movie by ID and displays its details (poster, rating, genre) and the cast list.
 * 2. **Actor View:** If the `id` contains a hyphen (e.g., `movieId-actorIndex`), it splits the string to find the specific actor within a movie and displays their biography and details.
 * * @component
 * @returns {JSX.Element} The rendered detailed section for a movie or an article for an actor.
 */
function Detail() {
    
    const { id } = useParams();
    const navigate = useNavigate();

    // CASE 1: Movie (If the id does not contain a hyphen)
    if (!id.includes("-")) {
        const movie = movies.find(m => m.id === Number(id));
        
        return (
            <>
                {/* aria-labelledby="id": 
                   Links this container with an existing text element (the h1 with id="movie-title").
                   The reader will announce: "Section: [Movie Name]".
                */}
               <section aria-labelledby="movie-title">

                    <button 
                        onClick={() => navigate(-1)} 
                        className="px-5 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors shadow-sm cursor-pointer"
                        aria-label="Volver al listado de películas"
                    >
                        Volver
                    </button>

                    <h1 id="movie-title" className="main_section__title text-center">{movie.nombre}</h1>
                    
                    <section className="w-full flex flex-col md:flex-row gap-8 items-center md:items-start mb-10">

                        <figure className="w-full md:w-1/3 m-0">
                            <img 
                                src={movie.cartelera} 
                                alt={`Póster de la película ${movie.nombre}`} 
                                className="rounded-xl shadow-lg object-cover w-full"
                            />
                            <figcaption className="text-sm text-gray-600 mt-2">
                                Póster oficial de la película.
                            </figcaption>
                        </figure>

                        <section className="flex flex-col gap-4 w-full md:w-2/3 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 items-center text-center">
                            <h2 id="details-heading" className="font-heading-h5 color_primary border-b border-primary pb-2 w-full">Detalles</h2>

                            <dl className="body-text flex flex-col gap-2 w-full" aria-labelledby="details-heading">
                                <div className="flex flex-wrap justify-center gap-2 items-baseline">
                                    <dt className="color_primary font-bold min-w-fit">Clasificación:</dt>
                                    <dd className="m-0">{movie.clasificacion}</dd>
                                </div>
                                <div className="flex flex-wrap justify-center gap-2 items-baseline">
                                    <dt className="color_primary font-bold min-w-fit">Nota:</dt>
                                    <dd className="m-0">{movie.nota}</dd>
                                </div>
                                <div className="flex flex-wrap justify-center gap-2 items-baseline">
                                    <dt className="color_primary font-bold min-w-fit">Género:</dt>
                                    <dd className="m-0">{movie.resumen}</dd>
                                </div>
                            </dl>
                        </section>
                    </section>

                    <section aria-labelledby="cast-heading" className="w-full">
                        <h3 id="cast-heading" className="font-heading-h2 color_primary mb-6 border-l-4 border-primary pl-4">Intérpretes</h3>
                        
                        <ul className="card_grid list-none p-0">
                            {movie.actores.map((actor, i) => (
                                <li key={i}>
                                    <article className="h-full">
                                        <Link 
                                            to={`/detail/${movie.id}-${i}`}
                                            className="article_card items-center text-center hover:bg-gray-50 hover:-translate-y-1 transition-transform h-full block"
                                            aria-label={`Ver detalles del actor ${actor.nombre}`}
                                        >
                                            <figure className="m-0 flex flex-col h-full">
                                                <img 
                                                    src={actor.imagen} 
                                                    alt="" 
                                                    className="w-full aspect-[3/4] object-cover rounded-lg mb-2 shadow-sm"
                                                    aria-hidden="true" 
                                                />
                                                <figcaption className="sr-only">
                                                    Fotografía del intérprete.
                                                </figcaption>
                                            </figure>

                                            {/* Visible name of the interpreter below the card */}
                                            <p className="mt-2 font-semibold">{actor.nombre}</p>
                                        </Link>
                                    </article>
                                </li>
                            ))}
                        </ul>
                    </section>
                </section>
            </>
        );
    }

    // CASE 2: Actor
    const [movieId, actorIndex] = id.split("-");

    const movie = movies.find(m => m.id === Number(movieId));
    const actor = movie.actores[Number(actorIndex)];

    return (
        <>
            <article aria-labelledby="actor-name" className="max-w-4xl flex flex-col items-center text-center md:text-left w-full">
                <button 
                    onClick={() => navigate(-1)} 
                    className="self-start px-5 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors shadow-sm cursor-pointer"
                    aria-label="Volver al listado de intérpretes"
                >
                    Volver
                </button>

                <h1 id="actor-name" className="main_section__title">{actor.nombre}</h1>
                
                <section className="flex flex-col md:flex-row gap-8 items-center md:items-start w-full mb-8">
                    
                    <figure className="w-full md:w-auto m-0 shrink-0">
                        <img 
                            src={actor.imagen} 
                            alt={`Foto de ${actor.nombre}`} 
                            width="300" 
                            className="rounded-xl shadow-lg object-cover aspect-[3/4]"
                        />
                        <figcaption className="sr-only">
                            Fotografía del intérprete.
                        </figcaption>
                    </figure>
                    
                    <section className="flex flex-col gap-4 w-full">
                        <dl className="body-text m-0">
                            <div className="flex gap-2 justify-center md:justify-start items-baseline">
                                <dt className="color_primary font-bold">Fecha de nacimiento:</dt>
                                <dd className="m-0">{actor.fechaNacimiento}</dd>
                            </div>
                        </dl>

                        <p className="body-text text-gray-600 leading-relaxed">
                            {actor.biografia}
                        </p>
                    </section>
                </section>

                {/* aria-hidden on HR: Indicates that this line is purely aesthetic and not a semantic topic change */}
                <hr className="w-full border-t-2 border-primary opacity-20 my-6" aria-hidden="true" />

                <section className="w-full flex flex-col items-center md:items-start bg-[var(--colorsecondary)] p-6 rounded-xl" aria-labelledby="related-movie">
                    <h3 id="related-movie" className="font-heading-h5 color_primary mb-2">Pertenece a la película:</h3>
                    
                    <Link to={`/detail/${movie.id}`} className="hover:underline">
                        <p className="font-heading-h2 text-gray-800">{movie.nombre}</p>
                    </Link>
                </section>
            </article>
        </>
    );
}

export default Detail;