'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export function BlurImage(props) {
  const [isLoading, setLoading] = useState(true);
  const [src, setSrc] = useState(props.src);
  useEffect(() => setSrc(props.src), [props.src]); // update the `src` value when the `prop.src` value changes

  return (
    <Image
      {...props}
      src={src}
      alt={props.alt}
      className={`${props.className} transition-all ${isLoading ? 'blur-lg' : 'blur-0'}`}
      placeholder="blur"
      loading={props.loading}
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2PYsGHDfwAHNAMQumvbogAAAABJRU5ErkJggg=="
      onLoad={async () => {
        setLoading(false);
      }}
    />
  );
}