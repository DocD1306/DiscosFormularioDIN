import { useState, } from "react";

export default function DiscForm(){

    const [ error, setError ] = useState("")

    const [ formData, setFormData ] = useState({
            name: "",
            group: "",
            year: "",
            genre: "",
            localization: "",
            lent: false
    });
    
    const handleChange = (e) => {
        console.log(formData); // Para ver el estaod en cambio

        const { id, value, type, checked } = e.target;
        setFormData((prev) => ({
        ...prev,
        [id]: type === "checkbox" ? checked : value,
        }));
    };

    const genreOptions = [
        "Rock",
        "Progressive",
        "Punk",
        "Trash"
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.name.length < 5){
           setError("El nombre debe tener al menos 5 letras");
           return; 
        }

        if(formData.group.length < 5){
           setError("El grupo debe tener al menos 5 letras");
           return; 
        }

        if(formData.year.length !== 4 ){
           setError("El año debe tener 4 números");
           return; 
        }

        if (formData.genre === "") {
            setError("Debes seleccionar un género de la lista.");
            return;
        }

        const locationRegex = /^ES-\d{3}[A-Z]{2}$/;

        if(!locationRegex.test(formData.localization)){
            setError("El campo de localización debe seguir el patrón ES-001AA");
            return;
        }

        setError("");
        
        console.log("Datos válidos. Enviando...", formData);
    };

    return(
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
                <form 
                    onSubmit={handleSubmit}
                    noValidate
                    className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
                >
                    <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
                        Formulario &quot;Estado Agrupado&quot;
                    </div>

                    <div className="mb-4">
                        <label 
                            htmlFor="name" 
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Nombre:
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={formData.name} 
                            onChange={handleChange}
                            required
                            minlength="5"
                            aria-invalid={!!error} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        />
                    </div>

                    <div className="mb-4">
                        <label 
                            htmlFor="group" 
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Grupo:
                        </label>
                        <input
                            id="group"
                            type="text"
                            value={formData.group} 
                            onChange={handleChange}
                            required
                            minlength="5"
                            aria-invalid={!!error} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        />
                    </div>

                    <div className="mb-4">
                        <label 
                            htmlFor="year" 
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Año:
                        </label>
                        <input
                            id="year"
                            type="number"
                            value={formData.year} 
                            onChange={handleChange}
                            minlength="4"
                            aria-invalid={!!error} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        />
                    </div>

                    <div className="mb-4">
                        <label 
                            htmlFor="genre" 
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Género:
                        </label>
                        <select
                            id="genre"
                            type="text"
                            value={formData.genre} 
                            onChange={handleChange}
                            required
                            aria-invalid={!!error} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        >
                            <option value="" disabled>-- Selecciona un grupo --</option>
                            {genreOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label 
                            htmlFor="localization" 
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Localización:
                        </label>
                        <input
                            id="localization"
                            type="text"
                            value={formData.localization} 
                            onChange={handleChange}
                            required
                            aria-invalid={!!error} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        />
                    </div>

                    <div className="mb-4">
                        <label 
                            htmlFor="lent" 
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Prestado:
                        </label>
                        <input
                            id="lent"
                            type="checkbox"
                            checked={formData.lent}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        />
                    </div>
                    <div>
                        {error && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error}</p>}
                    </div>
                    <div>
                        <button 
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
