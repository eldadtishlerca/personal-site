import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'

export const Sidebar = () => {
  return (
    <section className="sidebar">
      <div>
        <h3 className="sidelogo">ET</h3>
      </div>
      <ul className="sidebar-icons">
        <li
          className="sidebox"
          onClick={() => window.open('https://www.facebook.com/eldad.tishler')}
        >
          <FaFacebookF />
        </li>
        <li
          className="sidebox"
          onClick={() =>
            window.open('https://www.linkedin.com/in/eldad-tishler/')
          }
        >
          <FaLinkedinIn />
        </li>
        <li
          className="sidebox"
          onClick={() => window.open('https://github.com/eldadtishlerca')}
        >
          <FaGithub />
        </li>
      </ul>
    </section>
  )
}
