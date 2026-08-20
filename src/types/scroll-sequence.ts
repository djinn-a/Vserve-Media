export type MotionDirection = 'rtl' | 'ltr';

export interface TimelineWindow {
  /** Progress start where image begins entering [0..1] (or 0 for initial image) */
  enterStart?: number;
  /** Progress end where image finish entering [0..1] */
  enterEnd?: number;
  /** Progress start of hold/rest period [0..1] */
  holdStart: number;
  /** Progress end of hold/rest period [0..1] */
  holdEnd: number;
  /** Progress start of exit transition [0..1] */
  exitStart?: number;
  /** Progress end of exit transition [0..1] (or 1 for final image) */
  exitEnd?: number;
  /** Movement direction: 'rtl' (enters from right +100vw, exits left -100vw) or 'ltr' (enters from left -100vw, exits right +100vw) */
  direction: MotionDirection;
  /** Base stacking index when active */
  zIndex: number;
}

export interface SequenceImageItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  objectPosition: string;
  priority?: boolean;
  blurDataURL: string;
  timeline: TimelineWindow;
}
