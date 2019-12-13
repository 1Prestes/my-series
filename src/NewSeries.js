import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import api from './Api';

const statuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assistir',
}

class NewSeries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            genres: [],
            isLoading: false,
            redirect: false,
        }
        this.saveSeries = this.saveSeries.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        api.loadGenres()
            .then(res => {
                this.setState({
                    isLoading: false,
                    genres: res.data,
                });
            })
    }

    saveSeries() {

        const newSeries = {
            name: this.refs.name.value,
            status: this.refs.status.value,
            genre: this.refs.genre.value,
            comments: this.refs.comments.value,
        };
        api.saveSeries(newSeries).then(res => {
            // console.log(res)
            this.setState({ redirect: '/series/' + this.refs.genre.value })
        })
        // console.log(Object.keys(newSeries))

    }

    render() {
        return (
         <section className="intro-section mb-5">
                <div className="container">
                    {
                        this.state.redirect &&
                        <Redirect to={this.state.redirect} />
                    }
                    <h1>Nova série</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="serie">Nome da série: </label>
                            <input className="form-control" type="text" id="serie" ref="name" placeholder="Ex: Breaking Bad" />
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                                <label htmlFor="status">Status: </label>
                                <select ref="status" name="" className="form-control" id="status">
                                    {
                                        Object.keys(statuses).map(key => <option key={key} value={key}>{statuses[key]}</option>)
                                    }
                                </select>
                            </div>
                            <div className="col">
                                <label htmlFor="genre">Genero: </label>
                                <select ref="genre" name="" id="genre" className="form-control">
                                    {
                                        this.state.genres.map(key => <option key={key} value={key}>{key}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Comentários</label>
                            <textarea ref="comments" type="text" className="form-control" id="comment" rows="3" placeholder="Ex: Ótima serie, recomendo porque....."></textarea>
                        </div>
                        <button className="btn btn-primary" type="button" onClick={this.saveSeries}>Salvar</button>
                    </form>
                </div>
            </section>
            )
    }
}

export default NewSeries;