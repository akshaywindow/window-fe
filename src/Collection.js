import React, { useState } from 'react';

const Collection = () => {
  const [websites, setWebsites] = useState(['asos.com', 'zara.com', 'h&m.com', 'bonobos.com', 'ssense.com'])
  const [category, setCategories] = useState([]);
  const [size, setSizes] = useState([]);
  const [color, setColor] = useState([]);
  const [neckline, setNeckline] = useState([]);
  const [length, setLength] = useState([]);
  const [open, setOpen] = useState(null);
  const [openBool, setOpenBool] = useState(false);

  const openList = () => {
    return (
      <ul>
        {websites.map(website => (
          <li>{website}</li>
        ))}
      </ul>
    );
  }

  const openDropDown = (event) => {
    setOpen(event.target.innerText)
    setOpenBool(!openBool)
  }

  return (
    <div className="main_collection">
      <div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px' }}>
        <div>Filter</div>
        <div>Sort By</div>
      </div>
      <div style={{ display: 'flex', padding: '20px' }}>
        <div className="filters_on_left">
          <div>
            <button 
              className="filter_button"
              style={{ display: 'flex', }}
              type="submit"
              onClick={openDropDown}
            >
              <b>Websites</b>
              <div style={{ transform: 'rotate(180deg)', marginLeft: '10px' }}>^</div>
            </button>
            { open ? <div>
              { openBool ? openList() : null }
            </div> : null }
            <hr/>
          </div>
          <div>
            <button 
              className="filter_button"
              style={{ display: 'flex', }}
              type="submit"
              onClick={openDropDown}
            >
            <b>Category</b>
            <div style={{ transform: 'rotate(180deg)', marginLeft: '10px' }}>^</div>
            </button>
            { open ? <div>
              { openBool ? openList() : null }
            </div> : null }
            <hr/>
          </div>
          <div>
            <button 
              className="filter_button"
              style={{ display: 'flex', }}
              type="submit"
              onClick={openDropDown}
            >
            <b>Size</b>
            <div style={{ transform: 'rotate(180deg)', marginLeft: '10px' }}>^</div>
            </button>
            { open ? <div>
              { openBool ? openList() : null }
            </div> : null }
            <hr/>
          </div>
          <div>
            <button 
              className="filter_button"
              style={{ display: 'flex', }}
              type="submit"
              onClick={openDropDown}
            >
            <b>Color</b>
            <div style={{ transform: 'rotate(180deg)', marginLeft: '10px' }}>^</div>
            </button>
            { open ? <div>
              { openBool ? openList() : null }
            </div> : null }
            <hr/>
          </div>
          <div>
            <button 
              className="filter_button"
              style={{ display: 'flex', }}
              type="submit"
              onClick={openDropDown}
            >
            <b>Neck Line</b>
            <div style={{ transform: 'rotate(180deg)', marginLeft: '10px' }}>^</div>
            </button>
            { open ? <div>
              { openBool ? openList() : null }
            </div> : null }
            <hr/>
          </div>
          <div>
            <button 
              className="filter_button"
              style={{ display: 'flex', }}
              type="submit"
              onClick={openDropDown}
            >
            <b>Length</b>
            <div style={{ transform: 'rotate(180deg)', marginLeft: '10px' }}>^</div>
            </button>
            { open ? <div>
              { openBool ? openList() : null }
            </div> : null }
            <hr/>
          </div>
        </div>
        <div style={{ marginLeft: '20px' }}>Cards for products</div>
      </div>
    </div>
  );
}

export default Collection;