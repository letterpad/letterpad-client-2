import Link from './Link';
import SocialIcon from '@/components/social-icons';

export default function Footer({ author, settings }) {
  const { social, name } = author;
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${settings.site_email}`} size={6} />
          <SocialIcon kind="github" href={social.github} size={6} />
          <SocialIcon kind="facebook" href={social.facebook} size={6} />
          <SocialIcon kind="youtube" href={social.youtube} size={6} />
          <SocialIcon kind="linkedin" href={social.linkedin} size={6} />
          <SocialIcon kind="twitter" href={social.twitter} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{name}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{settings.site_title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://letterpad.app">Letterpad</Link>
        </div>
      </div>
    </footer>
  );
}
