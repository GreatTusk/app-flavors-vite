import './App.css';
import { APP_FLAVOR } from "../../../config/AppConfig.ts";
import { ContentModuleProvider } from "../../../modules/content/ContentProvider";
import { DefaultContentRepository } from "../../../modules/content/DefaultContentRepository";
import { UCentralContentRepository } from "../../../modules/content/UCentralContentRepository";
import { Header } from "./header/Header";
import { Aside } from "./aside/Aside";
import { Main } from "./main/Main";
import { Footer } from "./footer/Footer";

const moduleConfig = {
  production: () => APP_FLAVOR === "ucentral" 
    ? new UCentralContentRepository() 
    : new DefaultContentRepository(),
};

function App() {
  return (
    <ContentModuleProvider 
      moduleConfig={moduleConfig} 
      displayName="Content"
    >
      <div className={`container flavor-${APP_FLAVOR}`}>
        <Header />
        <Aside />
        <Main />
        <Footer />
      </div>
    </ContentModuleProvider>
  )
}

export default App;
