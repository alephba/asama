
import React, { useEffect, useRef, useState } from 'react';

interface VimeoEmbedProps {
  vimeoId: string;
  background?: boolean;
}

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({ vimeoId, background = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const backgroundParams = 'autoplay=1&loop=1&muted=1&controls=0&dnt=1&playsinline=1&background=1';
  const standardParams = 'dnt=1&playsinline=1';

  const src = `https://player.vimeo.com/video/${vimeoId}?${background ? backgroundParams : standardParams}`;

  if (background) {
    return (
      <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden">
        {shouldLoad && (
          <iframe
            src={src}
            className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={`Vimeo video player ${vimeoId}`}
          ></iframe>
        )}
         <div className="absolute inset-0 bg-black/30"></div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full">
      {shouldLoad && (
        <iframe
          src={src}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={`Vimeo video player ${vimeoId}`}
        ></iframe>
      )}
    </div>
  );
};

export default VimeoEmbed;
