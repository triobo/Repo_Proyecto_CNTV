DOCUMENTACIÓN ORUETA
# Visualización de datos individuales — Entrega final

## Descripción del proceso de visualización

Para esta visualización, partí de la base de datos de sanciones del Consejo Nacional de Televisión (CNTV) que ya habíamos trabajado para mejorar la Entrega 2. En esta etapa, el objetivo fue refinarla, hacerla más específica y dejarla lista para producir una visualización clara, informativa y relevante.

Primero, se ordenaron los datos para enfocarse en dos dimensiones principales: los canales de televisión sancionados y los temas de las sanciones. Aunque los canales ya estaban identificados, los temas no tenían una clasificación clara. Para resolver esto, utilicé NotebookLM para que me sugiriera posibles categorías temáticas basadas en el tipo de denuncia. Luego, de forma manual, asigné estas temáticas a cada fila del dataset.

Con la base de datos ya categorizada y organizada, la exporté desde Excel a Google Colab. Ahí, con el apoyo de ChatGPT, desarrollé una visualización que permite observar cuáles son los temas más sancionados y en qué canales se concentran. La visualización revela que el motivo más común de sanción es "Contenido inapropiado para menores en horario de protección (HTE)", seguido de "Vulneración de la dignidad personal". El canal con más sanciones en el período es **Chilevisión**.

---

## Base de datos utilizada

Se utilizó una base de datos del CNTV con sanciones a canales de televisión en Chile. Esta fue la misma base inicial de la Entrega 2, pero con los siguientes pasos de procesamiento:

- Limpieza de columnas irrelevantes.
- Unificación de nombres de canales.
- Incorporación manual de una nueva columna llamada `tema_sancion`, que clasifica el tipo de infracción según el contenido de la denuncia.

El archivo final procesado está en formato `.csv` y fue usado directamente en la visualización.

**Razón de selección:** Esta base de datos permite analizar prácticas de los canales chilenos bajo la lupa del regulador, evidenciando los temas que más preocupan al CNTV y la recurrencia de ciertos canales en prácticas sancionadas.

---

## Preguntas que responde la visualización

- ¿Cuáles son los temas más sancionados por el CNTV en televisión chilena?
- ¿Qué canal ha recibido más sanciones y por qué motivos?
- ¿Existen temas específicos que son sancionados de manera sistemática en ciertos canales?
- ¿Qué tan frecuente es la infracción por contenido inapropiado para menores durante el horario de protección?

