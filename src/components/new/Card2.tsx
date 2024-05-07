'use client'

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default ({ props }: any) => {
  const router = useRouter();
  const query = useSearchParams().get("query");

  useEffect(() => {
    try {
        let title = document.querySelector(`#title${props.id}`);
        let description = document.querySelector(`#description${props.id}`);
    
        title!.innerHTML = props.title.replace(new RegExp(query + '(?!([^<]+)?<)', 'gi'), '<mark>$&</mark>');
        description!.innerHTML = props.description.replace(new RegExp(query + '(?!([^<]+)?<)', 'gi'), '<mark>$&</mark>');
    } catch (err) {
        console.log(err);
    }

  }, [query])

  if (props === undefined) return (
    <div className="w-full pb-5 lg:px-5 border-b select-none hover:scale-[1.02] animate-pulse">
      <div className="flex flex-row p-2 hover:cursor-pointer">
        <div className="flex flex-col w-2/3 gap-3">
          <div className="w-3/4 h-4 bg-gray-300 rounded"/>
          <div className="w-1/2 h-4 bg-gray-300 rounded"/>
          <div className="w-1/4 h-4 bg-gray-300 rounded"/>
        </div>
        <div className="flex flex-col items-end w-1/3 p-2">
          <div className="w-24 h-24 bg-gray-300 rounded-md shadow-md"/>
        </div>
      </div>
    </div>  
  )
  else return (
    <>
      <div className="w-full pb-5 lg:px-5 border-b select-none hover:scale-[1.02]">
        <div className="flex flex-row p-2 hover:cursor-pointer" onClick={() => router.push(`project/${props.id}`)}>
          <div className="flex flex-col w-2/3">
            {/* Date */}
            <small className="text-gray-500">{props.createAt}</small>
            {/* Title */}
            <div id={`title${props.id}`} className="text-xl">{props.title}</div>
            <div className="w-full items-center gap-3 block">
              {/* Description */}
              <div id={`description${props.id}`} className="text-ellipsis text-wrap overflow-hidden">
                {props.description}
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="flex flex-col items-end w-1/3 p-2">
            <Image
              src={props.image}
              alt="Project"
              className='rounded-md shadow-md'
              width="112" height="112"
            />
          </div>
        </div>
        <div className="px-2">
          {/* Categorys */}
          {/* <CategoryList categorys={props.categorys} /> */}

        </div>
      </div>
    </>
  );
}