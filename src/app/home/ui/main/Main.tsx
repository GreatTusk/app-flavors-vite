import { useContentModule } from "../../../../modules/content/ContentProvider";
import './Main.css';

export const Main = () => {
  const contentRepo = useContentModule();
  const { main } = contentRepo.getContent();

  return (
    <main className="app-main">
      <section className="hero">
        <h1>{main.heroTitle}</h1>
        <p>{main.heroSubtitle}</p>
      </section>
      <section className="features">
        <h2 className="feature-title">Key Features</h2>
        <div className="features-grid">
          {main.features.map((feature: string) => (
            <div key={feature} className="feature-card">
              {feature}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
