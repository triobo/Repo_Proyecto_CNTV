# Visualización de denuncias al CNTV por temáticas y canales (2012–2022)

Este proyecto busca explorar las temáticas más sensibles para la ciudadanía en torno a los contenidos televisivos, a través del análisis de las denuncias presentadas ante el Consejo Nacional de Televisión (CNTV) entre los años 2012 y 2022. Para ello, realizamos una visualización que cruza las temáticas más recurrentes en las denuncias con los canales donde estas se concentran.

---

## Proceso de trabajo y decisiones tomadas

1. Cargamos la base de datos “RANKING DE DENUNCIAS 2012-2022_FINAL1.xlsx” en Google Colab.
2. Seleccionamos la hoja correspondiente al ranking de denuncias individuales por programa.
3. Estandarizamos nombres de columnas relevantes, como “Contenidos Denunciados” y “CANAL / CABLE ESTANDARIZADO”.
4. Creamos una nueva columna temática que agrupa las denuncias según palabras clave en las descripciones. Para establecer estos criterios, pasamos la base por una IA (Jupyter Notebook), a la cual le pedimos que identificara las palabras más recurrentes en las temáticas denunciadas. A partir de eso, clasificamos las denuncias en cinco categorías:
   - Violencia, Agresión y Conductas Inapropiadas
   - Dignidad / Intimidad / Vida Privada
   - Contenido Sexual / Lenguaje Vulgar
   - Desinformación / Sesgo / Falta de Pluralismo / Manipulación
   - Niñez / Horario de Protección
5. Agrupamos los datos por canal y temática, y generamos una visualización clara y comparativa en forma de gráfico de barras agrupadas utilizando Altair.

---

## Base de datos utilizada

- Nombre del archivo: RANKING DE DENUNCIAS 2012-2022_FINAL1.xlsx
- Fuente: Consejo Nacional de Televisión (CNTV)
- Formato final procesado: CSV
- Origen: Esta base de datos fue construida de forma manual, recopilando los datos públicos existentes en la sección de rankings de denuncias del sitio web oficial del CNTV.
- Columnas originales:
  - CANAL / CABLE
  - Programa
  - N° Denuncias
  - Contenidos Denunciados
  - Mes de la denuncia
  - Año de la denuncia

---

## Ejemplos de preguntas que responde la visualización

- ¿Cuáles son los temas que más denuncias generan entre los televidentes?
- ¿Qué canales concentran más denuncias en temas como desinformación o contenido sexual?
- ¿Existe una relación entre el tipo de canal y las temáticas que más se denuncian?
- ¿Qué tipo de contenido genera mayor sensibilidad ciudadana?

La visualización permite observar patrones, comparar temáticas entre canales y construir hipótesis sobre la sensibilidad de la audiencia frente a ciertos valores, como la protección de la infancia o la veracidad informativa.