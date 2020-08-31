import Link from 'next/link'
export default function Home(props) {
  return (
    <div>
      <h3>Hello World.</h3>
      {props.foo}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}

const wait = () => new Promise((r) => setTimeout(r, 1000))

export const getServerSideProps = async () => {
  // Simulate slow getServerSideProps
  await wait()

  return {
    props: { foo: 1234 },
  }
}
