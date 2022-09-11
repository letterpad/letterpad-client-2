import Link from './Link';
import SectionContainer from './SectionContainer';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import { ReactNode } from 'react';
import { MeFragment, Navigation, NavigationType, SettingsFragment } from '@/lib/graphql';
import Image from 'next/image';
import { LogoWithTitle } from './Logo';

interface Props {
  children: ReactNode;
  props: {
    settings: SettingsFragment['settings'];
    me: MeFragment['me'];
  };
}

const LayoutWrapper = ({ children, props }: Props) => {
  if (props.settings.__typename !== 'Setting' || props.me.__typename !== 'Author')
    return <div>Setting not found</div>;

  const { show_about_page, show_tags_page } = props.settings;

  const routes = [...props.settings.menu];
  if (show_tags_page) {
    routes.push({ slug: '/tags', label: 'Tags', type: NavigationType.Page });
  }
  if (show_about_page) {
    routes.push({ slug: '/about', label: 'About', type: NavigationType.Page });
  }

  const menu = getMenu(routes);
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10 ">
          <div>
            <Link href="/" aria-label={props.settings.site_title}>
              <LogoWithTitle logo={props.settings.site_logo} title={props.settings.site_title} />
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">{menu}</div>
            <ThemeSwitch />
            <MobileNav routes={routes} />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <br />
        <br />
        <br />

        <Footer author={props.me} settings={props.settings} />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;

function getMenu(menu: Omit<Navigation, 'original_name'>[]) {
  return menu.map((item, i) => {
    return item.type === 'custom' ? (
      <a
        key={item.slug}
        href={item.slug}
        className="p-1 font-medium capitalize text-gray-900 dark:text-gray-100 sm:p-4"
      >
        {item.label}
      </a>
    ) : (
      <Link
        key={item.slug}
        href={i === 0 ? '/' : item.slug}
        target="_self"
        className="link -1 font-medium capitalize sm:p-4"
      >
        {item.label}
      </Link>
    );
  });
}
