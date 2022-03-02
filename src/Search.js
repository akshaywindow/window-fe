import './App.css';
import React, { useState, useEffect } from 'react';
import WebsiteDropdown from './WebsiteDropdown';

function Search() {
  const [open, setOpen] = useState(null);
  const [openBool, setOpenBool] = useState(false);
  const [websites, setWebsites] = useState(['asos.com', 'zara.com', 'h&m.com', 'bonobos.com', 'ssense.com'])
  const [trending, setTrending] = useState(['yeezy', 'nike aj1', 'acne jeans', 'zara sale', 'h&m hoodie'])
  const [searchBarState, setSearchBarState] = useState(false);
  // testing a logged in user //
  const [loggedIn, setLoggedIn] = useState(false);
  const [savedWebsites, setSavedWebsites] = useState(['athleisure', 'formals', 'clubby', 'PJs', 'essentials']);
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

  const searchBarDropdown = () => {
    return (
      <div className="searchbar_dropdown">
        <div>
          <p style={{ fontSize: '10px', marginLeft: '20px', fontWeight: 600 }}>TRENDING</p>
        </div>
        <div style={{ padding: '5px', marginBottom: '50px' }}>
          <ul style={{ display: 'flex', marginTop: '-12px' }}>
            {trending.map(trend => (
              <button className="website_button_li" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <img 
                  className="searchbar_images"
                  src={require("./images/snkr.png")} />
                <li className="website_li">{trend}</li>
              </button>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  const openWebsites = () => {
    return (
      <div className="websites_dropdown">
        <input
          className="dropdown_input"
          placeholder="search"
          type="text"
        />
        { !loggedIn ?
        <div style={{ marginBottom: '20px' }}>
            <p style={{ color: 'grey', fontSize: '10px' }}>YOUR SAVED WEBSITES</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {window.innerWidth > 700 ? 
              <div style={{ margin: 'auto' }}>
              <svg width="56" height="56" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21" cy="21" r="21" fill="#EDEDED"/>
                <path d="M16.7007 27.3521H24.3877C25.7588 27.3521 26.4697 26.6411 26.4697 25.2891V17.564C26.4697 16.2056 25.7588 15.501 24.3877 15.501H16.7007C15.3296 15.501 14.6187 16.2056 14.6187 17.564V25.2891C14.6187 26.6475 15.3296 27.3521 16.7007 27.3521ZM17.6719 21.4233C17.6719 21.0552 17.9321 20.7949 18.2939 20.7949H19.938V19.1509C19.938 18.7827 20.1919 18.5225 20.5537 18.5225C20.9219 18.5225 21.1821 18.7827 21.1821 19.1509V20.7949H22.8325C23.188 20.7949 23.4546 21.0552 23.4546 21.4233C23.4546 21.7852 23.188 22.0391 22.8325 22.0391H21.1821V23.6831C21.1821 24.0449 20.9219 24.3052 20.5537 24.3052C20.1919 24.3052 19.938 24.0449 19.938 23.6831V22.0391H18.2939C17.9321 22.0391 17.6719 21.7852 17.6719 21.4233Z" fill="#C4C4C4"/>
              </svg>
                <hr style={{ border: '3px solid #EDEDED' }} />
              </div> : null }
              <div className="signup_login">
                <div id="svg-container">
                  <svg id="svg-1" width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.832 2.29883L18.2832 1.83008C18.5117 1.5957 18.5234 1.26758 18.3008 1.03906L18.1426 0.886719C17.9434 0.681641 17.6094 0.716797 17.3867 0.933594L16.9238 1.38477L17.832 2.29883ZM11.1289 8.29297L12.3652 7.75977L17.3984 2.72656L16.4902 1.82422L11.4629 6.85742L10.9004 8.05859C10.8418 8.19336 10.9941 8.35156 11.1289 8.29297ZM2.22266 12.2305H14.375C15.4824 12.2305 16.0977 11.6328 16.0977 10.5312V5.5332L14.9375 6.69336V10.4375C14.9375 10.8945 14.6797 11.1582 14.2168 11.1582H2.375C1.91211 11.1582 1.6543 10.8945 1.6543 10.4375V5.55078C1.6543 5.08789 1.91211 4.83008 2.375 4.83008H11.9727L13.0449 3.76367H2.22266C1.10938 3.76367 0.494141 4.35547 0.494141 5.46289V10.5312C0.494141 11.6328 1.10938 12.2305 2.22266 12.2305ZM3.82227 8.86719C4.29688 8.86719 4.68945 8.47461 4.68945 7.99414C4.68945 7.51367 4.29688 7.12695 3.82227 7.12695C3.33594 7.12695 2.94922 7.51367 2.94922 7.99414C2.94922 8.47461 3.33594 8.86719 3.82227 8.86719ZM6.40625 8.86719C6.88672 8.86719 7.27344 8.47461 7.27344 7.99414C7.27344 7.51367 6.88672 7.12695 6.40625 7.12695C5.92578 7.12695 5.5332 7.51367 5.5332 7.99414C5.5332 8.47461 5.92578 8.86719 6.40625 8.86719ZM8.99023 8.86719C9.4707 8.86719 9.86328 8.47461 9.86328 7.99414C9.86328 7.51367 9.4707 7.12695 8.99023 7.12695C8.50977 7.12695 8.12305 7.51367 8.12305 7.99414C8.12305 8.47461 8.50977 8.86719 8.99023 8.86719Z" fill="#6188E5"/>
                  </svg>
                </div>
                <div>
                  <p className="signup_login_p">
                    <a href="/">Sign up</a> or <a href="/">Login</a> to view <br/> your saved websites
                  </p>
                </div>
              </div>
            </div>
        </div>
        : <div>
          <p style={{ fontSize: '10px', fontWeight: 600 }}>YOUR SAVED WEBSITES</p>
            
            <div 
              style={{ 
                margin: 'auto', 
                display: 'flex', 
                justifyContent: 'space-evenly',
                fontSize: '14px'
              }}>
              {savedWebsites.map(websites => (
                <div>{websites}</div>
              ))}
            </div>
        </div> }
        <hr style={{ borderTop: '0px solid gray' }} />
        <WebsiteDropdown websites={websites} onClick={onClick} />
        <a href='/collection'>Search Collection</a> 
      </div>
    );
  }

  const openDropDown = (event) => {
    setOpen(event.target.innerText)
    setOpenBool(!openBool)
  }

  const onChange = (e) => {
    console.log(e.target.value)
  }

  const onFocusState = () => {
    setSearchBarState(!searchBarState)
    setOpenBool(false);
  }
  
  const onBlurState = () => {
    setSearchBarState(!searchBarState)
  
  }

  return (
    <div className={openBool ? 'container_blur' : "container"}>
      <form onSubmit={onSubmit}>
      { window.innerWidth > 700 ?
        <div>
        <input
          className={openBool ? "mainInput_open" : "mainInput"}
          placeholder="search"
          type="text"
          onChange={onChange}
          onFocus={onFocusState}
          onBlur={onBlurState}
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
        </button> </div>
        : 
        <div>
        <button
          style={{ position: 'absolute', marginTop: '3px' }}
          className="searchButton"
          type="submit"
        >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 4.85352C0 7.52965 2.19857 9.70705 4.90072 9.70705C5.96929 9.70705 6.94575 9.36645 7.75026 8.79473L10.7718 11.7932C10.913 11.9331 11.0972 12 11.2938 12C11.7114 12 12 11.6898 12 11.2823C12 11.0877 11.9263 10.9113 11.7973 10.7836L8.79427 7.79118C9.42682 6.97618 9.80143 5.96047 9.80143 4.85352C9.80143 2.17739 7.60287 0 4.90072 0C2.19857 0 0 2.17739 0 4.85352ZM1.05015 4.85352C1.05015 2.74911 2.77584 1.04004 4.90072 1.04004C7.02559 1.04004 8.75128 2.74911 8.75128 4.85352C8.75128 6.95793 7.02559 8.667 4.90072 8.667C2.77584 8.667 1.05015 6.95793 1.05015 4.85352Z" fill="#808080"/>
        </svg>
        </button>
          <input
          className={openBool ? "mainInput_open" : "mainInput"}
          placeholder="search"
          type="text"
          onChange={onChange}
          onFocus={onFocusState}
          onBlur={onBlurState}
        />
        <button 
            className="websites_button"
            type="submit"
            onClick={onClick}
          >
          <div onClick={openDropDown} style={{ display: 'flex', color: '#585555' }}>
            <div style={{ fontSize: '15px' }}>website</div>
          </div>
        </button>
         </div>
        }
          { openBool ? <div>{openWebsites()}</div> : null }
          { searchBarState ? <div>{searchBarDropdown()}</div> : null }
      </form>
    </div>
  );
}

export default Search;
