import React, { useCallback } from 'react';
import classNames from 'classnames';
import type { ExtNode } from 'relatives-tree/lib/types';
import css from './FamilyNode.module.css';
import Avatars from '../Images';
import { ICustomNode } from '../App/utils';

interface FamilyNodeProps {
  node: ExtNode;
  customNode: ICustomNode;
  isRoot: boolean;
  isHover?: boolean;
  onClick: (id: string) => void;
  onSubClick: (id: string) => void;
  style?: React.CSSProperties;
}

export const FamilyNode = React.memo(
  function FamilyNode({ node, customNode, isRoot, isHover, onClick, onSubClick, style }: FamilyNodeProps) {
    const clickHandler = useCallback(() => onClick(node.id), [node.id, onClick]);
    const clickSubHandler = useCallback(() => onSubClick(node.id), [node.id, onSubClick]);

    const avatar = customNode.avatarId ? (Avatars as any)[customNode.avatarId] : Avatars.NoImage;

    return (
      <div className={css.root} style={style}>
        <div
          className={classNames(
            css.inner,
            // css[node.gender],
            isRoot && css.isRoot,
            isHover && css.isHover,
          )}
          onClick={clickHandler}
        >
          <div className={classNames(css.imageContainer, css[node.gender])}>
            <img src={avatar} className={css.image} />
          </div>
          <div className={css.id}>{customNode?.name || node.id}</div>
          {customNode?.koreanName && <div className={css.id}>{customNode.koreanName}</div>}
          <div className={css.date}>{'xxxx-xxxx'}</div>
        </div>
        {node.hasSubTree && (
          <div
            className={classNames(css.sub, css[node.gender])}
            onClick={clickSubHandler}
          />
        )}
      </div>
    );
  },
);
