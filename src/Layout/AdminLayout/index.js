import React from 'react'
import { Link} from 'react-router-dom'

export default function AdminLayout({children}) {
    return (
        <div className="d-flex">
            {/* SideBar */}
            <div className="w-25">
                <h3>CyberSoft</h3>
                <Link className= "mr-5" to="/admin/courses">Home</Link>
                <Link to="/admin/user">User</Link>
            </div>
            {/* Content */}
            <div className="w-75">
                {children}
            </div>
        </div>
    )
}
