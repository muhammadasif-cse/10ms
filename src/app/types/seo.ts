export interface IMetaData {
  content: string;
  type: "property" | "name";
  value: string;
}

export interface IMetaSchema {
  meta_name: string;
  meta_value: string;
  type: string;
}

export interface ISeoMetaData {
  defaultMeta?: IMetaData[];
  description?: string;
  keywords?: string[];
  schema?: IMetaSchema[];
  title?: string;
}

export interface ISeoMetadataProps {
  seo: ISeoMetaData;
  locale: string;
  fallbackTitle?: string;
  fallbackDescription?: string;
}
