# Blueprint: Simulador de Ahorro

## Visión General

Crear una aplicación de React que funcione como un simulador de ahorro. La aplicación permitirá a los usuarios ingresar su sueldo mensual y el porcentaje que desean ahorrar. Calculará automáticamente el monto del ahorro mensual y el dinero disponible. Adicionalmente, mostrará una pantalla con una proyección gráfica del ahorro acumulado en el tiempo, con la opción de visualizar la proyección en meses o años.

## Plan de Implementación

### Paso 1: Configuración del Proyecto y Estructura de Archivos

- **Objetivo:** Preparar la estructura de archivos necesaria para los componentes.
- **Acciones:**
    - Crear un directorio `src/components`.
    - Crear `src/components/SavingsSimulator.jsx` y `src/components/SavingsSimulator.css`.

### Paso 2: Desarrollo del Componente `SavingsSimulator`

- **Objetivo:** Construir la interfaz de usuario del simulador inicial.
- **Acciones:**
    - **Estructura JSX:** Añadir encabezado, cuadro de consejo, inputs para sueldo y porcentaje, sección de resultados y un botón de proyección.
    - **Gestión del Estado:** Usar `useState` para los datos del usuario y `useEffect` para los cálculos.
    - **Iconos:** Instalar y usar `react-icons`.

### Paso 3: Estilización del Simulador

- **Objetivo:** Aplicar estilos CSS para que el simulador coincida con el diseño.
- **Acciones:**
    - Editar `src/components/SavingsSimulator.css` y `src/index.css` para estilizar el componente y la base de la aplicación.

### Paso 4: Implementación de la Pantalla de Proyección

- **Objetivo:** Crear una nueva pantalla que muestre una proyección gráfica del ahorro.
- **Acciones:**
    - **Instalación de Dependencias:**
        - Añadir `react-router-dom` para la navegación.
        - Añadir `chart.js` y `react-chartjs-2` para el gráfico.
    - **Creación de Nuevos Componentes:**
        - Crear `src/components/ProjectionScreen.jsx` y `src/components/ProjectionScreen.css`.
    - **Configuración de Rutas:**
        - Modificar `App.jsx` para usar `BrowserRouter` y definir las rutas para el simulador (`/`) y la proyección (`/projection`).
    - **Desarrollo del Componente `ProjectionScreen`:**
        - Usar `useLocation` para recibir el `ahorroMensual`.
        - Implementar un gráfico de barras con `react-chartjs-2`.
        - Añadir botones "Meses" y "Año" para cambiar la escala de tiempo de la proyección.
            - **Meses:** Proyección a 3, 6, 9 y 12 meses.
            - **Años:** Proyección a 1, 2, 3 y 5 años.
        - Construir la interfaz de usuario, incluyendo cabecera, resumen de resultados y botones de acción.
    - **Estilización:**
        - Añadir los estilos correspondientes en `src/components/ProjectionScreen.css`.

### Paso 5: Navegación entre Pantallas

- **Objetivo:** Conectar el simulador con la pantalla de proyección.
- **Acciones:**
    - Modificar `SavingsSimulator.jsx` para usar el hook `useNavigate`.
    - Al hacer clic en "Ver proyección", navegar a la ruta `/projection`, pasando el `ahorroMensual` a través del estado de la ruta.
