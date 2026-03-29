export type ScheduleDay = "Monday" | "Tuesday" | "Wednesday" | "Thursday";
export type StudioColor = "Grey" | "Black" | "White";
export type ProgramCategory = "dance" | "theatre" | "music";

export type DanceStyle =
  | "Tap"
  | "Hip Hop"
  | "Ballet"
  | "Jazz"
  | "Contemporary"
  | "Lyrical"
  | "Acro"
  | "Leaps, Turns, Tricks"
  | "Ballet / PBT"
  | "Ballet / Jazz"
  | "Tap / Hip Hop";

export type ScheduleClass = {
  id: string;
  day: ScheduleDay;
  studio: StudioColor;
  category: ProgramCategory;
  style: string;
  level: string;
  startTime: string;
  endTime: string;
  instructorId: string;
  shortDescription: string;
  experienceNeeded: string;
};

export const scheduleDays: ScheduleDay[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
];

export const danceStyleFilters: DanceStyle[] = [
  "Tap",
  "Hip Hop",
  "Ballet",
  "Jazz",
  "Contemporary",
  "Lyrical",
  "Acro",
  "Leaps, Turns, Tricks",
  "Ballet / PBT",
  "Ballet / Jazz",
  "Tap / Hip Hop",
];

export const studioMeta: Record<
  StudioColor,
  { label: string; textClass: string }
> = {
  Grey: {
    label: "Grey Studio",
    textClass: "text-[#6B7280]",
  },
  Black: {
    label: "Black Studio",
    textClass: "text-[#4B4B4B]",
  },
  White: {
    label: "White Studio",
    textClass: "text-[#9CA3AF]",
  },
};

export const categoryMeta: Record<
  ProgramCategory,
  {
    label: string;
    chipClass: string;
  }
> = {
  dance: {
    label: "Dance",
    chipClass: "bg-[#EFE8E3] text-[#6E5A73]",
  },
  theatre: {
    label: "Musical Theatre",
    chipClass: "bg-[#F3E8FF] text-[#7C3AED]",
  },
  music: {
    label: "Music",
    chipClass: "bg-[#E0F2FE] text-[#0369A1]",
  },
};

export const danceStyleMeta: Record<
  string,
  {
    accent: string;
    dotClass: string;
    chipClass: string;
  }
> = {
  Tap: {
    accent: "border-l-[#C47A7A]",
    dotClass: "bg-[#C47A7A]",
    chipClass: "bg-[#F7E4E4] text-[#A35F5F]",
  },
  "Hip Hop": {
    accent: "border-l-[#8DAFD9]",
    dotClass: "bg-[#8DAFD9]",
    chipClass: "bg-[#E7EFFA] text-[#5C7FAE]",
  },
  Ballet: {
    accent: "border-l-[#DCC9A3]",
    dotClass: "bg-[#DCC9A3]",
    chipClass: "bg-[#F5EEDC] text-[#A38451]",
  },
  Jazz: {
    accent: "border-l-[#B9DDD4]",
    dotClass: "bg-[#B9DDD4]",
    chipClass: "bg-[#E8F6F2] text-[#5B9284]",
  },
  Contemporary: {
    accent: "border-l-[#DCCEF2]",
    dotClass: "bg-[#DCCEF2]",
    chipClass: "bg-[#F2ECFB] text-[#8A73B0]",
  },
  Lyrical: {
    accent: "border-l-[#F0D6E6]",
    dotClass: "bg-[#F0D6E6]",
    chipClass: "bg-[#FAEEF5] text-[#B27A97]",
  },
  Acro: {
    accent: "border-l-[#D8ECF8]",
    dotClass: "bg-[#D8ECF8]",
    chipClass: "bg-[#EEF7FC] text-[#7DA9C4]",
  },
  "Leaps, Turns, Tricks": {
    accent: "border-l-[#CFE5D6]",
    dotClass: "bg-[#CFE5D6]",
    chipClass: "bg-[#EEF7F0] text-[#70907A]",
  },
  "Ballet / PBT": {
    accent: "border-l-[#E5D8B8]",
    dotClass: "bg-[#E5D8B8]",
    chipClass: "bg-[#F8F2E3] text-[#9D8954]",
  },
  "Ballet / Jazz": {
    accent: "border-l-[#C8DFD2]",
    dotClass: "bg-[#C8DFD2]",
    chipClass: "bg-[#EDF6F1] text-[#6F9381]",
  },
  "Tap / Hip Hop": {
    accent: "border-l-[#D9CBEA]",
    dotClass: "bg-[#D9CBEA]",
    chipClass: "bg-[#F1ECF8] text-[#8A73A8]",
  },
};

export const defaultAccentMeta = {
  accent: "border-l-[#C47A7A]",
  dotClass: "bg-[#C47A7A]",
  chipClass: "bg-[#EFE8E3] text-[#6E5A73]",
};

export const scheduleClasses: ScheduleClass[] = [
  {
    id: "mon-tap-5",
    day: "Monday",
    studio: "Black",
    category: "dance",
    style: "Tap",
    level: "5",
    startTime: "5:00 PM",
    endTime: "5:45 PM",
    instructorId: "avery-rogers",
    shortDescription:
      "A tap class focused on rhythm, clarity, timing, and confidence in performance.",
    experienceNeeded:
      "Best for students placed at Level 5 or those with prior tap experience appropriate for this level.",
  },
  {
    id: "mon-beg-acro",
    day: "Monday",
    studio: "White",
    category: "dance",
    style: "Acro",
    level: "Beginner",
    startTime: "5:00 PM",
    endTime: "5:40 PM",
    instructorId: "katie-harden",
    shortDescription:
      "An introductory acro class that builds flexibility, coordination, and body awareness in a supportive setting.",
    experienceNeeded:
      "No advanced skills required. A good fit for students building early acro foundations.",
  },
  {
    id: "mon-tap-6",
    day: "Monday",
    studio: "Black",
    category: "dance",
    style: "Tap",
    level: "6",
    startTime: "5:50 PM",
    endTime: "6:35 PM",
    instructorId: "avery-rogers",
    shortDescription:
      "Develops stronger rhythm, speed, and articulation through more advanced tap combinations.",
    experienceNeeded:
      "Recommended for students with a solid tap foundation who are ready for increased complexity.",
  },
  {
    id: "mon-advanced-acro",
    day: "Monday",
    studio: "White",
    category: "dance",
    style: "Acro",
    level: "Advanced",
    startTime: "5:50 PM",
    endTime: "6:30 PM",
    instructorId: "emma-weise",
    shortDescription:
      "An advanced acro class focused on strength, control, flexibility, and higher-level skill progression.",
    experienceNeeded:
      "Students should already have strong acro fundamentals and instructor approval for advanced placement.",
  },
  {
    id: "mon-ltt-8",
    day: "Monday",
    studio: "Grey",
    category: "dance",
    style: "Leaps, Turns, Tricks",
    level: "8",
    startTime: "6:35 PM",
    endTime: "7:25 PM",
    instructorId: "vijay-oleander",
    shortDescription:
      "Technique-focused training in turns, jump mechanics, control, and trick execution for advanced dancers.",
    experienceNeeded:
      "Best for upper-level dancers with strong technical foundations and prior training.",
  },
  {
    id: "mon-tap-7",
    day: "Monday",
    studio: "Black",
    category: "dance",
    style: "Tap",
    level: "7",
    startTime: "6:40 PM",
    endTime: "7:25 PM",
    instructorId: "avery-rogers",
    shortDescription:
      "Builds speed, musicality, and performance confidence through more demanding tap work.",
    experienceNeeded:
      "Students should be comfortable with intermediate tap vocabulary and rhythm retention.",
  },
  {
    id: "mon-lyrical-6",
    day: "Monday",
    studio: "White",
    category: "dance",
    style: "Lyrical",
    level: "6",
    startTime: "6:40 PM",
    endTime: "7:25 PM",
    instructorId: "katie-harden",
    shortDescription:
      "A lyrical class focused on expression, movement quality, musicality, and storytelling.",
    experienceNeeded:
      "Recommended for dancers with foundational technique who are ready to connect movement and artistry.",
  },
  {
    id: "mon-ltt-6",
    day: "Monday",
    studio: "Grey",
    category: "dance",
    style: "Leaps, Turns, Tricks",
    level: "6",
    startTime: "7:30 PM",
    endTime: "8:10 PM",
    instructorId: "vijay-oleander",
    shortDescription:
      "Strengthens technical skills in jumps, turns, and controlled trick progressions.",
    experienceNeeded:
      "A strong fit for students with intermediate technique who want focused technical growth.",
  },
  {
    id: "mon-tap-8",
    day: "Monday",
    studio: "Black",
    category: "dance",
    style: "Tap",
    level: "8",
    startTime: "7:30 PM",
    endTime: "8:20 PM",
    instructorId: "avery-rogers",
    shortDescription:
      "An advanced tap class emphasizing precision, speed, style, and performance quality.",
    experienceNeeded:
      "Students should have advanced tap experience and strong rhythm consistency.",
  },
  {
    id: "mon-contemporary-7",
    day: "Monday",
    studio: "White",
    category: "dance",
    style: "Contemporary",
    level: "7",
    startTime: "7:30 PM",
    endTime: "8:20 PM",
    instructorId: "emma-weise",
    shortDescription:
      "Encourages expressive movement, control, and artistry through contemporary technique and phrase work.",
    experienceNeeded:
      "Best for dancers with previous technical training and readiness for more expressive choreography.",
  },
  {
    id: "mon-ltt-7",
    day: "Monday",
    studio: "Grey",
    category: "dance",
    style: "Leaps, Turns, Tricks",
    level: "7",
    startTime: "8:20 PM",
    endTime: "9:00 PM",
    instructorId: "vijay-oleander",
    shortDescription:
      "A higher-level technical class focused on stronger execution, control, and confidence.",
    experienceNeeded:
      "Students should be comfortable with intermediate-to-advanced technique work.",
  },
  {
    id: "mon-contemporary-8",
    day: "Monday",
    studio: "White",
    category: "dance",
    style: "Contemporary",
    level: "8",
    startTime: "8:25 PM",
    endTime: "9:15 PM",
    instructorId: "emma-weise",
    shortDescription:
      "Advanced contemporary training centered on movement quality, expression, and performance presence.",
    experienceNeeded:
      "Recommended for advanced dancers with strong technical and artistic readiness.",
  },
  {
    id: "tue-jazz-4",
    day: "Tuesday",
    studio: "Grey",
    category: "dance",
    style: "Jazz",
    level: "4",
    startTime: "5:30 PM",
    endTime: "6:10 PM",
    instructorId: "emma-weise",
    shortDescription:
      "A jazz class focused on foundational technique, energy, musicality, and confidence.",
    experienceNeeded:
      "A strong fit for dancers building early jazz fundamentals at the Level 4 stage.",
  },
  {
    id: "tue-tap-hiphop-4",
    day: "Tuesday",
    studio: "Grey",
    category: "dance",
    style: "Tap / Hip Hop",
    level: "4",
    startTime: "6:15 PM",
    endTime: "6:55 PM",
    instructorId: "avery-rogers",
    shortDescription:
      "A combo class that introduces students to both rhythm-based tap and energetic hip hop movement.",
    experienceNeeded:
      "Appropriate for students at an early-intermediate level who are building versatility and confidence.",
  },
  {
    id: "wed-hiphop-6",
    day: "Wednesday",
    studio: "Grey",
    category: "dance",
    style: "Hip Hop",
    level: "6",
    startTime: "4:30 PM",
    endTime: "5:15 PM",
    instructorId: "vijay-oleander",
    shortDescription:
      "A hip hop class focused on musicality, dynamics, confidence, and performance style.",
    experienceNeeded:
      "Students should be ready for intermediate hip hop combinations and increased movement complexity.",
  },
  {
    id: "wed-jazz-8",
    day: "Wednesday",
    studio: "Black",
    category: "dance",
    style: "Jazz",
    level: "8",
    startTime: "4:30 PM",
    endTime: "5:15 PM",
    instructorId: "emma-weise",
    shortDescription:
      "Advanced jazz training with a focus on performance quality, precision, flexibility, and control.",
    experienceNeeded:
      "Best for advanced dancers with strong jazz foundations and placement at Level 8.",
  },
  {
    id: "wed-ballet-pbt-7",
    day: "Wednesday",
    studio: "White",
    category: "dance",
    style: "Ballet / PBT",
    level: "7",
    startTime: "4:30 PM",
    endTime: "5:20 PM",
    instructorId: "katie-harden",
    shortDescription:
      "A ballet and Progressing Ballet Technique class designed to support alignment, strength, and control.",
    experienceNeeded:
      "Recommended for dancers with established ballet foundations working at an upper-intermediate level.",
  },
  {
    id: "wed-hiphop-7",
    day: "Wednesday",
    studio: "Grey",
    category: "dance",
    style: "Hip Hop",
    level: "7",
    startTime: "5:20 PM",
    endTime: "6:05 PM",
    instructorId: "vijay-oleander",
    shortDescription:
      "Builds stronger execution, performance quality, and movement confidence through hip hop choreography.",
    experienceNeeded:
      "Students should be comfortable with intermediate hip hop technique and faster combination retention.",
  },
  {
    id: "wed-jazz-6",
    day: "Wednesday",
    studio: "Black",
    category: "dance",
    style: "Jazz",
    level: "6",
    startTime: "5:20 PM",
    endTime: "5:55 PM",
    instructorId: "emma-weise",
    shortDescription:
      "A jazz class that develops flexibility, energy, coordination, and stage confidence.",
    experienceNeeded:
      "Strong for dancers with developing jazz fundamentals who are ready for more structured combinations.",
  },
  {
    id: "wed-ballet-pbt-8",
    day: "Wednesday",
    studio: "White",
    category: "dance",
    style: "Ballet / PBT",
    level: "8",
    startTime: "5:20 PM",
    endTime: "6:10 PM",
    instructorId: "katie-harden",
    shortDescription:
      "Advanced ballet and conditioning work to support turnout, placement, strength, and technique.",
    experienceNeeded:
      "Best for advanced ballet students with strong body awareness and instructor-approved placement.",
  },
  {
    id: "wed-hiphop-8",
    day: "Wednesday",
    studio: "Grey",
    category: "dance",
    style: "Hip Hop",
    level: "8",
    startTime: "6:15 PM",
    endTime: "7:00 PM",
    instructorId: "vijay-oleander",
    shortDescription:
      "Advanced hip hop training focused on power, control, style, and performance presence.",
    experienceNeeded:
      "Students should already demonstrate advanced hip hop readiness and consistent retention skills.",
  },
  {
    id: "wed-jazz-7",
    day: "Wednesday",
    studio: "Black",
    category: "dance",
    style: "Jazz",
    level: "7",
    startTime: "6:15 PM",
    endTime: "7:00 PM",
    instructorId: "emma-weise",
    shortDescription:
      "Intermediate-to-advanced jazz training with emphasis on movement quality, flexibility, and confidence.",
    experienceNeeded:
      "Recommended for dancers progressing into stronger technical jazz work and performance execution.",
  },
  {
    id: "wed-ballet-pbt-6",
    day: "Wednesday",
    studio: "White",
    category: "dance",
    style: "Ballet / PBT",
    level: "6",
    startTime: "6:10 PM",
    endTime: "7:00 PM",
    instructorId: "katie-harden",
    shortDescription:
      "Supports growing ballet dancers with technique, strength, placement, and body control.",
    experienceNeeded:
      "A strong fit for dancers with developing ballet technique who are ready for more focused training.",
  },
  {
    id: "thu-ballet-jazz-3",
    day: "Thursday",
    studio: "Grey",
    category: "dance",
    style: "Ballet / Jazz",
    level: "3",
    startTime: "5:00 PM",
    endTime: "5:30 PM",
    instructorId: "katie-harden",
    shortDescription:
      "A younger combo class introducing ballet and jazz fundamentals in a structured but welcoming environment.",
    experienceNeeded:
      "Ideal for developing dancers building confidence, musicality, and classroom routines.",
  },
  {
    id: "thu-ballet-5",
    day: "Thursday",
    studio: "Black",
    category: "dance",
    style: "Ballet",
    level: "5",
    startTime: "5:00 PM",
    endTime: "5:40 PM",
    instructorId: "katie-harden",
    shortDescription:
      "A ballet class focused on posture, discipline, technique, and control at the Level 5 stage.",
    experienceNeeded:
      "Recommended for dancers with prior ballet exposure and readiness for more structured technique work.",
  },
  {
    id: "thu-hiphop-3",
    day: "Thursday",
    studio: "Grey",
    category: "dance",
    style: "Hip Hop",
    level: "3",
    startTime: "5:35 PM",
    endTime: "6:05 PM",
    instructorId: "vijay-oleander",
    shortDescription:
      "An introductory hip hop class that builds rhythm, confidence, and fun performance energy.",
    experienceNeeded:
      "A strong fit for younger students beginning to explore hip hop movement and musicality.",
  },
  {
    id: "thu-jazz-5",
    day: "Thursday",
    studio: "Black",
    category: "dance",
    style: "Jazz",
    level: "5",
    startTime: "5:40 PM",
    endTime: "6:20 PM",
    instructorId: "emma-weise",
    shortDescription:
      "A jazz class focused on building stronger movement, flexibility, and performance confidence.",
    experienceNeeded:
      "Best for dancers placed at Level 5 who are developing consistency in jazz technique.",
  },
  {
    id: "thu-ballet-4",
    day: "Thursday",
    studio: "Grey",
    category: "dance",
    style: "Ballet",
    level: "4",
    startTime: "6:10 PM",
    endTime: "6:50 PM",
    instructorId: "katie-harden",
    shortDescription:
      "A ballet class that builds body awareness, control, posture, and foundational technique.",
    experienceNeeded:
      "Appropriate for dancers progressing through early ballet training and studio structure.",
  },
  {
    id: "thu-hiphop-5",
    day: "Thursday",
    studio: "Black",
    category: "dance",
    style: "Hip Hop",
    level: "5",
    startTime: "6:20 PM",
    endTime: "7:00 PM",
    instructorId: "vijay-oleander",
    shortDescription:
      "A hip hop class that strengthens confidence, movement quality, rhythm, and performance presence.",
    experienceNeeded:
      "Recommended for students ready for more structured hip hop combinations and stronger execution.",
  },
];

export function getStyleMeta(item: ScheduleClass) {
  if (item.category === "dance") {
    return danceStyleMeta[item.style] ?? defaultAccentMeta;
  }

  return item.category === "theatre"
    ? {
        accent: "border-l-[#7C3AED]",
        dotClass: "bg-[#CDB3F8]",
        chipClass: "bg-[#F3E8FF] text-[#7C3AED]",
      }
    : {
        accent: "border-l-[#8DC3DD]",
        dotClass: "bg-[#8DC3DD]",
        chipClass: "bg-[#E0F2FE] text-[#0369A1]",
      };
}