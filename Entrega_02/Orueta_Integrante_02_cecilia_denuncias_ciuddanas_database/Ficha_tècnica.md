1.	Fuente de los datos

Los datos fueron extraídos de los informes anuales de balance de denuncias ciudadanas del Consejo Nacional de Televisión (CNTV) de Chile. Cada informe presenta estadísticas sobre el volumen, características y distribución de las denuncias ingresadas y tramitadas por el organismo entre 2017 y 2022.

2.	Metodología de la construcción de la base

Revisé  los informes publicados anualmente por el CNTV desde el año 2017 al 2022, que cuentan con información clave para analizar las Denuncias Ciudadanas. Con ayuda de Chat  GPT, que sistemizó la información para facilitar su análisis y visualización, hice una base de datos con toda la información relevante. 

3. Alcance de los datos
La base de datos cubre el periodo 2017-2022 y se centra exclusivamente en las denuncias ciudadanas ingresadas y procesadas por el CNTV en relación con los contenidos de la televisión chilena abierta (y en menor medida, pagada).

4. Características de los datos
•	Tipo de datos: Estadísticos y categóricos.
•	Frecuencia temporal: Anual.
•	Cobertura geográfica: Nacional (Chile).
•	Formato: Estructurado (DataFrame compatible con CSV, Excel, o Google Colab).

5. Variables incorporadas

La variable Año indica el año calendario al que corresponden los datos recopilados de denuncias ciudadanas, abarcando desde 2017 hasta 2022.
La variable Denuncias Ingresadas representa la cantidad total de denuncias recibidas por el Consejo Nacional de Televisión (CNTV) durante cada año. Estas denuncias pueden haber sido ingresadas a través del sitio web oficial o por oficina de partes.
La variable Denuncias Tramitadas refleja cuántas de las denuncias ingresadas fueron aceptadas para su análisis formal, es decir, aquellas que cumplieron con los requisitos establecidos por la Ley 18.838 y fueron acogidas a trámite por el CNTV.
Las variables Edad 18-29 (%), Edad 30-49 (%) y Edad 50-69 (%) corresponden a estimaciones porcentuales del rango etario de los denunciantes. Estas cifras muestran la distribución por grupo de edad de las personas que realizaron denuncias durante cada año. Los porcentajes fueron extraídos o estimados en base a los gráficos de los informes anuales del CNTV.
La variable Canal Más Denunciado indica cuál fue el canal de televisión abierta que acumuló la mayor cantidad de denuncias durante cada año. Esta información ayuda a identificar cuáles fueron los medios más controversiales o más visibles en el período.
La variable Programa Más Denunciado señala el nombre del programa de televisión específico que recibió el mayor volumen de denuncias en cada año. Estos programas suelen ser objeto de controversia pública o cobertura mediática por parte de la ciudadanía.
Finalmente, la variable Temática Principal resume el tipo de contenido o problemática predominante que motivó las denuncias durante el año. Estas temáticas pueden abarcar desde la vulneración de derechos fundamentales, discriminación o cobertura inapropiada de hechos noticiosos, hasta controversias políticas o sociales de alto impacto.

6. Otras observaciones
•	Algunos valores son estimaciones debido a la falta de datos exactos (ej. porcentaje por edad).
•	La codificación temática es interpretativa y se basa en los principales casos y hallazgos descritos en los informes anuales.
•	La base permite identificar patrones socioculturales de denuncia y el rol que juega la televisión en debates públicos en Chile.
•	Puede ampliarse en el futuro para incluir más variables (ej. nivel educativo, región, motivo jurídico de la denuncia).




