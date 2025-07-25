export interface TMedium {
  id: number;
  url: string;
  type: string;
}

export interface TChecklist {
  id: number;
  text: string;
}

export interface TSeo {
  title: string;
  description: string;
  image: string;
}

export interface TCtaText {
  text: string;
  url: string;
}

export interface TSection {
  id: number;
  title: string;
  type: string;
  description?: string;
  pointers?: string[];
  instructors?: TInstructor[];
}

export interface TInstructor {
  id: number;
  name: string;
  title: string;
  photo: string;
}

export interface TProduct {
  slug: string;
  id: number;
  title: string;
  description: string;
  media: TMedium[];
  checklist: TChecklist[];
  seo: TSeo;
  cta_text: TCtaText;
  sections: TSection[];
}
