import './App.css';
import React, { useState, useEffect } from 'react';

function Search() {
  const [open, setOpen] = useState(null);
  const [openBool, setOpenBool] = useState(false);
  const [websites, setWebsites] = useState(['asos.com', 'zara.com', 'h&m.com', 'bonobos.com', 'ssense.com'])
  
  /* 
  useEffect(() => {
    fetch(apiurl)
      .then(response => response.json)
      .then(data => setWebsites(data))
  }, [websites])
  */

  const onSubmit = () => {

  }

  const onClick = e => {
    e.preventDefault();

  }

  const openList = () => {
    return (
      <div className="websites_dropdown">
        <input
          className="dropdown_input"
          placeholder="search"
          type="text"
        />
        <div style={{ marginBottom: '20px' }}>
          <p style={{ color: 'grey', fontSize: '10px' }}>YOUR SAVED WEBSITES</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ margin: 'auto' }}>
              <svg width="56" height="56" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21" cy="21" r="21" fill="#EDEDED"/>
                  <svg width="39" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.70068 12.3521H10.3877C11.7588 12.3521 12.4697 11.6411 12.4697 10.2891V2.56396C12.4697 1.20557 11.7588 0.500977 10.3877 0.500977H2.70068C1.32959 0.500977 0.618652 1.20557 0.618652 2.56396V10.2891C0.618652 11.6475 1.32959 12.3521 2.70068 12.3521ZM3.67188 6.42334C3.67188 6.05518 3.93213 5.79492 4.29395 5.79492H5.93799V4.15088C5.93799 3.78271 6.19189 3.52246 6.55371 3.52246C6.92188 3.52246 7.18213 3.78271 7.18213 4.15088V5.79492H8.83252C9.18799 5.79492 9.45459 6.05518 9.45459 6.42334C9.45459 6.78516 9.18799 7.03906 8.83252 7.03906H7.18213V8.68311C7.18213 9.04492 6.92188 9.30518 6.55371 9.30518C6.19189 9.30518 5.93799 9.04492 5.93799 8.68311V7.03906H4.29395C3.93213 7.03906 3.67188 6.78516 3.67188 6.42334Z" fill="#C4C4C4"/>
                  </svg>
              </svg>
              <hr style={{ border: '3px solid #EDEDED' }} />
            </div>
            <div className="signup_login">
              <div id="svg-container">
                <svg id="svg-1" width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.832 2.29883L18.2832 1.83008C18.5117 1.5957 18.5234 1.26758 18.3008 1.03906L18.1426 0.886719C17.9434 0.681641 17.6094 0.716797 17.3867 0.933594L16.9238 1.38477L17.832 2.29883ZM11.1289 8.29297L12.3652 7.75977L17.3984 2.72656L16.4902 1.82422L11.4629 6.85742L10.9004 8.05859C10.8418 8.19336 10.9941 8.35156 11.1289 8.29297ZM2.22266 12.2305H14.375C15.4824 12.2305 16.0977 11.6328 16.0977 10.5312V5.5332L14.9375 6.69336V10.4375C14.9375 10.8945 14.6797 11.1582 14.2168 11.1582H2.375C1.91211 11.1582 1.6543 10.8945 1.6543 10.4375V5.55078C1.6543 5.08789 1.91211 4.83008 2.375 4.83008H11.9727L13.0449 3.76367H2.22266C1.10938 3.76367 0.494141 4.35547 0.494141 5.46289V10.5312C0.494141 11.6328 1.10938 12.2305 2.22266 12.2305ZM3.82227 8.86719C4.29688 8.86719 4.68945 8.47461 4.68945 7.99414C4.68945 7.51367 4.29688 7.12695 3.82227 7.12695C3.33594 7.12695 2.94922 7.51367 2.94922 7.99414C2.94922 8.47461 3.33594 8.86719 3.82227 8.86719ZM6.40625 8.86719C6.88672 8.86719 7.27344 8.47461 7.27344 7.99414C7.27344 7.51367 6.88672 7.12695 6.40625 7.12695C5.92578 7.12695 5.5332 7.51367 5.5332 7.99414C5.5332 8.47461 5.92578 8.86719 6.40625 8.86719ZM8.99023 8.86719C9.4707 8.86719 9.86328 8.47461 9.86328 7.99414C9.86328 7.51367 9.4707 7.12695 8.99023 7.12695C8.50977 7.12695 8.12305 7.51367 8.12305 7.99414C8.12305 8.47461 8.50977 8.86719 8.99023 8.86719Z" fill="#6188E5"/>
                </svg>
              </div>
              <p className="signup_login_p">
                <a href="/">Sign up</a> or <a href="/">Login</a> to view <br/> your saved websites
              </p>
            </div>
          </div>
        </div>
        <hr style={{ borderTop: '0px solid gray' }} />
        <div className="wrapper">
          <ul>
            {websites.map(website => (
              <li className="website_li">{website}</li>
            ))}
          </ul>
          <ul>
            {websites.map(website => (
              <li className="website_li">{website}</li>
            ))}
          </ul>
          <ul>
            {websites.map(website => (
              <li className="website_li">{website}</li>
            ))}
          </ul>
          {/* 
            I have three separate ul's, but once the website
            data is input, we will only have one ul but can 
            put a break after 5-6 websites just like how 
            the existing site looks like
          */}
        </div>
      </div>
    );
  }

  const openDropDown = (event) => {
    setOpen(event.target.innerText)
    setOpenBool(!openBool)
  }

  return (
    <div className={openBool ? 'container_blur' : "container"}>
      <form onSubmit={onSubmit}>
        <input
          className={openBool ? "mainInput_open" : "mainInput"}
          placeholder="search"
          type="text"
        />
        <button 
            className="websites_button"
            type="submit"
            onClick={onClick}
          >
          <div onClick={openDropDown} style={{ display: 'flex', color: '#585555' }}>
            <div style={{ fontSize: '15px' }}>website</div>
            <div style={{ transform: 'rotate(180deg)', marginLeft: '10px' }}>^</div>
          </div>
        </button>
        <button
          className="searchButton"
          type="submit"
        >
          <svg width="13" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.94933C0 7.47691 2.05653 9.53343 4.5841 9.53343C5.58364 9.53343 6.49701 9.21174 7.24954 8.67176L10.0758 11.5038C10.208 11.6359 10.3803 11.6991 10.5641 11.6991C10.9547 11.6991 11.2247 11.4061 11.2247 11.0213C11.2247 10.8374 11.1558 10.6708 11.0352 10.5502L8.2261 7.72392C8.81779 6.95416 9.1682 5.99483 9.1682 4.94933C9.1682 2.42176 7.11167 0.365234 4.5841 0.365234C2.05653 0.365234 0 2.42176 0 4.94933ZM0.982307 4.94933C0.982307 2.96174 2.59651 1.34754 4.5841 1.34754C6.57169 1.34754 8.18589 2.96174 8.18589 4.94933C8.18589 6.93692 6.57169 8.55113 4.5841 8.55113C2.59651 8.55113 0.982307 6.93692 0.982307 4.94933Z" fill="white"/>
          </svg>
        </button>
        { open ? <div>
          { openBool ? openList() : null }
        </div> : null }
      </form>
    </div>
  );
}

export default Search;
