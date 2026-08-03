'use client';

import { useEffect, useRef } from 'react';

interface VideoEmbedProps {
  src: string;
  title: string;
  allow?: string;
}

export default function VideoEmbed({ src, title, allow }: VideoEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const iframe = iframeRef.current;
    if (!container || !iframe) return;

    function fit() {
      if (!container || !iframe) return;
      const w = container.offsetWidth;
      const vh = container.offsetHeight;
      const naturalH = w * 9 / 16;
      if (naturalH <= 0) return;

      iframe.style.height = naturalH + 'px';

      if (naturalH < vh) {
        // Player shorter than container: scale up to cover (object-fit: cover)
        const s = vh / naturalH;
        iframe.style.top = '0';
        iframe.style.transformOrigin = 'top center';
        iframe.style.transform = `scale(${s})`;
      } else {
        // Player taller than container: center vertically and let overflow clip
        iframe.style.top = `${(vh - naturalH) / 2}px`;
        iframe.style.transform = '';
      }
    }

    const ro = new ResizeObserver(fit);
    ro.observe(container);
    fit();
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        allow={allow}
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          border: 'none',
        }}
      />
    </div>
  );
}
