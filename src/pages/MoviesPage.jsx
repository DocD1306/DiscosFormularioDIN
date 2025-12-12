import movies from "../data/movies-interpreters.js";
import ReusableCard from "../components/ReusableCard.jsx";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar.jsx";
import { useState, useMemo } from "react";

/**
 * Component that renders the main page of the movie catalog.
 * * This component iterates through the `movies` data array and generates a list
 * of cards (`ReusableCard`) linked to the detail view of each movie.
 * * @component
 * @returns {JSX.Element} JSX element containing the title, description, and grid of movie cards.
 */
function MoviesPage() {

    const [searchTerm, setSearchTerm] = useState("");


    // Usamos useMemo para memorizar la lista filtrada.
    // Solo se recalcula si 'searchTerm' cambia.
    const filteredMovies = useMemo(() => { 
        if (!searchTerm) { 
            return movies; // Si no hay término, devuelve la lista completa 
        } 

        const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
        return movies.filter((movie) =>
            // Filtra por el nombre de la película
            movie.nombre.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [searchTerm]);


    /*
    Component that displays the movie page with the list of movies.
    */
    return (
        <>
            <h1 id="main-section-title" className="font-heading-h1 main_section__title"> Nuestro catálogo de películas </h1>
            <p className="body-text">Listado de películas disponibles:</p>

            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Buscar películas por nombre..."
            />

            <ul className="card_grid">
                {
                    filteredMovies.length > 0 ? (
                        filteredMovies.map( (movie) => (
                            <li key={movie.id}>
                                <Link to={`/detail/${movie.id}`}
                                    /* aria-label: Prevents the reader from reading the entire card content as link text */
                                    aria-label={`Ver detalles de la película ${movie.nombre}`}
                                >
                                    <ReusableCard
                                        nombre={movie.nombre}
                                        foto={movie.cartelera}
                                        esNota10={movie.nota === 10} // pass if the rating is 10
                                        textoDestacado="Película destacada"
                                    >
                                    {movie.clasificacion}
                                    </ReusableCard>
                                </Link>
                            </li>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500 p-4"> No se encontraron películas con el término `{searchTerm}`.</p>
                    )
                }
            </ul>            
        </>
    );
}

export default MoviesPage;