'use client';

import { useEffect, useRef } from 'react';

interface ScriptEmbedProps {
  scriptSrc: string;
}

export default function ScriptEmbed({ scriptSrc }: ScriptEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.async = true;
    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [scriptSrc]);

  return <div ref={containerRef} className="w-full h-full" />;
}
