import { type AppContent, type ContentRepository } from "./ContentModule";

export class UCentralContentRepository implements ContentRepository {
  getContent(): AppContent {
    return {
      header: {
        title: "UCentral Pro",
        description: "Enterprise-grade central management.",
      },
      aside: {
        links: [
          { label: "Dashboard", url: "#" },
          { label: "Devices", url: "#" },
          { label: "Settings", url: "#" },
          { label: "Reports", url: "#" },
        ],
      },
      main: {
        heroTitle: "Control Your Network",
        heroSubtitle: "Unified management for modern enterprises.",
        features: [
          "Zero-Touch Provisioning",
          "Advanced Analytics",
          "Global Scalability",
        ],
      },
      footer: {
        copyright: "© 2026 UCentral Systems Inc.",
        socials: ["GitHub", "Discord", "Support Portal"],
      },
    };
  }
}
