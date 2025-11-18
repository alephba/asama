
import { useEffect, useRef } from 'react';

const useFocusTrap = <T extends HTMLElement,>(isOpen: boolean) => {
  const ref = useRef<T>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen && ref.current) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement;
      const focusableElements = ref.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      
      if(focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      firstElement.focus();

      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          if (event.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              event.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              event.preventDefault();
            }
          }
        }
      };

      const trapRef = ref.current;
      trapRef.addEventListener('keydown', handleKeyDown);

      return () => {
        trapRef.removeEventListener('keydown', handleKeyDown);
        previouslyFocusedElement.current?.focus();
      };
    }
  }, [isOpen]);

  return ref;
};

export default useFocusTrap;
