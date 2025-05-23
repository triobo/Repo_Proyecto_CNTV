# Ficha técnica

Esta base de datos recoge las denuncias ciudadanas realizadas ante el Consejo Nacional de Televisión (CNTV) en Chile entre 2012 y 2022. Se centra en los programas y canales más denunciados, incluyendo la descripción de los contenidos objetados y la fecha de cada denuncia.

El archivo original fue recolectado y estandarizado manualmente a partir de los rankings públicos disponibles en el sitio web oficial del CNTV.

---

## Variables incorporadas

| Variable                      | Descripción                                                                 |
|------------------------------|-----------------------------------------------------------------------------|
| CANAL / CABLE ESTANDARIZADO  | Nombre del canal o señal denunciada                                         |
| Programa                     | Nombre del programa o contenido denunciado                                  |
| N° Denuncias                 | Cantidad de denuncias recibidas                                             |
| Contenidos Denunciados       | Descripción de la causa o motivo de la denuncia                             |
| Mes                          | Mes en que se recibió la denuncia                                           |
| Año                          | Año en que se recibió la denuncia                                           |
| Categoría Temática (nueva)   | Clasificación temática creada a partir del contenido denunciado (5 categorías) |

---

## Observaciones

- La base original fue obtenida a través del scraping manual de los rankings publicados mensualmente por el CNTV.
- Las categorías temáticas fueron creadas con ayuda de IA, analizando términos frecuentes en la columna "Contenidos Denunciados".
- Algunas filas con descripciones poco claras o sin datos suficientes fueron descartadas o corregidas manualmente.
- Los datos no contienen información sensible ni personal; son públicos y referidos a programación televisiva.

---

## Categorías temáticas asignadas

1. Violencia, Agresión y Conductas Inapropiadas  
2. Dignidad / Intimidad / Vida Privada  
3. Contenido Sexual / Lenguaje Vulgar  
4. Desinformación / Sesgo / Falta de Pluralismo / Manipulación  
5. Niñez / Horario de Protección
