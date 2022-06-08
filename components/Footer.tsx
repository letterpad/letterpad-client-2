import Link from './Link';
import SocialIcon from '@/components/social-icons';
import Subscribe from './Subscribe';

export default function Footer({ author, settings }) {
  const { social } = author;
  return (
    <footer className="border-t border-gray-200 border-opacity-60 dark:border-gray-700">
      <div className="mt-8 flex flex-col justify-between sm:flex-row">
        <div className="flex flex-col sm:w-1/2">
          <div className="mb-8 flex items-center justify-center sm:justify-start">
            <span className="mr-2 flex">
              {settings.site_logo.src && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={settings.site_logo.src}
                  width="26"
                  height="26"
                  alt={settings.site_title}
                />
              )}
            </span>
            <div className="hidden text-xl font-bold text-gray-500 dark:text-gray-200 sm:block">
              <Link href={settings.site_url}>{settings.site_title}</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  sm:mt-0 sm:items-end">
          <div className="mb-3 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${settings.site_email}`} size={6} />
            <SocialIcon kind="github" href={social.github} size={6} />
            <SocialIcon kind="facebook" href={social.facebook} size={6} />
            <SocialIcon kind="youtube" href={social.youtube} size={6} />
            <SocialIcon kind="linkedin" href={social.linkedin} size={6} />
            <SocialIcon kind="twitter" href={social.twitter} size={6} />
          </div>
        </div>
      </div>
      <div className="py-8 sm:py-0">
        <Subscribe />
        <div
          dangerouslySetInnerHTML={{ __html: settings.site_footer }}
          className="w-full pt-8 text-center text-sm text-gray-500 dark:text-gray-500"
        ></div>
      </div>
      <div className="mt-4 flex w-full flex-col items-center justify-center border-t border-gray-200 border-opacity-60 py-6  dark:border-gray-700 sm:mt-14">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-300">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>
            <Link href="https://letterpad.app" className="text-blue-500">
              Letterpad
            </Link>
          </div>
          <div>{` • `}</div>
          <div>
            <Link href="https://github.com/letterpad/letterpad" className="text-blue-500">
              Open Source
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
