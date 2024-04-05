   
   import PropTypes from "prop-types";
   const userData =[
        {
        name: "harold",
        city: "telungana",
        jobrole: "datura factory lead",
        skills:["killing","trading","fighting","planting","smoking"],
        online:true,
        profile:"profilepic5.jpg"
        },
        {   name: "leo",
            city: "kashmir",
            jobrole: "datura factory ex sub lead",
            skills:["killing","trading","fighting","planting","smoking"],
            online:false,
            profile:"profilepic4.jpg"

        },
        
        {   name: "elisa",
            city: "telungana",
            jobrole: "datura factory ex sub lead",
            skills:["drinking", "dying", "fighting", "crying","dancing"],
            online:false,
            profile:"profilepic6.jpg"

        }


    ]

    
    function User(props){
        return(
            <div className="cardContainer">
                <span className={props.online ? "pro online": "pro offline"}>{props.online ? "ONLINE" : "OFFLINE"}</span>
                <img className="img" src={props.profile} alt="" />
                <h3>{props.name}</h3>
                <h3>{props.city}</h3>
                <p>{props.jobrole}</p>
                <div className="buttons">
                    <button className="b1">message</button>
                    <button className="b1  b2">following</button>
                </div>

                <div className="skills">
                    <h6>SKILLS</h6>
                    <ul>
                        {props.skills.map((skill, index)=>(
                            <li key={index}>{skill}</li>
                        ))}
                        
                       

                    </ul>
                </div>



            </div>

        )
    }
    
    export const UserCard = () => {
      return (
        <>{userData.map((user,index)=>(
            <User key={index}
            name={user.name}
            city={user.city}
            jobrole={user.jobrole}
            online={user.online}
            profile={user.profile}
            skills={user.skills} />
        ))}
        </>
      )
    }

    // <User  name="james" city="new york" jobrole="react developer" skills={["html","css","js","bootstrap","vite"]} online ={true} profile="profilepic2.jpg" />

    User.propTypes = {
        name:PropTypes.string.isRequired,
        city:PropTypes.string.isRequired,
        jobrole:PropTypes.string.isRequired,
        skills:PropTypes.arrayOf(PropTypes.string).isRequired,
        online:PropTypes.bool.isRequired,
        profile: PropTypes.string.isRequired
    }
    