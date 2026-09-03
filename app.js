const CMD = {
    home: 'whoami',
    about: 'cat about.md',
    skills: 'skills --list',
    experience: 'history --experience',
    projects: 'ls -la projects/',
    contact: 'cat contact.info',
};

const content = {
    home: `
        <div class="term-output">
            <div class="hero-block">
                <div class="hero-profile">
                    <img src="img/profile.jpg" alt="Mateo Fonseca" class="hero-avatar">
                    <div>
                        <div class="hero-title"><span class="hl">mateo fonseca</span></div>
                        <div class="hero-tagline">
                            <span class="hl">ing. sistemas</span> <span class="dim">//</span> <span class="accent">full stack developer</span>
                        </div>
                    </div>
                </div>

                <div class="hero-desc">
                    desarrollador web con <span class="hl">1 año de experiencia</span> en frontend y backend.
                    me especializo en crear soluciones funcionales y escalables.
                </div>

                <div class="stats-row">
                    <div class="stat-chip"><span class="num">1</span> año exp.</div>
                    <div class="stat-chip"><span class="num">3</span> experiencias</div>
                    <div class="stat-chip"><span class="num">5+</span> proyectos</div>
                    <div class="stat-chip"><span class="num">10+</span> tecnologías</div>
                </div>

                <div class="hero-cta">
                    <button class="cmd-btn primary" data-section="projects">ver proyectos</button>
                    <button class="cmd-btn primary" data-section="contact">contactar</button>
                </div>
            </div>

            <div class="code-block">
                <div class="code-line"><span class="code-c">// system profile</span></div>
                <div class="code-line"><span class="code-k">const</span> <span class="code-v">dev</span> = {</div>
                <div class="code-line i"><span class="code-p">name</span>: <span class="code-s">"Mateo Fonseca"</span>,</div>
                <div class="code-line i"><span class="code-p">role</span>: <span class="code-s">"Full Stack Developer"</span>,</div>
                <div class="code-line i"><span class="code-p">exp</span>: <span class="code-n">1y</span>,</div>
                <div class="code-line i"><span class="code-p">stack</span>: [<span class="code-s">"PHP"</span>, <span class="code-s">"JS"</span>, <span class="code-s">"HTML"</span>, <span class="code-s">"CSS"</span>],</div>
                <div class="code-line i"><span class="code-p">passionate</span>: <span class="code-b">true</span></div>
                <div class="code-line i"><span class="code-p">status</span>: <span class="code-s">"building"</span></div>
                <div class="code-line">};</div>
            </div>
        </div>
    `,

    about: `
        <div class="term-output">
            <div class="output-line"><span class="output-comment">// ingeniero de sistemas · full stack developer</span></div>
            <div class="output-line"><span class="output-comment">// enfocado en código limpio y soluciones escalables</span></div>

            <div class="about-cards">
                <div class="about-row">
                    <div class="about-card">
                        <div class="about-card-h">
                            <div class="about-card-icon"><i class="fa-solid fa-briefcase"></i></div>
                            <div class="about-card-title">ingeniero de sistemas</div>
                        </div>
                        <div class="about-card-text">
                            especializado en desarrollo web y seguridad informática.
                            enfoque en soluciones robustas y escalables.
                        </div>
                    </div>
                    <div class="about-card">
                        <div class="about-card-h">
                            <div class="about-card-icon"><i class="fa-solid fa-rocket"></i></div>
                            <div class="about-card-title">experiencia</div>
                        </div>
                        <div class="about-card-text">
                            <strong>1 año</strong> como desarrollador web junior en dos empresas,
                            creando soluciones frontend y backend en producción.
                        </div>
                    </div>
                </div>
                <div class="about-row">
                    <div class="about-card">
                        <div class="about-card-h">
                            <div class="about-card-icon"><i class="fa-solid fa-hammer"></i></div>
                            <div class="about-card-title">stack</div>
                        </div>
                        <div class="about-card-text">
                            experiencia con <strong>WordPress</strong>, <strong>e-commerce</strong>
                            y proyectos adaptables a necesidades del negocio.
                        </div>
                    </div>
                    <div class="about-card">
                        <div class="about-card-h">
                            <div class="about-card-icon"><i class="fa-solid fa-bullseye"></i></div>
                            <div class="about-card-title">filosofía</div>
                        </div>
                        <div class="about-card-text">
                            código <strong>limpio, eficiente y mantenible</strong>.
                            siempre aprendiendo y aplicando mejores prácticas.
                        </div>
                    </div>
                </div>
            </div>

            <div class="about-panels">
                <div class="about-panel">
                    <div class="about-panel-title"><span class="icon"><i class="fa-solid fa-bolt-lightning"></i></span> enfoque actual</div>
                    <ul class="about-list">
                        <li>desarrollo web full stack</li>
                        <li>seguridad informática</li>
                        <li>wordpress & e-commerce</li>
                        <li>ia & agentes</li>
                        <li>aprendizaje continuo</li>
                    </ul>
                </div>
                <div class="about-panel">
                    <div class="about-panel-title"><span class="icon"><i class="fa-solid fa-lightbulb"></i></span> competencias</div>
                    <ul class="about-list">
                        <li>adaptabilidad a cambios</li>
                        <li>solución de problemas</li>
                        <li>trabajo en equipo</li>
                        <li>código mantenible</li>
                    </ul>
                </div>
                <div class="quote-box">
                    <div class="quote-mark">"</div>
                    <div class="quote-text">enfocado en el aprendizaje continuo y la mejora constante de mis habilidades</div>
                </div>
            </div>
        </div>
    `,

    skills: `
        <div class="term-output">
            <div class="output-line"><span class="output-comment">// tecnologías y herramientas</span></div>

            <div class="skills-grid">
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-html5"></i></div>
                    <div class="skill-name">html</div>
                    <div class="skill-level">avanzado</div>
                    <div class="skill-bar"><div class="skill-fill advanced"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-css3-alt"></i></div>
                    <div class="skill-name">css</div>
                    <div class="skill-level">avanzado</div>
                    <div class="skill-bar"><div class="skill-fill advanced"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-square-js"></i></div>
                    <div class="skill-name">javascript</div>
                    <div class="skill-level">intermedio</div>
                    <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-php"></i></div>
                    <div class="skill-name">php</div>
                    <div class="skill-level">intermedio</div>
                    <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-bootstrap"></i></div>
                    <div class="skill-name">bootstrap</div>
                    <div class="skill-level">avanzado</div>
                    <div class="skill-bar"><div class="skill-fill advanced"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-wordpress"></i></div>
                    <div class="skill-name">wordpress</div>
                    <div class="skill-level">avanzado</div>
                    <div class="skill-bar"><div class="skill-fill advanced"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-solid fa-database"></i></div>
                    <div class="skill-name">mysql</div>
                    <div class="skill-level">intermedio</div>
                    <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-linux"></i></div>
                    <div class="skill-name">linux</div>
                    <div class="skill-level">intermedio</div>
                    <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-git-alt"></i></div>
                    <div class="skill-name">git</div>
                    <div class="skill-level">intermedio</div>
                    <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-github"></i></div>
                    <div class="skill-name">github</div>
                    <div class="skill-level">intermedio</div>
                    <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-react"></i></div>
                    <div class="skill-name">react + vite</div>
                    <div class="skill-level">intermedio</div>
                    <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-node"></i></div>
                    <div class="skill-name">express</div>
                    <div class="skill-level">intermedio</div>
                    <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-solid fa-robot"></i></div>
                    <div class="skill-name">ai agents</div>
                    <div class="skill-level">intermedio</div>
                    <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                    <div class="skill-name">prompt eng.</div>
                    <div class="skill-level">intermedio</div>
                    <div class="skill-bar"><div class="skill-fill intermediate"></div></div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-solid fa-brain"></i></div>
                    <div class="skill-name">llm apis</div>
                    <div class="skill-level">básico</div>
                    <div class="skill-bar"><div class="skill-fill basic"></div></div>
                </div>
            </div>
        </div>
    `,

    experience: `
        <div class="term-output">
            <div class="output-line"><span class="output-comment">// historial laboral</span></div>

            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">feb 2023 — jun 2023</div>
                    <div class="timeline-title">ingeniero de sistemas</div>
                    <div class="timeline-company">municipio de yondó · parcial</div>
                    <div class="timeline-desc">
                        despliegue de infraestructura tecnológica, auditoría de sistemas y mantenimiento de computadores.
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">abr 2024 — oct 2024</div>
                    <div class="timeline-title">desarrollador web junior</div>
                    <div class="timeline-company">fundeprocar · completa</div>
                    <div class="timeline-desc">
                        desarrollo frontend y backend de aplicaciones web. proyectos activos en producción
                        con requerimientos cambiantes y soluciones adaptables.
                    </div>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">nov 2024 — mar 2025</div>
                    <div class="timeline-title">desarrollador web junior</div>
                    <div class="timeline-company">operación sistémica · completa</div>
                    <div class="timeline-desc">
                        desarrollo y mantenimiento de aplicaciones web (php, html, css, js).
                        e-commerce con wordpress, funcionalidades personalizadas y optimización.
                    </div>
                </div>
            </div>
        </div>
    `,

    projects: `
        <div class="term-output">
            <div class="output-line"><span class="output-comment">// repositorios y demos</span></div>

            <div class="projects-grid">
                <div class="project-card">
                    <span class="project-status ok">completado</span>
                    <div class="project-title">cloud</div>
                    <div class="project-desc">sistema de almacenamiento en la nube para gestionar y compartir archivos.</div>
                    <div class="project-tech">
                        <span class="tech-tag">php</span><span class="tech-tag">html</span><span class="tech-tag">css</span><span class="tech-tag">js</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/MatFon73/Cloud" target="_blank" class="project-link"><i class="fa-brands fa-github"></i> github</a>
                    </div>
                </div>
                <div class="project-card">
                    <span class="project-status live">en línea</span>
                    <div class="project-title">Cyber Dev Studios</div>
                    <div class="project-desc">empresa de desarrollo de videojuegos indie.</div>
                    <div class="project-tech">
                        <span class="tech-tag">React + Vite</span><span class="tech-tag">Express + Prisma</span><span class="tech-tag">MySQL</span>
                    </div>
                    <div class="project-links">
                        <a href="https://cyberdevstudios.pages.dev/" target="_blank" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> web</a>
                    </div>
                </div>
                <div class="project-card">
                    <span class="project-status live">en línea</span>
                    <div class="project-title">nova2d</div>
                    <div class="project-desc">Nova2D es un framework para Love2D que estandariza la estructura del proyecto.</div>
                    <div class="project-tech">
                        <span class="tech-tag">lua</span><span class="tech-tag">love2d</span>
                    </div>
                    <div class="project-links">
                        <a href="https://nova2d.dev/" target="_blank" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> web</a>
                        <a href="https://github.com/CyberDevStudios/Nova2d" target="_blank" class="project-link"><i class="fa-brands fa-github"></i> github</a>
                    </div>
                </div>
                <div class="project-card">
                    <span class="project-status live">en línea</span>
                    <div class="project-title">portafolio</div>
                    <div class="project-desc">sitio personal — este mismo terminal.</div>
                    <div class="project-tech">
                        <span class="tech-tag">html</span><span class="tech-tag">css</span><span class="tech-tag">js</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/MatFon73/matfon73.github.io" target="_blank" class="project-link"><i class="fa-brands fa-github"></i> github</a>
                    </div>
                </div>
                <div class="project-card">
                    <span class="project-status wip">en proceso</span>
                    <div class="project-title">balatroeditor</div>
                    <div class="project-desc">editor personalizado para el juego balatro.</div>
                    <div class="project-tech">
                        <span class="tech-tag">html</span><span class="tech-tag">css</span><span class="tech-tag">js</span>
                    </div>
                    <div class="project-links">
                        <a href="https://matfon73.github.io/BalatroEditor/" target="_blank" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> web</a>
                        <a href="https://github.com/MatFon73/BalatroEditor" target="_blank" class="project-link"><i class="fa-brands fa-github"></i> github</a>
                    </div>
                </div>
                <div class="project-card">
                    <span class="project-status wip">en proceso</span>
                    <div class="project-title">Familia Fonseca</div>
                    <div class="project-desc">Carta de presentación para la familia Fonseca.</div>
                    <div class="project-tech">
                        <span class="tech-tag">React + Vite</span>
                    </div>
                    <div class="project-links">
                        <a href="https://fonsecacifuentes.pages.dev/" target="_blank" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i> web</a>
                    </div>
                </div>
            </div>
        </div>
    `,

    contact: `
        <div class="term-output">
            <div class="contact-desc">canales disponibles — elegí el que prefieras.</div>

            <div class="contact-grid">
                <a href="https://github.com/MatFon73" target="_blank" class="contact-item">
                    <div class="contact-icon"><i class="fa-brands fa-github"></i></div>
                    <div>
                        <div class="contact-label">github</div>
                        <div class="contact-value">@MatFon73</div>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/mateo-fonseca-ab939a164/" target="_blank" class="contact-item">
                    <div class="contact-icon"><i class="fa-brands fa-linkedin-in"></i></div>
                    <div>
                        <div class="contact-label">linkedin</div>
                        <div class="contact-value">mateo fonseca</div>
                    </div>
                </a>
                <a href="https://www.instagram.com/matfon73/" target="_blank" class="contact-item">
                    <div class="contact-icon"><i class="fa-brands fa-instagram"></i></div>
                    <div>
                        <div class="contact-label">instagram</div>
                        <div class="contact-value">@matfon73</div>
                    </div>
                </a>
                <a href="https://x.com/MatFon73" target="_blank" class="contact-item">
                    <div class="contact-icon"><i class="fa-brands fa-x-twitter"></i></div>
                    <div>
                        <div class="contact-label">x / twitter</div>
                        <div class="contact-value">@MatFon73</div>
                    </div>
                </a>
            </div>
        </div>
    `
};

const sectionLabels = {
    home: 'Inicio',
    about: 'Acerca de',
    skills: 'Habilidades',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
};

function loadSection(section) {
    const area = document.getElementById('content-area');
    const input = document.getElementById('prompt-input');
    const announcer = document.getElementById('section-announcer');

    area.innerHTML = content[section];
    input.textContent = CMD[section];

    if (announcer) {
        announcer.textContent = `Sección: ${sectionLabels[section] || section}`;
    }

    document.querySelectorAll('.cmd-btn').forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.cmd-btn[data-section="${section}"]`);
    if (btn) btn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    loadSection('home');
});

document.addEventListener('click', e => {
    const btn = e.target.closest('[data-section]');
    if (!btn) return;
    const section = btn.getAttribute('data-section');
    if (section) loadSection(section);
});
