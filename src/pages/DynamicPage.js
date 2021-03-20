import { useParams } from 'react-router-dom'

const DynamicPage = () => {
    const { name, nickname } = useParams()
    return (
        <div>
            <h1>Name : {name}</h1>
            <h1>Nickname : {nickname}</h1>
        </div>
    )
}
export default DynamicPage
