import React, { Component } from 'react';

class breadcrumb extends Component {
  render() {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">MAP</h2>
        <div className="flex items-center">
          <span className="text-gray-500">Home</span>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-500">Map</span>
        </div>
      </div>
    );
  }
}

export default breadcrumb;
