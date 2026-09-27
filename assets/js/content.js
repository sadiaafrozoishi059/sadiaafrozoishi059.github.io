/*
 * PRIMARY DATA REPOSITORY: assets/js/content.js
 * Comprehensive academic, research, publications, and photographic database
 * for Sadia Afroz Oishi (PUST ICE 2026).
 */

export const portfolio = {
  profile: {
    name: "Sadia Afroz Oishi",
    shortName: "Sadia",
    role: "Computer Vision & Deepfake Forensics Researcher",
    affiliation: "Department of Information and Communication Engineering, Pabna University of Science and Technology, Pabna, Bangladesh",
    location: "Bangladesh",
    email: "sadiaafrozoishi059@gmail.com",
    phone: "+880 1871-554214",
    cv: "assets/documents/Sadia-Afroz-Oishi-CV.pdf",
    cvZip: "assets/documents/Sadia_Afroz_Oishi_Full_CV.zip",
    portrait: "assets/images/profile-sadia-afroz-oishi.png",
    headline: "Engineering explainable deepfake forensics, robust spatio-temporal architectures, and intelligent agricultural vision systems.",
    status: "B.Sc. (Engineering) in ICE from PUST completed with CGPA 3.67 / 4.00 (All 8 Semesters Completed).",
    intro:
      "I am an Information and Communication Engineering graduate from Pabna University of Science and Technology (PUST) with a dedicated research focus in Artificial Intelligence, Deepfake Forensics, Computer Vision, and Biosignal Processing. Driven by an evidence-based pursuit of trustworthy and explainable AI, my undergraduate thesis formulated 'Auto-IFCB-STNet'—a unified spatio-temporal concept bottleneck framework for interpretable image and video forgery detection submitted to Scientific Reports.",
    about: [
      "My research portfolio spans 5+ peer-reviewed IEEE and international conference publications, 2 submitted journal manuscripts (including high-impact Q1 venues), and 1 published open-access research dataset on Mendeley Data. My scholarly efforts bridge theoretical robustness under severe real-world media degradation with practical societal applications in smart agriculture and accessible remote healthcare.",
      "As a core 2nd co-author and data engineer, I contributed extensively to the creation, field acquisition, CVAT annotation, and benchmarking of MangoFruitBD—an open-access Mendeley Data dataset of 1,310 orchard images across 4 diagnostic disease classes, powering fine-grained YOLO detection architectures and a submitted journal manuscript in Computers and Electronics in Agriculture (Elsevier, Q1).",
      "Beyond laboratory investigations, I am an active academic peer reviewer for IEEE RAAICON, the Parliamentary Debate Champion and Debater of the Tournament at ICE Fiesta 2025, and served as Joint Organizing Secretary and Founding Member of the PUST Career and Entrepreneurship Club (PUSTCEC), where I anchored university-wide galas and hosted the official 'Mic & Minds' podcast."
    ],
    socials: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=c2tcMcYAAAAJ&hl=en", icon: "fas fa-graduation-cap" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/oishi12", icon: "fab fa-linkedin-in" },
      { label: "Email", url: "mailto:sadiaafrozoishi059@gmail.com", icon: "fas fa-envelope" },
      { label: "Phone", url: "tel:+8801871554214", icon: "fas fa-phone" },
      { label: "Download CV", url: "assets/documents/Sadia-Afroz-Oishi-CV.pdf", icon: "fas fa-file-pdf" }
    ]
  },

  stats: [
    { value: "5+", label: "Peer-Reviewed IEEE & Conf. Papers" },
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
      summary: "First language and mother tongue. Complete native fluency across oral, written, literary, academic, and public speaking communication.",
      highlights: [
        { label: "Native Fluency", text: "Full native mastery of spoken and written Bangla across colloquial, formal, administrative, and academic contexts." },
        { label: "Parliamentary Debate Champion", text: "Awarded 'Debater of the Tournament' and led Team Voice of Victory to win the ICE Fiesta 2025 Parliamentary Debate Tournament in Bangla." },
        { label: "Stage Anchoring & Emceeing", text: "Official stage anchor for the 1st ICE Alumni Reunion 2025, delivering bilingual introductory rhetoric for both the high-table formal ceremony and the festive evening concert." },
        { label: "Media & Podcast Production", text: "Hosted Episode 02 of the official PUSTCEC 'Mic & Minds Podcast' in Bangla, guiding in-depth dialogue on career growth and student entrepreneurship." }
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
      summary: "Sole official Medium of Instruction (MOI) throughout the 4-year Bachelor of Science in Engineering degree at Pabna University of Science and Technology (PUST).",
      highlights: [
        { label: "100% Medium of Instruction", text: "All undergraduate coursework, lectures, laboratory investigations, technical defenses, and degree examinations were conducted exclusively in English." },
        { label: "International Scholarly Authorship", text: "Authored first-author and co-authored manuscripts published with IEEE Xplore, Nature Portfolio (under review), and Elsevier (under review) entirely in English." },
        { label: "Oral Conference Defense", text: "Delivered first-author oral presentation and technical defense in English at IEEE PECCII 2026, RAAICON 2026, ICCIT 2025, and RUEC 2025." },
        { label: "Peer Review Service", text: "Conducted formal, English-language scholarly peer reviews for international submissions at the 4th and 5th IEEE RAAICON conferences." },
        { label: "Technical & LaTeX Proficiency", text: "Extensive experience drafting research papers, mathematical modeling, and LaTeX manuscripts formatted to IEEE and Springer Nature guidelines." }
      ]
    }
  ],

  portalSections: [
    { icon: "fas fa-graduation-cap", title: "Education", desc: "B.Sc. in ICE at PUST (CGPA 3.67), undergraduate thesis, academic milestones, and core engineering coursework.", href: "education.html" },
    { icon: "fas fa-language", title: "Languages", desc: "Native Bangla and 100% English Medium of Instruction (MOI) for B.Sc. Engineering.", href: "languages.html" },
    { icon: "fas fa-microscope", title: "Research", desc: "Deepfake forensics, Auto-IFCB-STNet, MangoFruitBD dataset creation, and explainable AI paradigms.", href: "research.html" },
    { icon: "fas fa-book-open", title: "Publications", desc: "Peer-reviewed IEEE conference papers, Q1 submitted journal manuscripts, Mendeley Data, and DOI links.", href: "publications.html" },
    { icon: "fas fa-laptop-code", title: "Projects", desc: "Explainable deepfake detection, smart orchard computer vision, mobile PPG biosignals, and database systems.", href: "projects.html" },
    { icon: "fas fa-certificate", title: "Certifications", desc: "IEEE peer-review appreciation, international conference presentation credentials, and PUSTCEC boot camp.", href: "certifications.html" },
    { icon: "fas fa-trophy", title: "Achievements", desc: "Debate tournament championship, debater of the tournament accolade, and academic excellence awards.", href: "achievements.html" },
    { icon: "fas fa-chalkboard-user", title: "Experiences", desc: "Joint Organizing Secretary at PUSTCEC, Founding Member, academic researcher, and IEEE peer reviewer.", href: "experiences.html" },
    { icon: "fas fa-users-gear", title: "Extra-Curricular", desc: "Flagship reunion emceeing, podcast hosting ('Mic & Minds'), competitive debating, and student governance.", href: "extracurricular.html" },
    { icon: "fas fa-chalkboard-teacher", title: "Presentations", desc: "Oral technical presentations and defense records across IEEE PECCII, ICCIT, QPAIN, RUEC, and RAAICON.", href: "presentations.html" },
    { icon: "fas fa-images", title: "Gallery", desc: "17 visual evidence records spanning conference stages, presentation certificates, awards, and leadership.", href: "gallery.html" }
  ],

  education: [
    {
      period: "2022–2026",
      title: "Bachelor of Science (Engineering) in Information and Communication Engineering",
      place: "Department of ICE, Pabna University of Science and Technology (PUST), Bangladesh",
      grade: "CGPA: 3.67 / 4.00",
      mediumOfInstruction: "Medium of Instruction: English",
      status: "All 8 Semesters Completed · Final Degree Completed",
      description:
        "Rigorous 4-year undergraduate curriculum covering computer vision, deep learning, digital signal and image processing, wireless communications, algorithms, and artificial intelligence. Completed undergraduate capstone thesis with top academic commendation.",
      thesis: "Auto-IFCB-STNet: A Unified Spatio-Temporal Forensic Concept Bottleneck for Explainable Image and Video Deepfake Detection",
      supervisor: "Dr. Md. Sarwar Hossain, Professor, Department of ICE, PUST",
      referee: "Dr. Md. Anwar Hossain, Dean, Faculty of Engineering & Technology, Professor & Chairman, Department of ICE, PUST"
    },
    {
      period: "2018–2020",
      title: "Higher Secondary Certificate (HSC) — Science",
      place: "Savar Model College, Savar, Dhaka, Bangladesh",
      grade: "GPA: 5.00 / 5.00 (Golden Merit)",
      mediumOfInstruction: "Board of Intermediate and Secondary Education, Dhaka",
      status: "First Division with Highest Distinction",
      description:
        "Comprehensive science curriculum emphasizing Advanced Mathematics, Physics, Chemistry, Biology, and English. Graduated with perfect grade point average across all theoretical and laboratory disciplines."
    },
    {
      period: "2016–2018",
      title: "Secondary School Certificate (SSC) — Science",
      place: "Radio Colony Model School and College, Savar, Dhaka, Bangladesh",
      grade: "GPA: 5.00 / 5.00 (Golden Merit)",
      mediumOfInstruction: "Board of Intermediate and Secondary Education, Dhaka",
      status: "First Division with Highest Distinction",
      description:
        "Foundational STEM studies covering General and Higher Mathematics, Physics, Chemistry, Biology, and Computer Studies. Achieved a perfect GPA 5.00."
    }
  ],

  coursework: [
    "Artificial Intelligence & Robotics",
    "Neural Networks & Deep Learning",
    "Digital Image & Speech Processing",
    "Natural Language Processing",
    "Computer Vision & Pattern Recognition",
    "Database Management Systems (DBMS)",
    "Software Analysis & System Testing",
    "Data Structures & Algorithms",
    "Computer Architecture & Microcontrollers",
    "Wireless & Mobile Communications",
    "Digital Signal Processing (DSP)",
    "Signals & Linear Systems",
    "Object-Oriented Programming (C++/Java)",
    "Web Programming & Application Engineering",
    "Numerical Methods & Scientific Computing",
    "Probability & Statistics for Engineers"
  ],

  researchFocus: [
    {
      title: "Deepfake Forensics & Multimedia Integrity",
      text: "Investigating spatial, temporal, and frequency-domain artifact cues to identify manipulated digital media, generative AI facial swaps, and synthetic media under social-media compression and severe degradation.",
      mark: "DF"
    },
    {
      title: "Explainable Artificial Intelligence (XAI)",
      text: "Developing forensic concept bottleneck networks (Auto-IFCB-STNet) that provide human-understandable forensic explanations alongside high-precision classification decisions.",
      mark: "XAI"
    },
    {
      title: "AI in Smart Agriculture & Precision Farming",
      text: "Field dataset engineering, multi-class orchard pathology classification, and fine-grained real-time object detection using optimized YOLO and EfficientNet architectures.",
      mark: "Ag"
    },
    {
      title: "Healthcare AI & Biosignal Processing",
      text: "Extracting clinical vitals and cardiovascular parameters via remote photoplethysmography (PPG) signal processing and lightweight on-device mobile machine learning.",
      mark: "Hx"
    },
    {
      title: "Dataset Engineering & High-Precision Annotation",
      text: "Field data acquisition in uncontrolled environmental conditions, CVAT and Roboflow bounding-box annotation protocols, class balance auditing, and open-access data curation.",
      mark: "DATA"
    },
    {
      title: "Deep Learning Architectures & Robustness",
      text: "Comparative benchmark studies exploring CNNs, Vision Transformers (ViT), and Recurrent networks under realistic image corruption, blur, and compression artifacts.",
      mark: "DL"
    }
  ],

  researchExperience: [
    {
      title: "Auto-IFCB-STNet & Spatio-Temporal Concept Bottlenecks for Deepfake Forensics",
      period: "2025–2026",
      summary:
        "Formulated and benchmarked an innovative explainable deepfake detection architecture (Auto-IFCB-STNet) designed to reveal subtle generative boundary artifacts and temporal inconsistencies across multi-generator manipulation benchmarks.",
      contributions: [
        "Pioneered the integration of forensic concept bottleneck layers that map spatial artifact features into interpretable concepts (e.g., eye blending, boundary warping, noise inconsistency).",
        "Investigated architectural robustness against degradation—such as JPEG compression, Gaussian noise, and motion blur—benchmarking CNNs, Vision Transformers, and Recurrent networks.",
        "Published first-author paper 'A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images' at IEEE PECCII 2026 (IEEE Xplore: 11662017).",
        "Formulated the 'SpatSeqFake' hybrid spatial-sequential model presented at IEEE RAAICON 2026, delivering superior cross-dataset transferability.",
        "Co-authored 'GR-ACE Net' (PECCII 2026), fusing graph attention and global relational reasoning for robust multimedia forensics."
      ],
      outcome:
        "Completed undergraduate capstone thesis with highest distinction, currently under review as a full research article at Scientific Reports (Nature Portfolio).",
      tags: ["Deepfake Forensics", "Explainable AI (XAI)", "Concept Bottleneck", "Vision Transformers", "IEEE PECCII 2026", "Scientific Reports"]
    },
    {
      title: "MangoFruitBD & YOLO-Based Mango Fruit Health Detection in Real Orchard Conditions",
      period: "2025–2026",
      summary:
        "Served as 2nd Co-Author and Core Data Engineer for the creation, annotation, and benchmarking of the MangoFruitBD dataset—a pioneering open-access agricultural benchmark for Bangladeshi orchards.",
      contributions: [
        "Participated in field image acquisition across commercial mango orchards in Bangladesh under diverse natural lighting, shadow occlusions, and background clutter.",
        "Engineered standardized bounding-box annotation protocols using CVAT (Computer Vision Annotation Tool), Roboflow, and LabelImg across 4 primary diagnostic classes: Healthy, Anthracnose, Alternaria, and Scab.",
        "Conducted multi-stage quality auditing, bounding-box consistency reviews, and robust data augmentation splits for reproducible evaluation.",
        "Benchmarked state-of-the-art YOLOv8 and YOLOv11 detection models for real-time orchard disease diagnosis under dense foliage conditions."
      ],
      outcome:
        "Published on Mendeley Data (Version 1 & 2, DOI: 10.17632/bhrz29mkmr.1); manuscript submitted to Computers and Electronics in Agriculture (Elsevier, Q1; CiteScore: 17.3).",
      tags: ["MangoFruitBD", "2nd Co-Author", "Smart Agriculture", "YOLO", "CVAT", "Mendeley Data", "Elsevier Q1"]
    },
    {
      title: "Fine-Grained Agricultural Vision & Dense Vegetable Recognition",
      period: "2025–2026",
      summary:
        "Developed a two-stage hybrid framework combining YOLO object detection with EfficientNet deep feature extractors for accurate multi-class vegetable recognition in cluttered, dense market scenes.",
      contributions: [
        "Addressed high inter-class visual similarity and severe spatial overlaps characteristic of harvested agricultural produce.",
        "Evaluated classification accuracy and localization mean Average Precision (mAP) against standalone detector baselines.",
        "Presented and published research at the 2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN 2026)."
      ],
      outcome: "Published in IEEE QPAIN 2026 proceedings (DOI: 10.1109/QPAIN69676.2026.11545784).",
      tags: ["Computer Vision", "EfficientNet", "YOLO", "Fine-Grained Recognition", "IEEE QPAIN 2026"]
    },
    {
      title: "Mobile Healthcare & Remote Photoplethysmography (PPG) Processing",
      period: "2024–2025",
      summary:
        "Investigated non-invasive cardiovascular vital sign monitoring using mobile device cameras to capture fingertip photoplethysmography (PPG) optical absorption signals.",
      contributions: [
        "Implemented digital signal processing pipelines including bandpass filtering, peak detection, and artifact rejection on noisy mobile sensor streams.",
        "Trained machine learning regressors and classifiers to estimate pulse rate and physiological metrics without specialized clinical equipment.",
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
    role: "2nd Co-Author / Core Contributor & Annotation Engineer",
    summary:
      "MangoFruitBD is a dedicated open-access computer vision dataset engineered to advance automated disease detection in commercial orchards. As 2nd co-author, Sadia contributed significantly to orchard field acquisition, CVAT bounding-box annotations, dataset curation, and quality auditing, enabling reliable deep learning deployment for precision agriculture.",
    facts: [
      "1,310 High-Resolution Field Images",
      "4 Diagnostic Classes (Healthy, Anthracnose, Alternaria, Scab)",
      "CVAT & Roboflow Bounding-Box Annotation Pipeline",
      "Captured Under Natural Lighting, Occlusions & Clutter",
      "YOLO-Compatible Coordinate Annotations",
      "Mendeley Data · Open Access Version 1 & 2"
    ],
    annotationSkills: [
      "CVAT (Computer Vision Annotation Tool)",
      "Roboflow Annotation & Augmentation Pipeline",
      "LabelImg Bounding Box Tool",
      "Field Data Acquisition in Natural Orchards",
      "Class Balancing & Dataset Partitioning",
      "Quality Assurance & Annotation Auditing",
      "YOLO Coordinate Transformation"
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
        "Introduces an explainable concept bottleneck architecture mapping spatial-temporal deepfake artifact cues into human-interpretable forensic attributes, providing rigorous explanations alongside state-of-the-art detection accuracy across multi-generator manipulation benchmarks."
    },
    {
      status: "Submitted / Under Review",
      title: "Development and Evaluation of a YOLO-Based Mango Fruit Health Detection Framework Using the MangoFruitBD Dataset",
      venue: "Computers and Electronics in Agriculture (Elsevier, Q1 · CiteScore: 17.3)",
      role: "2nd Co-Author",
      description:
        "Comprehensive journal study introducing the MangoFruitBD dataset and evaluating fine-tuned YOLO architectures for real-time orchard pathology detection under uncontrolled illumination and occlusion."
    }
  ],

  publications: [
    {
      badge: "First Author · IEEE Conference",
      category: "Conference Paper",
      title: "A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images",
      authors: "Sadia Afroz Oishi, Ariful Islam, M. A. Miya, M. H. Mohona, M. S. Hossain et al.",
      venue: "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII)",
      year: "2026",
      publisher: "IEEE Xplore",
      link: "https://ieeexplore.ieee.org/abstract/document/11662017/",
      xploreId: "IEEE Xplore: 11662017",
      abstract:
        "Presents a rigorous benchmark evaluating Convolutional Neural Networks, Vision Transformers (ViT), and Recurrent Neural Networks under social media image degradations including lossy JPEG compression, Gaussian blur, and additive noise. Demonstrates key resilience dynamics and feature retention tradeoffs across deepfake detection paradigms."
    },
    {
      badge: "Second Author · IEEE Conference",
      category: "Conference Paper",
      title: "GR-ACE Net: A Hybrid Graph-Attentional Framework with Global Relational Reasoning for Deepfake Forensics",
      authors: "Ariful Islam, Sadia Afroz Oishi, M. M. Hasan, M. Mamun, M. A. Hossain, M. H. Mohona, M. A. Miya, S. K. Ray",
      venue: "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII)",
      year: "2026",
      publisher: "IEEE Xplore",
      link: "https://ieeexplore.ieee.org/abstract/document/11661873/",
      xploreId: "IEEE Xplore: 11661873",
      abstract:
        "Proposes GR-ACE Net, combining an EfficientNet backbone with coordinate spatial-channel attention and explicit graph relational reasoning to identify spatial discrepancies across face regions, achieving 98.68% accuracy and 99.88% AUC-ROC."
    },
    {
      badge: "Co-Author · IEEE Conference",
      category: "Conference Paper",
      title: "A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images",
      authors: "Ariful Islam, S. K. Ray, Sadia Afroz Oishi et al.",
      venue: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)",
      year: "2026",
      publisher: "IEEE",
      doi: "10.1109/QPAIN69676.2026.11545784",
      link: "https://doi.org/10.1109/QPAIN69676.2026.11545784",
      abstract:
        "Introduces a cascading localization and fine-grained classification pipeline fusing YOLO bounding-box detection with EfficientNet feature representation for highly dense agricultural produce recognition."
    },
    {
      badge: "Co-Author · IEEE Conference",
      category: "Conference Paper",
      title: "Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices",
      authors: "M. A. Miya, M. H. Mohona, M. A. Hossain, M. B. A. Z. Shammo, Ariful Islam, Sadia Afroz Oishi et al.",
      venue: "2025 28th International Conference on Computer and Information Technology (ICCIT)",
      year: "2025",
      publisher: "IEEE",
      doi: "10.1109/ICCIT68739.2025.11491546",
      link: "https://doi.org/10.1109/ICCIT68739.2025.11491546",
      abstract:
        "Presents an accessible mobile health monitoring framework utilizing smartphone camera video to extract pulsatile photoplethysmography (PPG) waveforms, filtered with custom digital filters and evaluated via machine learning classifiers."
    },
    {
      badge: "First Author · IEEE Conference",
      category: "Conference Paper",
      title: "SpatSeqFake: A Hybrid Spatial-Sequential Framework for Cross-Dataset Deepfake Image Detection",
      authors: "Sadia Afroz Oishi et al.",
      venue: "2026 5th International Conference on Robotics, Automation, Artificial-intelligence and Internet-of-Things (RAAICON)",
      year: "2026",
      publisher: "IEEE",
      link: "#",
      abstract:
        "Formulates a hybrid spatial-sequential architecture tailored for generalizable cross-dataset deepfake detection. Employs localized artifact feature extraction coupled with sequential recurrence to detect manipulated boundary inconsistencies."
    },
    {
      badge: "2nd Co-Author · Published Dataset",
      category: "Research Dataset",
      title: "MangoFruitBD: A Bounding-Box Annotated Image Dataset for Detecting Healthy and Diseased Mango Fruits in Bangladeshi Orchards",
      authors: "Ariful Islam, Sadia Afroz Oishi, Md. Mehedi Hasan et al.",
      venue: "Elsevier Mendeley Data",
      year: "2026",
      publisher: "Mendeley Data",
      doi: "10.17632/bhrz29mkmr.1",
      link: "https://doi.org/10.17632/bhrz29mkmr.1",
      abstract:
        "A field-collected dataset of 1,310 RGB images across 4 diagnostic disease classes (Healthy, Anthracnose, Alternaria, Scab) captured in Bangladeshi orchards, annotated with precise YOLO bounding-boxes for real-world computer vision benchmarks."
    },
    {
      badge: "First Author · Submitted Journal",
      category: "Journal Manuscript",
      title: "Auto-IFCB-STNet: A Unified Spatio-Temporal Forensic Concept Bottleneck for Explainable Image and Video Deepfake Detection",
      authors: "Sadia Afroz Oishi et al.",
      venue: "Scientific Reports (Nature Portfolio)",
      year: "2026",
      publisher: "Springer Nature",
      link: "#",
      abstract:
        "Undergraduate thesis manuscript proposing an explainable concept bottleneck architecture mapping spatial-temporal deepfake artifact cues into human-interpretable forensic concepts."
    },
    {
      badge: "2nd Co-Author · Submitted Journal (Q1)",
      category: "Journal Manuscript",
      title: "Development and Evaluation of a YOLO-Based Mango Fruit Health Detection Framework Using the MangoFruitBD Dataset",
      authors: "Ariful Islam, Sadia Afroz Oishi, Md. Mehedi Hasan et al.",
      venue: "Computers and Electronics in Agriculture (Elsevier, Q1 · CiteScore: 17.3)",
      year: "2026",
      publisher: "Elsevier",
      link: "#",
      abstract:
        "Comprehensive agricultural computer vision study presenting MangoFruitBD and benchmarking modern YOLO architectures under severe orchard-level occlusions, illumination variance, and disease co-occurrence."
    }
  ],

  projects: [
    {
      title: "Auto-IFCB-STNet: Explainable Deepfake Forensic Architecture",
      category: "Deepfake Forensics & XAI",
      period: "2025–2026",
      lead: "Pioneering explainable concept bottleneck models for multi-generator facial manipulation detection.",
      bullets: [
        "Bridged high-dimensional convolutional/transformer latent spaces with 8 interpretable forensic concepts (boundary warping, color disparity, texture disruption, etc.).",
        "Conducted extensive evaluations across FaceForensics++, Celeb-DF, and degraded social media benchmarks.",
        "Demonstrated that intermediate concept activations provide verifiable explanations without compromising overall detection precision.",
        "Undergraduate capstone thesis; submitted to Scientific Reports (Nature Portfolio)."
      ],
      tags: ["Deep Learning", "Concept Bottleneck", "Explainable AI", "PyTorch", "Forensic Vision"]
    },
    {
      title: "MangoFruitBD: Orchard Pathology Dataset & YOLO Benchmark",
      category: "Smart Agriculture & Dataset Engineering",
      period: "2025–2026",
      lead: "Curating a 1,310-image field-collected dataset and evaluating YOLOv8/v11 detectors for automated crop health monitoring.",
      bullets: [
        "Acquired high-resolution field imagery in commercial orchards across Bangladesh under real ambient lighting.",
        "Supervised bounding-box annotations via CVAT and Roboflow for Healthy, Anthracnose, Alternaria, and Scab classes.",
        "Engineered YOLO coordinate pipelines and conducted class-balanced train/val/test splits.",
        "Published as an open-access repository on Mendeley Data (DOI: 10.17632/bhrz29mkmr.1) and submitted to Elsevier Q1 journal."
      ],
      tags: ["Dataset Curation", "CVAT", "YOLOv8", "Roboflow", "Smart Agriculture", "Mendeley Data"]
    },
    {
      title: "Hybrid YOLO-EfficientNet Dense Produce Recognition Framework",
      category: "Computer Vision & Object Detection",
      period: "2025–2026",
      lead: "Two-stage localization and deep classification pipeline for fine-grained vegetable recognition in dense market imagery.",
      bullets: [
        "Resolved spatial overlap and occlusion bottlenecks in dense multi-object agricultural settings.",
        "Combined lightweight YOLO bounding-box proposals with EfficientNet deep feature representations.",
        "Published and presented at IEEE QPAIN 2026 (DOI: 10.1109/QPAIN69676.2026.11545784)."
      ],
      tags: ["Object Detection", "YOLO", "EfficientNet", "Dense Scenes", "IEEE QPAIN 2026"]
    },
    {
      title: "Mobile PPG Cardiovascular Biosignal Processing System",
      category: "Biomedical Signal Processing & Mobile AI",
      period: "2024–2025",
      lead: "Smartphone camera-based remote photoplethysmography framework for cardiovascular health assessment.",
      bullets: [
        "Captured optical absorption pulses from camera flash contact with the human fingertip.",
        "Engineered bandpass filtering, baseline detrending, and peak detection algorithms to extract pulse-rate variability.",
        "Evaluated machine learning classification models for cardiovascular stress estimation.",
        "Published in IEEE ICCIT 2025 proceedings (DOI: 10.1109/ICCIT68739.2025.11491546)."
      ],
      tags: ["Signal Processing", "PPG", "Mobile Health", "Python", "Machine Learning", "IEEE ICCIT 2025"]
    },
    {
      title: "SpatSeqFake: Cross-Dataset Spatial-Sequential Deepfake Detector",
      category: "Deepfake Forensics & Recurrent Models",
      period: "2025–2026",
      lead: "Hybrid neural architecture combining spatial feature extractors with recurrent sequence modeling for cross-dataset generalization.",
      bullets: [
        "Modeled localized boundary artifacts as sequential transitions to withstand adversarial manipulation and post-processing filters.",
        "Attained robust cross-dataset generalizability across unseen deepfake manipulation tools.",
        "Presented as First Author at IEEE RAAICON 2026."
      ],
      tags: ["Sequential Modeling", "Spatial Convolutions", "Cross-Dataset Robustness", "IEEE RAAICON 2026"]
    },
    {
      title: "PUST Academic Management & Student Examination Portal",
      category: "Database & Software Engineering",
      period: "2024",
      lead: "Relational database and management information system engineered for academic records and grading administration.",
      bullets: [
        "Architected relational schemas in Microsoft SQL Server, enforcing data integrity and role-based access control.",
        "Built responsive frontend interfaces for student course registration, transcript generation, and grade calculation.",
        "Implemented stored procedures and query optimizations for high-throughput semester report generation."
      ],
      tags: ["SQL Server", "DBMS", "Software Engineering", "Full-Stack", "Relational Database"]
    }
  ],

  certifications: [
    {
      title: "Certificate of Appreciation — Peer Reviewer (4th IEEE RAAICON 2025)",
      issuer: "4th IEEE International Conference on Robotics, Automation, AI & IoT (RAAICON 2025)",
      venue: "Military Institute of Science and Technology (MIST), Dhaka, Bangladesh",
      date: "2025",
      image: "assets/images/peer-reviewer-appreciation-raaicon.jpg",
      description:
        "Official Certificate of Appreciation recognizing Sadia Afroz Oishi's scholarly peer-review service evaluating scientific papers in machine learning, neural architectures, and computer vision."
    },
    {
      title: "Certificate of Appreciation — Peer Reviewer (5th IEEE RAAICON 2026)",
      issuer: "5th IEEE International Conference on Robotics, Automation, AI & IoT (RAAICON 2026)",
      venue: "IEEE Bangladesh Section",
      date: "2026",
      description:
        "Awarded official certificate for peer-review service evaluating scholarly submissions in computational intelligence, pattern recognition, and digital media forensics."
    },
    {
      title: "Certificate of Presentation — 1st IEEE PECCII 2026",
      issuer: "IEEE International Conference on Power, Electronics, Communications, Computing & Intelligent Infrastructure",
      venue: "Pabna University of Science and Technology (PUST), Bangladesh",
      date: "June 2026",
      image: "assets/images/peccii-2026-presentation-certificate-stage.jpg",
      description:
        "Certified oral presentation and technical defense of first-authored paper 'A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images'."
    },
    {
      title: "Certificate of Presentation — IEEE QPAIN 2026",
      issuer: "2026 IEEE 2nd International Conference on Quantum Photonics, AI & Networking (QPAIN)",
      venue: "Chittagong University of Engineering and Technology (CUET), Bangladesh",
      date: "April 2026",
      image: "assets/images/qpain-2026-presentation-certificate.jpg",
      description:
        "Official certificate for presenting co-authored research 'A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images'."
    },
    {
      title: "Certificate of Presentation — 28th IEEE ICCIT 2025",
      issuer: "28th International Conference on Computer and Information Technology (ICCIT 2025)",
      venue: "Cox's Bazar, Bangladesh",
      date: "December 2025",
      image: "assets/images/iccit-2025-presentation-certificate.jpg",
      description:
        "Official certificate for presenting research on 'Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices'."
    },
    {
      title: "Certificate of Presentation — 1st RUEC International Conference 2025",
      issuer: "Rajshahi University Engineering Club (RUEC)",
      venue: "University of Rajshahi, Bangladesh",
      date: "2025",
      image: "assets/images/ruec-2025-presentation-certificate.jpg",
      description:
        "Awarded certificate of presentation for delivering oral research defense before international academic session chairs and engineering faculty."
    },
    {
      title: "Excellence Boot Camp Certification — PUSTCEC",
      issuer: "PUST Career and Entrepreneurship Club (PUSTCEC)",
      venue: "PUST, Pabna, Bangladesh",
      date: "2024–2025",
      credentialId: "EBC-2412016",
      image: "assets/images/pustcec-bootcamp-certificate.jpg",
      description:
        "Verified credential awarded upon successful completion of the intensive 3-month PUSTCEC Excellence Boot Camp covering leadership, professional communications, and project execution."
    },
    {
      title: "Debate Championship Certificate — ICE Fiesta 2025",
      issuer: "Department of ICE & Information and Communication Engineering Association, PUST",
      venue: "PUST, Pabna, Bangladesh",
      date: "2025",
      image: "assets/images/ice-association-debate-championship-certificate.jpg",
      description:
        "Formal winner certificate signed by the Chairman of ICE and Association President, honoring Team Voice of Victory as Champions of the Parliamentary Debate Tournament."
    }
  ],

  achievements: [
    {
      title: "Debate Champion — ICE Fiesta 2025 Parliamentary Debate Tournament",
      badge: "Grand Champion",
      date: "2025",
      icon: "fas fa-trophy",
      image: "assets/images/debate-champion-award-stage.jpg",
      description:
        "Led Team 'Voice of Victory' to emerge as Grand Champions in the highly competitive ICE Fiesta 2025 Inter-Batch Parliamentary Debate Tournament arranged by the ICE Association, PUST."
    },
    {
      title: "Debater of the Tournament — ICE Fiesta 2025",
      badge: "Highest Individual Speaker Award",
      date: "2025",
      icon: "fas fa-award",
      image: "assets/images/debater-of-the-tournament-award-stage.jpg",
      description:
        "Awarded the prestigious 'Debater of the Tournament' individual trophy, recognizing Sadia as the highest-scoring parliamentary orator across all rounds for persuasive rhetoric and razor-sharp argumentation."
    },
    {
      title: "Scholarly Peer Reviewer Recognition — IEEE RAAICON (2025 & 2026)",
      badge: "Academic Peer Review",
      date: "2025–2026",
      icon: "fas fa-certificate",
      image: "assets/images/peer-reviewer-appreciation-raaicon.jpg",
      description:
        "Selected as a designated peer reviewer for the 4th and 5th IEEE RAAICON international conferences, receiving official certificates of appreciation from the conference general chairs."
    },
    {
      title: "First-Author IEEE Conference Paper & Oral Presentation",
      badge: "Research Commendation",
      date: "2026",
      icon: "fas fa-microscope",
      image: "assets/images/peccii-2026-author-attendance.jpg",
      description:
        "Authored and delivered first-author oral presentation for 'A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images' at IEEE PECCII 2026 (IEEE Xplore: 11662017)."
    },
    {
      title: "Core Contributor & 2nd Co-Author — MangoFruitBD Published Dataset",
      badge: "Open-Access Dataset",
      date: "2026",
      icon: "fas fa-database",
      description:
        "Curated and co-published the 1,310-image MangoFruitBD dataset on Elsevier Mendeley Data (DOI: 10.17632/bhrz29mkmr.1), serving as the foundation for submitted Elsevier Q1 journal research."
    },
    {
      title: "Academic Excellence — B.Sc. Degree Completed (CGPA 3.67 / 4.00)",
      badge: "Graduation Commendation",
      date: "2026",
      icon: "fas fa-graduation-cap",
      description:
        "Completed all 8 semesters of the B.Sc. (Engineering) program in Information and Communication Engineering at PUST with a strong 3.67 / 4.00 CGPA."
    },
    {
      title: "Double Golden GPA 5.00/5.00 in HSC (2020) & SSC (2018)",
      badge: "National Board Distinction",
      date: "2018 & 2020",
      icon: "fas fa-star",
      description:
        "Attained perfect GPA 5.00 / 5.00 in both Higher Secondary Certificate (HSC) from Savar Model College and Secondary School Certificate (SSC) from Radio Colony Model School & College."
    }
  ],

  experiences: [
    {
      role: "Joint Organizing Secretary",
      organization: "PUST Career and Entrepreneurship Club (PUSTCEC)",
      period: "2025–2026",
      location: "PUST, Pabna, Bangladesh",
      image: "assets/images/pustcec-joint-organizing-secretary-appointment.jpg",
      bullets: [
        "Appointed through a formal handover ceremony during the Freshers' Reception & Career Seminar in October 2025.",
        "Orchestrated campus-wide career development workshops, competitive programming orientations, and startup boot camps.",
        "Facilitated member engagement across faculties and coordinated logistics for distinguished guest speakers and industry mentors."
      ]
    },
    {
      role: "Founding Member",
      organization: "PUST Career and Entrepreneurship Club (PUSTCEC)",
      period: "2024–Present",
      location: "PUST, Pabna, Bangladesh",
      image: "assets/images/pustcec-founding-member-charter-signing.jpg",
      bullets: [
        "Formally signed the Founding Charter of PUSTCEC, helping establish the club's constitution, organizational hierarchy, and mission charter.",
        "Active contributor to club branding, student mentorship initiatives, and institutional liaisons."
      ]
    },
    {
      role: "Podcast Host & Producer",
      organization: "PUST Career and Entrepreneurship Club ('Mic & Minds')",
      period: "2025",
      location: "PUST, Pabna, Bangladesh",
      image: "assets/images/hosting-mic-and-minds-podcast.jpg",
      bullets: [
        "Conceptualized, hosted, and moderated Episode 02 of the official club podcast 'Mic & Minds'.",
        "Conducted structured interviews discussing career trajectories, research mindsets, and entrepreneurial resilience."
      ]
    },
    {
      role: "Academic Peer Reviewer",
      organization: "IEEE International Conferences (RAAICON 2025 & 2026)",
      period: "2025–2026",
      location: "IEEE Bangladesh Section / MIST Dhaka",
      image: "assets/images/peer-reviewer-appreciation-raaicon.jpg",
      bullets: [
        "Evaluated manuscript submissions in deep learning, computer vision, and IoT architectures.",
        "Provided constructive, rigorous technical critiques on methodological novelty, mathematical validity, and experimental baselines."
      ]
    },
    {
      role: "Undergraduate Researcher & Capstone Lead",
      organization: "Department of ICE, Pabna University of Science and Technology",
      period: "2024–2026",
      location: "Pabna, Bangladesh",
      bullets: [
        "Conducted thesis research under the supervision of Professor Dr. Md. Sarwar Hossain on explainable deepfake forensics.",
        "Collaborated with departmental peer researchers to produce multiple IEEE publications, journal submissions, and open-source datasets."
      ]
    }
  ],

  extracurricular: [
    {
      title: "Official Host — 1st ICE Alumni Reunion 2025 (Formal & Cultural Sessions)",
      period: "January 11, 2025",
      role: "Master of Ceremonies & Stage Anchor",
      image: "assets/images/hosting-ice-reunion-formal-ceremony.jpg",
      bullets: [
        "Anchored the inaugural formal ceremony from the ceremonial podium in the presence of PUST Vice-Chancellor, Dean of Engineering, departmental faculty, and senior alumni.",
        "Hosted the grand evening musical concert and cultural program before an audience of over 600 alumni and guests.",
        "Co-organized program schedules, VIP introductions, and stage flow transitions seamlessly."
      ]
    },
    {
      title: "Host — PUSTCEC 'Mic & Minds Podcast' (Episode 02)",
      period: "2025",
      role: "Podcast Host & Interviewer",
      image: "assets/images/hosting-mic-and-minds-podcast.jpg",
      bullets: [
        "Anchored the second episode of the official campus podcast series, engaging guests in thoughtful discussions on professional skills and academic balance.",
        "Managed episode flow, live interviewing techniques, and multimedia promotional campaigns."
      ]
    },
    {
      title: "Competitive Parliamentary Debating — ICE Fiesta 2025",
      period: "2025",
      role: "Debate Champion & Debater of the Tournament",
      image: "assets/images/debate-champion-and-debater-trophies.jpg",
      bullets: [
        "Represented Team 'Voice of Victory' as prime speaker, winning the departmental parliamentary debate championship.",
        "Awarded individual 'Debater of the Tournament' trophy for highest cumulative speaker points.",
        "Demonstrated mastery in argumentation, evidence synthesis, refutation, and rhetorical delivery."
      ]
    },
    {
      title: "Student Leadership & Event Management — PUSTCEC",
      period: "2024–2026",
      role: "Joint Organizing Secretary & Founding Member",
      image: "assets/images/pustcec-joint-organizing-secretary-appointment.jpg",
      bullets: [
        "Organized the PUSTCEC Freshers' Reception & Career Seminar in October 2025.",
        "Successfully executed the 3-month PUSTCEC Excellence Boot Camp (Credential: EBC-2412016).",
        "Coordinated club outreach, digital event marketing, and member development programs."
      ]
    }
  ],

  presentations: [
    {
      conference: "1st IEEE PECCII 2026",
      venue: "Pabna University of Science and Technology, Pabna, Bangladesh",
      date: "17–18 June 2026",
      role: "First Author Presenter",
      paperTitle: "A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images",
      image: "assets/images/peccii-2026-presentation-certificate-stage.jpg",
      summary:
        "Delivered first-author oral presentation and technical defense before session chairs, defending empirical robustness findings across CNN, ViT, and RNN architectures under real-world social media degradations."
    },
    {
      conference: "28th IEEE ICCIT 2025",
      venue: "Cox's Bazar, Bangladesh",
      date: "December 2025",
      role: "Presenting Author & Co-Author",
      paperTitle: "Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices",
      image: "assets/images/iccit-2025-presentation-certificate.jpg",
      summary:
        "Presented research on fingertip photoplethysmography (PPG) signal acquisition, digital filtering pipelines, and mobile machine learning algorithms for remote cardiovascular vitals estimation."
    },
    {
      conference: "2026 IEEE 2nd QPAIN 2026",
      venue: "Chittagong University of Engineering and Technology (CUET), Bangladesh",
      date: "April 2026",
      role: "Presenting Author & Co-Author",
      paperTitle: "A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images",
      image: "assets/images/qpain-2026-presentation-certificate.jpg",
      summary:
        "Defended the cascading YOLO-EfficientNet methodology for dense agricultural produce localization and fine-grained classification during the artificial intelligence conference session."
    },
    {
      conference: "1st RUEC International Conference 2025",
      venue: "University of Rajshahi, Rajshahi, Bangladesh",
      date: "2025",
      role: "Oral Presenting Author",
      paperTitle: "Deep Learning Architectures for Computational Image Analysis",
      image: "assets/images/ruec-2025-research-presentation.jpg",
      summary:
        "Delivered on-stage oral presentation with slide deck and microphone, presenting deep learning methodologies and engaging in academic Q&A with faculty session chairs."
    },
    {
      conference: "5th IEEE RAAICON 2026",
      venue: "IEEE Bangladesh Section",
      date: "2026",
      role: "First Author Presenter",
      paperTitle: "SpatSeqFake: A Hybrid Spatial-Sequential Framework for Cross-Dataset Deepfake Image Detection",
      summary:
        "Presented the SpatSeqFake framework for generalizable cross-dataset facial manipulation detection, highlighting spatial artifact recurrence and robust boundary consistency."
    }
  ],

  gallery: [
    {
      src: "assets/images/profile-sadia-afroz-oishi.png",
      thumb: "assets/images/profile-sadia-afroz-oishi.png",
      title: "Sadia Afroz Oishi — Formal Academic Portrait",
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
      category: "Conferences & Research",
      desc: "Sadia Afroz Oishi wearing the official Author badge at the 2026 IEEE International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), where she presented her first-author deepfake paper."
    },
    {
      src: "assets/images/peccii-2026-presentation-certificate-stage.jpg",
      thumb: "assets/images/peccii-2026-presentation-certificate-stage.jpg",
      title: "Receiving Presentation Certificate on Stage — IEEE PECCII 2026",
      date: "June 2026",
      venue: "PECCII 2026 Stage, PUST",
      category: "Conferences & Research",
      desc: "Sadia Afroz Oishi receiving her official certificate of presentation on stage from distinguished session chairs and IEEE conference dignitaries following her oral defense."
    },
    {
      src: "assets/images/ruec-2025-research-presentation.jpg",
      thumb: "assets/images/ruec-2025-research-presentation.jpg",
      title: "Delivering Oral Presentation at 1st RUEC Conference",
      date: "2025",
      venue: "University of Rajshahi, Bangladesh",
      category: "Conferences & Research",
      desc: "Sadia on stage delivering an oral technical presentation with slide deck and microphone before session chairs, academics, and international delegates at the 1st RUEC International Conference."
    },
    {
      src: "assets/images/ruec-2025-presentation-certificate.jpg",
      thumb: "assets/images/ruec-2025-presentation-certificate.jpg",
      title: "Certificate of Presentation — 1st RUEC Conference",
      date: "2025",
      venue: "University of Rajshahi, Bangladesh",
      category: "Conferences & Research",
      desc: "Official certificate from Rajshahi University Engineering Club (RUEC) certifying Sadia Afroz Oishi's oral presentation of her research paper at the 1st RUEC International Conference."
    },
    {
      src: "assets/images/iccit-2025-presentation-certificate.jpg",
      thumb: "assets/images/iccit-2025-presentation-certificate.jpg",
      title: "Certificate of Presentation — 28th IEEE ICCIT 2025",
      date: "December 2025",
      venue: "Cox's Bazar, Bangladesh",
      category: "Conferences & Research",
      desc: "Official presentation certificate awarded at the 28th IEEE International Conference on Computer and Information Technology (ICCIT 2025) for co-authored PPG remote health monitoring research."
    },
    {
      src: "assets/images/qpain-2026-presentation-certificate.jpg",
      thumb: "assets/images/qpain-2026-presentation-certificate.jpg",
      title: "Certificate of Presentation — IEEE QPAIN 2026",
      date: "April 2026",
      venue: "CUET, Chittagong, Bangladesh",
      category: "Conferences & Research",
      desc: "Official certificate of presentation awarded at the 2nd IEEE International Conference on Quantum Photonics, AI & Networking (QPAIN 2026) for co-authored YOLO-EfficientNet vegetable recognition research."
    },
    {
      src: "assets/images/peer-reviewer-appreciation-raaicon.jpg",
      thumb: "assets/images/peer-reviewer-appreciation-raaicon.jpg",
      title: "Peer Reviewer Certificate of Appreciation — 4th IEEE RAAICON 2025",
      date: "2025",
      venue: "MIST, Dhaka, Bangladesh",
      category: "Certifications & Service",
      desc: "Official Certificate of Appreciation from 4th IEEE RAAICON 2025, honoring Sadia Afroz Oishi for her rigorous peer-review evaluation of conference manuscripts in AI and machine learning."
    },
    {
      src: "assets/images/debate-champion-award-stage.jpg",
      thumb: "assets/images/debate-champion-award-stage.jpg",
      title: "Receiving Debate Championship Trophy on Stage",
      date: "2025",
      venue: "ICE Fiesta 2025 Stage, PUST",
      category: "Debate & Awards",
      desc: "Joyous stage moment as Sadia and her teammates receive the grand ICE Fiesta 2025 Debate Championship trophy from faculty judges and ICE Association leaders."
    },
    {
      src: "assets/images/debater-of-the-tournament-award-stage.jpg",
      thumb: "assets/images/debater-of-the-tournament-award-stage.jpg",
      title: "Receiving 'Debater of the Tournament' Accolade on Stage",
      date: "2025",
      venue: "ICE Fiesta 2025 Stage, PUST",
      category: "Debate & Awards",
      desc: "Stage ceremony honoring Sadia Afroz Oishi with the individual 'Debater of the Tournament' trophy at ICE Fiesta 2025, celebrating her exceptional parliamentary rhetoric and analytical rebuttals."
    },
    {
      src: "assets/images/debate-champion-and-debater-trophies.jpg",
      thumb: "assets/images/debate-champion-and-debater-trophies.jpg",
      title: "Debate Champion & Debater of the Tournament Trophies",
      date: "2025",
      venue: "PUST, Pabna, Bangladesh",
      category: "Debate & Awards",
      desc: "Close-up view of the dual trophies won by Sadia at the ICE Fiesta Debate Tournament: the Champion Trophy awarded to Team Voice of Victory, and the individual Debater of the Tournament trophy."
    },
    {
      src: "assets/images/ice-association-debate-championship-certificate.jpg",
      thumb: "assets/images/ice-association-debate-championship-certificate.jpg",
      title: "ICE Association Debate Championship Certificate",
      date: "2025",
      venue: "Department of ICE, PUST",
      category: "Debate & Awards",
      desc: "Formal winner's certificate issued by the ICE Association, PUST, confirming Sadia Afroz Oishi's team as the Champion of the ICE Fiesta 2025 Inter-Batch Parliamentary Debate Tournament."
    },
    {
      src: "assets/images/hosting-ice-reunion-formal-ceremony.jpg",
      thumb: "assets/images/hosting-ice-reunion-formal-ceremony.jpg",
      title: "Hosting Grand Formal Ceremony — 1st ICE Alumni Reunion 2025",
      date: "January 11, 2025",
      venue: "Central Auditorium, PUST",
      category: "Media & Hosting",
      desc: "Sadia hosting the inaugural formal ceremony of the 1st ICE Alumni Reunion from the ceremonial podium, alongside PUST Vice-Chancellor, Dean of Engineering, and senior industry alumni."
    },
    {
      src: "assets/images/hosting-ice-reunion-cultural-night.jpg",
      thumb: "assets/images/hosting-ice-reunion-cultural-night.jpg",
      title: "Anchoring Evening Cultural Concert — 1st ICE Alumni Reunion 2025",
      date: "January 11, 2025",
      venue: "Grand Stage, PUST",
      category: "Media & Hosting",
      desc: "Sadia commanding the central stage with a live microphone before an audience of hundreds of alumni, professors, and students, anchoring the high-energy evening concert during the 1st ICE Alumni Reunion."
    },
    {
      src: "assets/images/hosting-mic-and-minds-podcast.jpg",
      thumb: "assets/images/hosting-mic-and-minds-podcast.jpg",
      title: "Host of 'Mic & Minds Podcast' (Episode 02) — PUSTCEC",
      date: "2025",
      venue: "PUST Career & Entrepreneurship Club",
      category: "Media & Hosting",
      desc: "Official promotional banner featuring Sadia Afroz Oishi as host of the flagship 'Mic & Minds Podcast' Episode 02, conducting an in-depth conversation on student entrepreneurship and career growth."
    },
    {
      src: "assets/images/pustcec-joint-organizing-secretary-appointment.jpg",
      thumb: "assets/images/pustcec-joint-organizing-secretary-appointment.jpg",
      title: "Appointment Ceremony as Joint Organizing Secretary, PUSTCEC",
      date: "October 2025",
      venue: "PUST Auditorium",
      category: "Leadership & Service",
      desc: "Formal onstage handover of the appointment letter to Sadia Afroz Oishi as Joint Organizing Secretary of PUSTCEC during the Freshers' Reception & Career Seminar in October 2025."
    },
    {
      src: "assets/images/pustcec-founding-member-charter-signing.jpg",
      thumb: "assets/images/pustcec-founding-member-charter-signing.jpg",
      title: "Signing Founding Member Charter of PUSTCEC",
      date: "2024",
      venue: "PUST, Pabna, Bangladesh",
      category: "Leadership & Service",
      desc: "Historic milestone moment capturing Sadia Afroz Oishi formally signing the Founding Charter of the PUST Career and Entrepreneurship Club (PUSTCEC)."
    },
    {
      src: "assets/images/pustcec-bootcamp-certificate.jpg",
      thumb: "assets/images/pustcec-bootcamp-certificate.jpg",
      title: "PUSTCEC Excellence Boot Camp Certificate",
      date: "2024–2025",
      venue: "PUST Career & Entrepreneurship Club",
      category: "Certifications & Service",
      desc: "Official certificate of completion awarded to Sadia Afroz Oishi (Credential ID: EBC-2412016) for completing the rigorous 3-month PUSTCEC Excellence Boot Camp."
    }
  ],

  skills: [
    {
      title: "AI, Deep Learning & Forensics",
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
        { name: "NumPy & Pandas", mark: "NP" }
      ]
    },
    {
      title: "Dataset Engineering & Annotation",
      icon: "fas fa-draw-polygon",
      description: "End-to-end dataset pipeline from field acquisition to bounding-box annotation and curation.",
      items: [
        { name: "CVAT (Computer Vision Annotation)", mark: "CVAT" },
        { name: "Roboflow Pipeline", mark: "RF" },
        { name: "LabelImg", mark: "LI" },
        { name: "Field Image Acquisition", mark: "FIELD" },
        { name: "Dataset Auditing & Splitting", mark: "QA" },
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
      title: "Tools, Systems & Platforms",
      icon: "fas fa-screwdriver-wrench",
      description: "Development environments, version control, database engines, and simulation tools.",
      items: [
        { name: "Visual Studio Code", mark: "VSC" },
        { name: "Jupyter Notebook", mark: "JUP" },
        { name: "Google Colab Pro", mark: "COLAB" },
        { name: "Git & GitHub", mark: "GIT" },
        { name: "MS SQL Server", mark: "SSMS" },
        { name: "LaTeX / Overleaf", mark: "TEX" },
        { name: "Proteus & Packet Tracer", mark: "SIM" }
      ]
    }
  ],

  references: [
    {
      name: "Dr. Md. Sarwar Hossain",
      role: "Professor & Undergraduate Thesis Supervisor",
      affiliation: "Department of Information and Communication Engineering, Pabna University of Science and Technology (PUST), Pabna, Bangladesh",
      phone: "+880 1722-047833",
      email: "sarwar.ice@pust.ac.bd",
      relationship: "Supervised undergraduate capstone thesis on Auto-IFCB-STNet explainable deepfake detection and co-authored conference and journal manuscripts."
    },
    {
      name: "Dr. Md. Anwar Hossain",
      role: "Dean, Faculty of Engineering and Technology & Professor and Chairman",
      affiliation: "Department of Information and Communication Engineering, Pabna University of Science and Technology (PUST), Pabna, Bangladesh",
      phone: "+880 1717-330923",
      email: "manwar.ice@pust.ac.bd",
      relationship: "Academic Referee, Departmental Chairman, and Dean overseeing 4-year B.Sc. (Engineering) degree curriculum and academic progression."
    }
  ]
};
