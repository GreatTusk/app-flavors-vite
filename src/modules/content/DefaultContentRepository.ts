import { type AppContent, type ContentRepository } from "./ContentModule";

export class DefaultContentRepository implements ContentRepository {
  getContent(): AppContent {
    return {
      header: {
        title: "Standard Edition",
        description: "The classic experience for everyone.",
      },
      aside: {
        links: [
          { label: "Overview", url: "#" },
          { label: "Features", url: "#" },
          { label: "Pricing", url: "#" },
        ],
      },
      main: {
        heroTitle: "Welcome to our Platform",
        heroSubtitle: "Experience the standard of excellence.",
        features: [
          "Responsive Design",
          "Intuitive Interface",
          "24/7 Support",
        ],
      },
      footer: {
        copyright: "© 2026 Standard Corp. All rights reserved.",
        socials: ["Twitter", "LinkedIn"],
      },
    };
  }
}
