'use client'

import { useState } from 'react'
import Spinner from '@/components/ui/spinner';

const SpotifyWebPlayer = ({ trackId }: { trackId: string }) => {
  const [isLoading, setIsLoading] = useState(true);

  const fullUrl = `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;


  return (
    <div className="w-full min-h-[352px] relative">
      {isLoading && (
        <div className="flex justify-center items-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2">
          <Spinner className="w-10 h-10 fill-black" />
        </div>
      )}
      <iframe
        className="rounded-xl"
        src={fullUrl}
        width="100%"
        height="352"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </div>
  );
};

export default SpotifyWebPlayer;
