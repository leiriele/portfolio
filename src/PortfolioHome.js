import React from "react";
import { FaLinkedin, FaGithub, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import "./App.css";
import { useState } from "react";


const PortfolioHome = () => {
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  return (
    <div className="container-fluid">
      {/* Barra Lateral */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Leiriele Corrêa</h2>
          <p>Desenvolvedora Full-Stack Jr.</p>
        </div>
        <div className="contact-list">
          <div className="contact-item">
            <FaPhone className="icon" />
            <p>(34) 99117-0325</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <p>Uberlândia, MG</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <p><a href="mailto:leiricorrea@gmail.com" className="link">leiricorrea@gmail.com</a></p>
          </div>
          <div className="contact-item">
            <FaLinkedin className="icon" />
            <p><a href="https://www.linkedin.com/in/leiriele" className="link">linkedin.com/in/leiriele</a></p>
          </div>
          <div className="contact-item">
            <FaGithub className="icon" />
            <p><a href="https://github.com/leiriele" className="link">github.com/leiriele</a></p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="main-content">
        <section className="about-me">
          <div className="card">
            <h1 className="heading">Sobre Mim</h1>
            <p className="paragraph">
              Graduanda em Sistemas de Informação, com experiência em desenvolvimento FullStack para sistemas web.
              Atuação em suporte ao cliente e backoffice, incluindo análise de dados e atendimento receptivo.
              Habilidade em Python, JavaScript, React e Node.js, além de bancos de dados relacionais (PostgreSQL) e não relacionais (MongoDB).
              Experiência em montagem, diagnóstico e reparo de hardware e software, bem como participação em projetos de extensão e aplicação de metodologias ágeis.
            </p>

          </div>
        </section>

        <section className="skills">
          <div className="card">
            <h2 className="section-title">Habilidades</h2>
            <div className="top-menu">
              <div className="language python">Python</div>
              <div className="language javascript">JavaScript</div>
              <div className="language react">React</div>
              <div className="language nodejs">Node.js</div>
              <div className="language postgresql">PostgreSQL</div>
              <div className="language mongodb">MongoDB</div>
            </div>
          </div>
        </section>

        <section className="experience">
          <div className="card">
            <h2 className="section-title" onClick={() => setShowExperience(!showExperience)}>
              Experiência Profissional {showExperience ? "▲" : "▼"}
            </h2>
            {showExperience && (
              <div className="experience-list">
                <div className="experience-card">
                  <h3>Desenvolvedor FullStack Jr. (PJ)</h3>
                  <p><strong>eSolvere Tecnologia</strong> | Fevereiro 2024 - Presente</p>
                  <ul>
                    <li>Desenvolvimento e manutenção de sistemas web com React e Django/Python.</li>
                    <li>Integrações de APIs RESTful para comunicação entre microserviços.</li>
                    <li>Otimização de performance e expansão de funcionalidades em ambiente de produção.</li>
                  </ul>
                </div>

                <div className="experience-card">
                  <h3>Estagiária em Desenvolvimento de Software</h3>
                  <p><strong>eSolvere Tecnologia</strong> | Agosto 2023 - Janeiro 2024</p>
                  <p>Apoio na criação e manutenção de sistemas web com APIs RESTful em Django e integração com React.</p>
                </div>

                <div className="experience-card">
                  <h3>Atendente Júnior e Backoffice</h3>
                  <p><strong>Algar Tecnologia e Consultoria S.A.</strong> | Abril 2012 - Outubro 2013</p>
                  <ul>
                    <li>Atendimento ao cliente e tarefas de backoffice.</li>
                    <li>Suporte e análise de dados.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="education">
          <div className="card">
            <h2 className="section-title" onClick={() => setShowEducation(!showEducation)}>
              Formação Acadêmica {showEducation ? "▲" : "▼"}
            </h2>
            {showEducation && (
              <div className="education-list">
                <div className="education-item">
                  <h3 className="education-title">Python Developer - Bootcamp</h3>
                  <p className="education-details">Plataforma: DIO | Duração: 64h | Ano: 2023</p>
                  <p className="education-description">Desenvolvimento de habilidades avançadas em Python, abrangendo desde a base até tópicos mais complexos.</p>
                </div>

                <div className="education-item">
                  <h3 className="education-title">React Developer - Bootcamp</h3>
                  <p className="education-details">Plataforma: DIO | Duração: 34h | Ano: 2023</p>
                  <p className="education-description">Aprofundamento no desenvolvimento de aplicações interativas com React, com foco em hooks e gerenciamento de estado.</p>
                </div>

                <div className="education-item">
                  <h3 className="education-title">Desenvolvimento Web Completo</h3>
                  <p className="education-details">Plataforma: Udemy | Duração: 114h | Ano: 2023</p>
                  <p className="education-description">Curso intensivo sobre desenvolvimento web, englobando front-end, back-end e integração com bancos de dados.</p>
                </div>

                <div className="education-item">
                  <h3 className="education-title">UX Designer - Curso de Curta Duração</h3>
                  <p className="education-details">Plataforma: DIO | Duração: 30h | Ano: 2023</p>
                  <p className="education-description">Aperfeiçoamento na criação de experiências de usuário com foco em design intuitivo e usabilidade.</p>
                </div>

                <div className="education-item">
                  <h3 className="education-title">Projetos Ágeis com SCRUM - Curso de Curta Duração</h3>
                  <p className="education-details">Plataforma: DIO | Duração: 2h | Ano: 2022</p>
                  <p className="education-description">Introdução às metodologias ágeis, com ênfase no SCRUM para otimizar a gestão de projetos.</p>
                </div>

                <div className="education-item">
                  <h3 className="education-title">Introdução ao Git e ao GitHub</h3>
                  <p className="education-details">Plataforma: DIO | Duração: 5h | Ano: 2022</p>
                  <p className="education-description">Fundamentos de controle de versão e colaboração utilizando Git e GitHub, essenciais para o desenvolvimento moderno.</p>
                </div>

                <div className="education-item">
                  <h3 className="education-title">Introdução ao Kotlin</h3>
                  <p className="education-details">Plataforma: DIO | Duração: 6h | Ano: 2022</p>
                  <p className="education-description">Curso básico de Kotlin, com ênfase em suas principais características e aplicações no desenvolvimento de aplicativos Android.</p>
                </div>

                <div className="education-item">
                  <h3 className="education-title">Fundamentos de Orientação a Objetos com Kotlin</h3>
                  <p className="education-details">Plataforma: DIO | Duração: 4h | Ano: 2022</p>
                  <p className="education-description">Aprofundamento em conceitos de orientação a objetos utilizando Kotlin, para desenvolvimento mais estruturado e escalável.</p>
                </div>

                <div className="education-item">
                  <h3 className="education-title">Desenvolvimento para Internet e Banco de Dados com Python e Django</h3>
                  <p className="education-details">Plataforma: DIO | Duração: 4h | Ano: 2022</p>
                  <p className="education-description">Aprendizado sobre desenvolvimento web com Python e Django, incluindo integração com bancos de dados relacionais.</p>
                </div>
              </div>
            )}
          </div>

        </section>

      </div>

    </div>
  );
};

export default PortfolioHome;
