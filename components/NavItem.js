const { default: Link } = require('next/link')

const NavItem = ({ text, href, active }) => {
	return (
		<Link href={href} legacyBehavior>
			<a id="link" className={`nav__item ${active ? 'active' : ''}`}>
				{text}
			</a>
		</Link>
	)
}

export default NavItem
