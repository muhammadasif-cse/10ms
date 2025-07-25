import { ISeoMetadataProps } from "@/app/types/seo";
import { Metadata } from "next";

export function generateSeoMetadata({
  seo,
  locale,
  fallbackTitle = "IELTS Course",
  fallbackDescription = "Join the best IELTS preparation course today.",
}: ISeoMetadataProps): Metadata {
  const findMetaContent = (value: string): string =>
    seo?.defaultMeta?.find((m) => m.value === value)?.content || "";

  const validOgTypes = [
    "website",
    "article",
    "book",
    "profile",
    "music.song",
    "music.album",
    "music.playlist",
    "music.radio_station",
    "video.movie",
    "video.episode",
    "video.tv_show",
    "video.other",
  ];

  const ogTypeFromMeta = findMetaContent("og:type");
  const ogType = validOgTypes.includes(ogTypeFromMeta)
    ? ogTypeFromMeta
    : "website";

  const validSchemas = (seo?.schema || [])
    .filter((schema) => schema.meta_name === "ld-json" && schema.meta_value)
    .map((schema) => schema.meta_value);
  const metadata: Metadata = {
    title: seo?.title || fallbackTitle,
    description: seo?.description || fallbackDescription,
    keywords: seo?.keywords || [],
    openGraph: {
      title: findMetaContent("og:title") || seo?.title || fallbackTitle,
      description:
        findMetaContent("og:description") ||
        seo?.description ||
        fallbackDescription,
      url: findMetaContent("og:url"),
      type: ogType as
        | "website"
        | "article"
        | "book"
        | "profile"
        | "music.song"
        | "music.album"
        | "music.playlist"
        | "music.radio_station"
        | "video.movie"
        | "video.episode"
        | "video.tv_show"
        | "video.other",
      locale: findMetaContent("og:locale") || locale || "en_US",
      images: [
        {
          url: findMetaContent("og:image"),
          alt: findMetaContent("og:image:alt") || "IELTS Course Image",
        },
      ],
    },
    other: validSchemas.length > 0 ? { "script:ld+json": validSchemas } : {},
  };

  return metadata;
}
