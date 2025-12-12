import ReusableCard from "../components/ReusableCard.jsx";
import interpreters from "../data/movies-interpreters.js";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import SearchBar from "../components/SearchBar.jsx";

/**
 * Component that renders the featured interpreters page.
 * * This component iterates through the `interpreters` data (which contains movies) and maps through
 * the actors within each movie to display a grid of `ReusableCard` components linked to the detail view.
 * * @component
 * @returns {JSX.Element} JSX element containing the title, description, and list of interpreter cards.
 */
function InterpretersPage() {
    
    const [searchTerm, setSearchTerm] = useState("");

    // 1. Aplanar la lista de actores y agregar información necesaria para el enlace
    const allInterpreters = interpreters.flatMap((interpreter) =>
        interpreter.actores.map((actor, idInterprete) => ({
            ...actor,
            idPelicula: interpreter.id, // Necesario para el Link
            idInterprete: idInterprete, // Necesario para el Link
            esNota10: interpreter.nota === 10, // Ejemplo de dato adicional
        }))
    );

    const filteredInterpreters = useMemo(() => { 
        if (!searchTerm) { 
            return allInterpreters; // Si no hay término, devuelve la lista completa 
        } 

        const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
        return allInterpreters.filter((interpreter) =>
            // Filtra por el nombre de la película
            interpreter.nombre.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [searchTerm]);

    return (
        <>
            <h1 id="main-section-title" className="font-heading-h1 main_section__title"> Nuestros intérpretes destacados </h1>
            <p className="body-text"> Listado de intérpretes disponibles:</p>

            <SearchBar
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                placeholder="Buscar intérpretes por nombre..."
            />

            {/* We group the cards into a list to announce the number of items */}
            <ul className="card_grid">
                {
                filteredInterpreters.length > 0 ? (
                filteredInterpreters.map( (interpreter, index) => (
                        <li key={`${interpreter.idPelicula}-${index}`}>
                            <Link 
                                to={`/detail/${interpreter.idPelicula}-${index}`} 
                                aria-label={`Ver detalles del intérprete ${interpreter.nombre}`}
                            >
                                <ReusableCard
                                    nombre={interpreter.nombre}
                                    foto={interpreter.imagen}
                                    esNota10={interpreter.esNota10} // pass if the rating is 10
                                    textoDestacado="Intérprete destacado"
                                >
                                {interpreter.biografia}
                                </ReusableCard>
                            </Link>
                        </li>
                    ))
                ) : ( 
                     <p className="col-span-full text-center text-gray-500 p-4"> No se encontraron intérpretes con el término `{searchTerm}`.</p>
                )
                }
            </ul>    
      </>

    );
}
export default InterpretersPage;