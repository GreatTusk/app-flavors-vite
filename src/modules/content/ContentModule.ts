export interface AppContent {
  header: {
    title: string;
    description: string;
  };
  aside: {
    links: { label: string; url: string }[];
  };
  main: {
    heroTitle: string;
    heroSubtitle: string;
    features: string[];
  };
  footer: {
    copyright: string;
    socials: string[];
  };
}

export interface ContentRepository {
  getContent(): AppContent;
}
