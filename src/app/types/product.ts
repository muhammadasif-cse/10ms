export interface TMedium {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url: string;
}
export type TChecklist = {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
};

export interface TSeo {
  title: string;
  description: string;
  image: string;
}

export interface TCtaText {
  name: string;
  value: string;
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
