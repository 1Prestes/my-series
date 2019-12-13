import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div>
                <header className="mt-5">
                    <div className="jumbotron header text-black header-img">
                        <div>
                            <div className="photo mt-20">
                                <img className="perfil mx-auto d-block" src="./images/perfil.jpg" alt="Foto de Perfil" />
                            </div>
                            <h2 className="about-name text-white text-center mt-20">Dijango Alves</h2>
                            <p className="profession">Programador de computadores</p>
                        </div>
                    </div>
                </header>
                <div className="section justify-content-center text-center">
                    <div className="col-md-12 social-content">
                        <ul className="social-network social-circle">
                            <li><a href="https://github.com/1Prestes" target="_blank" className="btn btn-info">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/kimn/" target="_blank" className="btn btn-info">Linkedin</a></li>
                        </ul>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="justify-content-center about-me text-center mt-20">
                        <h2 className="mb-20">Sobre mim</h2>
                        <p>
                            Discente do curso de Análise e Desenvolvimento de Sistemas e formado em
                            Técnico em Informática para Internet pelo Instituto Federal de São Paulo,
                            apaixonado pela área de tecnologia da informação gosto de desafios que
                            visam melhorar e trazer qualidade de vida as pessoas por meio da
                            programação.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;