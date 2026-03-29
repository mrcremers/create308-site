export type ProgramCategoryKey = "dance" | "theatre" | "music";
export type GuidedCategoryKey = ProgramCategoryKey | "explore";
export type AgeGroup = "3-5" | "6-8" | "9-12" | "13+";

export type HomepageProgramCard = {
  key: ProgramCategoryKey;
  title: string;
  description: string;
  href: string;
  image: string;
};

export type ProgramCategory = {
  key: ProgramCategoryKey;
  title: string;
  shortDescription: string;
  href: string;
  image: string;
  browseLabel: string;
};

export type FocusArea = {
  title: string;
  text: string;
};

export type InfoCard = {
  title: string;
  description: string;
};

export type ProgramDetailPage = {
  key: ProgramCategoryKey;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  introEyebrow: string;
  introHeading: string;
  introBody: string[];
  image: string;
  focusSectionEyebrow: string;
  focusSectionHeading: string;
  focusAreas: FocusArea[];
  infoCards: InfoCard[];
};

export type GuidedResultCard = {
  title: string;
  description: string;
  ageLabel: string;
  tag: string;
  href: string;
};

export type GuidedCategoryConfig = {
  key: GuidedCategoryKey;
  label: string;
  title: string;
  description: string;
  image?: string;
  solidBackground?: string;
  cardTitle: string;
  cardSubtitle: string;
  panelEyebrow: string;
  panelHeading: string;
  panelDescription: string;
  focusPrompt: string;
  focusOptions: string[];
};

export type GuidedRecommendationMap = Record<
  GuidedCategoryKey,
  {
    defaultResults: GuidedResultCard[];
    byAge?: Partial<Record<AgeGroup, GuidedResultCard[]>>;
    byFocus?: Partial<Record<string, GuidedResultCard[]>>;
  }
>;

export const ageGroups: AgeGroup[] = ["3-5", "6-8", "9-12", "13+"];

export const homepageProgramCards: HomepageProgramCard[] = [
  {
    key: "dance",
    title: "Dance",
    description:
      "Technique, artistry, and movement classes for students of all ages and levels.",
    href: "/programs/dance",
    image: "/stockdance2.jpeg",
  },
  {
    key: "theatre",
    title: "Musical Theatre",
    description:
      "Performance-based training that blends acting, movement, and stage presence.",
    href: "/programs/theatre",
    image: "/stocktheater1.jpeg",
  },
  {
    key: "music",
    title: "Music",
    description:
      "Personalized instruction that helps students build skill, discipline, and expression.",
    href: "/programs/music",
    image: "/stockmusic1.jpeg",
  },
];

export const programCategories: ProgramCategory[] = [
  {
    key: "dance",
    title: "Dance",
    shortDescription:
      "Technique, artistry, and movement classes for students of all ages and levels.",
    href: "/programs/dance",
    image: "/stockdance2.jpeg",
    browseLabel: "Go to Dance →",
  },
  {
    key: "theatre",
    title: "Musical Theatre",
    shortDescription:
      "Performance-based training that blends acting, movement, and stage presence.",
    href: "/programs/theatre",
    image: "/stocktheater1.jpeg",
    browseLabel: "Go to Theatre →",
  },
  {
    key: "music",
    title: "Music",
    shortDescription:
      "Personalized instruction that helps students build skill, discipline, and expression.",
    href: "/programs/music",
    image: "/stockmusic1.jpeg",
    browseLabel: "Go to Music →",
  },
];

export const programDetailPages: Record<ProgramCategoryKey, ProgramDetailPage> = {
  dance: {
    key: "dance",
    title: "Dance",
    heroTitle: "Dance",
    heroSubtitle:
      "Movement, technique, and expression for students at every stage.",
    introEyebrow: "About Dance",
    introHeading: "Build strong foundations through movement",
    introBody: [
      "Dance classes at CREATE 308 are designed to help students develop strong fundamentals while building confidence, creativity, and musicality in a supportive environment.",
      "Whether a student is just beginning or ready for more focused training, dance offers a path for growth at every level.",
    ],
    image: "/stockdance2.jpeg",
    focusSectionEyebrow: "Focus Areas",
    focusSectionHeading: "Explore dance pathways",
    focusAreas: [
      {
        title: "Ballet",
        text: "Build posture, discipline, control, and strong technical foundations.",
      },
      {
        title: "Jazz",
        text: "Develop energy, expression, performance quality, and musicality.",
      },
      {
        title: "Tap",
        text: "Focus on rhythm, timing, coordination, and confidence through sound and movement.",
      },
      {
        title: "Contemporary",
        text: "Encourage creativity, storytelling, and expressive movement.",
      },
    ],
    infoCards: [
      {
        title: "Who It’s For",
        description:
          "Students who enjoy movement, music, performance, and growing in confidence.",
      },
      {
        title: "Age Groups",
        description:
          "Introductory, foundational, and more advanced options can be offered across multiple age groups.",
      },
      {
        title: "Beginner Friendly",
        description:
          "New students are always welcome, and no prior dance experience is required to begin.",
      },
    ],
  },

  theatre: {
    key: "theatre",
    title: "Musical Theatre",
    heroTitle: "Musical Theatre",
    heroSubtitle:
      "Acting, singing, and performance brought together in one creative path.",
    introEyebrow: "About Theatre",
    introHeading: "Build confidence through performance",
    introBody: [
      "Musical theatre combines acting, movement, and music to help students build confidence, expression, and strong stage presence.",
      "It is an engaging option for students who enjoy storytelling, performing, and bringing energy and creativity to the stage.",
    ],
    image: "/stocktheater1.jpeg",
    focusSectionEyebrow: "Focus Areas",
    focusSectionHeading: "Explore theatre pathways",
    focusAreas: [
      {
        title: "Acting",
        text: "Develop character, expression, storytelling, and stage confidence.",
      },
      {
        title: "Singing",
        text: "Build vocal confidence, musical expression, and performance readiness.",
      },
      {
        title: "Movement",
        text: "Strengthen body awareness, stage movement, and choreography skills.",
      },
      {
        title: "Ensemble Performance",
        text: "Learn collaboration, stage presence, and performance as part of a group.",
      },
    ],
    infoCards: [
      {
        title: "Who It’s For",
        description:
          "Students who enjoy performing, storytelling, creativity, and expressing themselves on stage.",
      },
      {
        title: "Age Groups",
        description:
          "Theatre offerings can be designed for a range of ages, from beginner performance classes to more developed stage work.",
      },
      {
        title: "Beginner Friendly",
        description:
          "A great option for students who are trying performance for the first time or ready to grow existing skills.",
      },
    ],
  },

  music: {
    key: "music",
    title: "Music",
    heroTitle: "Music",
    heroSubtitle:
      "Personalized instruction that helps students build skill, discipline, and confidence.",
    introEyebrow: "About Music",
    introHeading: "Grow through personalized instruction",
    introBody: [
      "Music programs at CREATE 308 are designed to help students develop technical skill, discipline, expression, and confidence through thoughtful instruction.",
      "Whether a student is brand new or continuing to grow, music can provide a focused and highly personal creative path.",
    ],
    image: "/stockmusic1.jpeg",
    focusSectionEyebrow: "Focus Areas",
    focusSectionHeading: "Explore music pathways",
    focusAreas: [
      {
        title: "Private Lessons",
        text: "One-on-one instruction tailored to student goals, pace, and experience level.",
      },
      {
        title: "Voice",
        text: "Build confidence, technique, tone, and expression through vocal development.",
      },
      {
        title: "Piano",
        text: "Develop coordination, rhythm, musicianship, and foundational technique.",
      },
      {
        title: "Musicianship",
        text: "Strengthen listening, rhythm, discipline, and overall musical understanding.",
      },
    ],
    infoCards: [
      {
        title: "Who It’s For",
        description:
          "Students who enjoy focused growth, expression, creativity, and building confidence through music.",
      },
      {
        title: "Age Groups",
        description:
          "Music instruction can support a range of age groups, with flexibility based on readiness and goals.",
      },
      {
        title: "Beginner Friendly",
        description:
          "No prior experience is required to begin. Music can start with simple, confidence-building foundations.",
      },
    ],
  },
};

export const guidedCategoryConfigs: GuidedCategoryConfig[] = [
  {
    key: "dance",
    label: "Dance",
    title: "Dance",
    description: "Movement and technique",
    image: "/stockdance2.jpeg",
    cardTitle: "Dance",
    cardSubtitle: "Movement and technique",
    panelEyebrow: "Dance Path",
    panelHeading: "Find the right dance starting point",
    panelDescription:
      "Choose an age group and area of interest to help guide families toward the most appropriate dance options.",
    focusPrompt: "Choose a focus area",
    focusOptions: ["Ballet", "Jazz", "Tap", "Contemporary", "Beginner Dance"],
  },
  {
    key: "theatre",
    label: "Theatre",
    title: "Theatre",
    description: "Acting and performance",
    image: "/stocktheater1.jpeg",
    cardTitle: "Theatre",
    cardSubtitle: "Acting and performance",
    panelEyebrow: "Theatre Path",
    panelHeading: "Find the right theatre starting point",
    panelDescription:
      "Use a few simple selections to guide students toward the most relevant theatre-focused opportunities.",
    focusPrompt: "Choose a focus area",
    focusOptions: [
      "Acting",
      "Singing",
      "Movement",
      "Performance",
      "Beginner Theatre",
    ],
  },
  {
    key: "music",
    label: "Music",
    title: "Music",
    description: "Skill and expression",
    image: "/stockmusic1.jpeg",
    cardTitle: "Music",
    cardSubtitle: "Skill and expression",
    panelEyebrow: "Music Path",
    panelHeading: "Find the right music starting point",
    panelDescription:
      "Select the student’s age and interest area to surface music offerings that feel like a strong match.",
    focusPrompt: "Choose a focus area",
    focusOptions: [
      "Private Lessons",
      "Voice",
      "Piano",
      "Beginner Music",
      "General Musicianship",
    ],
  },
  {
    key: "explore",
    label: "Exploring",
    title: "Exploring",
    description: "Not sure where to start?",
    solidBackground: "#6E5A73",
    cardTitle: "Exploring",
    cardSubtitle: "Not sure where to start?",
    panelEyebrow: "Explore Path",
    panelHeading: "Let’s find the right fit",
    panelDescription:
      "For families who are new to all of this, use a few simple selections to guide them toward a confident starting point.",
    focusPrompt: "What sounds most exciting?",
    focusOptions: ["Dance", "Theatre", "Music", "Not Sure Yet"],
  },
];

export const guidedRecommendations: GuidedRecommendationMap = {
  dance: {
    defaultResults: [
      {
        title: "Dance Foundations",
        description:
          "A general starting point for students who want to build movement skills, coordination, and confidence.",
        ageLabel: "Multiple age groups",
        tag: "Recommended start",
        href: "/programs/dance",
      },
      {
        title: "Technique & Performance",
        description:
          "For students ready to deepen their training with stronger fundamentals and greater artistic growth.",
        ageLabel: "Multiple age groups",
        tag: "Skill development",
        href: "/programs/dance",
      },
    ],
    byAge: {
      "3-5": [
        {
          title: "Creative Movement",
          description:
            "An introductory class focused on rhythm, coordination, imagination, and confidence through movement.",
          ageLabel: "Ages 3-5",
          tag: "Best for beginners",
          href: "/programs/dance",
        },
        {
          title: "Pre-Dance Foundations",
          description:
            "A gentle next step that introduces basic technique, structure, and classroom routines in a fun setting.",
          ageLabel: "Ages 3-5",
          tag: "Strong early foundation",
          href: "/programs/dance",
        },
      ],
    },
    byFocus: {
      Ballet: [
        {
          title: "Ballet Foundations",
          description:
            "Build posture, technique, coordination, and discipline through age-appropriate ballet instruction.",
          ageLabel: "Multiple age groups",
          tag: "Technique focused",
          href: "/programs/dance",
        },
        {
          title: "Beginning Ballet",
          description:
            "A welcoming entry point for students who want structure, grace, and strong fundamentals.",
          ageLabel: "Multiple age groups",
          tag: "Beginner friendly",
          href: "/programs/dance",
        },
      ],
      Jazz: [
        {
          title: "Jazz Fundamentals",
          description:
            "An energetic class focused on musicality, movement quality, flexibility, and performance confidence.",
          ageLabel: "Multiple age groups",
          tag: "High energy",
          href: "/programs/dance",
        },
        {
          title: "Intro to Jazz",
          description:
            "A fun and approachable class that helps students build confidence and learn foundational jazz technique.",
          ageLabel: "Multiple age groups",
          tag: "Approachable start",
          href: "/programs/dance",
        },
      ],
    },
  },

  theatre: {
    defaultResults: [
      {
        title: "Musical Theatre Foundations",
        description:
          "A broad introduction to acting, movement, and stage presence for students who want to explore performance.",
        ageLabel: "Multiple age groups",
        tag: "Great place to start",
        href: "/programs/theatre",
      },
      {
        title: "Performance Workshop",
        description:
          "Build confidence and stage experience through storytelling, character work, and ensemble training.",
        ageLabel: "Multiple age groups",
        tag: "Confidence building",
        href: "/programs/theatre",
      },
    ],
    byFocus: {
      Acting: [
        {
          title: "Acting Foundations",
          description:
            "Students explore expression, character, storytelling, and confidence through age-appropriate acting work.",
          ageLabel: "Multiple age groups",
          tag: "Performance skills",
          href: "/programs/theatre",
        },
        {
          title: "Scene Work Workshop",
          description:
            "A more focused acting experience built around character choices, presence, and ensemble work.",
          ageLabel: "Multiple age groups",
          tag: "Creative development",
          href: "/programs/theatre",
        },
      ],
      Singing: [
        {
          title: "Vocal Performance Basics",
          description:
            "A supportive starting point for students interested in singing, stage confidence, and musical expression.",
          ageLabel: "Multiple age groups",
          tag: "Voice-focused",
          href: "/programs/theatre",
        },
        {
          title: "Musical Theatre Voice",
          description:
            "Combines performance energy with vocal growth in a theatre-centered setting.",
          ageLabel: "Multiple age groups",
          tag: "Stage ready",
          href: "/programs/theatre",
        },
      ],
    },
  },

  music: {
    defaultResults: [
      {
        title: "Music Foundations",
        description:
          "A strong introduction to rhythm, listening, practice habits, and musical confidence.",
        ageLabel: "Multiple age groups",
        tag: "Recommended start",
        href: "/programs/music",
      },
      {
        title: "Individual Growth Path",
        description:
          "A flexible music experience designed around personal development and long-term skill building.",
        ageLabel: "Multiple age groups",
        tag: "Flexible format",
        href: "/programs/music",
      },
    ],
    byFocus: {
      "Private Lessons": [
        {
          title: "Private Music Instruction",
          description:
            "One-on-one learning tailored to student goals, pace, and experience level.",
          ageLabel: "Multiple age groups",
          tag: "Personalized instruction",
          href: "/programs/music",
        },
        {
          title: "Beginner Private Lessons",
          description:
            "A welcoming starting point for students who want focused support and steady progress.",
          ageLabel: "Multiple age groups",
          tag: "Beginner friendly",
          href: "/programs/music",
        },
      ],
      Voice: [
        {
          title: "Voice Lessons",
          description:
            "Develop technique, breath, tone, and confidence through guided vocal instruction.",
          ageLabel: "Multiple age groups",
          tag: "Expression & technique",
          href: "/programs/music",
        },
        {
          title: "Intro to Voice",
          description:
            "A supportive place for students new to singing who want to grow in confidence and skill.",
          ageLabel: "Multiple age groups",
          tag: "Welcoming start",
          href: "/programs/music",
        },
      ],
    },
  },

  explore: {
    defaultResults: [
      {
        title: "Beginner-Friendly Starting Point",
        description:
          "A welcoming first step for families who are still learning what may be the best fit.",
        ageLabel: "Multiple age groups",
        tag: "Safe first choice",
        href: "/programs",
      },
      {
        title: "Explore Multiple Creative Paths",
        description:
          "A flexible recommendation for students who may want to discover whether they connect most with dance, theatre, or music.",
        ageLabel: "Multiple age groups",
        tag: "Still exploring",
        href: "/programs",
      },
    ],
    byFocus: {
      Dance: [
        {
          title: "Start with Dance Foundations",
          description:
            "A strong choice for students who enjoy movement, music, energy, and creative expression.",
          ageLabel: "Multiple age groups",
          tag: "Suggested path",
          href: "/programs/dance",
        },
        {
          title: "Creative Movement or Beginner Dance",
          description:
            "An approachable introduction for students who are new and want a welcoming first experience.",
          ageLabel: "Multiple age groups",
          tag: "Best for first-timers",
          href: "/programs/dance",
        },
      ],
      Theatre: [
        {
          title: "Musical Theatre Foundations",
          description:
            "A great fit for students who enjoy performing, storytelling, and building confidence on stage.",
          ageLabel: "Multiple age groups",
          tag: "Suggested path",
          href: "/programs/theatre",
        },
        {
          title: "Performance Exploration",
          description:
            "A broad entry point that lets students try acting, movement, and expression together.",
          ageLabel: "Multiple age groups",
          tag: "Exploratory option",
          href: "/programs/theatre",
        },
      ],
      Music: [
        {
          title: "Music Foundations",
          description:
            "A strong starting point for students interested in rhythm, listening, discipline, and expression.",
          ageLabel: "Multiple age groups",
          tag: "Suggested path",
          href: "/programs/music",
        },
        {
          title: "Private Lesson Introduction",
          description:
            "A more personalized option for students who want focused guidance from the beginning.",
          ageLabel: "Multiple age groups",
          tag: "Personalized option",
          href: "/programs/music",
        },
      ],
    },
  },
};

export function getGuidedResults(
  category: GuidedCategoryKey,
  age: AgeGroup | null,
  focus: string | null
): GuidedResultCard[] {
  const config = guidedRecommendations[category];

  if (age && config.byAge?.[age]) {
    return config.byAge[age]!.map((item) => ({
      ...item,
      ageLabel: item.ageLabel === "Multiple age groups" ? `Ages ${age}` : item.ageLabel,
    }));
  }

  if (focus && config.byFocus?.[focus]) {
    return config.byFocus[focus]!.map((item) => ({
      ...item,
      ageLabel: age ? `Ages ${age}` : item.ageLabel,
    }));
  }

  return config.defaultResults.map((item) => ({
    ...item,
    ageLabel: age ? `Ages ${age}` : item.ageLabel,
  }));
}

export function getProgramDetailPage(key: ProgramCategoryKey): ProgramDetailPage {
  return programDetailPages[key];
}