import React from "react"
import { useNavigate } from "react-router-dom"

const Landing = () => {
    let navigate = useNavigate()

    return (
        <div className='home'>
            <section className="title">
                <h2>
                    Welcome to the App
                </h2>
                <h3>
                    That Will Change the Way You Manage Your Inventory
                </h3>
            </section>
            <section>
                <div>
                    <button onClick={() => navigate('/register')}>
                        Continue to Registration
                    </button>
                </div>
                <div>
                    <button onClick={() => navigate('/login')}>
                        Continue to Log In
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Landing