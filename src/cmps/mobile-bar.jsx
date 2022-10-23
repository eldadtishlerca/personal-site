import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'

export const MobileBar = () => {
  return (
    <section className="mobile-bar">
      <ul className="bar-icons">
        <li className="bar-item right-bord left-bord">
          <FaFacebookF />
        </li>
        <li className="bar-item right-bord">
          <FaLinkedinIn />
        </li>
        <li className="bar-item right-bord">
          <FaGithub />
        </li>
      </ul>
    </section>
  )
}
