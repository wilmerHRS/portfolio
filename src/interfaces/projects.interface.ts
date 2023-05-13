// Project
export interface IProject {
  draft: boolean;
  slug: string;
  title: string;
  description: string;
  date: Date;
  technology: string[];
  images: string[];
  link: string;
  repositories: IRepositories;
}

interface IRepositories {
  backend?: string[];
  frontend?: string[];
}

// // Images
// export interface IImage {

// }
