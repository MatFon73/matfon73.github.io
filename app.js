// Content data
const content = {
    home: `
        <div class="section home-section">
            <div class="hero-content">
                <h1 class="hero-title">
                    <span class="name-highlight"><i class="fa-solid fa-crown"></i> Mateo Fonseca</span>
                </h1>
                <div class="title-stack">
                    <span class="job-title">Ingeniero de Sistemas</span>
                    <span class="separator">|</span>
                    <span class="job-title">Desarrollador Web</span>
                </div>
                <p class="hero-description">
                    Desarrollador web con <span class="highlight-text">1 año de experiencia</span> en desarrollo 
                    <span class="highlight-text">frontend y backend</span>. Me especializo en crear soluciones web 
                    funcionales y escalables, con experiencia en proyectos dinámicos que continúan en producción.
                </p>
                <div class="hero-stats">
                    <div class="stat-item">
                        <div class="stat-number">1</div>
                        <div class="stat-label">Año de Experiencia</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">3</div>
                        <div class="stat-label">Experiencias</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">5+</div>
                        <div class="stat-label">Proyectos</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">10+</div>
                        <div class="stat-label">Tecnologías</div>
                    </div>
                </div>
                <div class="hero-cta">
                    <a href="#" data-section="projects" class="cta-button primary">
                        <span>Ver Proyectos</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </a>
                    <a href="#" data-section="contact" class="cta-button secondary">
                        <span>Contactar</span>
                    </a>
                </div>
            </div>
            <div class="code-decoration">
                <div class="code-line"><span class="code-comment">// Desarrollando soluciones web</span></div>
                <div class="code-line"><span class="code-keyword">const</span> <span class="code-variable">developer</span> = {</div>
                <div class="code-line indent"><span class="code-property">name:</span> <span class="code-string">"Mateo Fonseca"</span>,</div>
                <div class="code-line indent"><span class="code-property">role:</span> <span class="code-string">"Full Stack Developer"</span>,</div>
                <div class="code-line indent"><span class="code-property">experience:</span> <span class="code-number">1</span>,</div>
                <div class="code-line indent"><span class="code-property">skills:</span> [<span class="code-string">"PHP"</span>, <span class="code-string">"JavaScript"</span>, <span class="code-string">"HTML"</span>, <span class="code-string">"CSS"</span>],</div>
                <div class="code-line indent"><span class="code-property">passionate:</span> <span class="code-boolean">true</span></div>
                <div class="code-line">};</div>
            </div>
        </div>
    `,

    about: `
        <div class="section about-section">
            <h2 class="section-title"><i class="fa-solid fa-circle-info"></i> Sobre Mí</h2>
            <div class="about-container">
                <div class="about-main">
                    <div class="about-intro">
                        <div class="intro-icon"><i class="fa-solid fa-briefcase"></i></div>
                        <div class="intro-text">
                            <h3>Ingeniero de Sistemas</h3>
                            <p>Especializado en desarrollo web y Busco un enfoque en seguridad informática</p>
                        </div>
                    </div>
                    <div class="about-card">
                        <div class="card-icon"><i class="fa-solid fa-rocket"></i></div>
                        <div class="card-content">
                            <h4>Experiencia Profesional</h4>
                            <p>
                                Con <strong>1 año de experiencia</strong> como desarrollador web junior, 
                                he trabajado en dos empresas creando soluciones tanto frontend como backend.
                            </p>
                        </div>
                    </div>
                    <div class="about-card">
                        <div class="card-icon"><i class="fa-solid fa-hammer"></i></div>
                        <div class="card-content">
                            <h4>Stack Tecnológico</h4>
                            <p>
                                Tengo experiencia con <strong>WordPress</strong>, desarrollando soluciones de <strong>e-commerce</strong> 
                                y proyectos que se adaptan continuamente a las necesidades del negocio.
                            </p>
                        </div>
                    </div>
                    <div class="about-card">
                        <div class="card-icon"><i class="fa-solid fa-bullseye"></i></div>
                        <div class="card-content">
                            <h4>Filosofía de Trabajo</h4>
                            <p>
                                Me motiva crear <strong>código limpio, eficiente y mantenible</strong>, siempre 
                                buscando las mejores prácticas y manteniéndome actualizado con las últimas 
                                tecnologías del desarrollo web.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="about-highlights">
                    <div class="highlight-box">
                        <div class="highlight-header">
                            <span class="highlight-icon"><i class="fa-solid fa-bolt-lightning"></i></span>
                            <h4>Enfoque Actual</h4>
                        </div>
                        <ul class="highlight-list">
                            <li>Desarrollo Web Full Stack</li>
                            <li>Seguridad Informática</li>
                            <li>WordPress & E-commerce</li>
                            <li>Aprendizaje Continuo</li>
                        </ul>
                    </div>
                    <div class="highlight-box">
                        <div class="highlight-header">
                            <span class="highlight-icon"><i class="fa-solid fa-lightbulb"></i></span>
                            <h4>Competencias Clave</h4>
                        </div>
                        <ul class="highlight-list">
                            <li>Adaptabilidad a cambios</li>
                            <li>Solución de problemas</li>
                            <li>Trabajo en equipo</li>
                            <li>Código mantenible</li>
                        </ul>
                    </div>
                    <div class="quote-box">
                        <div class="quote-icon">"</div>
                        <p class="quote-text">
                            Enfocado en el aprendizaje continuo y la mejora constante de mis habilidades
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `,

    skills: `
        <div class="section">
            <h2 class="section-title"><i class="fa-solid fa-lightbulb"></i> Habilidades Técnicas</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-html5"></i></div>
                    <h3 class="skill-name">HTML</h3>
                    <p class="skill-level">Avanzado</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-css3-alt"></i></div>
                    <h3 class="skill-name">CSS</h3>
                    <p class="skill-level">Avanzado</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-square-js"></i></div>
                    <h3 class="skill-name">JavaScript</h3>
                    <p class="skill-level">Intermedio</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-php"></i></div>
                    <h3 class="skill-name">PHP</h3>
                    <p class="skill-level">Intermedio</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-bootstrap"></i></div>
                    <h3 class="skill-name">Bootstrap</h3>
                    <p class="skill-level">Avanzado</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-wordpress"></i></div>
                    <h3 class="skill-name">WordPress</h3>
                    <p class="skill-level">Avanzado</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-solid fa-database"></i></div>
                    <h3 class="skill-name">MySQL</h3>
                    <p class="skill-level">Intermedio</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-linux"></i></div>
                    <h3 class="skill-name">Linux</h3>
                    <p class="skill-level">Intermedio</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-git-alt"></i></div>
                    <h3 class="skill-name">Git</h3>
                    <p class="skill-level">Intermedio</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-github"></i></div>
                    <h3 class="skill-name">GitHub</h3>
                    <p class="skill-level">Intermedio</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-vuejs"></i></div>
                    <h3 class="skill-name">Vue.js</h3>
                    <p class="skill-level">Basico</p>
                </div>
                <div class="skill-card">
                    <div class="skill-icon"><i class="fa-brands fa-laravel"></i></div>
                    <h3 class="skill-name">Laravel</h3>
                    <p class="skill-level">Basico</p>
                </div>
            </div>
        </div>
    `,

    experience: `
        <div class="section">
            <h2 class="section-title"><i class="fa-solid fa-keyboard"></i> Experiencia Profesional</h2>
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-date">Feb. 2023 - Jun. 2023</div>
                    <h3 class="timeline-title">Ingeniero de Sistemas</h3>
                    <p class="timeline-company">MUNICIPIO DE YONDO - Jornada parcial</p>
                    <p class="timeline-description">
                        Yondó, Antioquia, Colombia<br>
                        Despliegue de infraestructura tecnológica, Auditoria de sistemas y mantenimiento de computadores.
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">Abr. 2024 - Oct. 2024</div>
                    <h3 class="timeline-title">Desarrollador Web Junior </h3>
                    <p class="timeline-company">Fundeprocar - Jornada Completa</p>
                    <p class="timeline-description">
                        Desarrollo frontend y backend de aplicaciones web. Colaboración en proyectos 
                        con requerimientos cambiantes, implementando soluciones adaptables y escalables. 
                        Los proyectos desarrollados continúan activos en producción.
                    </p>
                </div>
                <div class="timeline-item">
                    <div class="timeline-date">Nov. 2024 - Mar. 2025 </div>
                    <h3 class="timeline-title">Desarrollador Web Junior</h3>
                    <p class="timeline-company">Operación sistémica - Jornada Completa</p>
                    <p class="timeline-description">
                        Desarrollo y mantenimiento de aplicaciones web usando PHP, HTML, CSS y JavaScript. 
                        Trabajo en proyectos de e-commerce con WordPress, implementando funcionalidades 
                        personalizadas y optimizando el rendimiento del sitio.
                    </p>
                </div>
            </div>
        </div>
    `,

    projects: `
        <div class="section">
            <h2 class="section-title"><i class="fa-solid fa-briefcase"></i> Proyectos Destacados</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <span class="status-badge status-completed">Completado</span>
                    <h3 class="project-title">Cloud</h3>
                    <p class="project-description">
                        Sistema de almacenamiento en la nube que permite a los usuarios gestionar 
                        y compartir archivos de manera segura.
                    </p>
                    <div class="project-tech">
                        <span class="tech-tag">PHP</span>
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/MatFon73/Cloud" target="_blank" class="project-link"><i class="fa-brands fa-github"></i>GitHub</a>
                    </div>
                </div>
                
                <div class="project-card">
                    <span class="status-badge status-completed">Completado</span>
                    <h3 class="project-title">CrudUser</h3>
                    <p class="project-description">
                        Sistema integral de gestión registros en mysql, incluyendo 
                        la creacion, lectura, edicion y la eliminacion de los registros.
                    </p>
                    <div class="project-tech">
                        <span class="tech-tag">PHP</span>
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/MatFon73/CrudUser" target="_blank" class="project-link"><i class="fa-brands fa-github"></i>GitHub</a>
                    </div>
                </div>
                
                <div class="project-card">
                    <span class="status-badge status-completed">Completado</span>
                    <h3 class="project-title">RockPaperScissor</h3>
                    <p class="project-description">
                        Juego clásico de piedra, papel o tijera implementado con JavaScript vanilla, 
                        con interfaz interactiva y sistema de puntuación.
                    </p>
                    <div class="project-tech">
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                    <div class="project-links">
                        <a href="https://github.com/MatFon73/RockPaperScissor" target="_blank" class="project-link"><i class="fa-brands fa-github"></i>GitHub</a>
                    </div>
                </div>
                
                <div class="project-card">
                    <span class="status-badge status-completed">En Línea</span>
                    <h3 class="project-title">Portafolio Personal</h3>
                    <p class="project-description">
                        Sitio web personal que muestra mis proyectos y habilidades como desarrollador web.
                    </p>
                    <div class="project-tech">
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                    <div class="project-links">
                        <a href="https://matfon73.github.io/" target="_blank" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i>Ver Sitio</a>
                        <a href="https://github.com/MatFon73/Portafolios" target="_blank" class="project-link"><i class="fa-brands fa-github"></i> GitHub</a>
                    </div>
                </div>
                
                <div class="project-card">
                    <span class="status-badge status-completed">En Proceso</span>
                    <h3 class="project-title">BalatroEditor</h3>
                    <p class="project-description">
                        Editor personalizado para el juego Balatro, permitiendo modificar y personalizar 
                        elementos del juego.
                    </p>
                    <div class="project-tech">
                        <span class="tech-tag">HTML</span>
                        <span class="tech-tag">CSS</span>
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">PHP</span>
                    </div>
                    <div class="project-links">
                        <a href="https://matfon73.github.io/BalatroEditor/" target="_blank" class="project-link"><i class="fa-solid fa-arrow-up-right-from-square"></i>Ver Sitio</a>
                        <a href="https://github.com/MatFon73/BalatroEditor" target="_blank" class="project-link"><i class="fa-brands fa-github"></i> GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    `,

    contact: `
        <div class="section">
            <h2 class="section-title"><i class="fa-solid fa-address-book"></i> Contacto</h2>
            <p class="text-content">
                ¿Interesado en trabajar juntos o tienes alguna pregunta? 
                No dudes en contactarme a través de cualquiera de estos canales.
            </p>
            <div class="contact-info">
                <div class="contact-item">
                    <span class="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </span>
                    <a href="https://github.com/MatFon73" target="_blank" class="contact-link">
                        @MatFon73
                    </a>
                </div>
                
                <div class="contact-item">
                    <span class="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </span>
                    <a href="https://www.linkedin.com/in/mateo-fonseca-ab939a164/" target="_blank" class="contact-link">
                        mateo-fonseca-ab939a164
                    </a>
                </div>
                
                <div class="contact-item">
                    <span class="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </span>
                    <a href="https://www.instagram.com/matfon73/" target="_blank" class="contact-link">
                        @matfon73
                    </a>
                </div>
                
                <div class="contact-item">
                    <span class="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </span>
                    <a href="https://x.com/MatFon73" target="_blank" class="contact-link">
                        @MatFon73
                    </a>
                </div>
            </div>
        </div>
    `
};

// Navigation handling
function loadSection(sectionName) {
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = content[sectionName];

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

    // Re-attach event listeners to CTA buttons if they exist
    attachCtaListeners();
}

// Attach event listeners to CTA buttons
function attachCtaListeners() {
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.currentTarget.getAttribute('data-section');
            if (section) {
                loadSection(section);
            }
        });
    });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    loadSection('home');

    // Navegación
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('data-section');
            loadSection(section);
        });
    });

    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const icon = mobileMenuToggle.querySelector('i');
    const text = mobileMenuToggle.querySelector('span'); // por si tienes texto al lado del ícono

    // --- Clic en el botón del menú ---
    mobileMenuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');

        if (sidebar.classList.contains('active')) {
            icon.classList.replace('fa-burger', 'fa-xmark');
            if (text) text.textContent = 'Cerrar';
        } else {
            icon.classList.replace('fa-xmark', 'fa-burger');
            if (text) text.textContent = 'Menú';
        }
    });

    // --- Clic fuera del menú ---
    document.addEventListener('click', (e) => {
        if (
            window.innerWidth <= 768 &&
            sidebar.classList.contains('active') &&
            !sidebar.contains(e.target) &&
            !mobileMenuToggle.contains(e.target)
        ) {
            sidebar.classList.remove('active');
            icon.classList.replace('fa-xmark', 'fa-burger');
            if (text) text.textContent = 'Menú';
        }
    });
});
