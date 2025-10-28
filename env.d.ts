declare module "@env" {
  export const BASE_URL: string;
  export const PORT: string;
  export const VERSION: string;
  export const AUTH: string;
}

declare module "*.gif" {
  const content: any;
  export default content;
}
