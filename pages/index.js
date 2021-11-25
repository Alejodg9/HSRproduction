
import Header from '../components/Header/Header'
import Head from 'next/head'
import LanguageSwitch from '../components/LanguageSwitch/LanguageSwitch'
import About from '../components/About/About'
import Referals from '../components/Referals/Referals'
import News from '../components/News/News'
import Footer from '../components/Footer/Footer'
import ContactPeek from '../components/ContactPeek/ContactPeek';
import { createClient } from 'contentful'



export async function getStaticProps() {

	const client = createClient({
		space: process.env.CONTENFUL_SPACE_ID,
		accessToken: process.env.CONTENFUL_ACCESS_KEY,
	})
	const res = await client.getEntries({ content_type: 'noticia' })


	return {
		props: {
			noticias: res.items,
		},
		revalidate: 1
	}
}

export default function Home({ noticias }) {



	return (
		<>
			<Head>
				<title>HSR ABOGADOS</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="HSR Abogados" />
				<meta property="og:title" content="HSR ABogados" />
				<meta property="og:description" content="Socios" />
				<meta property="og:image" content="/logo.jpg" />
			</Head>


			<Header />
			<LanguageSwitch />
			<About />
			<Referals />
			<News noticias={noticias} />
			{/* <Clients /> */}
			{/* <Logos/> */}
			{/* <Contact /> */}
			<ContactPeek />
			<Footer />





		</>
	);
}
