import Link from './Link';
import SectionContainer from './SectionContainer';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';
import { ReactNode } from 'react';
import { MeFragment, Navigation, NavigationType, SettingsFragment } from '@/lib/graphql';
import Image from '@/components/Image';

interface Props {
  children: ReactNode;
  props: {
    settings: SettingsFragment['settings'];
    me: MeFragment['me'];
  };
}

const LayoutWrapper = ({ children, props }: Props) => {
  if (props.settings.__typename === 'SettingError' || props.me.__typename === 'AuthorNotFoundError')
    return <div>Setting not found</div>;

  const menu = getMenu([
    ...props.settings.menu,
    { slug: '/about', label: 'About', type: NavigationType.Page },
  ]);
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={props.settings.site_title}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Image
                    src={props.settings.site_logo.src}
                    width="46"
                    height="46"
                    alt={props.settings.site_title}
                  />
                </div>
                {typeof props.settings.site_title === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {props.settings.site_title}
                  </div>
                ) : (
                  props.settings.site_title
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">{menu}</div>
            <ThemeSwitch />
            <MobileNav>{menu}</MobileNav>
          </div>
        </header>
        <main className="mb-auto">{children}</main>
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
        className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
      >
        {item.label}
      </a>
    ) : (
      <Link
        key={item.slug}
        href={i === 0 ? '/' : item.slug}
        target="_self"
        className="p-1 font-medium capitalize text-gray-900 dark:text-gray-100 sm:p-4"
      >
        {item.label}
      </Link>
    );
  });
}
