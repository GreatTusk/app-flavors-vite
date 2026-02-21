import { useContentModule } from "../../../../modules/content/ContentProvider";
import './Footer.css';

export const Footer = () => {
  const contentRepo = useContentModule();
  const { footer } = contentRepo.getContent();

  return (
    <footer className="app-footer">
      <div className="copyright">{footer.copyright}</div>
      <div className="socials">
        {footer.socials.join(" | ")}
      </div>
    </footer>
  );
};
