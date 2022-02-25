import React, { useState } from 'react';

const Collection = () => {
  const [websites, setWebsites] = useState([]);
  const [category, setCategories] = useState([]);
  const [size, setSizes] = useState([]);
  const [color, setColor] = useState([]);
  const [neckline, setNeckline] = useState([]);
  const [length, setLength] = useState([]);

  return (
    <div className="collection">
      Collection page
      <button><a href="/">Back to home</a></button>
      <div className="collection">
        <div style={{ display: 'flex' }}>
          <div>Filters on left</div>
          <div style={{ marginLeft: '20px' }}>Cards for products</div>
        </div>
      </div>
    </div>
  );
}

export default Collection;