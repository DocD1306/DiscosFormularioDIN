import { useState, } from "react";

export default function DiscForm(){

    // const [ error, setError ] = useState("")

    const [ errors, setErrors ] = useState({
        name: "",
        group: "",
        year: "",
        genre: "",
        location: "",
    })

    const [ formData, setFormData ] = useState({
            name: "",
            group: "",
            year: "",
            genre: "",
            location: "",
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
        
        setErrors({});
        if(formData.name.length < 5){
           setErrors({ name: "El nombre debe tener al menos 5 letras"});
           return; 
        }

        if(formData.group.length < 5){
           setErrors({group: "El grupo debe tener al menos 5 letras"});
           return; 
        }

        if(formData.year.length !== 4 ){
           setErrors({year: "El año debe tener 4 números"});
           return; 
        }

        if (formData.genre === "") {
            setErrors({genre: "Debes seleccionar un género de la lista."});
            return;
        }

        const locationRegex = /^ES-\d{3}[A-Z]{2}$/;

        if(!locationRegex.test(formData.location)){
            setErrors({location: "El campo de localización debe seguir el patrón ES-001AA"});
            return;
        }

        // setError("");

        
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
                            aria-invalid={!!errors.name} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                            aria-describedby={errors ? "error-name" : undefined}
                        />
                        {errors.name && (
                            <p id="error-name" className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{errors.name}</p>
                        )}
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
                            aria-invalid={!!errors} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                            aria-describedby={errors ? "error-group" : undefined}
                        />
                        {errors.group && (
                            <p id="error-group" className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{errors.group}</p>
                        )}
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
                            aria-invalid={!!errors} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                            aria-describedby={errors ? "error-year" : undefined}
                        />
                        {errors.year && (
                            <p id="error-year" className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{errors.year}</p>
                        )}
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
                            aria-invalid={!!errors} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                            aria-describedby={errors ? "error-genre" : undefined}
                        >
                            <option value="" disabled>-- Selecciona un grupo --</option>
                            {genreOptions.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                        {errors.genre && (
                            <p id="error-genre" className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{errors.genre}</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label 
                            htmlFor="location" 
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Localización:
                        </label>
                        <input
                            id="location"
                            type="text"
                            value={formData.location} 
                            onChange={handleChange}
                            required
                            aria-invalid={!!errors} 
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                        aria-describedby={errors ? "error-location" : undefined}
                        />
                        {errors.location && (
                            <p id="error-location" className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{errors.location}</p>
                        )}
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
                    {/* <div>
                        {error && <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">{error}</p>}
                    </div> */}
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
