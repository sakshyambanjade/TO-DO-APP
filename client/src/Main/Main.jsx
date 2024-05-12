import {useState}  from 'react'
import Create from '../Create/Create'
function Main() {
    const [todos,settodos] = useState([])
  return (
    <div>
        <h1>todo list</h1>
        <Create/>
        {
            todos.length === 0
            ?
            <div className="div"><p>no records</p></div>
            :
            todos.map(todo => (
                <div className="div">
                        {todo}
                </div>
            ))
        }
    </div>
  )
}

export default Main