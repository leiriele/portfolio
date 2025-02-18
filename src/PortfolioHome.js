import React from "react";
import "./App.css";  

const PortfolioHome = () => {
    return (
        <div className="container bg-main">
            <div className="card">
                <h1 className="heading">Olá, eu sou Leiriele!</h1>
                <div className="button-group">
                    <a href="#projetos" className="button bg-purple">Projetos</a>
                    <a href="#sobre" className="button bg-indigo">Sobre Mim</a>
                    <a href="#contato" className="button bg-gray">Contato</a>
                </div>
                <p className="paragraph">Busco oportunidades como Desenvolvedora Full-Stack Jr.</p>
                <p className="paragraph">Graduanda em Sistemas de Informação com experiência em desenvolvimento web.</p>
                <p className="paragraph">Experiência prática com Python, JavaScript, React, bancos de dados relacionais e não relacionais (PostgreSQL, MongoDB).</p>

                <div className="contact-info">
                    <p>Email: <a href="mailto:leiricorrea@gmail.com" className="link">leiricorrea@gmail.com</a></p>
                    <p>Telefone: (34) 99117-0325</p>
                    <p>Localização: Uberlândia, MG</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/leiriele" className="link">linkedin.com/in/leiriele</a></p>
                    <p>GitHub: <a href="https://github.com/leiriele" className="link">github.com/leiriele</a></p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioHome;
