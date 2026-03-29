export type AnnouncementCategory =
  | "registration"
  | "studio-news"
  | "events"
  | "important-dates";

export type Announcement = {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  category: AnnouncementCategory;
  publishedAt: string;
  featured?: boolean;
  sortOrder: number;
};

export const announcementCategoryLabels: Record<AnnouncementCategory, string> = {
  registration: "Registration",
  "studio-news": "Studio News",
  events: "Events",
  "important-dates": "Important Dates",
};

export const announcements: Announcement[] = [
  {
    id: "fall-registration-opening",
    title: "Fall Registration Opens Soon",
    excerpt:
      "Get ready for upcoming classes, new opportunities, and studio updates as the next season approaches.",
    content: [
      "CREATE 308 is preparing for the upcoming season, and fall registration will be opening soon.",
      "Families are encouraged to explore available program areas, review options by age and interest, and reach out with questions about the best fit.",
      "More detailed registration information, dates, and next steps can be shared here as they are finalized.",
    ],
    category: "registration",
    publishedAt: "July 2026",
    featured: true,
    sortOrder: 1,
  },
  {
    id: "welcome-to-create-308",
    title: "A New Chapter for CREATE 308",
    excerpt:
      "CREATE 308 is entering an exciting new season focused on strong instruction, creative growth, and a welcoming family experience.",
    content: [
      "CREATE 308 is continuing to grow with a renewed focus on thoughtful instruction, a welcoming environment, and meaningful student experiences.",
      "The goal is to create a studio culture where students can build confidence, creativity, and skill across dance, musical theatre, and music.",
      "As the studio evolves, this page can be used to share updates, milestones, and important news with families.",
    ],
    category: "studio-news",
    publishedAt: "July 2026",
    featured: true,
    sortOrder: 2,
  },
  {
    id: "exploring-program-options",
    title: "Explore Programs by Age and Interest",
    excerpt:
      "Families who are still deciding where to begin can use the programs page to explore options in a more guided way.",
    content: [
      "The programs page is designed to help families quickly understand available creative paths.",
      "Visitors can either go directly to Dance, Musical Theatre, or Music, or use the guided experience to narrow options by age and interest.",
      "This is especially helpful for families who are new to studio programs and want a more confident starting point.",
    ],
    category: "studio-news",
    publishedAt: "July 2026",
    sortOrder: 3,
  },
  {
    id: "upcoming-studio-events",
    title: "Upcoming Studio Events",
    excerpt:
      "Keep an eye out for upcoming studio dates, performances, and special opportunities throughout the season.",
    content: [
      "As the season develops, this space can be used to share upcoming events, performances, showcases, and studio milestones.",
      "It gives families one clear place to check for what is coming next.",
      "For now, this serves as a preview of how future event communication can be organized.",
    ],
    category: "events",
    publishedAt: "July 2026",
    sortOrder: 4,
  },
  {
    id: "important-season-dates",
    title: "Important Dates Will Be Shared Here",
    excerpt:
      "Key studio dates, schedule milestones, and reminders can be posted here to keep families informed.",
    content: [
      "This section can later include registration windows, session start dates, holidays, performance dates, and studio reminders.",
      "Having a clear announcements page makes it easier for families to stay connected without needing to search in multiple places.",
      "As the studio becomes more active, this page can become one of the most practical tools on the site.",
    ],
    category: "important-dates",
    publishedAt: "July 2026",
    sortOrder: 5,
  },
];

export function getAllAnnouncements(): Announcement[] {
  return [...announcements].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getFeaturedAnnouncements(): Announcement[] {
  return announcements
    .filter((announcement) => announcement.featured)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getAnnouncementsByCategory(
  category: AnnouncementCategory
): Announcement[] {
  return announcements
    .filter((announcement) => announcement.category === category)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}