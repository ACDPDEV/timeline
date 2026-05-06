import { imageConfig } from "astro:assets";

export const data = [
  {
    id: 1,
    time: "Etapa pre-lógica",
    color: "var(--color-1)",
    acts: [
      {
        id: 1,
        year: "~3000 a.C.",
        title: "Geometría práctica y primeros algoritmos",
        description:
          "Los escribas babilonios resolvían problemas complejos mediante procedimientos paso a paso, similar a lo que hoy llamamos algoritmos. Su razonamiento se basaba en la geometría de corte y pegado: componían y descomponían figuras planas para encontrar áreas desconocidas. La tablilla Plimpton 322 contiene una tabla de tripletas pitagóricas compilada más de mil años antes de que Pitágoras naciera.",
        autors: ["Babilonios"],
        autorAvatars: [],
        img: "/imgs/1.webp",
      },
      {
        id: 2,
        year: "~2500 a.C.",
        title: "Iteración lógica y precisión arquitectónica",
        description:
          "El Antiguo Egipto desarrolló el método de la falsa posición: el escriba iniciaba con una suposición conveniente, realizaba las operaciones, comparaba el resultado y aplicaba un factor de corrección para obtener la respuesta exacta. El Papiro Matemático de Moscú describe pasos precisos para calcular el volumen de una pirámide truncada con resultados que coinciden exactamente con la fórmula matemática moderna.",
        autors: ["Antiguos Egipcios"],
        autorAvatars: [],
        img: "/imgs/2.webp",
      },
      {
        id: 3,
        year: "~800 a.C.",
        title: "Silogismo deductivo y geometría ritual",
        description:
          "Los manuales védicos Śulbasūtras contenían instrucciones rigurosas para construir altares de fuego, lo que llevó a hallazgos matemáticos extraordinarios incluyendo el Teorema de Pitágoras y aproximaciones de π correctas hasta el quinto decimal. La escuela Nyāya formalizó el silogismo de cinco miembros: tesis, razón, ejemplo universal, aplicación y conclusión, exigiendo que cada deducción estuviera comprobada por un ejemplo empírico real.",
        autors: [],
        autorAvatars: [],
        img: "/imgs/3.webp",
      },
      {
        id: 4,
        year: "~700 a.C.",
        title: "Pensamiento binario y análisis semántico",
        description:
          "El pensamiento correlativo chino representado en el Yin-Yang funcionaba como un sistema lógico binario que clasificaba la realidad en fuerzas opuestas pero dependientes. La escuela Moísta argumentaba mediante analogía con modelos universales llamados fa. La Escuela de los Nombres exploró paradojas del lenguaje como 'un caballo blanco no es un caballo', demostrando dominio temprano sobre la semántica y la teoría de conjuntos lógicos.",
        autors: ["Chinos"],
        autorAvatars: [],
        img: "/imgs/4.webp",
      },
    ],
  },
  {
    id: 2,
    time: "Grecia clásica",
    color: "var(--color-2)",
    acts: [
      {
        id: 5,
        year: "~470 a.C.",
        title: "Razonamiento crítico y método dialéctico",
        description:
          "El método dialéctico o mayéutica consistía en formular preguntas sistemáticas con el objetivo de guiar al interlocutor hacia la identificación de contradicciones en su propio pensamiento y hacia la construcción de definiciones más precisas. Aunque no desarrolló una lógica formal, estableció la importancia del razonamiento crítico y el análisis conceptual como herramientas fundamentales para la búsqueda de la verdad.",
        autors: ["Sócrates"],
        autorAvatars: ["/socrates.webp"],
        img: "/imgs/5.webp",
      },
      {
        id: 6,
        year: "~428 a.C.",
        title: "Razonamiento abstracto como vía al conocimiento",
        description:
          "La teoría de las ideas sostuvo que la realidad sensible es solo una representación imperfecta de un mundo ideal accesible únicamente mediante la razón. Esta postura consolidó la idea de que el conocimiento verdadero debe sustentarse en estructuras racionales y no en la experiencia sensorial, influyendo directamente en la posterior sistematización de la lógica como disciplina formal.",
        autors: ["Platón"],
        autorAvatars: ["/platon.webp"],
        img: "/imgs/6.webp",
      },
      {
        id: 7,
        year: "384 a.C.",
        title: "Sistematización de la lógica formal",
        description:
          "Por primera vez se transformó el razonamiento en un objeto de estudio sistemático. A través del Órganon se definieron conceptos como término, proposición y argumento, y se estableció la separación entre la forma y el contenido del razonamiento. Se desarrolló el silogismo como estructura deductiva: dos premisas y una conclusión necesaria. Este modelo se mantuvo vigente como referencia del análisis lógico durante más de dos mil años.",
        autors: ["Aristóteles"],
        autorAvatars: ["/aristoteles.webp"],
        img: "/imgs/7.webp",
      },
    ],
  },
  {
    id: 3,
    time: "Edad Media — Escolástica",
    color: "var(--color-3)",
    acts: [
      {
        id: 8,
        year: "Siglos V – XII",
        title: "Preservación y uso teológico de la lógica",
        description:
          "Tras la caída del Imperio Romano, la Iglesia se consolidó como institución preservadora del conocimiento. La lógica se integró al servicio de la teología, dando lugar a la escolástica. Se desarrolló la disputatio, un método de debate estructurado donde se presentaban posturas, se analizaban argumentos y se proponía una solución fundamentada. Este enfoque fortaleció el pensamiento crítico y promovió mayor precisión en el uso del lenguaje.",
        autors: [],
        autorAvatars: [],
        img: "/imgs/8.webp",
      },
      {
        id: 9,
        year: "Siglo XII",
        title: "Redescubrimiento de Aristóteles y análisis del lenguaje",
        description:
          "Las traducciones del árabe al latín permitieron reintroducir la lógica aristotélica en el ámbito académico europeo. Los filósofos escolásticos desarrollaron la teoría de la suppositio, que analizaba cómo los términos representan objetos en distintos contextos, y trabajaron en la identificación sistemática de falacias y errores de razonamiento, superando en ciertos aspectos el enfoque más general de la lógica aristotélica.",
        autors: [],
        autorAvatars: [],
        img: "/imgs/9.webp",
      },
      {
        id: 10,
        year: "1225",
        title: "Integración entre razón y fe",
        description:
          "Se buscó demostrar que la razón y la fe no son opuestas sino complementarias, utilizando la lógica aristotélica como herramienta para fundamentar racionalmente las creencias religiosas. Esta integración representó uno de los esfuerzos más sistemáticos por articular el pensamiento filosófico clásico con la doctrina cristiana, consolidando la lógica como instrumento de análisis en el ámbito académico medieval.",
        autors: ["Tomás de Aquino"],
        autorAvatars: ["/aquino.webp"],
        img: "/imgs/10.webp",
      },
      {
        id: 11,
        year: "1287",
        title: "Principio de parsimonia en el razonamiento",
        description:
          "Se introdujo un enfoque más crítico y analítico al pensamiento escolástico. La Navaja de Ockham propone que ante múltiples explicaciones posibles debe preferirse la más simple y económica. Este principio tuvo un impacto significativo en el desarrollo posterior del pensamiento científico, al promover la claridad, la economía conceptual y la preferencia por hipótesis mínimas en la construcción del conocimiento.",
        autors: ["Guillermo de Ockham"],
        autorAvatars: ["/ockham.webp"],
        img: "/imgs/11.webp",
      },
    ],
  },
  {
    id: 4,
    time: "Lógica moderna",
    color: "var(--color-4)",
    acts: [
      {
        id: 12,
        year: "1561",
        title: "Método inductivo y origen del pensamiento empírico",
        description:
          "Se propuso un enfoque basado en la observación y la experiencia para extraer leyes generales a partir de múltiples casos particulares. Bacon también advirtió sobre los errores sistemáticos del pensamiento humano, los llamados ídolos, lo que resulta sorprendentemente actual en áreas como la ciencia de datos. Su enfoque anticipa directamente el principio fundamental del machine learning: que el conocimiento puede construirse a partir de datos.",
        autors: ["Francis Bacon"],
        autorAvatars: ["/bacon.webp"],
        img: "/imgs/12.webp",
      },
      {
        id: 13,
        year: "1596",
        title: "Descomposición ordenada de problemas",
        description:
          "Se introdujo un método racional basado en la duda metódica: dividir los problemas complejos en partes simples, resolverlos de manera ordenada y reconstruir el conocimiento paso a paso. Este enfoque anticipa directamente el pensamiento algorítmico al establecer que un problema puede resolverse mediante una secuencia clara y finita de pasos, reflejando principios esenciales de la informática como la descomposición, la estructuración lógica y la ejecución secuencial.",
        autors: ["René Descartes"],
        autorAvatars: ["/descartes.webp"],
        img: "/imgs/13.webp",
      },
      {
        id: 14,
        year: "1847",
        title: "Formalización algebraica de la lógica",
        description:
          "Se transformó la lógica en un sistema matemático formal representando verdadero como 1 y falso como 0, y operando con ellos mediante reglas algebraicas. El álgebra booleana demostró que la lógica es una rama de las matemáticas y puede tratarse con los mismos métodos. Este desarrollo permitió representar proposiciones como variables, operar con ellas algebraicamente y automatizar procesos lógicos, sentando las bases de los circuitos digitales y la programación moderna.",
        autors: ["George Boole"],
        autorAvatars: ["/boole.webp"],
        img: "/imgs/14.webp",
      },
    ],
  },
  {
    id: 5,
    time: "Lógica contemporánea",
    color: "var(--color-5)",
    acts: [
      {
        id: 15,
        year: "1879",
        title: "Primer sistema de lógica de predicados",
        description:
          "La Begriffsschrift creó de la nada el primer sistema de lógica de predicados de primer orden: un lenguaje formal completamente simbólico con variables de individuo, predicados, cuantificadores universales y existenciales, y conectivos proposicionales. Por primera vez proposiciones como 'todo número natural tiene un sucesor' podían expresarse y manipularse formalmente. Con los cuantificadores se resolvieron de un golpe las limitaciones que habían acosado a la lógica desde Aristóteles.",
        autors: ["Gottlob Frege"],
        autorAvatars: ["/frege.webp"],
        img: "/imgs/15.webp",
      },
      {
        id: 16,
        year: "1910",
        title: "Reducción de la matemática a axiomas lógicos",
        description:
          "Los Principia Mathematica intentaron demostrar que toda la matemática puede derivarse de un pequeño conjunto de axiomas lógicos puros, llevando el programa logicista a su culminación técnica. Sin embargo, la paradoja de Russell destruyó el sistema de Frege al revelar que sus axiomas eran inconsistentes. La solución propuesta, la teoría de tipos, resultó técnicamente eficaz pero filosóficamente insatisfactoria.",
        autors: ["Bertrand Russell", "Alfred North Whitehead"],
        autorAvatars: ["/russell.webp", "/whitehead.webp"],
        img: "/imgs/16.webp",
      },
      {
        id: 17,
        year: "1931",
        title: "Límites intrínsecos de todo sistema formal",
        description:
          "El primer teorema de incompletitud demostró que todo sistema formal consistente que contenga la aritmética elemental contiene proposiciones verdaderas que no pueden demostrarse dentro del sistema. El segundo teorema añadió que ningún sistema formal consistente puede demostrar su propia consistencia. Con estos resultados el programa de Hilbert quedó irrevocablemente destruido junto con la concepción del conocimiento matemático como sistema cerrado y autosuficiente.",
        autors: ["Kurt Gödel"],
        autorAvatars: ["/godel.webp"],
        img: "/imgs/17.webp",
      },
      {
        id: 18,
        year: "1936",
        title: "Definición formal de la computabilidad",
        description:
          "Se definió formalmente el concepto de computabilidad mediante la máquina de Turing y se demostró que el Entscheidungsproblem tiene respuesta negativa: no existe un procedimiento mecánico capaz de decidir la verdad de cualquier enunciado de primer orden. Church llegó al mismo resultado de forma independiente mediante el cálculo lambda. Estos resultados establecieron los fundamentos teóricos de la informática como disciplina antes de que existiera como tal.",
        autors: ["Alan Turing", "Alonzo Church"],
        autorAvatars: ["/turing.webp", "/church.webp"],
        img: "/imgs/18.webp",
      },
      {
        id: 19,
        year: "1937",
        title: "Implementación física de la lógica en circuitos",
        description:
          "Se demostró que el álgebra booleana es isomorfa al comportamiento de los circuitos eléctricos de conmutación: los valores 0 y 1 corresponden exactamente a los estados abierto y cerrado de un interruptor, y las operaciones AND, OR y NOT se realizan mediante configuraciones en serie, en paralelo y con inversores. Este resultado permitió diseñar y simplificar circuitos lógicos mediante manipulación algebraica, abriendo el camino a la computación digital.",
        autors: ["Claude Shannon"],
        autorAvatars: ["/shannon.webp"],
        img: "/imgs/19.webp",
      },
      {
        id: 20,
        year: "1960",
        title: "Diversificación hacia lógicas no clásicas",
        description:
          "Ante los límites intrínsecos de la lógica clásica la respuesta fue explorar sistemas alternativos. La lógica modal adquirió rigor con la semántica de mundos posibles: una proposición es necesariamente verdadera si lo es en todos los mundos posibles accesibles. La lógica difusa extendió la bivalencia a un continuo de grados de verdad con aplicaciones en ingeniería de control e inteligencia artificial. La lógica paraconsistente desarrolló sistemas tolerantes a contradicciones sin colapsar en trivialidad.",
        autors: ["Saul Kripke", "Lotfi Zadeh", "Jan Łukasiewicz"],
        autorAvatars: ["/kripke.webp", "/zadeh.webp", "/lukasiewicz.webp"],
        img: "/imgs/20.webp",
      },
    ],
  },
];
