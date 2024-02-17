import Image from 'next/image'
import { BlurImage } from './blur-image'

export default function CardView({item}) {
  console.log(item)
  const artwork = item.cover.file.url

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex relative h-[300px] w-[300px] md:h-[300px] md:w-[300px] lg:h-[220px] lg:w-[220px]">
        <BlurImage
          className="h-auto max-w-full rounded-2xl p-2 transition duration-300 ease-in-out hover:scale-105"
          fill
          style={{
            objectFit: 'cover'
          }}
          sizes="(min-width: 1040px) 204px, 284px"
          priority={false}
          loading="lazy"
          quality={50}
          alt={'artwork'}
          src={artwork}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
        </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  )
}