export type FAQCategory =
  | "getting-started"
  | "classes-and-programs"
  | "policies-and-logistics"
  | "performances-and-growth";

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
  featured?: boolean;
  sortOrder: number;
};

export const faqCategoryMeta: Record<
  FAQCategory,
  {
    label: string;
    heading: string;
    description: string;
  }
> = {
  "getting-started": {
    label: "Getting Started",
    heading: "Starting at the studio",
    description:
      "Helpful answers for families who are new to CREATE 308 and are deciding where to begin.",
  },
  "classes-and-programs": {
    label: "Classes and Programs",
    heading: "Choosing the right fit",
    description:
      "Answers about program types, class fit, and how students may grow through dance, musical theatre, and music.",
  },
  "policies-and-logistics": {
    label: "Policies and Logistics",
    heading: "What families may need to know",
    description:
      "Practical questions about communication, scheduling, attire, and what to expect as a studio family.",
  },
  "performances-and-growth": {
    label: "Performances and Growth",
    heading: "How students develop over time",
    description:
      "Information about progress, opportunities, and how students may grow in confidence and experience.",
  },
};

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I know which program is right for my child?",
    answer:
      "A great first step is to explore programs by age, interests, and goals. If you are still unsure, reaching out directly is the best way to get guidance toward a starting point that feels appropriate and welcoming.",
    category: "getting-started",
    featured: true,
    sortOrder: 1,
  },
  {
    id: "faq-2",
    question: "Does my child need prior experience to start?",
    answer:
      "No. Many students begin with little or no prior experience. The goal is to help each student start at an appropriate level and grow in confidence over time.",
    category: "getting-started",
    featured: true,
    sortOrder: 2,
  },
  {
    id: "faq-3",
    question: "Can my child try something if they are nervous or unsure?",
    answer:
      "Yes. It is completely normal for students to feel unsure when starting something new. A welcoming environment and thoughtful instruction can make that first step feel much more comfortable.",
    category: "getting-started",
    sortOrder: 3,
  },
  {
    id: "faq-4",
    question: "What ages do you serve?",
    answer:
      "Programs may be offered across a range of age groups depending on the discipline, class structure, and student readiness. The best fit often depends on both age and experience.",
    category: "getting-started",
    sortOrder: 4,
  },
  {
    id: "faq-5",
    question: "How do dance, musical theatre, and music differ?",
    answer:
      "Dance focuses on movement, technique, musicality, and performance. Musical theatre blends acting, movement, and stage presence. Music lessons tend to be more individualized and focus on musical skill, discipline, and expression.",
    category: "classes-and-programs",
    featured: true,
    sortOrder: 5,
  },
  {
    id: "faq-6",
    question: "Can a student participate in more than one area?",
    answer:
      "Yes. Some students may choose to focus on one area, while others may enjoy participating in more than one discipline depending on interest, schedule, and goals.",
    category: "classes-and-programs",
    sortOrder: 6,
  },
  {
    id: "faq-7",
    question: "How do I know if my child should start with a beginner option?",
    answer:
      "If a student is brand new, nervous, or still exploring interest, a beginner-friendly option is often the strongest place to start. It gives them a chance to build comfort and confidence before moving into more advanced instruction.",
    category: "classes-and-programs",
    sortOrder: 7,
  },
  {
    id: "faq-8",
    question: "Are programs focused more on fun or serious training?",
    answer:
      "That can vary by program and by student goals. Strong studios often balance quality instruction with an encouraging atmosphere so students can enjoy the process while still growing in skill and discipline.",
    category: "classes-and-programs",
    sortOrder: 8,
  },
  {
    id: "faq-9",
    question: "What should my child wear to class?",
    answer:
      "That may depend on the specific class or discipline. In general, students should wear clothing that allows movement and follow any studio guidance regarding attire or footwear.",
    category: "policies-and-logistics",
    featured: true,
    sortOrder: 9,
  },
  {
    id: "faq-10",
    question: "What should we bring to the first class?",
    answer:
      "Students typically need appropriate attire, any required shoes or materials, and a positive attitude. For music lessons, additional books or materials may sometimes be recommended depending on instruction.",
    category: "policies-and-logistics",
    sortOrder: 10,
  },
  {
    id: "faq-11",
    question: "How will families receive studio updates or announcements?",
    answer:
      "Studios typically communicate through direct messaging, email, or posted announcements. As the site evolves, the announcements page can also serve as a central place for important updates.",
    category: "policies-and-logistics",
    sortOrder: 11,
  },
  {
    id: "faq-12",
    question: "What happens if we miss a class?",
    answer:
      "That may depend on studio policy and class type. Families should reach out with questions about absences, makeups, or schedule-related concerns.",
    category: "policies-and-logistics",
    sortOrder: 12,
  },
  {
    id: "faq-13",
    question: "Will my child have opportunities to perform?",
    answer:
      "Many students enjoy performance opportunities as part of their experience, though the structure can vary by discipline, class type, and studio programming.",
    category: "performances-and-growth",
    featured: true,
    sortOrder: 13,
  },
  {
    id: "faq-14",
    question: "How quickly will my child improve?",
    answer:
      "Growth looks different for every student. Progress depends on consistency, confidence, instruction, and time. The best outcomes usually come from steady participation and a supportive environment.",
    category: "performances-and-growth",
    sortOrder: 14,
  },
  {
    id: "faq-15",
    question: "Do students have to be competitive to benefit from training?",
    answer:
      "No. Many students benefit greatly from quality arts training without pursuing highly competitive tracks. Confidence, discipline, creativity, and enjoyment all matter.",
    category: "performances-and-growth",
    sortOrder: 15,
  },
  {
    id: "faq-16",
    question: "What is the best goal for the first season or first year?",
    answer:
      "A strong first goal is simply finding the right fit, building comfort, and creating a positive experience that encourages continued growth.",
    category: "performances-and-growth",
    sortOrder: 16,
  },
];

export function getAllFaqs(): FAQItem[] {
  return [...faqs].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFeaturedFaqs(): FAQItem[] {
  return faqs
    .filter((faq) => faq.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFaqsByCategory(category: FAQCategory): FAQItem[] {
  return faqs
    .filter((faq) => faq.category === category)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}