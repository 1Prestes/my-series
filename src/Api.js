import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/'
})

const loadGenres = () => api.get('genres')
const loadSeries = (genre) => api.get('series?genre=' + genre)
const saveSeries = (newSeries) => api.post('series', newSeries)
const deleteSerie = (id) => api.delete('series/' + id)
const loadSerieById = (id) => api.get('series/' + id)
const updateSerie = (serie) => api.put('series/' + serie.id, serie)

const apis = {
    loadGenres,
    loadSeries,
    saveSeries,
    deleteSerie,
    loadSerieById,
    updateSerie,
}

export default apis