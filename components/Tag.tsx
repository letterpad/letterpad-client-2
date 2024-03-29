import Link from 'next/link';
import kebabCase from '@/lib/utils/kebabCase';

interface Props {
  text: string;
}

const Tag = ({ text }: Props) => {
  return (
    <Link href={`/tag/${kebabCase(text)}`}>
      <a className="link mr-3 text-xs font-medium uppercase">{text.split(' ').join('-')}</a>
    </Link>
  );
};

export default Tag;
