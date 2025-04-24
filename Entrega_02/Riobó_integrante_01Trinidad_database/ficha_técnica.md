# Ficha Técnica: Base de Datos Histórica de Denuncias Ciudadanas al CNTV (2021-2023)

## Fuente de los datos  
- Información basada en los **"Estudios de Denuncias Ciudadanas"** publicados anualmente por el Consejo Nacional de Televisión de Chile (CNTV).  
- Estos informes están disponibles públicamente en el sitio web oficial del CNTV:  
  https://www.cntv.cl (sección Estadísticas y Estudios)

## Metodología de construcción de la base  
- Se realizó una recopilación manual y curaduría de temas recurrentes denunciados en los informes anuales.  
- Los datos fueron agrupados por año, grupo etario del denunciante, tema de denuncia, canal involucrado, programa específico y resultado del proceso.  
- La estructura fue organizada en formato tabular usando **Pandas (Python)** y exportada a formato **CSV**.

## Alcance de los datos  
- **Período comprendido**: 2021 - 2023  
- **Cobertura temática**: denuncias ciudadanas presentadas ante el CNTV relacionadas con televisión abierta y por cable en Chile.  
- Se consideraron solo casos con un mínimo de 30 denuncias para asegurar relevancia.

## Características de los datos  
- **Tipo**: mixto (cuantitativo y cualitativo).  
- **Origen**: datos ficticios basados en ejemplos reales descritos en los informes anuales del CNTV.  
- **Formato final**: CSV estructurado para análisis y visualización.

## Variables incorporadas

| Variable              | Descripción |
|-----------------------|-------------|
| `año`                 | Año en que se realizó la denuncia. |
| `edad_denunciante`    | Grupo etario de los denunciantes (por ejemplo: 18-29, 30-49, 50-70). |
| `tema_denuncia`       | Tipo de contenido denunciado (violencia, lenguaje ofensivo, discriminación, etc.). |
| `programa`            | Nombre del programa denunciado. |
| `canal`               | Canal de TV que emitió el contenido denunciado. |
| `cantidad_denuncias`  | Número total de denuncias recibidas para ese caso específico. |
| `estado_denuncia`     | Estado del proceso en el CNTV: tramitada o archivada. |
| `sanción_CNTV`        | Si el CNTV aplicó una sanción (Sí / No). |
| `tipo_contenido`      | Género del programa (matinal, noticiero, reality, etc.). |

## Otras observaciones  
- Esta base permite identificar patrones de denuncia por edad, canal o tipo de contenido.  
- Puede ser complementada con la base mensual de denuncias y sanciones oficiales del CNTV para un análisis más detallado por fechas y actores involucrados.
