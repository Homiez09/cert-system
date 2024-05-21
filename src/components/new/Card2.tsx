'use client'

import { IData } from '@/interfaces/RequestApiProps';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default ({ props }: { props?: IData }) => {
  const router = useRouter();
  const query = useSearchParams().get("query");

  useEffect(() => {
    try {
      const title = document.querySelector(`#title${props!.id}`);
      const categorie = document.querySelector(`#categorie${props!.id}`);

      title!.innerHTML = props!.attributes.title.replace(new RegExp(query + '(?!([^<]+)?<)', 'gi'), '<mark>$&</mark>');
      categorie!.innerHTML = props!.attributes.categories.data.map((item) => item.attributes.name_th).join(", ").replace(new RegExp(query + '(?!([^<]+)?<)', 'gi'), '<mark>$&</mark>');
    } catch (err) {
      // console.log(err);
    }

  }, [query])

  return (
    <>
      <div className="w-full pb-5 lg:px-5 border-b select-none hover:scale-[1.02]">
        <div className="flex flex-row p-2 hover:cursor-pointer gap-4" onClick={() => router.push(`/news/cybernews/${props!.id}`)}>
          <div className="flex flex-col w-full">
            {/* Date */}
            <small className="text-gray-500">{props!.attributes.createdAt.slice(0, 10)} | {props!.attributes.createdAt.slice(11, 19)}</small>
            {/* Title */}
            <div id={`title${props!.id}`} className="text-2xl">{props!.attributes.title}</div>
          </div>
          {/* Image */}
          <div className="flex flex-col items-end w-24 h-24 p-2 relative">
            <Image
              src={props!.attributes.thumbnail.data ? process.env.NEXT_PUBLIC_STRAPI_BASE_URL + props!.attributes.thumbnail.data?.attributes.url : "/no-image.png"}
              alt="Project"
              className='rounded-md shadow-md object-cover'
              fill
            />
          </div>
        </div>
        <div className="px-2">
          {/* Categorys */}
          {props!.attributes.categories.data.map((item, index) => {
            return (
              <div id={`categorie${props!.id}`} key={index} className="text-xs text-gray-500">{item.attributes.name_th}</div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export const CardSkeleton2 = () => {
  return (
    <div className="w-full pb-5 lg:px-5 border-b select-none animate-pulse">
      <div className="flex flex-row p-2">
        <div className="flex flex-col w-2/3 gap-3">
          <div className="w-3/4 h-4 bg-gray-300 rounded" />
          <div className="w-1/2 h-4 bg-gray-300 rounded" />
          <div className="w-1/4 h-4 bg-gray-300 rounded" />
        </div>
        <div className="flex flex-col items-end w-1/3 p-2">
          <div className="w-24 h-24 bg-gray-300 rounded-md shadow-md" />
        </div>
      </div>
    </div>
  );
}