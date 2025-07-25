/* eslint-disable @typescript-eslint/no-explicit-any */
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
export type TFeatureExplanation = {
  id: string;
  title: string;
  checklist: string[];
  file_type: "image" | "video";
  file_url: string;
  video_thumbnail?: string;
};

export type TFeature = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
};
export interface TSection {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: any[];
}

export type TPointer = {
  id: string;
  text: string;
  color: string;
};

export type TInstructor = {
  name: string;
  description: string;
  has_instructor_page: boolean;
  image: string;
  short_description: string;
  slug: string;
};

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
