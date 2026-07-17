# Arby - Calculadora de Arbitraje Cambiario & Conversor

¡Bienvenido a **Arby** (anteriormente conocida como Calculadora PRO)! Este es mi primer proyecto de desarrollo de software independiente, conceptualizado y construido utilizando metodologías modernas de **Vibecoding** en colaboración con Inteligencia Artificial. 

Es una aplicación web progresiva (**PWA**) diseñada específicamente para resolver las necesidades del día a día en el entorno financiero y de arbitraje de divisas en Venezuela, ofreciendo cálculos rápidos, precisos y con tasas actualizadas en tiempo real.

---

## 🚀 ¿De qué va el proyecto?

En mercados dinámicos como el venezolano, calcular márgenes de ganancia exactos, comisiones bancarias y variaciones de tasas de cambio puede volverse una tarea compleja y propensa a errores manuales. 

**Arby** centraliza estas operaciones en una interfaz limpia, responsiva e intuitiva. Permite a los usuarios:
1. **Calcular Arbitraje Cambiario:** Evaluar de forma rápida los márgenes netos de ganancia al comprar y vender activos en diferentes plataformas (incluyendo flujos tradicionales Bs ⇄ Bs y flujos cripto USDT ⇄ USDT), calculando comisiones operativas y de red automáticamente.
2. **Calculadora Inversa:** Estimar con exactitud el capital inicial necesario para lograr una meta de ganancias específica en dólares (USD).
3. **Conversor del Día a Día:** Un convertidor multipropósito optimizado para agilizar transacciones rápidas entre monedas locales y extranjeras (Dólar, Euro, USDT y Tasa Propia), ideal para comercios o finanzas personales.
4. **Onboarding Tutorial Integrado:** Un tour interactivo guiado paso a paso con spotlights para facilitar el aprendizaje de usuarios nuevos sobre cómo simular sus operaciones de arbitraje.
5. **Disponibilidad Offline:** Gracias a su arquitectura como PWA, se puede instalar en dispositivos móviles y de escritorio, permitiendo consultas rápidas e inmediatas incluso sin conexión a internet estable.

---

## 🔥 Puntos Fuertes y Características Principales

* **⚡ Enfoque en la Experiencia de Usuario (UX/UI):** Diseñada usando **Tailwind CSS**, cuenta con una estética oscura premium, controles táctiles optimizados para móviles, alertas dinámicas (toasts) y prevención de errores de entrada de datos.
* **🔋 Arquitectura PWA (Progressive Web App):** 
  * Soporte completo para instalación en pantallas de inicio mediante un archivo `manifest.json` configurado para un acceso directo y limpio bajo la marca **Arby**.
  * Estrategia *Network-First* para tasas y navegación implementada mediante un **Service Worker (`sw.js`)** dedicado, garantizando que siempre se consuma la última actualización en línea pero manteniendo el acceso offline como respaldo con caché local.
* **🔒 Modo Incógnito / Privacidad:** Integra la funcionalidad de desenfoque (`privacy-blur`) en los campos de montos numéricos para ocultar información financiera sensible del cursor en entornos públicos.
* **📸 Captura de Pantalla Integrada:** Integración con `html2canvas` para exportar de manera limpia los resultados de tus cálculos o capturas de pantallas de los márgenes directamente como imagen para compartir en grupos de trabajo.
* **🛠️ Construido con Vibecoding:** Este desarrollo representa el poder del *Vibecoding*, donde la visión estratégica del flujo del negocio se une a la velocidad de iteración de la IA para construir un software listo para producción en tiempo récord, libre de dependencias pesadas innecesarias.

---

## 🔌 Integración de Datos (APIs Utilizadas)

Para ofrecer un servicio confiable y automatizado sin necesidad de bases de datos externas de backend, la aplicación se conecta directamente de forma asíncrona client-side a fuentes de datos financieras confiables:

* **Tasas Oficiales y Paralelas (DolarAPI):**
  * Dólar Oficial (BCV): `https://ve.dolarapi.com/v1/dolares/oficial`
  * Euro Oficial (BCV): `https://ve.dolarapi.com/v1/euros/oficial`
  * Dólar Paralelo: `https://ve.dolarapi.com/v1/dolares/paralelo`
* **Tasa de Criptomonedas P2P (USDT / VES):**
  * Consulta en vivo del promedio del mercado P2P de Binance a través del servicio libre de CORS de **CriptoYa** (`https://criptoya.com/api/binancep2p/usdt/ves/5`) con fallback automatizado a la API de **Yadio** en caso de timeout.
* **Módulo de Históricos:** 
  * Gráficos SVG interactivos en el conversor que consumen series de tiempo a través de endpoints de históricos de DolarAPI para graficar tendencias en lapsos de 10 días, 1 mes, 3 meses, 6 meses y 1 año.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5** & **JavaScript (ES6+)** - Lógica pura y manipulación del DOM nativa sin frameworks pesados.
* **Tailwind CSS** - Estilizado moderno, responsivo y dinámico mediante CDN.
* **Service Workers** - Cacheo de activos y soporte PWA independiente.
* **html2canvas** - Generación y exportación de capturas de pantalla de resultados desde el cliente.

---

## 📥 Instalación y Uso Local

Al ser un desarrollo completamente estático del lado del cliente, puedes iniciar un servidor de desarrollo de forma muy simple mediante Node.js:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/TU_USUARIO/arby.git
   ```
2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```
3. Ejecuta el servidor local:
   ```bash
   node server.js
   ```
4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
