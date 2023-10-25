import React from 'react';

const NotFound = () => {
    const stil = {
        borderBottom: "2px solid blue",
        display: "inline-block",
        width: "25%",
      };
      return (
        <div style={{marginTop:"10rem", textAlign:"center"}}>
          <h3 className="mt-5">Pagină inexistentă</h3>
          <div style={stil}></div>
          <p>
          Pagină inexistentă.
          </p>
        </div>
      );
}

export default NotFound;