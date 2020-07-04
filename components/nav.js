import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <a>Index</a>
      </Link>
      <Link href="/ssg">
        <a>SSG</a>
      </Link>
      <Link href="/ssr">
        <a>SSR</a>
      </Link>
        <Link href="/btn">
            <a>BTN</a>
        </Link>
        <Link href="/step_one">
            <a>BTN</a>
        </Link>
      <style jsx>
        {`
          a {
            margin-right: 30px;
          }
        `}
      </style>
    </nav>
  )
}

export default Nav
