export type AppFlavor = "ucentral" | "default";

export const APP_FLAVOR: AppFlavor = import.meta.env.VITE_APP_FLAVOR;
