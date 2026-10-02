/*
 * PRIMARY DATA REPOSITORY: assets/js/content.js
 * Academic, research, publications, and photographic database
 * for Sadia Afroz Oishi (PUST ICE 2026).
 */

export const portfolio = {
  profile: {
    name: "Sadia Afroz Oishi",
    shortName: "Sadia",
    role: "Computer Vision and Deepfake Forensics Researcher",
    affiliation: "Department of Information and Communication Engineering, Pabna University of Science and Technology, Pabna, Bangladesh",
    location: "Bangladesh",
    email: "sadiaafrozoishi059@gmail.com",
    cv: "assets/documents/Sadia-Afroz-Oishi-CV.pdf",
    portrait: "assets/images/profile-sadia-afroz-oishi.png",
    headline: "B.Sc. in Information and Communication Engineering graduate from PUST, working on deepfake detection, computer vision, and agricultural AI.",
    status: "B.Sc. (Engineering) in ICE, Pabna University of Science and Technology. CGPA: 3.67 / 4.00 (All 8 Semesters Completed).",
    intro:
      "Hi, I am Sadia Afroz Oishi. I recently completed my B.Sc. in Information and Communication Engineering at Pabna University of Science and Technology (PUST). My work centers on computer vision and deep learning, particularly how we can make deepfake detection more reliable and explainable when dealing with degraded, real-world media.",
    about: [
      "For my undergraduate thesis, I worked on detecting manipulated faces in images and videos. Most existing forensic models act as black boxes and struggle when images are compressed or blurry. To tackle this, I developed Auto-IFCB-STNet, a framework that connects spatial and temporal artifact cues with interpretable forensic concepts, which we have submitted to Scientific Reports.",
      "A big part of my research journey also involved smart agriculture. As a second co-author on the MangoFruitBD project, I helped collect orchard images in the field, annotated bounding boxes across disease classes using CVAT, and benchmarked YOLO detection models. That work is now published on Mendeley Data and under review at Computers and Electronics in Agriculture (Elsevier, Q1).",
      "When I am not working on code or models, you will usually find me debating or organizing campus events. I competed in the ICE Fiesta parliamentary debate tournament where our team won the championship and I received the Debater of the Tournament award. I also served as Joint Organizing Secretary and a founding member of the PUST Career and Entrepreneurship Club (PUSTCEC), where I hosted our podcast and anchored department events."
    ],
    socials: [
      { label: "GitHub", url: "https://github.com/sadiaafrozoishi059", icon: "fab fa-github" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=c2tcMcYAAAAJ&hl=en", icon: "fas fa-graduation-cap" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/oishi12", icon: "fab fa-linkedin-in" },
      { label: "Email", url: "mailto:sadiaafrozoishi059@gmail.com", icon: "fas fa-envelope" },
      { label: "Download CV", url: "assets/documents/Sadia-Afroz-Oishi-CV.pdf", icon: "fas fa-file-pdf" }
    ]
  },

  stats: [
    { value: "5+", label: "Peer-Reviewed Conference Papers" },
    { value: "2", label: "Submitted Journal Manuscripts (Q1)" },
    { value: "1", label: "Published Mendeley Research Dataset" },
    { value: "3.67/4.00", label: "B.Sc. Engg CGPA (PUST ICE)" }
  ],

  languages: [
    {
      name: "Bangla",
      nativeName: "বাংলা",
      code: "bn / BGD",
      level: "Native Language",
      badgeType: "native",
      badgeText: "Native / Mother Tongue",
      icon: "fas fa-language",
      summary: "First language and mother tongue. Full native fluency across oral, written, academic, and public speaking communication.",
      highlights: [
        { label: "Native Fluency", text: "Full native mastery of spoken and written Bangla across formal, technical, and day-to-day settings." },
        { label: "Parliamentary Debate Champion", text: "Awarded Debater of the Tournament and led Team Voice of Victory to win the ICE Fiesta 2025 Parliamentary Debate Tournament in Bangla." },
        { label: "Stage Anchoring", text: "Official stage anchor for the 1st ICE Alumni Reunion 2025, hosting both the formal morning session and the evening cultural concert." },
        { label: "Podcast Host", text: "Hosted Episode 02 of the official PUSTCEC Mic and Minds Podcast in Bangla, interviewing invited guests on career development and student initiatives." }
      ]
    },
    {
      name: "English",
      nativeName: "English",
      code: "en / Academic",
      level: "Medium of Instruction (MOI)",
      badgeType: "moi",
      badgeText: "Medium of Instruction (100% English)",
      icon: "fas fa-graduation-cap",
      summary: "Official Medium of Instruction (MOI) throughout the 4-year Bachelor of Science in Engineering degree at Pabna University of Science and Technology (PUST).",
      highlights: [
        { label: "100% Medium of Instruction", text: "All undergraduate classes, laboratory work, exams, project reports, and thesis defense were carried out entirely in English." },
        { label: "Scholarly Writing", text: "Wrote first-author and co-authored papers published in IEEE Xplore and submitted to international journals in English." },
        { label: "Oral Conference Defense", text: "Delivered first-author oral presentations and defended research findings in English at IEEE PECCII 2026, RAAICON 2026, ICCIT 2025, and RUEC 2025." },
        { label: "Peer Review Service", text: "Reviewed conference manuscripts written in English for the 4th and 5th IEEE RAAICON conferences." },
        { label: "Technical Documentation", text: "Experienced in drafting technical papers, project documentation, and manuscripts formatted to IEEE and Springer Nature guidelines." }
      ]
    }
  ],

  portalSections: [
    { icon: "fas fa-graduation-cap", title: "Education", desc: "B.Sc. in ICE at PUST (CGPA 3.67), undergraduate thesis, academic milestones, and core engineering coursework.", href: "education.html" },
    { icon: "fas fa-language", title: "Languages", desc: "Native Bangla and 100% English Medium of Instruction (MOI) for B.Sc. Engineering.", href: "languages.html" },
    { icon: "fas fa-microscope", title: "Research", desc: "Deepfake forensics, Auto-IFCB-STNet, MangoFruitBD dataset creation, and explainable AI methods.", href: "research.html" },
    { icon: "fas fa-book-open", title: "Publications", desc: "Peer-reviewed IEEE conference papers, Q1 submitted journal manuscripts, Mendeley Data, and DOI links.", href: "publications.html" },
    { icon: "fas fa-laptop-code", title: "Projects", desc: "Explainable deepfake detection, smart orchard computer vision, mobile PPG biosignals, and database systems.", href: "projects.html" },
    { icon: "fas fa-certificate", title: "Certifications", desc: "IEEE peer review appreciation, international conference presentation credentials, and PUSTCEC boot camp certificate.", href: "certifications.html" },
    { icon: "fas fa-trophy", title: "Achievements", desc: "Debate tournament championship, debater of the tournament accolade, and academic performance awards.", href: "achievements.html" },
    { icon: "fas fa-chalkboard-user", title: "Experiences", desc: "Joint Organizing Secretary at PUSTCEC, Founding Member, academic researcher, and IEEE peer reviewer.", href: "experiences.html" },
    { icon: "fas fa-users-gear", title: "Extra-Curricular", desc: "Alumni reunion anchoring, podcast hosting (Mic and Minds), competitive debating, and student club work.", href: "extracurricular.html" },
    { icon: "fas fa-chalkboard-teacher", title: "Presentations", desc: "Oral technical presentations and defense records across IEEE PECCII, ICCIT, QPAIN, RUEC, and RAAICON.", href: "presentations.html" },
    { icon: "fas fa-images", title: "Gallery", desc: "17 visual evidence records from conference stages, certificates, awards, and student activities.", href: "gallery.html" }
  ],

  education: [
    {
      period: "2022-2026",
      title: "Bachelor of Science (Engineering) in Information and Communication Engineering",
      place: "Department of ICE, Pabna University of Science and Technology (PUST), Bangladesh",
      grade: "CGPA: 3.67 / 4.00",
      mediumOfInstruction: "Medium of Instruction: English",
      status: "All 8 Semesters Completed (Final Degree Completed)",
      description:
        "Four-year undergraduate degree covering computer vision, deep learning, digital signal and image processing, wireless communications, algorithms, and artificial intelligence. Completed undergraduate capstone thesis with top academic standing.",
      thesis: "Auto-IFCB-STNet: A Unified Spatio-Temporal Forensic Concept Bottleneck for Explainable Image and Video Deepfake Detection",
      supervisor: "Dr. Md. Sarwar Hossain, Professor, Department of ICE, PUST",
      referee: "Dr. Md. Anwar Hossain, Dean, Faculty of Engineering and Technology, Professor and Chairman, Department of ICE, PUST"
    },
    {
      period: "2018-2020",
      title: "Higher Secondary Certificate (HSC), Science",
      place: "Savar Model College, Savar, Dhaka, Bangladesh",
      grade: "GPA: 5.00 / 5.00 (Golden Merit)",
      mediumOfInstruction: "Board of Intermediate and Secondary Education, Dhaka",
      status: "First Division with Highest Distinction",
      description:
        "Higher secondary education with a focus on Higher Mathematics, Physics, Chemistry, Biology, and English. Graduated with a perfect GPA 5.00."
    },
    {
      period: "2016-2018",
      title: "Secondary School Certificate (SSC), Science",
      place: "Radio Colony Model School and College, Savar, Dhaka, Bangladesh",
      grade: "GPA: 5.00 / 5.00 (Golden Merit)",
      mediumOfInstruction: "Board of Intermediate and Secondary Education, Dhaka",
      status: "First Division with Highest Distinction",
      description:
        "Secondary school studies in science including Mathematics, Physics, Chemistry, Biology, and Computer Studies. Achieved a perfect GPA 5.00."
    }
  ],

  coursework: [
    "Artificial Intelligence and Robotics",
    "Neural Networks and Deep Learning",
    "Digital Image and Speech Processing",
    "Natural Language Processing",
    "Computer Vision and Pattern Recognition",
    "Database Management Systems (DBMS)",
    "Software Analysis and System Testing",
    "Data Structures and Algorithms",
    "Computer Architecture and Microcontrollers",
    "Wireless and Mobile Communications",
    "Digital Signal Processing (DSP)",
    "Signals and Linear Systems",
    "Object-Oriented Programming (C++/Java)",
    "Web Programming and Application Engineering",
    "Numerical Methods and Scientific Computing",
    "Probability and Statistics for Engineers"
  ],

  researchFocus: [
    {
      title: "Deepfake Forensics and Media Integrity",
      text: "Investigating spatial, temporal, and frequency domain cues to identify manipulated faces and synthetic media, especially when degraded by social media compression, noise, or blurring.",
      mark: "DF"
    },
    {
      title: "Explainable Artificial Intelligence (XAI)",
      text: "Building concept bottleneck networks (such as Auto-IFCB-STNet) that provide understandable visual and forensic explanations alongside classification results.",
      mark: "XAI"
    },
    {
      title: "AI in Smart Agriculture",
      text: "Field dataset collection, multi-class plant disease detection, and real-time object detection using YOLO and EfficientNet architectures.",
      mark: "Ag"
    },
    {
      title: "Healthcare AI and Biosignals",
      text: "Processing photoplethysmography (PPG) optical signals from mobile device cameras to estimate cardiovascular parameters non-invasively.",
      mark: "Hx"
    },
    {
      title: "Dataset Engineering and Annotation",
      text: "Field data collection in uncontrolled orchard conditions, bounding-box annotation protocols in CVAT and Roboflow, and data quality audits.",
      mark: "DATA"
    },
    {
      title: "Deep Learning Architectures",
      text: "Comparing CNNs, Vision Transformers, and Recurrent networks under real-world distortions to understand feature retention and model robustness.",
      mark: "DL"
    }
  ],

  researchExperience: [
    {
      title: "Auto-IFCB-STNet: Spatio-Temporal Concept Bottlenecks for Deepfake Forensics",
      period: "2025-2026",
      summary:
        "Developed an explainable deepfake detection model (Auto-IFCB-STNet) designed to catch subtle manipulation boundaries and temporal inconsistencies across different face-generation methods.",
      contributions: [
        "Introduced forensic concept bottleneck layers that connect low-level artifact maps with understandable forensic concepts like eye blending, edge artifacts, and noise discrepancies.",
        "Evaluated how CNNs, Vision Transformers, and Recurrent models hold up when images undergo heavy JPEG compression, Gaussian noise, and blur (First-author paper at IEEE PECCII 2026, IEEE Xplore: 11662017).",
        "Built the SpatSeqFake spatial-sequential architecture presented at IEEE RAAICON 2026 for improved cross-dataset detection.",
        "Co-authored GR-ACE Net (PECCII 2026), combining graph attention with global relational reasoning for deepfake forensics."
      ],
      outcome:
        "Undergraduate thesis completed with high commendation; manuscript submitted to Scientific Reports (Nature Portfolio).",
      tags: ["Deepfake Forensics", "Explainable AI (XAI)", "Concept Bottlenecks", "Vision Transformers", "IEEE PECCII 2026", "Scientific Reports"]
    },
    {
      title: "MangoFruitBD: YOLO-Based Mango Fruit Health Detection in Real Orchards",
      period: "2025-2026",
      summary:
        "Served as second co-author and core data contributor for MangoFruitBD, an open-access image benchmark gathered directly in commercial mango orchards in Bangladesh.",
      contributions: [
        "Collected RGB images across real orchards in Bangladesh under natural sunlight, shadows, occlusions, and cluttered background foliage.",
        "Created bounding-box annotations using CVAT (Computer Vision Annotation Tool), Roboflow, and LabelImg across 4 categories: Healthy, Anthracnose, Alternaria, and Scab.",
        "Checked annotation quality across dataset splits to ensure consistent labeling for training and testing.",
        "Trained and evaluated YOLOv8 and YOLOv11 detectors for identifying diseased fruit directly on the tree."
      ],
      outcome:
        "Published on Mendeley Data (Version 1 and 2, DOI: 10.17632/bhrz29mkmr.1); manuscript submitted to Computers and Electronics in Agriculture (Elsevier, Q1; CiteScore: 17.3).",
      tags: ["MangoFruitBD", "2nd Co-Author", "Smart Agriculture", "YOLO", "CVAT", "Mendeley Data", "Elsevier Q1"]
    },
    {
      title: "Fine-Grained Agricultural Vision and Vegetable Recognition",
      period: "2025-2026",
      summary:
        "Collaborated on a two-stage computer vision model combining YOLO object detection with EfficientNet feature extractors for recognizing vegetables in dense market photos.",
      contributions: [
        "Addressed produce recognition challenges where items look similar and overlap heavily.",
        "Paired YOLO detection boxes with EfficientNet features to improve recognition accuracy.",
        "Presented findings at the 2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN 2026)."
      ],
      outcome: "Published in IEEE QPAIN 2026 proceedings (DOI: 10.1109/QPAIN69676.2026.11545784).",
      tags: ["Computer Vision", "EfficientNet", "YOLO", "Object Recognition", "IEEE QPAIN 2026"]
    },
    {
      title: "Mobile Healthcare and Remote Photoplethysmography (PPG) Processing",
      period: "2024-2025",
      summary:
        "Worked on non-invasive pulse estimation using smartphone cameras to capture fingertip optical absorption signals (photoplethysmography).",
      contributions: [
        "Set up digital filtering routines including bandpass filters and peak finding on mobile camera video frames.",
        "Evaluated machine learning models to estimate heart rate metrics without clinical hardware.",
        "Presented co-authored findings at the 28th International Conference on Computer and Information Technology (IEEE ICCIT 2025)."
      ],
      outcome: "Published in IEEE ICCIT 2025 proceedings (DOI: 10.1109/ICCIT68739.2025.11491546).",
      tags: ["Healthcare AI", "PPG Signals", "Signal Processing", "Mobile Health", "IEEE ICCIT 2025"]
    }
  ],

  dataset: {
    title: "MangoFruitBD",
    subtitle: "A Bounding-Box Annotated Image Dataset for Detecting Healthy and Diseased Mango Fruits in Bangladeshi Orchards",
    year: "2026",
    role: "2nd Co-Author / Core Contributor and Annotation Engineer",
    summary:
      "MangoFruitBD is an open-access agricultural dataset created to support automated fruit disease detection in orchards. As second co-author, Sadia contributed to orchard image collection, CVAT bounding-box annotations, dataset organization, and quality reviews, providing a practical foundation for YOLO detection models.",
    facts: [
      "1,310 High-Resolution Field Images",
      "4 Diagnostic Classes (Healthy, Anthracnose, Alternaria, Scab)",
      "CVAT and Roboflow Annotation Pipeline",
      "Captured Under Natural Lighting, Occlusions and Clutter",
      "YOLO-Compatible Coordinate Annotations",
      "Mendeley Data: Open Access Version 1 and 2"
    ],
    annotationSkills: [
      "CVAT (Computer Vision Annotation Tool)",
      "Roboflow Annotation and Augmentation",
      "LabelImg Bounding Box Tool",
      "Field Data Acquisition in Natural Orchards",
      "Class Balancing and Data Partitioning",
      "Annotation Quality Audits",
      "YOLO Coordinate Formatting"
    ],
    doi: "https://doi.org/10.17632/bhrz29mkmr.1",
    journalLink: "Submitted to Computers and Electronics in Agriculture (Elsevier, Q1; CiteScore: 17.3)"
  },

  currentWork: [
    {
      status: "Submitted / Under Review",
      title: "Auto-IFCB-STNet: A Unified Spatio-Temporal Forensic Concept Bottleneck for Explainable Image and Video Deepfake Detection",
      venue: "Scientific Reports (Nature Portfolio)",
      role: "First Author",
      description:
        "Proposes an explainable concept bottleneck architecture linking spatial-temporal artifact features to interpretable forensic concepts, providing transparent explanations alongside high detection accuracy across multiple generators."
    },
    {
      status: "Submitted / Under Review",
      title: "Development and Evaluation of a YOLO-Based Mango Fruit Health Detection Framework Using the MangoFruitBD Dataset",
      venue: "Computers and Electronics in Agriculture (Elsevier, Q1, CiteScore: 17.3)",
      role: "2nd Co-Author",
      description:
        "Introduces the MangoFruitBD dataset and evaluates YOLO models for identifying mango diseases directly on trees under natural orchard conditions."
    }
  ],

  publications: [
    {
      badge: "First Author, IEEE Conference",
      category: "Conference Paper",
      title: "A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images",
      authors: "Sadia Afroz Oishi, Ariful Islam, M. A. Miya, M. H. Mohona, M. S. Hossain et al.",
      venue: "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII)",
      year: "2026",
      publisher: "IEEE Xplore",
      link: "https://ieeexplore.ieee.org/abstract/document/11662017/",
      xploreId: "IEEE Xplore: 11662017",
      abstract:
        "Evaluates Convolutional Neural Networks, Vision Transformers, and Recurrent Neural Networks under common social media degradations such as JPEG compression, blur, and noise. Compares feature retention and model robustness across each architecture."
    },
    {
      badge: "Second Author, IEEE Conference",
      category: "Conference Paper",
      title: "GR-ACE Net: A Hybrid Graph-Attentional Framework with Global Relational Reasoning for Deepfake Forensics",
      authors: "Ariful Islam, Sadia Afroz Oishi, M. M. Hasan, M. Mamun, M. A. Hossain, M. H. Mohona, M. A. Miya, S. K. Ray",
      venue: "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII)",
      year: "2026",
      publisher: "IEEE Xplore",
      link: "https://ieeexplore.ieee.org/abstract/document/11661873/",
      xploreId: "IEEE Xplore: 11661873",
      abstract:
        "Introduces GR-ACE Net, combining an EfficientNet backbone with spatial-channel attention and graph relational reasoning to identify inconsistencies across face regions, reaching 98.68% accuracy and 99.88% AUC-ROC."
    },
    {
      badge: "Co-Author, IEEE Conference",
      category: "Conference Paper",
      title: "A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images",
      authors: "Ariful Islam, S. K. Ray, Sadia Afroz Oishi et al.",
      venue: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN)",
      year: "2026",
      publisher: "IEEE",
      doi: "10.1109/QPAIN69676.2026.11545784",
      link: "https://doi.org/10.1109/QPAIN69676.2026.11545784",
      abstract:
        "Proposes a combined localization and classification pipeline uniting YOLO bounding boxes with EfficientNet features for identifying overlapping produce in dense market scenes."
    },
    {
      badge: "Co-Author, IEEE Conference",
      category: "Conference Paper",
      title: "Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices",
      authors: "M. A. Miya, M. H. Mohona, M. A. Hossain, M. B. A. Z. Shammo, Ariful Islam, Sadia Afroz Oishi et al.",
      venue: "2025 28th International Conference on Computer and Information Technology (ICCIT)",
      year: "2025",
      publisher: "IEEE",
      doi: "10.1109/ICCIT68739.2025.11491546",
      link: "https://doi.org/10.1109/ICCIT68739.2025.11491546",
      abstract:
        "Demonstrates mobile health monitoring using smartphone video to extract fingertip PPG signals, processed with digital filtering and evaluated through machine learning classifiers."
    },
    {
      badge: "First Author, IEEE Conference",
      category: "Conference Paper",
      title: "SpatSeqFake: A Hybrid Spatial-Sequential Framework for Cross-Dataset Deepfake Image Detection",
      authors: "Sadia Afroz Oishi et al.",
      venue: "2026 5th International Conference on Robotics, Automation, Artificial-intelligence and Internet-of-Things (RAAICON)",
      year: "2026",
      publisher: "IEEE",
      link: "#",
      abstract:
        "Designs a hybrid spatial-sequential model for cross-dataset deepfake detection, using localized artifact extraction combined with sequential modeling to identify manipulation boundaries."
    },
    {
      badge: "2nd Co-Author, Published Dataset",
      category: "Research Dataset",
      title: "MangoFruitBD: A Bounding-Box Annotated Image Dataset for Detecting Healthy and Diseased Mango Fruits in Bangladeshi Orchards",
      authors: "Ariful Islam, Sadia Afroz Oishi, Md. Mehedi Hasan et al.",
      venue: "Elsevier Mendeley Data",
      year: "2026",
      publisher: "Mendeley Data",
      doi: "10.17632/bhrz29mkmr.1",
      link: "https://doi.org/10.17632/bhrz29mkmr.1",
      abstract:
        "A field-collected dataset of 1,310 RGB images across 4 disease classes (Healthy, Anthracnose, Alternaria, Scab) captured in Bangladeshi orchards, labeled with YOLO bounding boxes for vision benchmarks."
    },
    {
      badge: "First Author, Submitted Journal",
      category: "Journal Manuscript",
      title: "Auto-IFCB-STNet: A Unified Spatio-Temporal Forensic Concept Bottleneck for Explainable Image and Video Deepfake Detection",
      authors: "Sadia Afroz Oishi et al.",
      venue: "Scientific Reports (Nature Portfolio)",
      year: "2026",
      publisher: "Springer Nature",
      link: "#",
      abstract:
        "Undergraduate thesis manuscript on explainable deepfake detection using concept bottlenecks to provide interpretable forensic indicators alongside detection results."
    },
    {
      badge: "2nd Co-Author, Submitted Journal (Q1)",
      category: "Journal Manuscript",
      title: "Development and Evaluation of a YOLO-Based Mango Fruit Health Detection Framework Using the MangoFruitBD Dataset",
      authors: "Ariful Islam, Sadia Afroz Oishi, Md. Mehedi Hasan et al.",
      venue: "Computers and Electronics in Agriculture (Elsevier, Q1, CiteScore: 17.3)",
      year: "2026",
      publisher: "Elsevier",
      link: "#",
      abstract:
        "Agricultural computer vision study introducing MangoFruitBD and testing modern YOLO architectures under orchard illumination, occlusions, and co-occurring diseases."
    }
  ],

  projects: [
    {
      title: "Auto-IFCB-STNet: Explainable Deepfake Detection Framework",
      category: "Deepfake Forensics and XAI",
      period: "2025-2026",
      lead: "Developing explainable concept bottleneck models for multi-generator facial manipulation detection.",
      bullets: [
        "Connected latent neural representations with interpretable forensic concepts like boundary warping, color mismatch, and texture irregularities.",
        "Evaluated model performance on FaceForensics++, Celeb-DF, and degraded social media benchmarks.",
        "Showed that intermediate concept activations provide verifiable explanations without compromising overall detection precision.",
        "Undergraduate capstone thesis; submitted to Scientific Reports (Nature Portfolio)."
      ],
      tags: ["Deep Learning", "Concept Bottleneck", "Explainable AI", "PyTorch", "Forensic Vision"]
    },
    {
      title: "MangoFruitBD: Orchard Pathology Dataset and YOLO Benchmark",
      category: "Smart Agriculture and Dataset Engineering",
      period: "2025-2026",
      lead: "Curating a 1,310-image field-collected dataset and evaluating YOLOv8/v11 detectors for automated crop health monitoring.",
      bullets: [
        "Collected high-resolution photos in commercial mango orchards in Bangladesh under natural sunlight.",
        "Created and reviewed bounding boxes in CVAT and Roboflow for Healthy, Anthracnose, Alternaria, and Scab classes.",
        "Set up YOLO coordinate formats and balanced train/val/test splits.",
        "Published on Mendeley Data (DOI: 10.17632/bhrz29mkmr.1) and submitted to an Elsevier Q1 journal."
      ],
      tags: ["Dataset Curation", "CVAT", "YOLOv8", "Roboflow", "Smart Agriculture", "Mendeley Data"]
    },
    {
      title: "Hybrid YOLO-EfficientNet Dense Produce Recognition Framework",
      category: "Computer Vision and Object Detection",
      period: "2025-2026",
      lead: "Two-stage localization and deep classification pipeline for recognizing vegetables in dense market photos.",
      bullets: [
        "Handled spatial overlap and occlusion challenges in crowded multi-object agricultural settings.",
        "Paired YOLO bounding-box detection with EfficientNet deep feature representations.",
        "Published and presented at IEEE QPAIN 2026 (DOI: 10.1109/QPAIN69676.2026.11545784)."
      ],
      tags: ["Object Detection", "YOLO", "EfficientNet", "Dense Scenes", "IEEE QPAIN 2026"]
    },
    {
      title: "Mobile PPG Cardiovascular Biosignal Processing System",
      category: "Biomedical Signal Processing and Mobile AI",
      period: "2024-2025",
      lead: "Smartphone camera based remote photoplethysmography pipeline for cardiovascular health assessment.",
      bullets: [
        "Recorded optical absorption pulses from camera flash contact with the human fingertip.",
        "Built bandpass filters, baseline detrending, and peak detection algorithms to extract pulse intervals.",
        "Evaluated machine learning classification models for cardiovascular stress estimation.",
        "Published in IEEE ICCIT 2025 proceedings (DOI: 10.1109/ICCIT68739.2025.11491546)."
      ],
      tags: ["Signal Processing", "PPG", "Mobile Health", "Python", "Machine Learning", "IEEE ICCIT 2025"]
    },
    {
      title: "SpatSeqFake: Cross-Dataset Spatial-Sequential Deepfake Detector",
      category: "Deepfake Forensics and Recurrent Models",
      period: "2025-2026",
      lead: "Hybrid neural architecture combining spatial feature extractors with recurrent sequence modeling for cross-dataset generalization.",
      bullets: [
        "Modeled localized boundary artifacts as sequential transitions to withstand compression and filtering.",
        "Demonstrated generalizability across unseen deepfake manipulation tools.",
        "Presented as First Author at IEEE RAAICON 2026."
      ],
      tags: ["Sequential Modeling", "Spatial Convolutions", "Cross-Dataset Robustness", "IEEE RAAICON 2026"]
    },
    {
      title: "PUST Academic Management and Student Examination Portal",
      category: "Database and Software Engineering",
      period: "2024",
      lead: "Relational database and management system built for student records and examination administration.",
      bullets: [
        "Designed relational database schemas in Microsoft SQL Server with key constraints and role access.",
        "Created user interfaces for course registration, transcript generation, and grade calculation.",
        "Wrote stored procedures and queries for semester result generation."
      ],
      tags: ["SQL Server", "DBMS", "Software Engineering", "Full-Stack", "Relational Database"]
    }
  ],

  certifications: [
    {
      title: "Certificate of Appreciation, Peer Reviewer (4th IEEE RAAICON 2025)",
      issuer: "4th IEEE International Conference on Robotics, Automation, AI and IoT (RAAICON 2025)",
      venue: "Military Institute of Science and Technology (MIST), Dhaka, Bangladesh",
      date: "2025",
      image: "assets/images/peer-reviewer-appreciation-raaicon.jpg",
      description:
        "Official Certificate of Appreciation recognizing Sadia Afroz Oishi for peer-reviewing submitted research papers in machine learning, neural architectures, and computer vision."
    },
    {
      title: "Certificate of Appreciation, Peer Reviewer (5th IEEE RAAICON 2026)",
      issuer: "5th IEEE International Conference on Robotics, Automation, AI and IoT (RAAICON 2026)",
      venue: "IEEE Bangladesh Section",
      date: "2026",
      description:
        "Awarded official certificate for peer-review service evaluating scholarly submissions in computational intelligence, pattern recognition, and digital media forensics."
    },
    {
      title: "Certificate of Presentation, 1st IEEE PECCII 2026",
      issuer: "IEEE International Conference on Power, Electronics, Communications, Computing and Intelligent Infrastructure",
      venue: "Pabna University of Science and Technology (PUST), Bangladesh",
      date: "June 2026",
      image: "assets/images/peccii-2026-presentation-certificate-stage.jpg",
      description:
        "Certified oral presentation and technical defense of first-authored paper: A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images."
    },
    {
      title: "Certificate of Presentation, IEEE QPAIN 2026",
      issuer: "2026 IEEE 2nd International Conference on Quantum Photonics, AI and Networking (QPAIN)",
      venue: "Chittagong University of Engineering and Technology (CUET), Bangladesh",
      date: "April 2026",
      image: "assets/images/qpain-2026-presentation-certificate.jpg",
      description:
        "Official certificate for presenting co-authored research: A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images."
    },
    {
      title: "Certificate of Presentation, 28th IEEE ICCIT 2025",
      issuer: "28th International Conference on Computer and Information Technology (ICCIT 2025)",
      venue: "Cox's Bazar, Bangladesh",
      date: "December 2025",
      image: "assets/images/iccit-2025-presentation-certificate.jpg",
      description:
        "Official certificate for presenting research: Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices."
    },
    {
      title: "Certificate of Presentation, 1st RUEC International Conference 2025",
      issuer: "Rajshahi University Engineering Club (RUEC)",
      venue: "University of Rajshahi, Bangladesh",
      date: "2025",
      image: "assets/images/ruec-2025-presentation-certificate.jpg",
      description:
        "Awarded certificate of presentation for delivering oral research defense before session chairs and engineering faculty."
    },
    {
      title: "Excellence Boot Camp Certification, PUSTCEC",
      issuer: "PUST Career and Entrepreneurship Club (PUSTCEC)",
      venue: "PUST, Pabna, Bangladesh",
      date: "2024-2025",
      credentialId: "EBC-2412016",
      image: "assets/images/pustcec-bootcamp-certificate.jpg",
      description:
        "Verified credential awarded upon successful completion of the 3-month PUSTCEC Excellence Boot Camp covering leadership, professional communication, and project coordination."
    },
    {
      title: "Debate Championship Certificate, ICE Fiesta 2025",
      issuer: "Department of ICE and Information and Communication Engineering Association, PUST",
      venue: "PUST, Pabna, Bangladesh",
      date: "2025",
      image: "assets/images/ice-association-debate-championship-certificate.jpg",
      description:
        "Winner certificate signed by the Chairman of ICE and Association President, honoring Team Voice of Victory as Champions of the Parliamentary Debate Tournament."
    }
  ],

  achievements: [
    {
      title: "Debate Champion: ICE Fiesta 2025 Parliamentary Debate Tournament",
      badge: "Grand Champion",
      date: "2025",
      icon: "fas fa-trophy",
      image: "assets/images/debate-champion-award-stage.jpg",
      description:
        "Led Team Voice of Victory to win the championship in the ICE Fiesta 2025 Inter-Batch Parliamentary Debate Tournament arranged by the ICE Association, PUST."
    },
    {
      title: "Debater of the Tournament: ICE Fiesta 2025",
      badge: "Highest Individual Speaker Award",
      date: "2025",
      icon: "fas fa-award",
      image: "assets/images/debater-of-the-tournament-award-stage.jpg",
      description:
        "Awarded the Debater of the Tournament individual trophy, recognizing Sadia as the highest-scoring parliamentary speaker across all tournament rounds."
    },
    {
      title: "Scholarly Peer Reviewer Recognition: IEEE RAAICON (2025 and 2026)",
      badge: "Academic Peer Review",
      date: "2025-2026",
      icon: "fas fa-certificate",
      image: "assets/images/peer-reviewer-appreciation-raaicon.jpg",
      description:
        "Designated peer reviewer for the 4th and 5th IEEE RAAICON international conferences, receiving official certificates of appreciation."
    },
    {
      title: "First-Author IEEE Conference Paper and Presentation",
      badge: "Research Presentation",
      date: "2026",
      icon: "fas fa-microscope",
      image: "assets/images/peccii-2026-author-attendance.jpg",
      description:
        "Authored and delivered first-author presentation for 'A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images' at IEEE PECCII 2026 (IEEE Xplore: 11662017)."
    },
    {
      title: "Core Contributor and 2nd Co-Author: MangoFruitBD Published Dataset",
      badge: "Open-Access Dataset",
      date: "2026",
      icon: "fas fa-database",
      description:
        "Contributed to collecting, labeling, and publishing the 1,310-image MangoFruitBD dataset on Elsevier Mendeley Data (DOI: 10.17632/bhrz29mkmr.1)."
    },
    {
      title: "Academic Standing: B.Sc. Degree Completed (CGPA 3.67 / 4.00)",
      badge: "Degree Completed",
      date: "2026",
      icon: "fas fa-graduation-cap",
      description:
        "Completed all 8 semesters of the B.Sc. (Engineering) program in Information and Communication Engineering at PUST with a 3.67 / 4.00 CGPA."
    },
    {
      title: "Double Golden GPA 5.00/5.00 in HSC (2020) and SSC (2018)",
      badge: "Board Distinction",
      date: "2018 and 2020",
      icon: "fas fa-star",
      description:
        "Achieved GPA 5.00 / 5.00 in both Higher Secondary Certificate (HSC) from Savar Model College and Secondary School Certificate (SSC) from Radio Colony Model School and College."
    }
  ],

  experiences: [
    {
      role: "Joint Organizing Secretary",
      organization: "PUST Career and Entrepreneurship Club (PUSTCEC)",
      period: "2025-2026",
      location: "PUST, Pabna, Bangladesh",
      image: "assets/images/pustcec-joint-organizing-secretary-appointment.jpg",
      bullets: [
        "Received formal appointment letter during the Freshers' Reception and Career Seminar in October 2025.",
        "Helped organize career development workshops, competitive programming sessions, and boot camps on campus.",
        "Coordinated with student members and handled logistics for guest speakers and mentors."
      ]
    },
    {
      role: "Founding Member",
      organization: "PUST Career and Entrepreneurship Club (PUSTCEC)",
      period: "2024-Present",
      location: "PUST, Pabna, Bangladesh",
      image: "assets/images/pustcec-founding-member-charter-signing.jpg",
      bullets: [
        "Formally signed the Founding Charter of PUSTCEC, helping establish the club's structure and activity roadmap.",
        "Contributed to student mentorship drives and club branding."
      ]
    },
    {
      role: "Podcast Host",
      organization: "PUST Career and Entrepreneurship Club (Mic and Minds)",
      period: "2025",
      location: "PUST, Pabna, Bangladesh",
      image: "assets/images/hosting-mic-and-minds-podcast.jpg",
      bullets: [
        "Hosted and moderated Episode 02 of the club podcast Mic and Minds.",
        "Conducted structured interviews with guests on career preparation and building practical skills during university."
      ]
    },
    {
      role: "Academic Peer Reviewer",
      organization: "IEEE International Conferences (RAAICON 2025 and 2026)",
      period: "2025-2026",
      location: "IEEE Bangladesh Section / MIST Dhaka",
      image: "assets/images/peer-reviewer-appreciation-raaicon.jpg",
      bullets: [
        "Reviewed submitted manuscripts in deep learning, computer vision, and IoT systems.",
        "Provided constructive technical feedback on methodologies, results, and experimental setups."
      ]
    },
    {
      role: "Undergraduate Researcher",
      organization: "Department of ICE, Pabna University of Science and Technology",
      period: "2024-2026",
      location: "Pabna, Bangladesh",
      bullets: [
        "Conducted undergraduate thesis research under Professor Dr. Md. Sarwar Hossain on explainable deepfake detection.",
        "Collaborated with department peers on IEEE conference papers, journal manuscripts, and open datasets."
      ]
    }
  ],

  extracurricular: [
    {
      title: "Stage Host: 1st ICE Alumni Reunion 2025 (Formal and Cultural Sessions)",
      period: "January 11, 2025",
      role: "Master of Ceremonies and Anchor",
      image: "assets/images/hosting-ice-reunion-formal-ceremony.jpg",
      bullets: [
        "Anchored the formal opening session from the podium with university dignitaries including the Vice-Chancellor, Dean of Engineering, and faculty members.",
        "Hosted the evening musical concert and cultural program for alumni and students.",
        "Managed stage schedules, guest introductions, and program transitions."
      ]
    },
    {
      title: "Host: PUSTCEC Mic and Minds Podcast (Episode 02)",
      period: "2025",
      role: "Podcast Host and Interviewer",
      image: "assets/images/hosting-mic-and-minds-podcast.jpg",
      bullets: [
        "Anchored the second episode of the campus podcast series, engaging guests in discussions on professional skills and academic balance.",
        "Managed conversational flow and interview questions."
      ]
    },
    {
      title: "Competitive Parliamentary Debating: ICE Fiesta 2025",
      period: "2025",
      role: "Debate Champion and Debater of the Tournament",
      image: "assets/images/debate-champion-and-debater-trophies.jpg",
      bullets: [
        "Competed with Team Voice of Victory as prime speaker, winning the departmental debate championship.",
        "Awarded individual Debater of the Tournament trophy for highest total speaker points.",
        "Practiced argumentation, rebuttal strategies, and public speaking."
      ]
    },
    {
      title: "Student Club Coordination: PUSTCEC",
      period: "2024-2026",
      role: "Joint Organizing Secretary and Founding Member",
      image: "assets/images/pustcec-joint-organizing-secretary-appointment.jpg",
      bullets: [
        "Organized the PUSTCEC Freshers' Reception and Career Seminar in October 2025.",
        "Completed the 3-month PUSTCEC Excellence Boot Camp (Credential: EBC-2412016).",
        "Coordinated member communications and event logistics."
      ]
    }
  ],

  presentations: [
    {
      conference: "1st IEEE PECCII 2026",
      venue: "Pabna University of Science and Technology, Pabna, Bangladesh",
      date: "17-18 June 2026",
      role: "First Author Presenter",
      paperTitle: "A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images",
      image: "assets/images/peccii-2026-presentation-certificate-stage.jpg",
      summary:
        "Delivered first-author presentation and answered audience questions on model robustness across CNN, ViT, and RNN architectures under real-world social media degradations."
    },
    {
      conference: "28th IEEE ICCIT 2025",
      venue: "Cox's Bazar, Bangladesh",
      date: "December 2025",
      role: "Presenting Author and Co-Author",
      paperTitle: "Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices",
      image: "assets/images/iccit-2025-presentation-certificate.jpg",
      summary:
        "Presented research on fingertip photoplethysmography (PPG) signal acquisition, digital filtering pipelines, and mobile machine learning algorithms for remote vitals estimation."
    },
    {
      conference: "2026 IEEE 2nd QPAIN 2026",
      venue: "Chittagong University of Engineering and Technology (CUET), Bangladesh",
      date: "April 2026",
      role: "Presenting Author and Co-Author",
      paperTitle: "A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images",
      image: "assets/images/qpain-2026-presentation-certificate.jpg",
      summary:
        "Presented the YOLO-EfficientNet methodology for dense agricultural produce localization and classification during the artificial intelligence conference session."
    },
    {
      conference: "1st RUEC International Conference 2025",
      venue: "University of Rajshahi, Rajshahi, Bangladesh",
      date: "2025",
      role: "Oral Presenting Author",
      paperTitle: "Deep Learning Architectures for Computational Image Analysis",
      image: "assets/images/ruec-2025-research-presentation.jpg",
      summary:
        "Delivered on-stage oral presentation with slides and microphone, presenting deep learning methodologies and taking questions from faculty session chairs."
    },
    {
      conference: "5th IEEE RAAICON 2026",
      venue: "IEEE Bangladesh Section",
      date: "2026",
      role: "First Author Presenter",
      paperTitle: "SpatSeqFake: A Hybrid Spatial-Sequential Framework for Cross-Dataset Deepfake Image Detection",
      summary:
        "Presented the SpatSeqFake framework for generalizable cross-dataset facial manipulation detection, explaining the spatial artifact recurrence mechanism."
    }
  ],

  gallery: [
    {
      src: "assets/images/profile-sadia-afroz-oishi.png",
      thumb: "assets/images/profile-sadia-afroz-oishi.png",
      title: "Sadia Afroz Oishi: Formal Academic Portrait",
      date: "2026",
      venue: "Pabna University of Science and Technology",
      category: "Academic Profile",
      desc: "Official formal academic portrait of Sadia Afroz Oishi, B.Sc. (Engineering) in Information and Communication Engineering, PUST. Used as primary portfolio display photograph."
    },
    {
      src: "assets/images/peccii-2026-author-attendance.jpg",
      thumb: "assets/images/peccii-2026-author-attendance.jpg",
      title: "Attending 1st IEEE PECCII Conference as Author",
      date: "June 2026",
      venue: "PUST, Pabna, Bangladesh",
      category: "Conferences and Research",
      desc: "Sadia Afroz Oishi wearing the official Author badge at the 2026 IEEE International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), where she presented her first-author deepfake paper."
    },
    {
      src: "assets/images/peccii-2026-presentation-certificate-stage.jpg",
      thumb: "assets/images/peccii-2026-presentation-certificate-stage.jpg",
      title: "Receiving Presentation Certificate on Stage: IEEE PECCII 2026",
      date: "June 2026",
      venue: "PECCII 2026 Stage, PUST",
      category: "Conferences and Research",
      desc: "Sadia Afroz Oishi receiving her official certificate of presentation on stage from session chairs following her oral defense."
    },
    {
      src: "assets/images/ruec-2025-research-presentation.jpg",
      thumb: "assets/images/ruec-2025-research-presentation.jpg",
      title: "Delivering Oral Presentation at 1st RUEC Conference",
      date: "2025",
      venue: "University of Rajshahi, Bangladesh",
      category: "Conferences and Research",
      desc: "Sadia on stage delivering an oral presentation with slides and microphone before session chairs and delegates at the 1st RUEC International Conference."
    },
    {
      src: "assets/images/ruec-2025-presentation-certificate.jpg",
      thumb: "assets/images/ruec-2025-presentation-certificate.jpg",
      title: "Certificate of Presentation: 1st RUEC Conference",
      date: "2025",
      venue: "University of Rajshahi, Bangladesh",
      category: "Conferences and Research",
      desc: "Official certificate from Rajshahi University Engineering Club (RUEC) certifying Sadia Afroz Oishi's oral presentation of her research paper at the 1st RUEC International Conference."
    },
    {
      src: "assets/images/iccit-2025-presentation-certificate.jpg",
      thumb: "assets/images/iccit-2025-presentation-certificate.jpg",
      title: "Certificate of Presentation: 28th IEEE ICCIT 2025",
      date: "December 2025",
      venue: "Cox's Bazar, Bangladesh",
      category: "Conferences and Research",
      desc: "Official presentation certificate awarded at the 28th IEEE International Conference on Computer and Information Technology (ICCIT 2025) for co-authored PPG remote health monitoring research."
    },
    {
      src: "assets/images/qpain-2026-presentation-certificate.jpg",
      thumb: "assets/images/qpain-2026-presentation-certificate.jpg",
      title: "Certificate of Presentation: IEEE QPAIN 2026",
      date: "April 2026",
      venue: "CUET, Chittagong, Bangladesh",
      category: "Conferences and Research",
      desc: "Official certificate of presentation awarded at the 2nd IEEE International Conference on Quantum Photonics, AI and Networking (QPAIN 2026) for co-authored YOLO-EfficientNet vegetable recognition research."
    },
    {
      src: "assets/images/peer-reviewer-appreciation-raaicon.jpg",
      thumb: "assets/images/peer-reviewer-appreciation-raaicon.jpg",
      title: "Peer Reviewer Certificate of Appreciation: 4th IEEE RAAICON 2025",
      date: "2025",
      venue: "MIST, Dhaka, Bangladesh",
      category: "Certifications and Service",
      desc: "Official Certificate of Appreciation from 4th IEEE RAAICON 2025, honoring Sadia Afroz Oishi for reviewing conference manuscripts in AI and machine learning."
    },
    {
      src: "assets/images/debate-champion-award-stage.jpg",
      thumb: "assets/images/debate-champion-award-stage.jpg",
      title: "Receiving Debate Championship Trophy on Stage",
      date: "2025",
      venue: "ICE Fiesta 2025 Stage, PUST",
      category: "Debate and Awards",
      desc: "Sadia and her teammates receiving the ICE Fiesta 2025 Debate Championship trophy from departmental faculty judges."
    },
    {
      src: "assets/images/debater-of-the-tournament-award-stage.jpg",
      thumb: "assets/images/debater-of-the-tournament-award-stage.jpg",
      title: "Receiving Debater of the Tournament Accolade on Stage",
      date: "2025",
      venue: "ICE Fiesta 2025 Stage, PUST",
      category: "Debate and Awards",
      desc: "Stage ceremony honoring Sadia Afroz Oishi with the individual Debater of the Tournament trophy at ICE Fiesta 2025, celebrating her performance across all rounds."
    },
    {
      src: "assets/images/debate-champion-and-debater-trophies.jpg",
      thumb: "assets/images/debate-champion-and-debater-trophies.jpg",
      title: "Debate Champion and Debater of the Tournament Trophies",
      date: "2025",
      venue: "PUST, Pabna, Bangladesh",
      category: "Debate and Awards",
      desc: "Close-up view of the dual trophies won by Sadia at the ICE Fiesta Debate Tournament: the Champion Trophy awarded to Team Voice of Victory, and the individual Debater of the Tournament trophy."
    },
    {
      src: "assets/images/ice-association-debate-championship-certificate.jpg",
      thumb: "assets/images/ice-association-debate-championship-certificate.jpg",
      title: "ICE Association Debate Championship Certificate",
      date: "2025",
      venue: "Department of ICE, PUST",
      category: "Debate and Awards",
      desc: "Winner certificate issued by the ICE Association, PUST, confirming Sadia Afroz Oishi's team as the Champion of the ICE Fiesta 2025 Inter-Batch Parliamentary Debate Tournament."
    },
    {
      src: "assets/images/hosting-ice-reunion-formal-ceremony.jpg",
      thumb: "assets/images/hosting-ice-reunion-formal-ceremony.jpg",
      title: "Hosting Grand Formal Ceremony: 1st ICE Alumni Reunion 2025",
      date: "January 11, 2025",
      venue: "Central Auditorium, PUST",
      category: "Media and Hosting",
      desc: "Sadia hosting the opening formal ceremony of the 1st ICE Alumni Reunion from the podium, alongside the PUST Vice-Chancellor, Dean of Engineering, and senior alumni."
    },
    {
      src: "assets/images/hosting-ice-reunion-cultural-night.jpg",
      thumb: "assets/images/hosting-ice-reunion-cultural-night.jpg",
      title: "Anchoring Evening Cultural Concert: 1st ICE Alumni Reunion 2025",
      date: "January 11, 2025",
      venue: "Grand Stage, PUST",
      category: "Media and Hosting",
      desc: "Sadia anchoring the evening concert during the 1st ICE Alumni Reunion before an audience of alumni, teachers, and students."
    },
    {
      src: "assets/images/hosting-mic-and-minds-podcast.jpg",
      thumb: "assets/images/hosting-mic-and-minds-podcast.jpg",
      title: "Host of Mic and Minds Podcast (Episode 02): PUSTCEC",
      date: "2025",
      venue: "PUST Career and Entrepreneurship Club",
      category: "Media and Hosting",
      desc: "Promotional banner featuring Sadia Afroz Oishi as host of the Mic and Minds Podcast Episode 02, leading a conversation on student skill building and career paths."
    },
    {
      src: "assets/images/pustcec-joint-organizing-secretary-appointment.jpg",
      thumb: "assets/images/pustcec-joint-organizing-secretary-appointment.jpg",
      title: "Appointment Ceremony as Joint Organizing Secretary, PUSTCEC",
      date: "October 2025",
      venue: "PUST Auditorium",
      category: "Leadership and Service",
      desc: "Onstage handover of the appointment letter to Sadia Afroz Oishi as Joint Organizing Secretary of PUSTCEC during the Freshers' Reception and Career Seminar in October 2025."
    },
    {
      src: "assets/images/pustcec-founding-member-charter-signing.jpg",
      thumb: "assets/images/pustcec-founding-member-charter-signing.jpg",
      title: "Signing Founding Member Charter of PUSTCEC",
      date: "2024",
      venue: "PUST, Pabna, Bangladesh",
      category: "Leadership and Service",
      desc: "Sadia Afroz Oishi signing the Founding Charter of the PUST Career and Entrepreneurship Club (PUSTCEC)."
    },
    {
      src: "assets/images/pustcec-bootcamp-certificate.jpg",
      thumb: "assets/images/pustcec-bootcamp-certificate.jpg",
      title: "PUSTCEC Excellence Boot Camp Certificate",
      date: "2024-2025",
      venue: "PUST Career and Entrepreneurship Club",
      category: "Certifications and Service",
      desc: "Certificate of completion awarded to Sadia Afroz Oishi (Credential ID: EBC-2412016) for completing the 3-month PUSTCEC Excellence Boot Camp."
    }
  ],

  skills: [
    {
      title: "AI, Deep Learning and Forensics",
      icon: "fas fa-brain",
      description: "Neural network architectures, deepfake detection frameworks, and computer vision libraries.",
      items: [
        { name: "PyTorch", mark: "PT" },
        { name: "TensorFlow", mark: "TF" },
        { name: "OpenCV", mark: "CV" },
        { name: "YOLO (v8/v11)", mark: "YOLO" },
        { name: "Vision Transformers", mark: "ViT" },
        { name: "Concept Bottlenecks (XAI)", mark: "XAI" },
        { name: "scikit-learn", mark: "SK" },
        { name: "NumPy and Pandas", mark: "NP" }
      ]
    },
    {
      title: "Dataset Engineering and Annotation",
      icon: "fas fa-draw-polygon",
      description: "End-to-end dataset pipeline from field acquisition to bounding-box annotation and curation.",
      items: [
        { name: "CVAT (Computer Vision Annotation)", mark: "CVAT" },
        { name: "Roboflow Pipeline", mark: "RF" },
        { name: "LabelImg", mark: "LI" },
        { name: "Field Image Acquisition", mark: "FIELD" },
        { name: "Dataset Auditing and Splitting", mark: "QA" },
        { name: "Data Augmentation", mark: "AUG" }
      ]
    },
    {
      title: "Programming Languages",
      icon: "fas fa-code",
      description: "Core programming and scripting languages for scientific modeling and system implementation.",
      items: [
        { name: "Python", mark: "PY" },
        { name: "C / C++", mark: "C" },
        { name: "SQL", mark: "SQL" },
        { name: "JavaScript", mark: "JS" },
        { name: "MATLAB", mark: "MAT" },
        { name: "HTML5 / CSS3", mark: "WEB" }
      ]
    },
    {
      title: "Tools, Systems and Platforms",
      icon: "fas fa-screwdriver-wrench",
      description: "Development environments, version control, database engines, and simulation tools.",
      items: [
        { name: "Visual Studio Code", mark: "VSC" },
        { name: "Jupyter Notebook", mark: "JUP" },
        { name: "Google Colab", mark: "COLAB" },
        { name: "Git and GitHub", mark: "GIT" },
        { name: "MS SQL Server", mark: "SSMS" },
        { name: "Proteus and Packet Tracer", mark: "SIM" }
      ]
    }
  ],

  references: [
    {
      name: "Dr. Md. Sarwar Hossain",
      role: "Professor and Undergraduate Thesis Supervisor",
      affiliation: "Department of Information and Communication Engineering, Pabna University of Science and Technology (PUST), Pabna, Bangladesh",
      email: "sarwar.ice@pust.ac.bd",
      relationship: "Supervised undergraduate capstone thesis on Auto-IFCB-STNet explainable deepfake detection and co-authored conference and journal manuscripts."
    },
    {
      name: "Dr. Md. Anwar Hossain",
      role: "Dean, Faculty of Engineering and Technology, Professor and Chairman",
      affiliation: "Department of Information and Communication Engineering, Pabna University of Science and Technology (PUST), Pabna, Bangladesh",
      email: "manwar.ice@pust.ac.bd",
      relationship: "Academic Referee, Departmental Chairman, and Dean overseeing 4-year B.Sc. (Engineering) degree curriculum and academic progression."
    }
  ]
};
