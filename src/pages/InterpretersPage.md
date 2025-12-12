# Data API Documentation

**Me he equivocado y he hecho el ejercicio con el proyecto de películas que hicimos nosotros en clase y no con el del zip que nos pusiste. Lo siento.**

This project currently uses a local data source pattern. The data is not fetched via HTTP requests but is imported directly from a JavaScript module. This document outlines the expected schema and structure for the data source.

## Data Source

* **File Path:** `src/data/movies-interpreters.js`
* **Export Type:** `Default Export` (Array of Objects)

## Schema Definition

The data must be an **Array of Movie Objects**. Each movie object contains metadata about the film and a nested array of **Actor Objects**.

### 1. Movie Object (Root Item)

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | `number` \| `string` | **Yes** | Unique identifier for the movie. Used in key generation for the list. |
| `titulo` | `string` | No | Title of the movie (Note: Not currently displayed in `InterpretersPage`, but usually present). |
| `nota` | `number` | **Yes** | Numeric rating of the movie (0-10). **Logic:** If `nota === 10`, the actors in this movie will be rendered with the "Nota 10" highlight style. |
| `actores` | `Array<Object>` | **Yes** | List of actors associated with this movie. See *Actor Object* below. |

### 2. Actor Object (Nested)

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `nombre` | `string` | **Yes** | The full name of the actor. Displayed as the card title. |
| `imagen` | `string` | **Yes** | URL or relative path to the actor's photo. Passed to the `ReusableCard`. |
| `biografia` | `string` | **Yes** | Short biography or description. Passed as `children` to `ReusableCard`. |

---

## Example Payload

Your `movies-interpreters.js` file should export an array matching this JSON-like structure:

```javascript
const interpreters = [
  {
    id: 1,
    titulo: "The Godfather",
    nota: 10, // Critical: Triggers "esNota10" prop in ReusableCard
    actores: [
      {
        nombre: "Marlon Brando",
        imagen: "[https://example.com/brando.jpg](https://example.com/brando.jpg)",
        biografia: "Don Vito Corleone, head of the Corleone crime family."
      },
      {
        nombre: "Al Pacino",
        imagen: "[https://example.com/pacino.jpg](https://example.com/pacino.jpg)",
        biografia: "Michael Corleone, the youngest son who takes over the family."
      }
    ]
  },
  {
    id: 2,
    titulo: "Sharknado",
    nota: 3, // Not a 10, so cards will render normally
    actores: [
      {
        nombre: "Tara Reid",
        imagen: "/assets/tara.jpg",
        biografia: "April Wexler, the estranged wife of Fin Shepard."
      }
    ]
  }
];

export default interpreters;