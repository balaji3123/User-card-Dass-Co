

export const Header = () => {
    let customCss = "mode";
    const isLoggedin = false;
    const msg = isLoggedin ? <p style={{color:'green'}}>welcome back</p> : <p style={{color:'red'}}>sign in again</p>;
    const items = ["item1","item2"]
  return( <>
    <div className="main">
       
        <h1 className="bannerText">
            JSX script
        </h1>
        <p className="slogan">
            This is first jsx code. if u feel like quitting visit here which created on 29-03-2024 at night 1 am.
        </p>
        <p className={customCss} style={{fontSize:'100px',fontStyle: "italic"}}>
            this is yellow
        </p>
        {/* {msg} */}
        <ul>
            {items.map((items,index)=>(<li key={index}>{items}</li>))}
        </ul>
    </div>
    </>
  );
  
}
