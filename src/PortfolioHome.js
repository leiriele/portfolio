import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaServer,
  FaCode,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";
import "./App.css";

const PortfolioHome = () => {
  const [showExperience, setShowExperience] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showProjects, setShowProjects] = useState(true);

  return (
    <div className="container-fluid">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>LEIRIELE CORRÊA</h2>
          <p>Full Stack Developer | DevOps | Infraestrutura</p>
        </div>

        <div className="contact-list">
          <div className="contact-item">
            <FaPhone className="icon" />
            <p>(34) 99117-0325</p>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <p>Uberlândia – MG, Brasil</p>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <p>
              <a href="mailto:leiricorrea@gmail.com" className="link">
                leiricorrea@gmail.com
              </a>
            </p>
          </div>

          <div className="contact-item">
            <FaLinkedin className="icon" />
            <p>
              <a
                href="https://www.linkedin.com/in/leiriele"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                linkedin.com/in/leiriele
              </a>
            </p>
          </div>

          <div className="contact-item">
            <FaGithub className="icon" />
            <p>
              <a
                href="https://github.com/leiriele"
                target="_blank"
                rel="noreferrer"
                className="link"
              >
                github.com/leiriele
              </a>
            </p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="main-content">
        <section className="about-me">
          <div className="card">
            <h1 className="heading">Sobre Mim</h1>
            <p className="paragraph">
              <strong>Bacharelado em Sistemas de Informação</strong> — Universidade
              Federal de Uberlândia (UFU) | Em andamento
            </p>

            <h2 className="section-title">Resumo Profissional</h2>
            <p className="paragraph">
              Graduanda em Sistemas de Informação com experiência em
              <strong> desenvolvimento Full Stack </strong>
              e <strong>infraestrutura de aplicações</strong>. Atuo com
              <strong> Python, Django, JavaScript, React e Node.js</strong>,
              além de integração com <strong>ERP</strong>, desenvolvimento e
              consumo de <strong>APIs REST</strong>, administração de
              <strong> servidores Linux</strong>, organização de
              <strong> containers Docker</strong>, análise de
              <strong> logs</strong> e suporte a aplicações em ambiente de
              produção.
            </p>
          </div>
        </section>

        <section className="skills">
          <div className="card">
            <h2 className="section-title">
              <FaCode style={{ marginRight: "8px" }} />
              Tecnologias
            </h2>

            <div className="top-menu">
              <div className="language python">Python</div>
              <div className="language javascript">JavaScript</div>
              <div className="language java">Java</div>
              <div className="language django">Django</div>
              <div className="language react">React.js</div>
              <div className="language nodejs">Node.js</div>
              <div className="language postgresql">PostgreSQL</div>
              <div className="language mongodb">MongoDB</div>
              <div className="language rest">REST APIs</div>
              <div className="language docker">Docker</div>
              <div className="language terraform">Terraform</div>
              <div className="language linux">Linux</div>
              <div className="language git">Git</div>
              <div className="language github">GitHub</div>
            </div>
          </div>
        </section>

        <section className="experience">
          <div className="card">
            <h2
              className="section-title"
              onClick={() => setShowExperience(!showExperience)}
              style={{ cursor: "pointer" }}
            >
              <FaServer style={{ marginRight: "8px" }} />
              Experiência Profissional {showExperience ? "▲" : "▼"}
            </h2>

            {showExperience && (
              <div className="experience-list">
                <div className="experience-card">
                  <h3>Estagiária DevOps / Infraestrutura</h3>
                  <p>
                    <strong>Landix Sistemas</strong> | Jul 2025 – Presente
                  </p>
                  <ul>
                    <li>Administração e manutenção de servidores e máquinas</li>
                    <li>Monitoramento de serviços e análise de logs</li>
                    <li>
                      Suporte à infraestrutura e configuração de ambientes de
                      aplicação
                    </li>
                  </ul>
                </div>

                <div className="experience-card">
                  <h3>Desenvolvedora Full Stack Jr.</h3>
                  <p>
                    <strong>eSolvere Tecnologia</strong> | Fev 2024 – Presente
                  </p>
                  <ul>
                    <li>
                      Desenvolvimento de aplicações web com React (frontend) e
                      Django/Python (backend)
                    </li>
                    <li>Desenvolvimento e manutenção de APIs REST</li>
                    <li>Integração de sistema interno com ERP corporativo</li>
                    <li>
                      Desenvolvimento do módulo de Apontamentos de Produção
                    </li>
                    <li>
                      Correção de bugs e otimização de performance de aplicações
                    </li>
                    <li>
                      Administração e organização de containers Docker e serviços
                      da aplicação
                    </li>
                    <li>
                      Análise de logs de sistema e aplicação para diagnóstico e
                      correção de falhas
                    </li>
                    <li>
                      Suporte à infraestrutura com manutenção de servidores Linux
                    </li>
                    <li>
                      Geração de relatórios operacionais e análise de dados
                    </li>
                  </ul>
                </div>

                <div className="experience-card">
                  <h3>Estagiária em Desenvolvimento de Software</h3>
                  <p>
                    <strong>eSolvere Tecnologia</strong> | Ago 2023 – Jan 2024
                  </p>
                  <ul>
                    <li>Implementação de APIs REST com Django</li>
                    <li>Integração de frontend com React</li>
                    <li>Manutenção e evolução de aplicações web</li>
                  </ul>
                </div>

                <div className="experience-card">
                  <h3>Atendente Júnior / Backoffice</h3>
                  <p>
                    <strong>Algar Tecnologia</strong> | 2012 – 2013
                  </p>
                  <ul>
                    <li>
                      Atendimento ao cliente, suporte operacional e análise de
                      dados
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="education">
          <div className="card">
            <h2
              className="section-title"
              onClick={() => setShowEducation(!showEducation)}
              style={{ cursor: "pointer" }}
            >
              <FaGraduationCap style={{ marginRight: "8px" }} />
              Formação Acadêmica {showEducation ? "▲" : "▼"}
            </h2>

            {showEducation && (
              <div className="education-list">
                <div className="education-item">
                  <h3 className="education-title">
                    Bacharelado em Sistemas de Informação
                  </h3>
                  <p className="education-details">
                    Universidade Federal de Uberlândia (UFU) | Em andamento
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="projects">
          <div className="card">
            <h2
              className="section-title"
              onClick={() => setShowProjects(!showProjects)}
              style={{ cursor: "pointer" }}
            >
              <FaProjectDiagram style={{ marginRight: "8px" }} />
              Projetos e Extensão Acadêmica {showProjects ? "▲" : "▼"}
            </h2>

            {showProjects && (
              <div className="education-list">
                <div className="education-item">
                  <h3 className="education-title">
                    Despertar do Pensamento Computacional nas Crianças (TechKids)
                    — UFU
                  </h3>
                  <p className="education-details">
                    Bolsista e Monitora Voluntária | 2022 – 2023
                  </p>
                  <p className="education-description">
                    Atuação em ações de ensino e apoio ao desenvolvimento do
                    pensamento computacional para crianças.
                  </p>
                </div>

                <div className="education-item">
                  <h3 className="education-title">
                    AFIN – Apoio ao Ingresso no Ensino Superior — UFU
                  </h3>
                  <p className="education-details">Bolsista | 2022</p>
                  <p className="education-description">
                    Participação em projeto de apoio educacional voltado ao
                    ingresso no ensino superior.
                  </p>
                </div>

                <div className="education-item">
                  <h3 className="education-title">Jovens Programadores</h3>
                  <p className="education-details">
                    Monitora Voluntária | 2019
                  </p>
                  <p className="education-description">
                    Apoio em atividades introdutórias de programação para jovens
                    estudantes.
                  </p>
                </div>

                <div className="education-item">
                  <h3 className="education-title">
                    Inclusão Digital para Pessoas Idosas
                  </h3>
                  <p className="education-details">Monitora Voluntária</p>
                  <p className="education-description">
                    Atuação no ensino de informática básica e uso de tecnologias
                    digitais.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PortfolioHome;