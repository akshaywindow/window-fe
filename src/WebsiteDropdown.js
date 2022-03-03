export default function WebsiteDropdown({ websites, onClick }) {
  return (
  <div>
  { window.innerWidth > 700 ?
  <div className="wrapper">
    <ul style={{ marginTop: '-10px' }}>
      {websites.map((website, i) => (
        <li key={i} className="website_li">
          <button data-id={i} onClick={onClick} className="website_button_li">{website}</button>
        </li>
      ))}
    </ul>
    <ul style={{ marginTop: '-10px' }}>
      {websites.map((website, i) => (
        <li key={i} className="website_li">
          <button data-id={i} onClick={onClick} className="website_button_li">{website}</button>
        </li>
      ))}
    </ul>
    <ul style={{ marginTop: '-10px' }}>
      {websites.map((website, i) => (
        <li key={i} className="website_li">
          <button data-id={i} onClick={onClick} className="website_button_li">{website}</button>
        </li>
      ))}
    </ul>
  </div> : <div className="wrapper">
    <ul style={{ marginTop: '-10px' }}>
      {websites.map((website, i) => (
        <li key={i} className="website_li">
          <button data-id={i} onClick={onClick} className="website_button_li">{website}</button>
        </li>
      ))}
    </ul>
    <ul style={{ marginTop: '-10px' }}>
      {websites.map((website, i) => (
        <li key={i} className="website_li">
          <button data-id={i} onClick={onClick} className="website_button_li">{website}</button>
        </li>
      ))}
    </ul></div> }
    {/* 
      I have three separate ul's, but once the website
      data is input, we will only have one ul but can 
      put a break after 5-6 websites just like how 
      the existing site looks like
    */}
  </div>
  ); 
}