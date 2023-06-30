import type { CSSProperties } from 'react';
import type { ExtNode } from 'relatives-tree/lib/types';
import { NODE_HEIGHT, NODE_WIDTH } from '../const';

export function getNodeStyle({ left, top }: Readonly<ExtNode>): CSSProperties {
  return {
    width: NODE_WIDTH,
    height: 'auto',
    transform: `translate(${left * (NODE_WIDTH / 2)}px, ${top * (NODE_HEIGHT / 2)}px)`,
  };
}

interface Relation {
  id: string;
  type: string;
}

export interface ICustomNode {
  id: string;
  gender: string;
  name?: string;
  koreanName?: string;
  info?: string;
  avatarId?: string;
  parents: readonly Relation[];
  children: readonly Relation[];
  siblings: readonly Relation[];
  spouses: readonly Relation[];
  placeholder?: boolean;
}
