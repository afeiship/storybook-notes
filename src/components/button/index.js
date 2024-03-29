import React from 'react';
import cx from 'classnames';
import styles from './style.module.css';

export default class extends React.Component {
  render() {
    const { className, ...props } = this.props;
    console.log('styles', styles, styles.btn);
    return <button className={cx(styles.btn, className)} {...props} />;
  }
}
