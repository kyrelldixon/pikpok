import Link from 'next/link'
import { useRouter } from 'next/router'

export default () => {
  const { pathname } = useRouter()
  const isHome = pathname === '/'

  return (
    <nav className="fixed w-full py-4 border-b border-gray-300">
      <div className="flex justify-between px-2 items-center">
        <div>
          <button>Hamburger</button>
          <Link href="/">
            <a className="text-2xl font-bold">PikPok</a>
          </Link>
        </div>
        {
          isHome ?
            <Link href="/trending">
              <a className="bg-red-500 px-2 py-1 rounded-sm font-semibold text-sm text-white">Watch now</a>
            </Link>
            :
            <ul>
              <li>
                <Link href="/trending">
                  <a className="text-sm border-b-2 border-red-500">Trending</a>
                </Link>
              </li>
            </ul>
        }
      </div>
    </nav>
  )
}
