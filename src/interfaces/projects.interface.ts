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

export interface IRepositories {
  backend?: IRepository[];
  frontend?: IRepository[];
}

export interface IRepository {
  title: string;
  link: string;
}
