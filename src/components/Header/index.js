import React from 'react'
import { Link} from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <h1>Header</h1>
            <Link to="/">Home</Link>
            <Link className="mx-5" to="/courses/frontend">Courses List</Link>
            <Link to="/course/backend">Courses Detail</Link>
        </div>
    )
}
