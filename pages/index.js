import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
	return (
		<Layout>
			<h1>Esto es una prueba de menu responsive</h1>
			<Link href="/" legacyBehavior>
				<a id="link"></a>
			</Link>
		</Layout>
	)
}
