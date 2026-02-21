import { useContentModule } from "../../../../modules/content/ContentProvider";
import './Header.css';

export const Header = () => {
  const contentRepo = useContentModule();
  const { header } = contentRepo.getContent();

  return (
    <header className="app-header">
      <div className="logo">{header.title}</div>
      <p className="description">{header.description}</p>
    </header>
  );
};
