import Head from 'next/head';
import { ClientOnly } from '../components/ClientOnly';
import { Hotels } from '../components/Hotels/Hotels';
import { TopBar } from '../components/TopBar';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Coding Exercise</title>
                <meta name="description" content="Nextjs, GraphQL" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopBar/>
            <main>
                <ClientOnly>
                    <Hotels />
                </ClientOnly>
            </main>
        </div>
    )
}
