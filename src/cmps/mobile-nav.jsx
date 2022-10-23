import { useState } from 'react'
import { HiMenu } from 'react-icons/hi'

export const MobileNav = () => {
  const [toggleMenu, onToggleMenu] = useState(false)

  const onClickMenu = () => {
    onToggleMenu(!toggleMenu)
  }

  return (
    <section className="mobile-nav">
      <div className="icon-wrapper">
        <HiMenu onClick={() => onClickMenu()} />
      </div>
      {toggleMenu && (
        <div className="nav-menu">
          <div className="nav-item">
            <p>CV</p>
          </div>
          <div className="nav-item">
            <p>Tishler.eldad@gmail.com</p>
          </div>
        </div>
      )}
    </section>
  )
}
