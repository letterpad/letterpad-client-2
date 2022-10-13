import { PageFragmentFragment } from '@/lib/graphql';
import { FC, ReactNode } from 'react';
import StickyBox from 'react-sticky-box';

interface Props {
  data: PageFragmentFragment;
}
export const PhotoStory: FC<Props> = ({ data }) => {
  const page_data = JSON.parse(data.page_data).rows;

  return (
    <>
      {page_data.map((item, rowIndex) => {
        const columns = Array.from({ length: item.columns }, (_, i) => i);
        return (
          <div
            key={rowIndex}
            data-row={rowIndex}
            className={
              'relative flex flex-1  lg:flex-row ' +
              (item.data[1]?.type === 'image' ? 'flex-col-reverse' : 'flex-col ')
            }
          >
            {columns.map((col) => {
              const _item = item.data[col];
              return (
                <>
                  <div className="relative flex w-full justify-center align-middle">
                    <SectionImage columns={item.columns} item={_item} rowIndex={rowIndex} />
                    <SectionText columns={item.columns} text={_item?.text} type={_item.type} />
                  </div>
                </>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

const SectionImage = ({ columns, item, rowIndex }) => {
  const { image, type, cover } = item;

  if (type === 'text') return null;
  let className = 'w-full';

  if (cover === 'big') {
    className += ' h-screen ';
  } else if (cover === 'small') {
    className = ' h-[calc(40vh)] ';
  }

  return (
    <StickyBox
      offsetTop={20}
      offsetBottom={20}
      data-background
      style={{
        backgroundImage: `url(${image.src})`,
        height: getHeight(cover, rowIndex),
      }}
      className={`${className} flex w-full items-center justify-center bg-cover bg-center bg-no-repeat`}
    >
      <Wrapper>
        <div
          data-text
          className={columns == 2 ? 'margin-auto max-w-full lg:max-w-[calc(500px)]' : ''}
          dangerouslySetInnerHTML={{
            __html: decodeURIComponent(item?.text ?? ''),
          }}
        />
      </Wrapper>
    </StickyBox>
  );
};

const SectionText = ({ columns, text, type }) => {
  if (type === 'image') return null;
  if (!text) return null;

  return (
    <div
      data-text
      className={
        'flex w-full flex-col items-center justify-center p-6 text-center leading-6 text-gray-800 dark:text-white ' +
        (columns == 2 ? 'max-w-full lg:max-w-[calc(500px)]' : '')
      }
      dangerouslySetInnerHTML={{
        __html: decodeURIComponent(text),
      }}
    />
  );
};

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="margin-auto flex h-full w-full flex-col items-center justify-center p-6 text-center leading-6 text-gray-800 dark:text-white lg:py-20 lg:px-40">
      {children}
    </div>
  );
};

const getHeight = (size: 'small' | 'big', rowIndex: number) => {
  const h = typeof window !== 'undefined' ? window.innerHeight : 600;
  if (rowIndex > 0) return h;
  if (size === 'small') return h * 0.4;
  if (size === 'big') return h;
  return 600;
};
