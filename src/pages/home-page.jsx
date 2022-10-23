import { MainContent } from '../cmps/main-content'
import { MobileBar } from '../cmps/mobile-bar'
import { Sidebar } from '../cmps/sidebar'

export const HomePage = () => {
  return (
    <div className="homepage">
      <Sidebar />
      <MainContent />
      <MobileBar />
    </div>
  )
}
