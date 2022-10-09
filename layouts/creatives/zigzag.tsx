import { PageFragmentFragment } from '@/lib/graphql';
import Image from 'next/future/image';
import { FC } from 'react';
// import { StickyContainer, Sticky } from 'react-sticky';

interface Props {
  data: PageFragmentFragment;
}
export const ZigZag: FC<Props> = ({ data }) => {
  const page_data = JSON.parse(data.page_data).rows;

  return (
    <div className="flex flex-col">
      {page_data.map((item, i) => {
        const columns = Array.from({ length: item.columns }, (_, i) => i);

        return (
          <div key={i} className="relative flex-1">
            <div
              className={
                'flex  lg:flex-row ' +
                (item.data[1]?.type === 'image' ? 'flex-col-reverse' : 'flex-col ')
              }
            >
              {columns.map((col) => {
                const _item = item.data[col];
                let className = 'w-full';
                if (item.columns === 2) {
                  className += ' lg:w-1/2';
                }
                return (
                  <div
                    key={col * i}
                    className={`${className} relative flex w-full items-center justify-center`}
                  >
                    <div className={` flex h-full w-full items-center justify-center`}>
                      <div className={'flex h-[calc(60vh)] w-full items-center' + ''}>
                        {_item?.image?.src && (
                          <Image
                            src={_item.image.src}
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                            alt={_item.image.description}
                          />
                        )}

                        {_item?.text && (
                          <div
                            className={
                              'absolute flex h-full w-full flex-col items-center justify-center p-6 text-center leading-6 text-gray-800 dark:text-white ' +
                              (item.columns == 2 ? 'max-w-full lg:max-w-[calc(500px)]' : '')
                            }
                            dangerouslySetInnerHTML={{
                              __html: decodeURIComponent(_item?.text ?? ''),
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
