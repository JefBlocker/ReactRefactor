// Example from Johnny's app

import React from 'react';

export default React.createContent({

  processItem(item) {
    return (
        <div className="band-name-item">
          <div className="image band-image">
            <img src={item.imageUrl}/>
            </div>
            <p>{item.Name}</p>
          </div>
        }; 
  },
  
  render() {

    let data = this.props.data

    return(
      <div className="app-container"></div>
      <div className="band-name"></div>
      {this.processItem}
    );

  }

});