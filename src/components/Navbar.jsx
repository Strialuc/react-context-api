import { NavLink } from "react-router-dom";

function Navbar() {

    // dati per generazione voci menù
    const links = [
        { path: '/', label: 'Homepage' },
        { path: '/chisiamo', label: 'Chi siamo' },
        { path: '/prodotti', label: 'I nostri Prodotti' }
    ]

    return (
        <nav className="container">
            <ul className="d-flex gap-3 pt-3 justify-content-start list-unstyled">
                {links.map((link, i) => (
                    <li key={i}>
                        <NavLink to={link.path} className="text-decoration-none link-dark">
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar