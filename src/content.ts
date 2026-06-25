export interface Translation {
  // Navigation
  navProblem: string;
  navSolution: string;
  navArchitecture: string;
  navFeatures: string;
  navDemo: string;
  navTeam: string;
  ctaButton: string;

  // Hero
  heroHeadline: string;
  heroSubhead: string;
  heroGraduationBadge: string;
  heroTechStackLabel: string;
  heroCtaDemo: string;
  heroCtaArch: string;

  // Problem Section
  problemTitle: string;
  problemSubtitle: string;
  problems: {
    id: string;
    title: string;
    description: string;
    museumLabel: string;
  }[];

  // Solution Section
  solutionTitle: string;
  solutionSubtitle: string;
  solutionPillars: {
    id: string;
    title: string;
    description: string;
    accent: string;
    points: string[];
  }[];
  mockupHeading: string;
  mockupDescription: string;
  mockupBadge: string;

  // Architecture Section
  archTitle: string;
  archSubtitle: string;
  archInteractiveNotice: string;
  archNodes: {
    id: string;
    title: string;
    subtitle: string;
    tech: string;
    description: string;
    keyPoints: string[];
    badge: string;
  }[];
  archFlowTitle: string;
  archFlowSteps: {
    from: string;
    to: string;
    label: string;
    desc: string;
  }[];

  // Features Section
  featuresTitle: string;
  featuresSubtitle: string;
  featuresFilterAll: string;
  featuresFilterMvp: string;
  featuresFilterFuture: string;
  featuresList: {
    id: string;
    title: string;
    description: string;
    isMvp: boolean;
    category: string;
    tag?: string;
    tagAr?: string;
  }[];

  // Demo Section
  demoTitle: string;
  demoSubtitle: string;
  demoVideoTitle: string;
  demoVideoDesc: string;
  demoDownloadTitle: string;
  demoQrApkLabel: string;
  demoQrIosLabel: string;
  demoWalkthroughTitle: string;
  demoWalkthroughSteps: string[];

  // Team & Footer
  teamTitle: string;
  teamSubtitle: string;
  teamUniversity: string;
  teamCollege: string;
  teamYear: string;
  teamMembersTitle: string;
  teamSupervisorsTitle: string;
  teamMembers: {
    name: string;
    role: string;
  }[];
  teamSupervisors: {
    name: string;
    role: string;
  }[];
  footerLinksTitle: string;
  footerThesisLabel: string;
  footerGithubLabel: string;
  footerApiDocsLabel: string;
  footerDisclaimer: string;
  footerCopyright: string;
}

export const englishContent: Translation = {
  navProblem: "Problem",
  navSolution: "Solution",
  navArchitecture: "Architecture",
  navFeatures: "Features",
  navDemo: "Demo & Download",
  navTeam: "Our Team",
  ctaButton: "View Project",

  heroHeadline: "Explore Egypt's Heritage — Immersively, Intelligently, Bilingually",
  heroSubhead: "A graduation thesis project delivering a unified, highly optimized mobile platform for exploring Egyptian cities and monuments with 360° virtual panoramas, educational timelines, and an AI guide.",
  heroGraduationBadge: "AASTMT Alexandria · Graduation Thesis 2026",
  heroTechStackLabel: "ENGINEERED WITH",
  heroCtaDemo: "View Live Demo",
  heroCtaArch: "See Architecture",

  problemTitle: "The Preservation Challenge",
  problemSubtitle: "The current state of cultural tourism and educational technology lacks cohesion and spatial depth.",
  problems: [
    {
      id: "prob-1",
      title: "Fragmented Heritage",
      description: "Tourism and historical information is scattered across obscure websites, social media channels, and outdated apps — lacking a unified Egyptian geographic structure.",
      museumLabel: "EXHIBIT 01 / SCATTERED KNOWLEDGE"
    },
    {
      id: "prob-2",
      title: "Flat Exploration",
      description: "Most apps show isolated, flat 2D photographs without spatial or relational context. Visitors cannot stand inside a tomb or temple before they make their physical journey.",
      museumLabel: "EXHIBIT 02 / DIMENSIONAL LIMITATION"
    },
    {
      id: "prob-3",
      title: "Bilingual Afterthought",
      description: "Arabic script support and Right-to-Left (RTL) layouts are usually added as a hasty afterthought, resulting in broken interfaces and poor readability for local users.",
      museumLabel: "EXHIBIT 03 / LINGUISTIC FRICTION"
    }
  ],

  solutionTitle: "The Heritage Hub Solution",
  solutionSubtitle: "An immersive, academic-grade ecosystem combining spatial media and intelligent guides.",
  solutionPillars: [
    {
      id: "discover",
      title: "Discover Intelligently",
      description: "Navigate Egypt geographically. Seamlessly search, filter, and discover ancient cities, dynasties, and monuments through an intuitive, localized taxonomy.",
      accent: "#D4AF37",
      points: [
        "Dynamic categorization by city & historical era",
        "Dual-language taxonomy with instant search",
        "Personalized onboarding to match curiosity profiles"
      ]
    },
    {
      id: "immerse",
      title: "Immerse Spatially",
      description: "Step inside Egypt's marvels from anywhere. High-resolution 360° panoramic environments feature interactive, educational hot-spots that bring ruins to life.",
      accent: "#74584a",
      points: [
        "Responsive spherical 360° viewer within mobile app",
        "Hotspots linked to interactive historical plaques",
        "Chronological timelines & deep-dive media galleries"
      ]
    },
    {
      id: "personalize",
      title: "Personalize with AI",
      description: "A tailored educational companion. The platform adapts to individual learning styles, recommending content based on onboarding profiles and historical interests.",
      accent: "#D4AF37",
      points: [
        "In-app AI Heritage Companion for academic dialogue",
        "Robust personalized recommendation algorithm",
        "Interactive onboarding personality profiling quiz"
      ]
    }
  ],
  mockupHeading: "Inside the Mobile Experience",
  mockupDescription: "The Heritage Hub mobile app combines gorgeous typography with interactive exploration. This high-fidelity preview illustrates our custom-built UI, blending warm papyrus backgrounds with majestic desert golds and deep earthy tones.",
  mockupBadge: "NATIVE COMPONENT PREVIEW",

  archTitle: "Robust 3-Tier Architecture",
  archSubtitle: "A highly resilient full-stack infrastructure designed for speed, security, and smart failovers.",
  archInteractiveNotice: "Click or hover on any subsystem block to inspect its specialized architectural role and engineering points.",
  archNodes: [
    {
      id: "react-native",
      title: "React Native App",
      subtitle: "Mobile Client (Expo)",
      tech: "TypeScript · Expo · React Native Maps",
      description: "The cross-platform mobile client serves as the user-facing entry point. It features custom UI rendering with native-feel transitions, full RTL layout mirroring, offline-capable asset caching, and interactive spherical panoramic engines.",
      keyPoints: [
        "Frictionless RTL/LTR auto-layout mirroring",
        "Talks EXCLUSIVELY to NestJS API Gateway for security",
        "Direct render pipelines for high-res 360° textures"
      ],
      badge: "CLIENT LAYER"
    },
    {
      id: "nestjs",
      title: "NestJS API Gateway",
      subtitle: "Central Orchestrator",
      tech: "TypeScript · Node.js · Express · JWT",
      description: "The primary gateway and security shield. It manages authentication, authorizes routes using cryptographic JWT structures, aggregates database interactions, and acts as a caching proxy for AI-bound requests.",
      keyPoints: [
        "JWT + Refresh Token Rotation with secure HTTP-only configurations",
        "AI Proxy Layer with intelligent caching to minimize FastAPI load",
        "Bilingual payload standardizer guarantees uniform client state"
      ],
      badge: "GATEWAY LAYER"
    },
    {
      id: "fastapi",
      title: "FastAPI AI Engine",
      subtitle: "AI Services & Recommendations",
      tech: "Python · FastAPI · Gemini API · LangChain",
      description: "A high-performance Python microservice dedicated to artificial intelligence. It handles complex NLP processing for the custom educational Chatbot and executes our content recommendation algorithm.",
      keyPoints: [
        "Stateless endpoints with lightning-fast asynchronous response times",
        "Gemini-powered contextual agent restricted to Egyptian history parameters",
        "Personalized collaborative filtering using user interaction profiles"
      ],
      badge: "INTELLIGENCE LAYER"
    },
    {
      id: "postgresql",
      title: "PostgreSQL Database",
      subtitle: "Relational Storage (Prisma)",
      tech: "PostgreSQL · Prisma ORM · Cloud SQL",
      description: "The central relational repository. It holds highly structured entity relationships between users, cities, monuments, hotspots, dynasties, favorites, and audit trails.",
      keyPoints: [
        "Strict database constraints to prevent orphaned metadata",
        "Optimized indexes on geographic and chronological search terms",
        "Managed on highly available, auto-scaling instances"
      ],
      badge: "STORAGE LAYER"
    },
    {
      id: "fallback",
      title: "Graceful Fallback Mode",
      subtitle: "High-Availability Layer",
      tech: "NestJS Cache · Standard Static Feed",
      description: "Our system is built to survive network interruptions. If the Python AI service or the database faces outages, the gateway implements a graceful fallback mechanism.",
      keyPoints: [
        "Serves high-quality curated static content if AI goes offline",
        "Local device storage fallback ensures non-blocking app boots",
        "Zero-crash design: users can still browse panoramas and save notes offline"
      ],
      badge: "RESILIENCY LAYER"
    }
  ],
  archFlowTitle: "Data Flow Simulation: Chatbot Inquiry",
  archFlowSteps: [
    {
      from: "React Native Client",
      to: "NestJS API Gateway",
      label: "1. Prompt Sent",
      desc: "Client transmits user message and token securely via JSON."
    },
    {
      from: "NestJS API Gateway",
      to: "FastAPI AI Service",
      label: "2. Cached Token Proxy",
      desc: "Gateway validates session and proxies request, checking for pre-cached responses."
    },
    {
      from: "FastAPI AI Service",
      to: "NestJS API Gateway",
      label: "3. Vector Query",
      desc: "FastAPI generates prompt context, polls database metadata, and streams AI reply."
    },
    {
      from: "NestJS API Gateway",
      to: "React Native Client",
      label: "4. Unified Response",
      desc: "Formatted bilingual payload delivered safely back to client."
    }
  ],

  featuresTitle: "Core Platform Capabilities",
  featuresSubtitle: "An overview of delivered MVP features versus the visionary roadmap.",
  featuresFilterAll: "All Features",
  featuresFilterMvp: "Delivered MVP (✓)",
  featuresFilterFuture: "Future Vision",
  featuresList: [
    {
      id: "feat-1",
      title: "Bilingual AR/EN + RTL",
      description: "Simultaneous, absolute support for Arabic and English languages with flawless structural mirroring.",
      isMvp: true,
      category: "UX/UI"
    },
    {
      id: "feat-2",
      title: "City & Monument Discovery",
      description: "Deep metadata hierarchy letting users search, filter, and locate historical landmarks across Egyptian cities.",
      isMvp: true,
      category: "Discovery"
    },
    {
      id: "feat-3",
      title: "360° Panoramas & Hotspots",
      description: "Stunning spherical panorama viewport integrated with interactive pins linked to deep historical monographs.",
      isMvp: true,
      category: "Immersion"
    },
    {
      id: "feat-4",
      title: "Historical Timelines & Media",
      description: "Interactive visual scroll timelines contextualizing dynasties, pharaohs, and archaeological events.",
      isMvp: true,
      category: "Education"
    },
    {
      id: "feat-5",
      title: "AI Heritage Chatbot",
      description: "A customized Gemini companion trained with targeted Egyptian history datasets for real-time educational chats.",
      isMvp: true,
      category: "AI/ML"
    },
    {
      id: "feat-6",
      title: "Personalized Recommendations",
      description: "A custom service displaying a 'For You' monument feed that adapts dynamically to your reading patterns.",
      isMvp: true,
      category: "AI/ML"
    },
    {
      id: "feat-7",
      title: "Favorites & User Ratings",
      description: "A structured social validation loop letting authenticated users bookmark spots and review monuments.",
      isMvp: true,
      category: "Social"
    },
    {
      id: "feat-8",
      title: "Content Error Reporting",
      description: "Enables scholars and guides to submit factual updates directly through the client to keep data pristine.",
      isMvp: true,
      category: "Scholarly"
    },
    {
      id: "feat-9",
      title: "Personality Onboarding Quiz",
      description: "A fun gamified quiz classifying users into Explorer, Historian, or Culture Lover, tuning their home feed.",
      isMvp: true,
      category: "Discovery"
    },
    {
      id: "feat-10",
      title: "Secure Auth (OAuth + JWT)",
      description: "Cryptographic JSON Web Token ecosystem with Google Sign-In and secure refresh token rotation cycles.",
      isMvp: true,
      category: "Security"
    },
    {
      id: "feat-11",
      title: "Gamification & Challenge System",
      description: "Interactive historical quests, daily streaks, XP, achievements, and competitive student leaderboards.",
      isMvp: false,
      category: "Engagement",
      tag: "Explore Vision Prototype",
      tagAr: "استكشف النموذج الأولي للرؤية"
    },
    {
      id: "feat-12",
      title: "Admin CMS Dashboard",
      description: "Comprehensive back-office panel allowing museum curators and scholars to directly add coordinates and edit assets.",
      isMvp: false,
      category: "Management",
      tag: " Curators Only",
      tagAr: "للمشرفين فقط"
    },
    {
      id: "feat-13",
      title: "Guest Browsing Mode",
      description: "Allows basic non-authenticated entry to view public maps and cities, deferring registration requirements.",
      isMvp: false,
      category: "Discovery",
      tag: "Deferred",
      tagAr: "مؤجل"
    }
  ],

  demoTitle: "Interactive Demo & Portals",
  demoSubtitle: "Examine the technical execution, view the video walkthrough, and explore mobile download options.",
  demoVideoTitle: "Application Walkthrough (90s)",
  demoVideoDesc: "Watch a high-resolution, narrated live capture of the real mobile application in action — showing the bilingual transition, interactive 360° panorama hotspots, and real-time Gemini AI chat.",
  demoDownloadTitle: "Examiner Mobile Portals",
  demoQrApkLabel: "Android APK Package",
  demoQrIosLabel: "iOS TestFlight Suite",
  demoWalkthroughTitle: "Core Scenarios to Inspect",
  demoWalkthroughSteps: [
    "Execute the Onboarding Personality Quiz and observe how the primary landing recommendations instantly shift to match your profile.",
    "Open the Sphinx Monument, double tap to open the 360° Sphere, drag in any direction, and tap the golden hotspots to expand the historical plaque.",
    "Toggle the application language in the sidebar and observe the layout instantly flip dynamically with complete RTL text rendering.",
    "Open the Chatbot and ask an intricate historical question; note the targeted historical constraints in the AI's response."
  ],

  teamTitle: "The Academic Panel",
  teamSubtitle: "Developed as a graduation project by the College of Computing & Information Technology (CCIT).",
  teamUniversity: "Arab Academy for Science, Technology and Maritime Transport",
  teamCollege: "CCIT - Alexandria, Egypt",
  teamYear: "Academic Year: 2025 – 2026",
  teamMembersTitle: "Project Founders",
  teamSupervisorsTitle: "Academic Supervisors",
  teamMembers: [
    { name: "Student 1", role: "Software Architect & Gateway Dev" },
    { name: "Student 2", role: "Mobile Engineer (RTL & Map Rendering)" },
    { name: "Student 3", role: "FastAPI AI & Recommendation Dev" },
    { name: "Student 4", role: "UI/UX Designer & Media Curator" },
    { name: "Student 5", role: "Database Admin & Integration Tester" },
    { name: "Student 6", role: "QA Engineer & Security Compliance" }
  ],
  teamSupervisors: [
    { name: "Prof. Dr. Supervisor Name", role: "Primary Academic Advisor" },
    { name: "Dr. Co-Advisor Name", role: "Technical Co-Supervisor" }
  ],
  footerLinksTitle: "Technical Documents",
  footerThesisLabel: "Read Thesis (PDF)",
  footerGithubLabel: "Repository Codebase",
  footerApiDocsLabel: "API Technical Docs",
  footerDisclaimer: "Disclaimer: This landing page serves as a presentation portal for the AASTMT graduation defense committee. The mobile application and backend services are hosted separately.",
  footerCopyright: "© 2026 Heritage Hub. All rights reserved. Crafted for academic excellence."
};

export const arabicContent: Translation = {
  navProblem: "المشكلة",
  navSolution: "الحل",
  navArchitecture: "البنية البرمجية",
  navFeatures: "المميزات",
  navDemo: "العرض والتحميل",
  navTeam: "فريق العمل",
  ctaButton: "عرض المشروع",

  heroHeadline: "استكشف تراث مصر — بشكل غامر، ذكي، وثنائي اللغة",
  heroSubhead: "مشروع تخرج يقدم منصة برمجية موحدة وعالية الأداء للهواتف المحمولة لاستكشاف المدن والمعالم الأثرية المصرية عبر جولات بانورامية افتراضية 360 درجة، وخطوط زمنية تعليمية، ومرشد ذكي يعتمد على الذكاء الاصطناعي.",
  heroGraduationBadge: "الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري · مشروع التخرج ٢٠٢٦",
  heroTechStackLabel: "تم تطويره باستخدام",
  heroCtaDemo: "شاهد العرض الحي",
  heroCtaArch: "استكشف البنية البرمجية",

  problemTitle: "تحدي الحفاظ على التراث",
  problemSubtitle: "يفتقر الوضع الحالي للسياحة الثقافية والتقنيات التعليمية إلى الترابط والعمق المكاني التفاعلي.",
  problems: [
    {
      id: "prob-1",
      title: "تراث مُشتَّت",
      description: "المحتوى السياحي والتاريخي مبعثر عبر مواقع غامضة، وحسابات التواصل الاجتماعي، والتطبيقات القديمة — دون وجود إطار جغرافي وتاريخي مصري موحد وموثق.",
      museumLabel: "معرض رقم ٠١ / المعرفة المشتتة"
    },
    {
      id: "prob-2",
      title: "استكشاف مسطح",
      description: "تعرض معظم التطبيقات صوراً ثنائية الأبعاد معزولة تفتقر إلى السياق الفراغي والارتباط المكاني. لا يمكن للزائر الوقوف تفاعلياً داخل معبد أو مقبرة قبل رحلته الفعلية.",
      museumLabel: "معرض رقم ٠٢ / الحدود الأبعاد المحصورة"
    },
    {
      id: "prob-3",
      title: "العربية كخيار ثانوي",
      description: "غالباً ما يُعامل دعم النص العربي وتنسيق الاتجاه من اليمين إلى اليسار كفكرة لاحقة مستعجلة، مما ينتج عنه واجهات مشوهة وتجربة قراءة رديئة للمستخدمين المحليين.",
      museumLabel: "معرض رقم ٠٣ / فجوة تجربة المستخدم المحلي"
    }
  ],

  solutionTitle: "حل هيريتج هاب (Heritage Hub)",
  solutionSubtitle: "منظومة متكاملة ذات جودة أكاديمية تدمج الوسائط المكانية التفاعلية مع المرشدين الأذكياء.",
  solutionPillars: [
    {
      id: "discover",
      title: "اكتشف بذكاء",
      description: "تصفح معالم مصر جغرافياً وتاريخياً. ابحث، فلتر، واكتشف المدن القديمة، السلالات الحاكمة، والآثار من خلال تصنيف هرمي دقيق ومثبت ثنائي اللغة.",
      accent: "#D4AF37",
      points: [
        "تصنيف تفاعلي حسب المدينة والحقبة التاريخية",
        "محرك بحث فوري ثنائي اللغة بالكامل",
        "اختبار ممتع لتخصيص الواجهة حسب نمط اهتمامك"
      ]
    },
    {
      id: "immerse",
      title: "عايش بوجدانك",
      description: "تجوّل في روائع مصر الأثرية من أي مكان في العالم. بيئات بانورامية غامرة 360° فائقة الدقة تحتوي على نقاط تفاعلية تعليمية تعيد الحياة للآثار.",
      accent: "#74584a",
      points: [
        "مستعرض كروي تفاعلي 360° مدمج كلياً في التطبيق",
        "نقاط اهتمام مرتبطة بلوحات شرح تفصيلية مدعمة علمياً",
        "خطوط زمنية بصرية ومعارض وسائط تاريخية متعمقة"
      ]
    },
    {
      id: "personalize",
      title: "تخصيص بالذكاء الاصطناعي",
      description: "رفيق تعليمي مخصص لك. تتكيف المنصة مع أسلوب التعلم الفردي الخاص بك، وترشح المحتوى بناءً على نمط اهتماماتك وسلوك التصفح الأكاديمي.",
      accent: "#D4AF37",
      points: [
        "رفيق التراث الذكي المدمج للحوار الأكاديمي التاريخي",
        "خوارزميات توصية متطورة لتصفح مخصص لك",
        "اختبار تفاعلي مبتكر يحدد نمط فضولك المعرفي"
      ]
    }
  ],
  mockupHeading: "داخل تجربة الهاتف المحمول",
  mockupDescription: "يجمع تطبيق الهواتف المحمولة لـ Heritage Hub بين خطوط الطباعة الراقية والاستكشاف التفاعلي. يوضح هذا العرض عالي الجودة واجهتنا المخصصة التي تمزج خلفية البردي الدافئة مع الذهبي الفاخر للصحراء وتدرجات الطين العميقة والمريحة للعين.",
  mockupBadge: "معاينة واجهة التطبيق الحقيقية",

  archTitle: "بنية برمجية قوية من ٣ طبقات",
  archSubtitle: "بنية تحتية متكاملة مصممة بعناية للسرعة، الأمان العالي، والتعامل الذكي مع حالات انقطاع الخدمة.",
  archInteractiveNotice: "انقر أو مرر مؤشر الفأرة على أي من طبقات النظام لاستكشاف تفاصيلها الهندسية الدقيقة ودورها في المنظومة.",
  archNodes: [
    {
      id: "react-native",
      title: "تطبيق الهواتف المحمولة",
      subtitle: "واجهة المستخدم العميل (Expo)",
      tech: "TypeScript · Expo · React Native Maps",
      description: "تطبيق الهاتف متعدد المنصات والمدعوم بمحرك قوي. يتميز ببناء واجهات مخصصة، وانتقالات فيزيائية سلسة، وانعكاس كامل للواجهة للغة العربية (RTL)، مع خاصية التخزين المؤقت للوسائط للعمل بلا إنترنت.",
      keyPoints: [
        "انعكاس تلقائي كامل ومتقن للواجهات والأزرار والنصوص",
        "يتصل حصرياً وبأمان ببوابة NestJS لضمان الحماية القصوى",
        "استجابة برمجية فائقة لعرض ومعالجة البانوراما 360°"
      ],
      badge: "طبقة العميل"
    },
    {
      id: "nestjs",
      title: "بوابة الخدمات NestJS",
      subtitle: "المنسق المركزي والمحرك الأساسي",
      tech: "TypeScript · Node.js · Express · JWT",
      description: "البوابة الرئيسية وحصن الحماية للتطبيق. تدير المصادقة، وتتحقق من الصلاحيات باستخدام الرموز المشفرة (JWT)، وتجمع عمليات قواعد البيانات، وتلعب دور التخزين المؤقت لطلبات الذكاء الاصطناعي الموجهة للخادم الداخلي.",
      keyPoints: [
        "نظام متطور للمصادقة وتحديث الرموز الأمنية (JWT Rotation)",
        "طبقة وسيطة لتخزين إجابات الذكاء الاصطناعي لتخفيف الضغط وتقليل التكلفة",
        "تنسيق مخرجات البيانات بمرونة لتلائم البنية ثنائية اللغة تلقائياً"
      ],
      badge: "طبقة البوابة"
    },
    {
      id: "fastapi",
      title: "خادم الذكاء الاصطناعي FastAPI",
      subtitle: "الخدمات الذكية ومحرك التوصيات",
      tech: "Python · FastAPI · Gemini API · LangChain",
      description: "خدمة دقيقة فائقة السرعة بلغة بايثون مخصصة للذكاء الاصطناعي. تتولى معالجة اللغات الطبيعية (NLP) لرفيق التراث الذكي وتنفذ خوارزميات التوصية الذكية للمستخدمين.",
      keyPoints: [
        "استجابة غير متزامنة فائقة السرعة لمعالجة الطلبات المتوازية",
        "رفيق ذكي يعتمد على نماذج Gemini مقيد بمعايير تاريخية مصرية صارمة وموثقة",
        "نظام توصيات يعتمد على خوارزميات الترشيح التعاوني والتصنيف الفردي"
      ],
      badge: "طبقة الذكاء الاصطناعي"
    },
    {
      id: "postgresql",
      title: "قاعدة بيانات PostgreSQL",
      subtitle: "التخزين المترابط الهيكلي (Prisma)",
      tech: "PostgreSQL · Prisma ORM · Cloud SQL",
      description: "المستودع العلائقي المركزي للبيانات. يحفظ العلاقات الهيكلية بين المستخدمين، المدن، الآثار، النقاط الساخنة للبانوراما، السلالات الملكية، والمفضلات وتتبع النشاط الأكاديمي.",
      keyPoints: [
        "قيود علاقات صارمة لمنع وجود بيانات مقطوعة أو أخطاء برمجية",
        "فهرسة ذكية لمعاملات البحث الجغرافي والزمني لسرعة فائقة",
        "استضافة سحابية مدارة توفر توفراً عالي الاستمرارية وقابلية التوسع التلقائي"
      ],
      badge: "طبقة التخزين"
    },
    {
      id: "fallback",
      title: "وضع الصمود والتراجع المرن",
      subtitle: "طبقة ضمان استمرار الخدمة",
      tech: "NestJS Cache · Standard Static Feed",
      description: "صُمم نظامنا للصمود أمام الانقطاعات الأمنية والشبكية. في حالة توقف خادم الذكاء الاصطناعي أو قاعدة البيانات، تعمل البوابة فوراً على تشغيل نمط الصمود المرن.",
      keyPoints: [
        "تقديم محتوى منسق وعالي الجودة من الذاكرة المؤقتة في حالة غياب الذكاء الاصطناعي",
        "تخزين محلي مؤقت على جهاز العميل يمنع تعطل إقلاع التطبيق كلياً",
        "تصميم آمن ضد الانهيار لضمان تصفح المعالم الأثرية بلا اتصال"
      ],
      badge: "طبقة المرونة والصمود"
    }
  ],
  archFlowTitle: "محاكاة تدفق البيانات: استعلام الرفيق الذكي",
  archFlowSteps: [
    {
      from: "تطبيق الهواتف (React Native)",
      to: "بوابة الخدمات NestJS",
      label: "١. إرسال السؤال",
      desc: "يرسل التطبيق سؤال المستخدم مع رمز المصادقة بأمان بتنسيق JSON."
    },
    {
      from: "بوابة الخدمات NestJS",
      to: "خادم الذكاء الاصطناعي FastAPI",
      label: "٢. التحقق والتحويل",
      desc: "تتحقق البوابة من الجلسة وتمرر الطلب بعد فحص الذاكرة المؤقتة للإجابات السريعة."
    },
    {
      from: "خادم الذكاء الاصطناعي FastAPI",
      to: "بوابة الخدمات NestJS",
      label: "٣. توليد الإجابة وسحب السياق",
      desc: "يقوم خادم بايثون بصياغة السياق الأكاديمي وسحب بيانات الآثار وصياغة الإجابة والتدفق."
    },
    {
      from: "بوابة الخدمات NestJS",
      to: "تطبيق الهواتف (React Native)",
      label: "٤. تسليم الإجابة الموحدة",
      desc: "تسليم الإجابة المنسقة ثنائية اللغة بأمان تام وسلس لواجهة العميل."
    }
  ],

  featuresTitle: "قدرات ومميزات المنصة",
  featuresSubtitle: "نظرة عامة على مميزات النسخة الأولية Delivered MVP والخدمات المستقبلية المخطط لها.",
  featuresFilterAll: "كل المميزات",
  featuresFilterMvp: "النسخة الأولية المنفذة (✓)",
  featuresFilterFuture: "الرؤية المستقبلية",
  featuresList: [
    {
      id: "feat-1",
      title: "دعم ثنائي اللغة كامل مع RTL",
      description: "دعم مطلق ومتكامل باللغتين العربية والإنجليزية مع انعكاس كامل ومنضبط لواجهات التطبيق وعناصره.",
      isMvp: true,
      category: "تجربة المستخدم"
    },
    {
      id: "feat-2",
      title: "استكشاف المدن والآثار",
      description: "هيكلية بيانات متعمقة تتيح للمستخدمين تصفح المعالم التاريخية وفلترتها جغرافياً في مصر بسهولة.",
      isMvp: true,
      category: "الاستكشاف"
    },
    {
      id: "feat-3",
      title: "بانوراما 360° ونقاط ساخنة تفاعلية",
      description: "منظور كروي مذهل داخل التطبيق يحتوي على دبابيس ذهبية تفاعلية تعرض تفاصيل أثرية عميقة عند النقر.",
      isMvp: true,
      category: "المعايشة الغامرة"
    },
    {
      id: "feat-4",
      title: "خطوط زمنية ومعارض وسائط",
      description: "خطوط بصرية متفاعلة لتتبع السلالات الفرعونية، الملوك، والأحداث التاريخية الأثرية بشكل ممتع.",
      isMvp: true,
      category: "التعليم"
    },
    {
      id: "feat-5",
      title: "رفيق التراث بالذكاء الاصطناعي",
      description: "مساعد ذكي يعتمد على نماذج جيمي تم تدريبه على بيانات تاريخية موثقة للإجابة الفورية والأكاديمية.",
      isMvp: true,
      category: "الذكاء الاصطناعي"
    },
    {
      id: "feat-6",
      title: "التوصيات المخصصة لاهتماماتك",
      description: "خوارزمية ذكية تقترح قسماً خاصاً باسم 'لك' يتكيف باستمرار مع طبيعة تصفحك والآثار المفضلة لديك.",
      isMvp: true,
      category: "الذكاء الاصطناعي"
    },
    {
      id: "feat-7",
      title: "المفضلات والتقييمات",
      description: "منظومة اجتماعية تتيح للمستخدمين المسجلين حفظ معالمهم المفضلة وكتابة تقييماتهم ومراجعاتهم علمياً.",
      isMvp: true,
      category: "التفاعل الاجتماعي"
    },
    {
      id: "feat-8",
      title: "الإبلاغ عن أخطاء المحتوى",
      description: "تمكن المرشدين والعلماء من إرسال طلب تصحيح معلوماتي للتأكد من دقة البيانات وتحديثها فورياً.",
      isMvp: true,
      category: "الأكاديمي"
    },
    {
      id: "feat-9",
      title: "اختبار تحديد نمط الاهتمام",
      description: "اختبار ترفيهي يصنف فضول الزائر (مستكشف، مؤرخ، محب للثقافة) وبناءً عليه يتشكل المحتوى الرئيسي.",
      isMvp: true,
      category: "الاستكشاف"
    },
    {
      id: "feat-10",
      title: "مصادقة آمنة (OAuth + JWT)",
      description: "منظومة تسجيل دخول مشفرة تدعم Google Sign-In وتدوير الرموز الأمنية لحفظ البيانات وحماية الحسابات.",
      isMvp: true,
      category: "الأمان"
    },
    {
      id: "feat-11",
      title: "الألعاب والمهام الأثرية والتحديات",
      description: "مهام تفاعلية تاريخية، مستويات مستخدم، نقاط خبرة (XP)، ومنافسات علمية بين الطلاب في لوحة الصدارة.",
      isMvp: false,
      category: "التفاعل",
      tag: "استكشف نموذج الرؤية",
      tagAr: "استكشف نموذج الرؤية"
    },
    {
      id: "feat-12",
      title: "لوحة تحكمCurator CMS للمشرفين",
      description: "منصة ويب متكاملة تتيح لخبراء المتاحف وممثلي وزارة الآثار تحرير المحتوى وإضافة إحداثيات الآثار بيسر.",
      isMvp: false,
      category: "الإدارة",
      tag: "للمشرفين فقط",
      tagAr: "للمشرفين فقط"
    },
    {
      id: "feat-13",
      title: "نمط تصفح الزائر المفتوح",
      description: "يتيح تصفحاً أولياً مبسطاً للخرائط والمدن دون الحاجة لتسجيل حساب، مع تأجيل خطوات التسجيل للميزات الخاصة.",
      isMvp: false,
      category: "الاستكشاف",
      tag: "مؤجل",
      tagAr: "مؤجل"
    }
  ],

  demoTitle: "العرض العملي والتحميل التفاعلي",
  demoSubtitle: "اختبر دقة تنفيذ التطبيق العملي، شاهد فيديو جولة النظام، وتعرف على حزم التحميل المتاحة.",
  demoVideoTitle: "جولة حقيقية داخل التطبيق (٩٠ ثانية)",
  demoVideoDesc: "شاهد تسجيل شاشة تفصيلي عالي الجودة يعرض تطبيق الهاتف المحمول الفعلي في بيئة عمله الحية، مستعرضاً الانتقال السلس للغة، واستخدام نقاط البانوراما 360°، وحوار مساعد الذكاء الاصطناعي.",
  demoDownloadTitle: "بوابات فحص المقيمين وأعضاء اللجنة",
  demoQrApkLabel: "حزمة أندرويد APK المباشرة",
  demoQrIosLabel: "مجموعة اختبار iOS TestFlight",
  demoWalkthroughTitle: "أبرز السيناريوهات المقترح اختبارها",
  demoWalkthroughSteps: [
    "قم بإجراء اختبار الفضول المعرفي Onboarding Quiz عند فتح التطبيق، ولاحظ كيف يتغير المحتوى المقترح لك فوراً ليلائم تصنيفك.",
    "افتح معلم 'أبو الهول'، واضغط مرتين لفتح بيئة البانوراما 360°، اسحب بأصبعك في أي اتجاه، ثم اضغط على الدبابيس الذهبية الساخنة لتوسيع الشرح الأثري.",
    "قم بتغيير لغة التطبيق من القائمة الجانبية، وشاهد كيف تنعكس الواجهة وتتغير النصوص فورياً وبشكل منسق تماماً.",
    "افتح رفيق التراث الذكي Chatbot واطرح سؤالاً تاريخياً متخصصاً؛ ولاحظ دقة الإجابات وتقيدها التام بالمعارف المصرية التاريخية المعتمدة."
  ],

  teamTitle: "اللجنة الأكاديمية والمطورون",
  teamSubtitle: "تم تطوير هذا المشروع كرسالة تخرج بكلية الحاسبات وتكنولوجيا المعلومات (Alex CCIT).",
  teamUniversity: "الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري",
  teamCollege: "كلية الحاسبات وتكنولوجيا المعلومات - الإسكندرية، مصر",
  teamYear: "العام الأكاديمي: ٢٠٢٥ – ٢٠٢٦",
  teamMembersTitle: "فريق المطورين الخريجين",
  teamSupervisorsTitle: "تحت إشراف الهيئة الأكاديمية",
  teamMembers: [
    { name: "الطالب ١", role: "معماري النظام ومطور خادم وبوابة الخدمات (Gateway)" },
    { name: "الطالب ٢", role: "مهندس واجهات الهاتف ورسم الخرائط ثنائي اللغة" },
    { name: "الطالب ٣", role: "مطور خادم الذكاء الاصطناعي ومحرك التوصيات" },
    { name: "الطالب ٤", role: "مصمم واجهات المستخدم ومنسق الوسائط التاريخية" },
    { name: "الطالب ٥", role: "مدير قاعدة البيانات واختبارات التكامل والربط" },
    { name: "الطالب ٦", role: "مهندس الجودة، اختبار الأمان والامتثال" }
  ],
  teamSupervisors: [
    { name: "أ.د. اسم المشرف الأكاديمي الرئيسي", role: "المشرف الأكاديمي الأساسي" },
    { name: "د. اسم المشرف المساعد", role: "المشرف الأكاديمي المساعد" }
  ],
  footerLinksTitle: "الوثائق والروابط التقنية",
  footerThesisLabel: "تحميل رسالة التخرج (PDF)",
  footerGithubLabel: "مستودع الكود (GitHub)",
  footerApiDocsLabel: "الوثائق التقنية للخوادم (API)",
  footerDisclaimer: "تنويه: تعتبر هذه الصفحة بوابة عرض تقديمية مخصصة للجنة مناقشة التخرج بالأكاديمية العربية (AASTMT). تطبيق الهاتف وخوادمه مستضافة ومجهزة بشكل مستقل.",
  footerCopyright: "© ٢٠٢٦ هيريتج هاب (Heritage Hub). جميع الحقوق محفوظة. صُنع لتحقيق التميز الأكاديمي."
};
