import React from 'react'
import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter()
    return (
        <div>
            <h1>Page</h1>
            <button onClick={() => router.push('/signIn')}>Home</button>
        </div>
    )
}
      

export async function getServerSideProps(context: any) {
    return {
        props: {}, // will be passed to the page component as props
    }
}