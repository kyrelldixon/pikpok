import Nav from './nav'

export default ({ children }) => (
  <div>
    <Nav />
    <main className="pt-16">
      {children}
    </main>
  </div>
)