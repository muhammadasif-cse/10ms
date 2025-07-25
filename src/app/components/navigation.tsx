import NavigationLink from "./navigation-link";
import LocaleSwitcher from "./locale-switcher";

export default async function Navigation() {
  return (
    <div className="bg-slate-850">
      {/* <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t("class.")}</NavigationLink>
          <NavigationLink href="/pathnames">{t("pathnames")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav> */}
    </div>
  );
}
