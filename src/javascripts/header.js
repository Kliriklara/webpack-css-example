import React from "react";

import styles from "stylesheets/modules/header";
import clearfix from "stylesheets/utilities/clearfix";

const Header = React.createClass({
  render () {
    console.log(styles);
    console.log(styles.header);
    return (
      <div className={`${styles.header} ${clearfix.clearfix}`}>
        Header
      </div>
    );
  }
});

export default Header;
