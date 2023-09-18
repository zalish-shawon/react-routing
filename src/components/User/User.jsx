import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const User = ({ user }) => {
    const {id, name, username, email, } = user
    const userStyle = {
        border: '2px solid red',
        padding: '10px',
        marginBottom: '5px',
        borderRadius: '15px',
    }

    const navigate = useNavigate()

    const handleShowDetail = () => {
        navigate(`/details/${id}`)
    }
    return (
        <div style={userStyle}>
            <h3>Name: {name}</h3>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <Link to={`/details/${id}`} ><button style={{backgroundColor:'yellowgreen'}}>Details</button></Link> <br />
            <button onClick={handleShowDetail} style={{backgroundColor:'yellowgreen', marginTop: '10px'}} >Click to see details</button>
        </div>
    );
};

export default User;