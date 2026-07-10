# Calculadora de Arbitraje Cambiario & Conversor PRO

¡Bienvenido a **Calculadora PRO**! Este es mi primer proyecto de desarrollo de software independiente, conceptualizado y construido utilizando metodologías modernas de **Vibecoding** en colaboración con Inteligencia Artificial. 

Es una aplicación web progresiva (**PWA**) diseñada específicamente para resolver las necesidades del día a día en el entorno financiero y de arbitraje de divisas, ofreciendo cálculos rápidos, precisos y con tasas actualizadas en tiempo real.

---

## 🚀 ¿De qué va el proyecto?

En mercados dinámicos como el venezolano, calcular márgenes de ganancia exactos, comisiones bancarias y variaciones de tasas de cambio puede volverse una tarea compleja y propensa a errores manuales. 

**Calculadora PRO** centraliza estas operaciones en una interfaz limpia, responsiva e intuitiva. Permite a los usuarios:
1. **Calcular Arbitraje Cambiario:** Evaluar de forma rápida los márgenes netos de ganancia al comprar y vender activos en diferentes plataformas, restando comisiones operativas automáticas.
2. **Conversor del Día a Día:** Un convertidor multipropósito optimizado para agilizar transacciones rápidas entre monedas locales y extranjeras, ideal para comercios o finanzas personales.
3. **Disponibilidad Offline:** Gracias a su arquitectura como PWA, se puede instalar en dispositivos móviles y de escritorio, permitiendo consultas rápidas incluso sin conexión a internet estable.

---

## 🔥 Puntos Fuertes y Características Principales

* **⚡ Enfoque en la Experiencia de Usuario (UX/UI):** Diseñada usando **Tailwind CSS**, cuenta con un modo oscuro nativo, controles táctiles optimizados para móviles, alertas dinámicas (toasts) y prevención de errores de entrada de datos.
* **🔋 Arquitectura PWA (Progressive Web App):** * Soporte completo para instalación en pantallas de inicio mediante un archivo `manifest.json`.
    * Estrategia *Network-First* implementada mediante un **Service Worker (`sw.js`)** dedicado, garantizando que siempre se consuma la última actualización en línea pero manteniendo el acceso offline como respaldo.
* **📸 Captura de Pantalla Integrada:** Integración con `html2canvas` para exportar de manera limpia los resultados de tus cálculos o capturas de pantallas de los márgenes directamente como imagen para compartir en grupos de trabajo.
* **🛠️ Construido con Vibecoding:** Este desarrollo representa el poder del *Vibecoding*, donde la visión estratégica del flujo del negocio se une a la velocidad de iteración de la IA para construir un software listo para producción en tiempo récord, libre de dependencias pesadas innecesarias.

---

## 🔌 Integración de Datos (APIs Utilizadas)

Para ofrecer un servicio confiable y automatizado sin necesidad de bases de datos externas, la aplicación se conecta directamente de forma asíncrona a fuentes de datos financieras confiables y locales en Venezuela a través de la excelente suite de **DolarAPI**:

* **Tasas Oficiales (Banco Central de Venezuela):**
    * Dólar Oficial: `https://ve.dolarapi.com/v1/dolares/oficial`
    * Euro Oficial: `https://ve.dolarapi.com/v1/euros/oficial`
* **Tasas del Mercado Paralelo:**
    * Dólar Paralelo: `https://ve.dolarapi.com/v1/dolares/paralelo`
    * Euro Paralelo: `https://ve.dolarapi.com/v1/euros/paralelo`
* **Módulo de Históricos:** * La app está preparada para consultar registros históricos con el fin de evaluar tendencias mediante la ruta dinámica: `https://ve.dolarapi.com/v1/historicos/dolares/oficial/...`

---

## 🛠️ Tecnologías Utilizadas

* **HTML5** & **JavaScript (ES6+)** - Lógica pura y manipulación del DOM sin frameworks pesados.
* **Tailwind CSS** - Estilizado moderno, responsivo y dinámico mediante CDN.
* **Service Workers** - Cacheo de activos y soporte PWA independiente.
* **html2canvas** - Generación y exportación de imágenes en el cliente.

---

## 📥 Instalación y Uso Local

Al ser un desarrollo completamente estático de lado del cliente, no necesitas instalar entornos de ejecución complejos como Node.js:

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/TU_USUARIO/TU_REPOSITORIO.git](https://github.com/TU_USUARIO/TU_REPOSITORIO.git)
