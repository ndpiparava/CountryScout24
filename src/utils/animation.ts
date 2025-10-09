import {MotiTransitionProp} from 'moti';

export type MotiAnimationPreset = {
  from: Record<string, any>;
  animate: Record<string, any>;
  transition?: MotiTransitionProp;
};

export const DetailScreenAnimation: MotiAnimationPreset = {
  from: {opacity: 0, translateY: 40},
  animate: {opacity: 1, translateY: 0},
  transition: {
    type: 'timing',
    duration: 800,
  },
};

export const ListItemAnimation: MotiAnimationPreset = {
  from: {opacity: 0, translateY: 10, scale: 1},
  animate: {opacity: 1, translateY: 0, scale: 1},
  transition: {
    type: 'timing',
    duration: 180,
  },
};
