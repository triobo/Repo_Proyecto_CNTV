# Ficha Técnica: Base de Datos Histórica de Denuncias Ciudadanas al CNTV (2021-2023)

**Fuente de los datos**  
- Información basada en los "Estudios de Denuncias Ciudadanas" publicados anualmente por el Consejo Nacional de Televisión de Chile (CNTV).
- Estos informes están disponibles públicamente en la web oficial del CNTV (https://www.cntv.cl), sección de Estadísticas y Estudios.

**Metodología de construcción de la base**
- Se realizó una recopilación manual y curaduría de temas recurrentes denunciados en los informes anuales.
- Se agruparon datos por año, grupo etario del denunciante, tema de denuncia, canal involucrado, programa específico y resultado de tramitación.
- Se estructuró la base en formato tabular usando Pandas (Python) y se exportó a formato CSV.

**Alcance de los datos**
- Período comprendido: 2021 - 2023
- Cobertura temática: denuncias ciudadanas ante el CNTV relacionadas con televisión abierta y por cable en Chile.
- Se incluyen solo denuncias que tuvieron un mínimo impacto (al menos 30 denuncias por caso).

**Características de los datos**
- Mixto: datos cuantitativos (cantidad de denuncias) y cualitativos (tema, programa, canal, tipo de contenido).
- Datos ficticios pero inspirados en ejemplos reales descritos por el CNTV.

**Variables incorporadas**

| Variable               | Descripción |
|------------------------|-------------|
| año                   | Año en que se realizó la denuncia. |
| edad_denunciante      | Grupo etario de los denunciantes. |
| tema_denuncia         | Tipo de contenido denunciado. |
| programa              | Programa denunciado. |
| canal                 | Canal que emitió el contenido. |
| cantidad_denuncias    | Número total de denuncias para ese caso. |
| estado_denuncia       | Estado del proceso en el CNTV (Tramitada/Archivada). |
| sanción_CNTV          | Si el CNTV aplicó una sanción (Sí/No). |
| tipo_contenido        | Género del programa (noticiero, matinal, reality, etc.). |

**Otras observaciones**
- Esta base de datos puede ser utilizada para cruzar patrones de denuncias según edad, canal y tipo de contenido.
- Puede complementarse con la base oficial de denuncias mensuales y sanciones del CNTV.
