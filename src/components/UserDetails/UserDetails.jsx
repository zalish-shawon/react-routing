import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const userStyle = {
        border: '2px solid red',
        padding: '10px',
        marginBottom: '5px',
        borderRadius: '15px',
    }
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    const user = useLoaderData()
    const {id, address, website} = user
    console.log(address);
    return (
        <div style={userStyle}>
            <h2>Details id {id}</h2>
            <p>www.{website}</p> <br />
            <button onClick={handleGoBack} style={{backgroundColor:'red', marginTop: "5px"}}>Go back</button>
        </div>
    );
};

export default UserDetails;