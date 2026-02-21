import { createModuleProvider } from "../../lib/di";
import { type ContentRepository } from "./ContentModule";

export const { ModuleProvider: ContentModuleProvider, useModule: useContentModule } = createModuleProvider<ContentRepository>();
