import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/food">Modify Pantry</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}