// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src='https://avatars2.githubusercontent.com/u/59504386?s=460&u=eac3cb2397dc38bed71de6a7ba77bc12396977d9&v=4'
        className={styles['author__photo']}
        width="200"
        height="200"
        alt={author.name}
      />
    </Link>

    { isIndex === true ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h2>
    )}
    <p className={styles['author__subtitle']}>{author.bio}</p>
  </div>
);

export default Author;
