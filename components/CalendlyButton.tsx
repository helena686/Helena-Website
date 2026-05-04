'use client';

import { useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';
import type { ReactNode, CSSProperties } from 'react';

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://calendly.com/helena-menadue';

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export default function CalendlyButton({ children, className, style }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        type="button"
        className={className}
        style={style}
        onClick={() => setIsOpen(true)}
      >
        {children}
      </button>
      {mounted && isOpen && (
        <PopupModal
          url={CALENDLY_URL}
          rootElement={document.body}
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
