import { FaDownload } from 'react-icons/fa'

export const MainNav = () => {
  return (
    <ul className="main-nav">
      <li
        className="nav-item cv-wrapper"
        onClick={() => window.open('/eldadtishlercv.pdf')}
      >
        <FaDownload />
        <p>CV</p>
      </li>
      <li className="nav-item contact-wrapper">
        <p
          className="show-hover"
          onClick={() =>
            window.open(
              'mailto:tishler.eldad@gmail.com?subject=Subject&body=Body%20goes%20here'
            )
          }
        >
          Tishler.eldad@gmail.com
        </p>
      </li>
    </ul>
  )
}
