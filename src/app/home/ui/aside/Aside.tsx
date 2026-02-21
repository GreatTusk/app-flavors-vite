import { useContentModule } from "../../../../modules/content/ContentProvider";
import './Aside.css';

export const Aside = () => {
  const contentRepo = useContentModule();
  const { aside } = contentRepo.getContent();

  return (
    <aside className="app-aside">
      <nav>
        <ul>
          {aside.links.map((link: { label: string; url: string }) => (
            <li key={link.label}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
