import dynamic from 'next/dynamic';
import { CommentProviders } from './types';

interface Props {
  provider: CommentProviders;
}

const UtterancesComponent = dynamic(
  () => {
    return import('@/components/comments/Utterances');
  },
  { ssr: false }
);
const GiscusComponent = dynamic(
  () => {
    return import('@/components/comments/Giscus');
  },
  { ssr: false }
);
const DisqusComponent = dynamic(
  () => {
    return import('@/components/comments/Disqus');
  },
  { ssr: false }
);

const Comments = ({ provider }: Props) => {
  const term = typeof window !== 'undefined' ? window.location?.href : '';

  return (
    <div id="comment">
      {provider === 'giscus' && <GiscusComponent mapping={term} />}
      {provider === 'utterances' && <UtterancesComponent issueTerm={term} />}
      {provider === 'disqus' && <DisqusComponent />}
    </div>
  );
};

export default Comments;
