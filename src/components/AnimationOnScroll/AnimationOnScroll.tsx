'use client';

import { cn } from '@/lib/utils';
import { InView } from 'react-intersection-observer';

export default function AnimationOnScroll({
  children,
  classNameInView,
  classNameNotInView,
}: {
  children: React.ReactNode;
  classNameInView: string;
  classNameNotInView?: string;
}) {
  return (
    <InView triggerOnce threshold={0}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={cn(
            'animate__animated',
            classNameInView,
            inView && classNameNotInView
          )}
        >
          {children}
        </div>
      )}
    </InView>
  );
}
