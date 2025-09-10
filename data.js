// Data for Lorenzo Fratino's Portfolio Website

const portfolioData = {
  personalInfo: {
    name: "Lorenzo Fratino",
    title: "Physicist - Theoretical and Computational Physics",
    currentPosition: "Agent non titulaire de recherche et d'enseignement",
    institution: "Laboratoire de Physique Théorique et Modélisation, Cy Cergy-Paris Université",
    period: "2022-2026",
    email: "lorenzo.fratino@gmail.com",
    institutionalEmail: "lorenzo.fratino@u-cergy.fr",
    address: "10 Rue Lauzin, 75019, Paris, France",
    phone: "+33(0)771240725",
    birthDate: "17 Août 1987",
    birthPlace: "Lucca (LU), Italie",
    nationality: "Italienne"
  },

  researchAreas: [
    {
      id: "1",
      title: "Mott Transitions and Phase Diagrams",
      description: "Investigation of metal-insulator transitions in strongly correlated electron systems, particularly in two-dimensional Hubbard models and vanadium dioxide (VO₂) systems.",
      order: 1,
      image: "https://images.unsplash.com/photo-1717255902520-cd14de833287?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxwaHlzaWNzJTIwcmVzZWFyY2h8ZW58MHx8fHwxNzU2OTI5OTI4fDA&ixlib=rb-4.1.0&q=85"
    },
    {
      id: "2",
      title: "Strongly Correlated Electron Systems",
      description: "Theoretical modeling and computational studies of systems where electron-electron interactions play a dominant role in determining material properties.",
      order: 2,
      image: "https://images.unsplash.com/photo-1643302057105-4e0b2a2d56f8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHw0fHxxdWFudHVtJTIwbWF0ZXJpYWxzfGVufDB8fHx8MTc1NjkyOTkzM3ww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: "3",
      title: "Superconductivity in Doped Mott Insulators",
      description: "Research on superconducting pairing mechanisms in doped charge-transfer insulators and the emergence of pseudogap phenomena.",
      order: 3,
      image: "https://images.unsplash.com/photo-1726410833903-f53456570328?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxzY2llbnRpZmljJTIwaWxsdXN0cmF0aW9ufGVufDB8fHx8MTc1NjkyOTkzOHww&ixlib=rb-4.1.0&q=85"
    },
    {
      id: "4",
      title: "Neuromorphic Devices",
      description: "Development of microscopic understanding of resistive switching in neuromorphic devices, particularly in manganite systems for neuronal dynamics applications.",
      order: 4,
      image: "https://images.pexels.com/photos/33234/nautilus-shell-shimmer-silver.jpg"
    },
    {
      id: "5",
      title: "Quantum Materials Under External Fields",
      description: "Study of field-induced phase transitions, light-induced effects in quantum materials, and electrically triggered metal-insulator transitions.",
      order: 5,
      image: "https://images.unsplash.com/photo-1729273791372-976c087cf09f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxzY2llbnRpZmljJTIwaWxsdXN0cmF0aW9ufGVufDB8fHx8MTc1NjkyOTkzOHww&ixlib=rb-4.1.0&q=85"
    }
  ],

  publications: [
    {
      id: "1",
      year: "2025",
      title: "Electrically induced negative differential resistance states mediated by oxygen octahedra coupling in manganites for neuronal dynamics",
      authors: "A. Jaman, L. Fratino, M. Ahmadi, R. Rocco, B. J. Kooi, M. Rozenberg, T. Banerjee",
      journal: "Adv. Funct. Mater.",
      volume: "2025, 2419840",
      link: "https://advanced.onlinelibrary.wiley.com/doi/10.1002/adfm.202419840",
      type: "published"
    },
    {
      id: "2",
      year: "2024",
      title: "Laser-induced quenching of metastability at the Mott-insulator to metal transition",
      authors: "T. Luibrand, L. Fratino, F. Tahouni-Bonab, A. Kronman, Y. Kalcheim, I. K. Schuller, M. Rozenberg, et al.",
      journal: "Phys. Rev. B",
      volume: "110, L081108",
      link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.110.L081108",
      type: "published"
    },
    {
      id: "3",
      year: "2024",
      title: "Coupling strongly correlated electron systems to a tunable electronic reservoir",
      authors: "S. Bag, L. Fratino, H. Navarro, A. Camjayi, M. Civelli, M. J. Rozenberg",
      journal: "Phys. Rev. B",
      volume: "109, 195171",
      link: "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.109.195171",
      type: "published"
    },
    {
      id: "4",
      year: "2021",
      title: "Spatiotemporal characterization of the field-induced insulator-to-metal transition",
      authors: "J. Del Valle, N. M. Vargas, R. Rocco, P. Salev, Y. Kalcheim, P. N Lapa, C. Adda, M.-H. Lee, P. Y. Wang, L. Fratino, M. J. Rozenberg, I. K. Schuller",
      journal: "Science",
      volume: "",
      link: "https://www.science.org/doi/abs/10.1126/science.abd9088",
      type: "featured"
    },
    {
      id: "5",
      year: "2021",
      title: "Transverse barrier formation by electrical triggering of a metal-to-insulator transition",
      authors: "P. Salev, L. Fratino, D. Sasaki, R. Berkoun, J. del Valle, Y. Kalcheim, Y. Takamura, M. Rozenberg, I. K. Schuller",
      journal: "Nature Communications",
      volume: "12 (1), 1-7",
      link: "https://www.nature.com/articles/s41467-021-25802-1",
      type: "featured"
    },
    {
      id: "6",
      year: "2020",
      title: "Operando characterization of conductive filaments during resistive switching in Mott VO₂",
      authors: "S. Cheng, M. Lee, Xing Li, L. Fratino, F. Tesler, M.-G. Han, R. C. Dynes, J. del Valle, M. J. Rozenberg, I. K. Schuller, Y. Zhu",
      journal: "P.N.A.S.",
      volume: "118 (9)",
      link: "https://www.pnas.org/content/118/9/e2013676118.short",
      type: "featured"
    },
    {
      id: "7",
      year: "2017",
      title: "Signatures of the Mott transition in the antiferromagnetic state of the two-dimensional Hubbard model",
      authors: "L. Fratino, P. Sémon, M. Charlebois, G. Sordi, A. -M. S. Tremblay",
      journal: "Phys. Rev. B",
      volume: "95, 235109",
      link: "https://link.aps.org/doi/10.1103/PhysRevB.95.235109",
      type: "published"
    },
    {
      id: "8",
      year: "2016",
      title: "An organizing principle for two-dimensional strongly correlated superconductivity",
      authors: "L. Fratino, P. Sémon, G. Sordi, A. -M. S. Tremblay",
      journal: "Sci. Rep.",
      volume: "6, 22715",
      link: "http://dx.doi.org/10.1038/srep22715",
      type: "featured"
    },
    {
      id: "9",
      year: "2016",
      title: "Pseudogap and superconductivity in two-dimensional doped charge-transfer insulators",
      authors: "L. Fratino, P. Sémon, G. Sordi, A. -M. S. Tremblay",
      journal: "Phys. Rev. B",
      volume: "93, 245147",
      link: "http://dx.doi.org/10.1103/PhysRevB.93.245147",
      type: "published"
    }
  ],

  education: [
    {
      id: "1",
      year: "2017",
      degree: "PhD en Physique",
      institution: "Royal Holloway University of London, Royaume-Uni",
      thesis: "Phase diagram of the two-dimensional Hubbard model",
      supervisor: "Dr. Giovanni Sordi",
      order: 1
    },
    {
      id: "2",
      year: "2013",
      degree: "Master de Recherche en Physique (Laurea Magistrale in Fisica)",
      institution: "Université de Pise, Italie",
      grade: "110/110",
      thesis: "Study of entanglement of qubits in a quantum-classical hybrid model",
      supervisor: "Prof. Thomas Elze",
      order: 2
    },
    {
      id: "3",
      year: "2010",
      degree: "Licence en Physique (Laurea Triennale in Fisica)",
      institution: "Université de Pise, Italie",
      grade: "109/110",
      thesis: "Lamb Shift",
      supervisor: "Prof. Giampiero Paffuti",
      order: 3
    }
  ],

  awards: [
    {
      id: "1",
      year: "2024",
      title: "Von-Neumann Distinguished Collaborative Research Award",
      description: "For developing a microscopic understanding of resistive switching of neuromorphic devices",
      link: "https://qmeenc.ucsd.edu/awards.html"
    },
    {
      id: "2",
      year: "2006",
      title: "10th Edition programming Turing's machines",
      description: "Programming competition winner",
      link: "http://mdt.di.unipi.it/Documentazione/Classifica.aspx"
    }
  ],

  teaching: [
    {
      id: "1",
      period: "2024-2028",
      title: "Qualification Maître de conférences section 28 et 29",
      institution: "",
      description: ""
    },
    {
      id: "2",
      period: "2022-2025",
      title: "Assistant-enseignant",
      institution: "Cy Cergy-Paris Université",
      description: "9 cours de licence et master (576h)"
    },
    {
      id: "3",
      period: "2019",
      title: "Assistant-enseignant - TP de physique quantique",
      institution: "ESPCI",
      description: "30h"
    },
    {
      id: "4",
      period: "2014-2017",
      title: "Assistant-enseignant - Visiting marker",
      institution: "RHUL",
      description: "150h"
    }
  ],

  conferences: [
    {
      id: "1",
      year: "2025",
      event: "Aqumics: Advanced quantum materials for magnetic cooling and quantum information science",
      location: "Cergy-Pontoise, France",
      type: "Talk"
    },
    {
      id: "2",
      year: "2024",
      event: "DICE 2024 - Spacetime -- Matter -- Quantum Mechanics",
      location: "Castiglioncello, Italie",
      type: "Talk"
    },
    {
      id: "3",
      year: "2024",
      event: "DPG conference",
      location: "Berlin, Alemagne",
      type: "Talk"
    },
    {
      id: "4",
      year: "2023",
      event: "École Polytechnique",
      location: "Palaiseau, France",
      type: "Invited Talk"
    },
    {
      id: "5",
      year: "2023",
      event: "GDR MEETICC",
      location: "Latresne - Bordeaux, France",
      type: "Talk"
    },
    {
      id: "6",
      year: "2023",
      event: "GDR MEETICC, From quantum matter to quantum materials",
      location: "Paris, France",
      type: "Talk"
    },
    {
      id: "7",
      year: "2022",
      event: "DICE 2022 - Spacetime -- Matter -- Quantum Mechanics",
      location: "Castiglioncello, Italie",
      type: "Talk"
    },
    {
      id: "8",
      year: "2021",
      event: "GDR MEETICC, Supraconductivité",
      location: "Paris, France",
      type: "Poster"
    }
  ],

  responsibilities: [
    {
      id: "1",
      year: "2024",
      role: "Organisateur du 11th International Workshop DICE 2024",
      event: "Spacetime -- Matter -- Quantum Mechanics",
      location: "Castiglioncello, Italie"
    },
    {
      id: "2",
      year: "2022",
      role: "Organisateur du 10th International Workshop DICE 2022",
      event: "Spacetime -- Matter -- Quantum Mechanics",
      location: "Castiglioncello, Italie"
    },
    {
      id: "3",
      year: "2023-2026",
      role: "Co-encadrement de thèse",
      event: "Youssra Anene à 90% avec le Prof. Philippe Lecheminant 10%",
      location: ""
    },
    {
      id: "4",
      year: "2018",
      role: "Secrétaire scientifique du 9th International Workshop DICE 2018",
      event: "Spacetime -- Matter -- Quantum Mechanics",
      location: "Castiglioncello, Italie"
    }
  ]
};