import Image from 'next/image'
import Link from 'next/link'

import { BlurImage } from './blur-image'

export default function CardView({item}) {
  const artwork = item.cover.file.url
  const title = item.properties.title.rich_text[0].text.content
  const artMaterials = item.properties.materials.rich_text[0].text.content
  const size = item.properties.size.rich_text[0].text.content

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex relative h-[300px] w-[300px] md:h-[300px] md:w-[300px] lg:h-[220px] lg:w-[220px]">
        <Link href='/'>
          <BlurImage
            className="h-auto max-w-full rounded-2xl p-2 transition duration-300 ease-in-out hover:scale-105"
            fill
            style={{
              objectFit: 'cover'
            }}
            sizes="(min-width: 1040px) 204px, 284px"
            loading="eager"
            priority
            quality={50}
            alt={'artwork'}
            src={artwork}
          />
        </Link>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          size: {size}
        </p>
        </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"># {artMaterials}</span>
      </div>
    </div>
  )
}