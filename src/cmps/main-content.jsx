import { MainArea } from './main-area'
import { MainNav } from './main-nav'
import { MobileNav } from './mobile-nav'

export const MainContent = () => {
  return (
    <div className="main-content">
      <MainNav />
      <MobileNav />
      <MainArea />
    </div>
  )
}
