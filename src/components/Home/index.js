import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
        <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
      </div>
    );
  }
}
