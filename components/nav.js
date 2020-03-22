import Link from 'next/link'
import { useRouter } from 'next/router'

export default () => {
  const { pathname } = useRouter()
  const isHome = pathname === '/'

  return (
    <nav>
      <div>
        <button>Hamburger</button>
        <Link href="/">
          <a>PikPok</a>
        </Link>
      </div>
      {
        isHome ?
          <Link href="/trending">
            <a>Watch Now</a>
          </Link>
          :
          <ul>
            <li>Trending</li>
          </ul>
      }
    </nav>
  )
}
