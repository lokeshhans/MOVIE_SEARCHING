export function MovieSearch(term) {
  return `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&S=${term}`
}
