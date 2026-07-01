'use client';

import { useEffect, useRef } from 'react';

interface ScriptEmbedProps {
  scriptSrc: string;
}

export default function ScriptEmbed({ scriptSrc }: ScriptEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.type = 'text/javascript';
    script.charset = 'UTF-8';
    script.async = true;
    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, [scriptSrc]);

  return <div ref={containerRef} className="w-full h-full" />;
}
