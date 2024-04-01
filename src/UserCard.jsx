    function User(){
        return(
            <div className="cardContainer">
                <span className="pro">online</span>
                <img className="img" src="profilepic1.jpg" alt="" />
                <h3>Full name</h3>
                <h3>sydney</h3>
                <p>front end developer</p>
                <div className="buttons">
                    <button className="b1">message</button>
                    <button className="b2">follow</button>
                </div>

                <div className="skills">
                    <h6>skills</h6>
                    <ul>
                        <li>react</li>
                        <li>html</li>
                        <li>css</li>
                        <li>bootstrap</li>
                        <li>ui/ux</li>
                        <li>mysql</li>

                    </ul>
                </div>



            </div>

        )
    }
    
    export const UserCard = () => {
      return (
        <div>
            <User />
        </div>
      )
    }
    