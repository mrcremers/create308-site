export type InstructorDiscipline = "dance" | "theatre" | "music";

export type Instructor = {
  id: string;
  slug: string;
  name: string;
  role: string;
  disciplines: InstructorDiscipline[];
  image: string;
  shortBio: string;
  fullBio: string[];
  specialties: string[];
  featured?: boolean;
  sortOrder: number;
};

export const instructors: Instructor[] = [
  {
    id: "sarah-dickhaut",
    slug: "sarah-dickhaut",
    name: "Sarah Dickhaut",
    role: "Director and Instructor",
    disciplines: ["dance"],
    image: "/images/instructors/sarah-dickhaut.jpg",
    shortBio:
      "Leads CREATE 308 with a vision for strong instruction, a welcoming family experience, and meaningful creative growth for every student.",
    fullBio: [
      "As director of CREATE 308, Sarah Dickhaut is building a studio experience that feels both elevated and approachable for students and families.",
      "Her vision centers on thoughtful instruction, confidence-building experiences, and a studio culture where students feel supported as they grow.",
      "Sarah is committed to creating a place where strong training and genuine encouragement can exist side by side.",
    ],
    specialties: [
      "Studio leadership",
      "Student development",
      "Creative growth",
      "Family experience",
    ],
    featured: true,
    sortOrder: 1,
  },
  {
    id: "avery-rogers",
    slug: "avery-rogers",
    name: "Avery Rogers",
    role: "Dance Instructor",
    disciplines: ["dance"],
    image: "/images/instructors/avery-rogers.jpg",
    shortBio:
      "Supports dancers through encouraging instruction that helps build confidence, technique, and performance presence.",
    fullBio: [
      "Avery Rogers teaches dance with a focus on helping students grow in both skill and confidence.",
      "Her classes are designed to create a welcoming environment where dancers can strengthen fundamentals while enjoying the creative process.",
      "Students are encouraged to develop artistry, discipline, and joy as they continue to grow.",
    ],
    specialties: ["Technique", "Performance", "Confidence building", "Artistry"],
    sortOrder: 2,
  },
  {
    id: "emma-weise",
    slug: "emma-weise",
    name: "Emma Weise",
    role: "Dance Instructor",
    disciplines: ["dance"],
    image: "/images/instructors/emma-weise.jpg",
    shortBio:
      "Brings an energetic and engaging teaching style that helps students grow in movement quality, expression, and stage confidence.",
    fullBio: [
      "Emma Weise works with students in a way that is both motivating and approachable.",
      "Her instruction emphasizes strong movement, musicality, and confidence in performance.",
      "She helps dancers feel challenged in the right ways while still creating a positive class experience.",
    ],
    specialties: ["Jazz", "Performance quality", "Musicality", "Stage presence"],
    sortOrder: 3,
  },
  {
    id: "katie-harden",
    slug: "katie-harden",
    name: "Katie Harden",
    role: "Dance Instructor",
    disciplines: ["dance"],
    image: "/images/instructors/katie-harden.jpg",
    shortBio:
      "Helps students build strong foundations through clear instruction, steady growth, and a supportive learning environment.",
    fullBio: [
      "Katie Harden teaches with an emphasis on consistency, strong fundamentals, and student encouragement.",
      "Her classes are designed to help dancers grow in confidence while developing technique and expression over time.",
      "She creates an environment where students can feel supported, capable, and motivated to improve.",
    ],
    specialties: ["Foundations", "Technique", "Beginner support", "Confidence"],
    sortOrder: 4,
  },
  {
    id: "vijay-oleander",
    slug: "vijay-oleander",
    name: "Vijay Oleander",
    role: "Dance Instructor",
    disciplines: ["dance"],
    image: "/images/instructors/vijay-oleander.jpg",
    shortBio:
      "Guides students with a strong performance mindset while helping them grow in confidence, expression, and movement quality.",
    fullBio: [
      "Vijay Oleander brings a performance-focused energy to instruction while still keeping the class environment supportive and welcoming.",
      "Students are encouraged to strengthen technique, presence, and creative expression as they grow.",
      "His teaching style helps dancers feel both challenged and inspired.",
    ],
    specialties: ["Performance", "Expression", "Movement quality", "Stage presence"],
    sortOrder: 5,
  },
];

export const featuredInstructors = instructors
  .filter((instructor) => instructor.featured)
  .sort((a, b) => a.sortOrder - b.sortOrder);

export function getAllInstructors(options?: { includeFeatured?: boolean }): Instructor[] {
  const includeFeatured = options?.includeFeatured ?? true;

  return instructors
    .filter((instructor) => (includeFeatured ? true : !instructor.featured))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getInstructorBySlug(slug: string): Instructor | undefined {
  return instructors.find((instructor) => instructor.slug === slug);
}

export function getInstructorsByDiscipline(
  discipline: InstructorDiscipline,
  options?: { includeFeatured?: boolean }
): Instructor[] {
  const includeFeatured = options?.includeFeatured ?? false;

  return instructors
    .filter((instructor) => instructor.disciplines.includes(discipline))
    .filter((instructor) => (includeFeatured ? true : !instructor.featured))
    .sort((a, b) => a.sortOrder - b.sortOrder);
}