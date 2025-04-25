1. Proceso de Limpieza de Datos
Paso 1: Recolección de los datos
Los datos los saqué de los informes anuales oficiales del Consejo Nacional de Televisión (CNTV) de Chile para los años 2017 a 2022. Estos informes se encuentran disponibles en formato PDF, en la página del consejo y contienen estadísticas clave sobre denuncias ciudadanas por contenidos emitidos en canales de televisión abierta y, en menor medida, en TV paga.

Paso 2: Selección de variables relevantes
Identifiqué las variables relevantes que se mantuvieran constantes a lo largo de los años. Seleccioné variables que fueran tanto cuantitativas como categóricas: año, denuncias ingresadas, denuncias tramitadas, distribución por edad de los denunciantes, canal más denunciado, programa más denunciado y temática predominante.

Paso 3: Estandarización de los datos

Con ayuda de Chat gpt, los datos de cada informe fueron transcritos a una hoja de cálculo en bruto y luego armonizados en un DataFrame de Pandas utilizando Python. Esto permitió asegurar la coherencia de las variables en el tiempo, especialmente considerando que algunos informes no utilizan la misma nomenclatura.
Se tomaron las siguientes decisiones de limpieza:
•	Los valores porcentuales para grupos etarios fueron redondeados a un decimal para homogeneidad.
•	Algunos valores fueron estimados visualmente desde gráficos debido a que los informes no siempre incluían tablas con los datos exactos.
•	Las temáticas predominantes fueron categorizadas de forma interpretativa a partir de las secciones de "principales hallazgos" y "discusión" de los informes.
•	En los casos en que varios programas o canales destacaban, se seleccionó aquel mencionado más veces o el que tenía un impacto cuantitativo mayor.

Paso 4: Codificación y estructuración
El DataFrame fue transformado en una tabla estructurada para su uso en Google Colab. Se definió cada variable como una columna, utilizando nombres claros y sin espacios, con etiquetas normalizadas.

Paso 5: Verificación
Finalmente, se revisó manualmente que cada valor correspondiera a la fuente de origen. El archivo final fue exportado como CSV y verificado con funciones como .info() y .describe() para asegurar consistencia de tipos de datos y ausencia de valores nulos.

Herramientas utilizadas
•	Python: para construir, limpiar y analizar los datos.
•	Adobe Acrobat Reader y Google Drive: para la lectura y almacenamiento de los informes.
•	Excel / Google Sheets: para la transcripción preliminar.

2.	Fuentes de Datos Utilizadas

Las fuentes utilizadas fueron los informes oficiales del CNTV, disponibles en el sitio web institucional. Estos documentos son confiables por su carácter institucional, su metodología explícita y su uso en estudios regulatorios y académicos.
•	CNTV (2017). Balance de denuncias ciudadanas.
•	CNTV (2018). Balance anual y primer semestre.
•	CNTV (2019). Balance anual de denuncias.
•	CNTV (2020). Denuncias ciudadanas: Balance.
•	CNTV (2021). Denuncias ciudadanas: Balance.
•	CNTV (2022). Denuncias ciudadanas: Balance.

Estas fuentes fueron elegidas porque entregan un registro sistemático, transparente y de acceso público sobre la relación entre la audiencia y la programación televisiva chilena.

3.	Ejemplos de Preguntas Respondibles con la Base de Datos Limpia

a.¿Cómo ha evolucionado la cantidad de denuncias ciudadanas tramitadas entre 2017 y 2022?

b. ¿Cuáles son los grupos etarios que más denuncian y cómo cambia eso según el tipo de contenido denunciado?

c. ¿Qué canales y programas concentran mayor cantidad de controversias televisivas por año?

