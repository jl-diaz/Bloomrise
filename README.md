# 🌸 Bloomrise

**Bloomrise** es un sitio web informativo y de apoyo emocional dedicado a la **depresión postparto**, diseñado para ofrecer información clara, herramientas de autoevaluación y recursos de bienestar a madres en el período posparto. El proyecto combina un diseño editorial premium con tecnologías modernas de animación para una experiencia cálida y accesible.

---

## 🎨 Diseño y Estética

El proyecto sigue una identidad visual cuidadosamente definida:

| Elemento | Valor |
|---|---|
| **Paleta principal** | Rosa claro `#F5DDE8`, Rosa empolvado `#E6B8CB`, Rosa medio `#D98EAF`, Rosa malva `#B65F88`, Magenta `#8A3F66`, Vino `#5B2742` |
| **Tipografías** | `Playfair Display` (títulos y logotipo), `Poppins` (cuerpo y UI) |
| **Estilo visual** | Editorial suave, glassmorphism, degradados sutiles, ilustraciones vectoriales minimalistas en rosa/malva |
| **Animaciones** | Entrada con fade-up/fade-in usando GSAP + ScrollTrigger. Scroll suave con Lenis |

---

## 📁 Estructura de Carpetas

```
Bloomrise/
├── index.html          # Página de inicio / Landing principal
├── informativa.html    # Información sobre la depresión postparto + formulario de contacto
├── meditacion.html     # Recursos de meditación guiada + carrusel de videos YouTube
├── test.html           # Test de Edimburgo (EPDS) interactivo + Mood tracker
├── README.md           # Este archivo
│
├── css/
│   └── style.css       # Hoja de estilos principal (paleta, componentes, responsive)
│
├── js/
│   └── (vacío — todo el JS está en los <script> de cada página)
│
├── media/
│   ├── logo.png            # Logotipo del proyecto
│   ├── indexBack.png       # Imagen de fondo del hero del index
│   ├── indexInfo.png       # Ícono de tarjeta de Información
│   ├── indexMeditacion.png # Ícono de tarjeta de Meditación
│   ├── indexBlog.png       # Ícono de tarjeta de Blog
│   ├── indexTest.png       # Ícono de tarjeta del Test
│   ├── indexStars.png      # Ícono decorativo de la sección de recursos
│   ├── informativaHero.png # Ilustración de madre con bebé (generada con IA)
│   ├── sadWoman.png        # Ilustración de mujer pensativa (generada con IA)
│   ├── meditacionLotus.png # Ilustración de flor de loto (generada con IA)
│   ├── meditacionWoman.png # Ilustración de mujer meditando (generada con IA)
│   └── testClipboard.png   # Ilustración de portapapeles con checklist (generada con IA)
```

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión CDN | Propósito |
|---|---|---|
| **HTML5** | — | Estructura semántica |
| **CSS3 (Vanilla)** | — | Estilos y diseño responsivo |
| **JavaScript (ES6+)** | — | Interactividad y lógica del test |
| **GSAP** | `3.12.5` | Animaciones de entrada y efectos ScrollTrigger |
| **ScrollTrigger** | `3.12.5` | Animaciones disparadas por scroll |
| **Lenis** | `1.0.42` | Scroll suave y easing personalizado |
| **EmailJS** | `@3` (browser) | Envío de formulario de contacto sin backend |
| **Google Fonts** | — | Playfair Display + Inter |
| **YouTube API (thumbnails)** | — | Miniaturas automáticas de videos en el carrusel |

### CDNs usados (copiar en `<head>` de cada página)

```html
<!-- GSAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

<!-- Lenis Smooth Scroll -->
<script src="https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js"></script>

<!-- EmailJS (solo en informativa.html) -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

---

## 📄 Descripción de Páginas

### `index.html` — Inicio / Landing Principal
Página de bienvenida al proyecto. Incluye:
- **Hero** con imagen de fondo, título "Bloomrise" y CTA hacia la página informativa.
- **Sección de Recursos**: cuatro tarjetas de acceso directo a Información, Meditación, Blog y Test de Edimburgo.
- **Sección del Test de Edimburgo**: bloque destacado con descripción del EPDS y acceso directo.
- **Blog / Videos de Meditación**: tarjetas de vista previa de contenido.
- **Footer** con navegación completa y nota legal.

### `informativa.html` — Información Postparto
Página educativa sobre la depresión postparto. Contiene:
- Explicación de qué es la depresión postparto.
- Cuadrícula de factores causantes (hormonales, emocionales, sociales, físicos).
- Lista de síntomas comunes ilustrada.
- Frase motivacional destacada.
- **Formulario de Contacto** integrado con EmailJS.

### `meditacion.html` — Meditación y Bienestar
Página de recursos de meditación guiada. Contiene:
- Beneficios de la meditación en el postparto.
- Tres focos de práctica (yoga/respiración, meditación con bebé, relación materno-infantil).
- **Carrusel de Videos de YouTube**: dinámico, con drag táctil y de ratón, y puntos indicadores. Las tarjetas enlazan directamente a YouTube. Se pueden agregar más tarjetas fácilmente en el HTML.

### `test.html` — Test de Edimburgo (EPDS)
Página de autoevaluación. Contiene:
- Landing informativa: qué es el EPDS, cómo se interpreta (0–9, 10–12, 13+), estadísticas.
- **Test Wizard Interactivo**: modal con 10 preguntas una a la vez, barra de progreso, validación, animaciones GSAP.
- **Resultado animado**: puntuación con interpretación y recomendación personalizada.
- **Mood Tracker**: selector de estado de ánimo del día con 10 emojis y mensajes de respuesta.

---

## 🚀 Instrucciones para Ejecutar Localmente

Este proyecto es 100% HTML/CSS/JS estático, sin servidor ni compilador necesario.

### Opción 1: Abrir directamente
Haz doble clic en `index.html` en el explorador de archivos.

> ⚠️ **Nota**: Algunos navegadores restringen peticiones de red (como las de EmailJS) cuando se abre un archivo directamente con `file://`. Para que el formulario funcione correctamente, usa la Opción 2.

### Opción 2: Servidor local recomendado (VS Code)
1. Instala la extensión **Live Server** en Visual Studio Code.
2. Abre la carpeta `Bloomrise/` en VS Code.
3. Haz clic derecho sobre `index.html` → **"Open with Live Server"**.
4. El sitio estará disponible en `http://127.0.0.1:5500/`.

### Opción 3: Con Python
```bash
# Desde la raíz del proyecto
python -m http.server 5500
# Abre: http://localhost:5500
```

---

## 📧 Configurar EmailJS (Formulario de Contacto)

El formulario de contacto de `informativa.html` usa **EmailJS** para enviar correos directamente al destinatario `jonathamlarreynaga@gmail.com` sin necesidad de servidor. Sigue estos pasos para configurarlo:

### Paso 1: Crear una cuenta en EmailJS
1. Ve a [https://www.emailjs.com](https://www.emailjs.com) y crea una cuenta gratuita.
2. Inicia sesión en el [Dashboard de EmailJS](https://dashboard.emailjs.com/).

### Paso 2: Conectar tu servicio de correo (Gmail)
1. En el panel lateral, ve a **"Email Services"** → **"Add New Service"**.
2. Selecciona **Gmail**.
3. Haz clic en **"Connect Account"** y autoriza el acceso a tu cuenta de Gmail (`jonathamlarreynaga@gmail.com`).
4. En el campo **"Service ID"**, escribe exactamente: `service_bloomrise`
5. Haz clic en **"Create Service"**.

### Paso 3: Crear una plantilla de correo
1. En el panel lateral, ve a **"Email Templates"** → **"Create New Template"**.
2. En el campo **"Template ID"**, escribe exactamente: `template_bloomrise`
3. Configura el cuerpo del correo con este contenido de ejemplo:

```
Asunto: Nuevo mensaje desde Bloomrise - {{from_name}}

Hola,

Has recibido un nuevo mensaje desde el formulario de contacto de Bloomrise:

Nombre: {{from_name}}
Correo: {{reply_to}}

Mensaje:
{{message}}

---
Enviado desde Bloomrise
```

4. En el campo **"To Email"** (destinatario), escribe: `jonathamlarreynaga@gmail.com`
5. Asegúrate de que los nombres de las variables coincidan exactamente:
   - `{{from_name}}` → nombre del usuario
   - `{{reply_to}}` → correo del usuario
   - `{{message}}` → mensaje del usuario
6. Haz clic en **"Save"**.

### Paso 4: Obtener tu Clave Pública (Public Key)
1. En el panel lateral, ve a **"Account"** → **"General"**.
2. Copia tu **"Public Key"** (una cadena de caracteres alfanumérica).

### Paso 5: Actualizar el código en `informativa.html`
1. Abre el archivo `informativa.html` en tu editor de código.
2. Busca la línea:
   ```javascript
   emailjs.init("user_placeholder_public_key");
   ```
3. Reemplaza `"user_placeholder_public_key"` con tu clave pública real:
   ```javascript
   emailjs.init("TU_CLAVE_PUBLICA_AQUI");
   ```
4. Guarda el archivo.

### Resumen de IDs a configurar

| Campo en el código | Valor esperado |
|---|---|
| `emailjs.init("...")` | Tu Public Key de EmailJS |
| `"service_bloomrise"` | ID del servicio que creaste en el Paso 2 |
| `"template_bloomrise"` | ID de la plantilla que creaste en el Paso 3 |

### Plan gratuito de EmailJS
El plan gratuito incluye **200 envíos por mes**, más que suficiente para un proyecto educativo como Bloomrise.

---

## 👩‍💻 Créditos y Autoría

| Rol | Nombre |
|---|---|
| **Diseño y Desarrollo** | Grupo Bloomrise |
| **Test EPDS** | J.L. Cox, J.M. Holden, R. Sagovsky (1987) |
| **Fuente EPDS** | *British Journal of Psychiatry*, Vol. 150 |
| **Año del proyecto** | 2026 |

---

## ⚕️ Aviso Legal

> Este sitio web tiene **fines exclusivamente informativos y educativos**. No reemplaza la evaluación, el diagnóstico ni el tratamiento por parte de un profesional de la salud. Si experimentas síntomas de depresión postparto, consulta siempre a tu médico, obstetra o psicólogo.
