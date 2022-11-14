import Head from "next/head";
import Link from "next/link";

function ProjectsPage() {
    return (
        <>
            <Head>
                <title>| Projects</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='max-w-2xl'>
                <p className='text-neutral-900 dark:text-neutral-50 text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight'>Projects</p>
   
            </div>
            <div>
            <Link 
            href="https://photography-links.vercel.app/" 
            target={'_blank'}
            className="text-neutral-700 dark:text-neutral-50 text-0.25xl md:text-1xl lg:text-2xl font-bold tracking-tight"
            >Social Network ↗ </Link>
         

            </div>
        </>
    )
}

export default ProjectsPage
