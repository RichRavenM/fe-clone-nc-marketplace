import { useParams } from "react-router-dom"

const Item = () => {
    const {item_id} = useParams()
    return <h2>This is clearly a {item_id} </h2>
    
    }
    
    export default Item