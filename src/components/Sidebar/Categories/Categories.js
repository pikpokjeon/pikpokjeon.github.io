// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  fieldValue: {
    label: string,
    // path: string
  }[]
};

const Categories = ({ fieldValue }: Props) => (
  <nav className={styles['tag']}>
    <ul className={styles['tag__list']}>
      {/* {categories.map((item) => ( */}
        <li className={styles['tag__list-item']}>
        {/* <li className={styles['tag__list-item']} key={item.path}> */}
          <Link
            // to={item.path}
            className={styles['tag__list-item-link']}
            activeClassName={styles['tag__list-item-link--active']}
          >
            {fieldValue}
          </Link>
        </li>
      {/* ))} */}
    </ul>
  </nav>
);

export default Categories;
