import React, { memo, useCallback } from 'react';
import classNames from 'classnames';
import type { Node } from 'relatives-tree/lib/types';
import { Relations } from './Relations';
import css from './NodeDetails.module.css';
import { ICustomNode } from '../App/utils';
import Avatars from '../Images';

interface NodeDetailsProps {
  node: Readonly<Node>;
  customNode: ICustomNode;
  className?: string;
  onSelect: (nodeId: string | undefined) => void;
  onHover: (nodeId: string) => void;
  onClear: () => void;
}

export const NodeDetails = memo(
  function NodeDetails({ node, customNode, className, ...props }: NodeDetailsProps) {
    const closeHandler = useCallback(() => props.onSelect(undefined), [props]);
    const avatar = customNode.avatarId ? (Avatars as any)[customNode.avatarId] : Avatars.NoImage;

    return (
      <section className={classNames(css.root, className)}>
        <header className={css.header}>
          <div className={classNames(css.imageContainer, css[node.gender])}>
            <img src={avatar} className={css.image} />
          </div>
          
          <button className={css.close} onClick={closeHandler}>&#10005;</button>
        </header>
        <h3 className={css.title}>{node.id}</h3>
        <h3 className={css.date}>{'xxxx-xxxx'}</h3>
        <Relations {...props} title="Parents" items={node.parents} />
        <Relations {...props} title="Siblings" items={node.siblings} />
        <Relations {...props} title="Spouses" items={node.spouses} />
        <Relations {...props} title={`Children (${node.children.length})`} items={node.children} />
      </section>
    );
  },
);
