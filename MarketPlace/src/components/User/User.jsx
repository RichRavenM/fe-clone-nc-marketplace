import { useParams } from "react-router-dom"
const User = () => {
    const {username} = useParams()
    return <h3>This is {username} user</h3>
}

export default User 