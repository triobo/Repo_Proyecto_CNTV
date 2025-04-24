# Ficha Técnica: Base de Datos de Sanciones del CNTV (2012–2022)

## Fuente de los datos  
- La información fue recopilada desde el sitio web oficial del Consejo Nacional de Televisión (CNTV), específicamente en la sección de sanciones:  
  https://www.cntv.cl/sanciones  
- Allí se encuentran disponibles los informes anuales de sanciones desde el año 2012 hasta 2022.

## Metodología de la construcción de la base  
- Se recopilaron manualmente los datos de los informes públicos de sanciones anuales publicados por el CNTV.  
- Se utilizó Google Colab junto con el apoyo de ChatGPT para categorizar las sanciones por año, canal, programa, motivo principal y monto.  
- Los datos fueron organizados y estructurados en una base de datos tabular para facilitar su análisis.

## Alcance de los datos  
- **Período cubierto**: 2012 - 2022 (11 años)  
- **Cobertura geográfica**: Nacional (Chile)  
- **Cobertura temática**: Sanciones aplicadas por el CNTV a canales de televisión abierta o por cable, excluyendo medios digitales o radiales.

## Características de los datos  
- Formato: archivo Excel exportado como CSV para su análisis posterior.  
- Organización: columnas estructuradas por variables relevantes para el análisis de sanciones.  
- Tipo: cuantitativo (número de sanciones, monto en UTM) y cualitativo (tema, canal, programa).

## Variables incorporadas

| Variable                   | Descripción |
|----------------------------|-------------|
| `año`                      | Año en que se emitió la sanción. |
| `número_sanciones`         | Total de sanciones emitidas durante ese año. |
| `razón_principal_sanción`  | Motivo general de la sanción (ej. lenguaje ofensivo, contenido inapropiado, etc.). |
| `canal`                    | Canal sancionado por el CNTV. |
| `monto_multa_UTM`          | Monto de la multa impuesta, expresado en Unidades Tributarias Mensuales (UTM). |
| `programa`                 | Programa específico que motivó la sanción. |

## Otras observaciones  
- La base de datos se enfoca exclusivamente en sanciones aplicadas a canales de televisión en Chile.  
- No se incluye información sobre otros medios sancionados (como radios o medios digitales).  
- Puede ser usada para analizar patrones de comportamiento por canal, año o tipo de contenido sancionado.
