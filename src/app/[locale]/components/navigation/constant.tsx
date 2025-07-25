import { useTranslations } from "next-intl";

interface IMenus {
  title: string;
  href: string;
  submenu?: { title: string; href: string }[];
}
export function useMenus(): IMenus[] {
  const t = useTranslations("navigation");

  return [
    {
      title: t("class.title"),
      href: "/class",
      submenu: Object.entries(t.raw("class.submenu")).map(([key, value]) => ({
        title: value as string,
        href: `/class/${key}`,
      })),
    },
    {
      title: t("skills.title"),
      href: "/skills",
      submenu: Object.entries(t.raw("skills.submenu")).map(([key, value]) => ({
        title: value as string,
        href: `/skills/${key}`,
      })),
    },
    {
      title: t("admission"),
      href: "/admission",
    },
    {
      title: t("online_batch.title"),
      href: "/online-batch",
      submenu: Object.entries(t.raw("online_batch.submenu")).map(
        ([key, value]) => ({
          title: value as string,
          href: `/online-batch/${key}`,
        })
      ),
    },
    {
      title: t("english.title"),
      href: "/english",
      submenu: Object.entries(t.raw("english.submenu")).map(([key, value]) => ({
        title: value as string,
        href: `/english/${key}`,
      })),
    },
    {
      title: t("more.title"),
      href: "/more",
      submenu: Object.entries(t.raw("more.submenu")).map(([key, value]) => ({
        title: value as string,
        href: `/more/${key}`,
      })),
    },
  ];
}
