import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h4>Our Users: {users.length}</h4>

            <div className="user-container">
                {
                    users.map(user => <User key={user.id}
                     user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;