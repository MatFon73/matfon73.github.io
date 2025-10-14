# Portafolio Web - Mateo Fonseca

Portafolio personal moderno y responsivo construido con HTML, CSS y JavaScript vanilla. Diseñado con una estética de desarrollador, inspirado en diseños modernos de la web.

## 🚀 Características

- **Sin Scroll**: Navegación SPA (Single Page Application) que actualiza el contenido sin recargar la página
- **Diseño Moderno**: Interfaz limpia con tema oscuro
- **Totalmente Responsivo**: Se adapta perfectamente a dispositivos móviles, tablets y escritorio
- **Animaciones Suaves**: Transiciones fluidas entre secciones
- **Sin Dependencias**: Construido con JavaScript vanilla, sin frameworks

## 📁 Estructura del Proyecto

```
portfolio/
├── README.md          
├── LICENSE          
├── index.html          
├── app.js              
├── css/
│   └── style.css       
└── img/
    └── profile.jpg 
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS y flexbox/grid
- **JavaScript ES6+**: Manipulación del DOM y gestión de contenido

## 🎨 Personalización

### Colores
Los colores se pueden modificar fácilmente en `css/style.css` usando las variables CSS:

```css
:root {
    --primary-bg: #0d1117;
    --secondary-bg: #13161c;
    --accent-color: #58a6ff;
    --text-primary: #c9d1d9;
    --text-secondary: #8b949e;
    --border-color: #21262d;
    --hover-bg: #1c2128;
    --card-bg: #161b22;
}
```

### Contenido
Todo el contenido se gestiona desde `app.js` en el objeto `content`:

```javascript
const content = {
    home: `...`,
    about: `...`,
    skills: `...`,
    // etc.
}
```

## 📱 Secciones

- **Inicio**: Presentación y resumen profesional
- **Sobre Mí**: Información detallada sobre experiencia y enfoque
- **Habilidades**: Grid de tecnologías y competencias
- **Experiencia**: Timeline de experiencia laboral
- **Proyectos**: Portafolio de proyectos destacados
- **Contacto**: Enlaces a redes sociales y formas de contacto

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo como base para tu propio portafolio.

## 👤 Autor

**Mateo Fonseca**
- GitHub: [@MatFon73](https://github.com/MatFon73)
- Instagram: [@matfon73](https://www.instagram.com/matfon73/)
- Twitter: [@MatFon73](https://x.com/MatFon73)

---