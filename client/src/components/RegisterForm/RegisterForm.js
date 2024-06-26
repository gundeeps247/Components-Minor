import { useState } from 'react'
import { Navigate } from 'react-router-dom'

function App() {

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('https://components-minor.onrender.com/api/register', {
			method: 'POST',
			credentials: "include", // Include if you're using cookies or sessions
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})

		const data = await response.json()
        console.log(data)

		if (data.status === 'ok') {
			<Navigate to='/login' replace={true} />
		}
	}

	return (
		<div className='wrapper'>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
			<div className="input-box">
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Name"
				/>
				</div>
				<div className="input-box">
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				</div>
				<div className="input-box">
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				</div>
				<button type="submit">Register</button>
			</form>
		</div>
	)
}

export default App