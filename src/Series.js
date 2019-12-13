import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import api from './Api';

const statuses = {
    'watched': 'Assistido',
    'watching': 'Assistindo',
    'toWatch': 'Assistir',
}

class Series extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            series: [],
        }
        this.renderSeries = this.renderSeries.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        this.setState({ isLoading: true });
        api.loadSeries(this.props.match.params.genre)
            .then(res => {
                this.setState({
                    isLoading: false,
                    series: res.data
                })
            })
    }

    deleteSerie(id) {
        api.deleteSerie(id).then(res => this.loadData())
    }

    renderSeries(serie) {
        return (

            <div key={serie.id} className="col mb-4">
                <div className="card shadow-sm bg-white rounded">
                    <img className="card-img-top" src="http://placehold.it/350x270/000/fff" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">
                            {serie.name}
                        </h5>

                        <p className="card-text">
                            {serie.comments}
                        </p>
                        <p className="card-text">{serie.genre} / {statuses[serie.status]}</p>
                    </div>
                    <div className="card-footer d-flex justify-content-around">
                        <a className="btn btn-danger" onClick={() => this.deleteSerie(serie.id)}>excluir</a>
                        <Link className="btn btn-success" to={`/serie/edit/${serie.id}`}>Editar</Link>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <section className="intro-section">
                <div className="container"> <h1>Series de {this.props.match.params.genre}</h1>
                    <div id="" className="row row-cols-1 row-cols-md-3">
                        {
                            !this.state.isLoading && this.state.series.length === 0 &&
                            <div className="alert alert-info">
                                Sorry! nanhuma serie cadastrada
                        </div>
                        }

                        {
                            !this.state.isLoading &&
                            this.state.series.map(this.renderSeries)
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default Series;
