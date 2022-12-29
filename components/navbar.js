import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import NavItem from './NavItem'

const lista = [
	{
		text: 'Inicio',
		href: '/',
	},
	{
		text: 'Acerca de nosotros',
		href: '/about',
	},
	{
		text: 'Más',
		href: '/more',
	},
]

const Navbar = () => {
	const [navActive, setNavActive] = useState(null)
	const [activeIdx, setActiveIdx] = useState(-1)
	return (
		<header>
			<nav className={`nav`}>
				<Link href={'/'}>
					<h1>Logo</h1>
				</Link>
				<div
					onClick={() => setNavActive(navActive)}
					className={`nav__menu-bar`}
				>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
				<ul className={`${navActive ? 'active' : ''}nav__menu-list`}>
					{lista.map((menu, idx) => (
						<li
							onClick={() => {
								setActiveIdx(idx)
								setNavActive(false)
							}}
							key={menu.text}
							className={`nav__menu-link`}
						>
							<NavItem active={activeIdx === idx} {...menu} />
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
