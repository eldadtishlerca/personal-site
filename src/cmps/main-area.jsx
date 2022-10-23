import {
  SiCss3,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiStripe,
} from 'react-icons/si'
import { DiSass } from 'react-icons/di'

export const MainArea = () => {
  return (
    <section className="main-area">
      <div className="heading-wrapper">
        <div>
          <h1>tishler eldad,</h1>
        </div>
        <div>
          <h1>fullstack developer</h1>
        </div>
        <div className="heading-line" />
        <div className="about-wrapper">
          <div className="inner-wrapper">
            <p>About Me</p>
          </div>
        </div>
      </div>
      <div className="portfolio-wrapper">
        <div className="portfolio-card">
          <div className="card-header">
            <div className="img-wrapper">
              <img className="unhover-image" src="netflix.png" alt="" />
              <img className="hover-image" src="netflix-hover.png" alt="" />
            </div>
            <div className="btns-wrapper">
              <div
                className="see-btn"
                onClick={() =>
                  window.open('https://netflix-proj-3eeef.web.app/')
                }
              >
                <p>See Live</p>
              </div>
              <div
                className="view-btn"
                onClick={() =>
                  window.open('https://github.com/eldadtishlerca/netflix-clone')
                }
              >
                <p>View Code</p>
              </div>
            </div>
          </div>
          <div className="card-info">
            <h3>REACT NETFLIX CLONE APP</h3>
            <p>
              A fully responsive React.JS & Firebase end to end application
              using TMDB database. This is a clone of Netflix, an app that
              allows members to watch TV shows and movies, can be used at the
              same time in number of devices depending on your plan.
            </p>
            <br />
            <p>This app features:</p>
            <ul>
              <li>- API calls to fetch tv shows and movies data.</li>
              <li>- Stripe checkout for payments</li>
              <li>- State management using React Redux.</li>
              <li>- Google authentication with Firebase.</li>
            </ul>
          </div>
          <br />
          <ul className="card-icons">
            <li>
              <SiReact />
            </li>
            <li>
              <SiRedux />
            </li>
            <li>
              <DiSass />
            </li>
            <li>
              <SiFirebase />
            </li>
            <li>
              <SiStripe />
            </li>
          </ul>
        </div>
        <div className="portfolio-card">
          <div className="card-header">
            <div className="img-wrapper">
              <img className="unhover-image" src="monday.png" alt="" />
              <img className="hover-image" src="monday-hover.png" alt="" />
            </div>
            <div className="btns-wrapper">
              <div
                className="see-btn"
                onClick={() =>
                  window.open('https://yom-rishon-app.herokuapp.com')
                }
              >
                <p>See Live</p>
              </div>
              <div
                className="view-btn"
                onClick={() =>
                  window.open(
                    'https://github.com/eldadtishlerca/YomRishon-Frontend'
                  )
                }
              >
                <p>View Code</p>
              </div>
            </div>
          </div>
          <div className="card-info">
            <h3>REACT MONDAY CLONE APP</h3>
            <p>
              A fully responsive React.JS & MongoDB end to end application. This
              is a clone of Monday, an app that allows you to manage your
              workflows and teams in your way by customizing anything you need
              to improve the way your business run.
            </p>
            <br />
            <p>This app features:</p>
            <ul>
              <li>
                - Various React hooks such as useEffect, useParams, useNavigate.
              </li>
              <li>- State management with Redux.</li>
              <li>
                - Socket.io for bi-directional communication between client and
                server.
              </li>
              <li>- Includes Kanban board - Trello app clone.</li>
            </ul>
          </div>
          <br />
          <ul className="card-icons">
            <li>
              <SiReact />
            </li>
            <li>
              <SiRedux />
            </li>
            <li>
              <DiSass />
            </li>
            <li>
              <SiSocketdotio />
            </li>
            <li>
              <SiMongodb />
            </li>
          </ul>
        </div>
        <div className="portfolio-card">
          <div className="card-header">
            <div className="img-wrapper">
              <img className="unhover-image" src="appsus.png" alt="" />
              <img className="hover-image" src="appsus-hover.png" alt="" />
            </div>
            <div className="btns-wrapper">
              <div
                className="see-btn"
                onClick={() =>
                  window.open('https://elon5000.github.io/appsus/#/email')
                }
              >
                <p>See Live</p>
              </div>
              <div
                className="view-btn"
                onClick={() =>
                  window.open('https://github.com/elon5000/appsus')
                }
              >
                <p>View Code</p>
              </div>
            </div>
          </div>
          <div className="card-info">
            <h3>REACT GMAIL & KEEPS CLONE</h3>
            <p>
              A fully responsive front-end (static) CRUD SPA using React.JS &
              CSS. This is a clone of gmail and google keep, gmail is an app
              that allows you to store messages from others, and let you send
              messages to others, while google keep offers variety of tools for
              taking self-notes including texts, lists, images & audio.
            </p>
            <br />
            <p>This app features:</p>
            <ul>
              <li>- React class components & lifecycle methods to a class.</li>
              <li>- Advanced filter and search for users</li>
              <li>- Local storage to allow data storage </li>
            </ul>
          </div>
          <br />
          <ul className="card-icons">
            <li>
              <SiReact />
            </li>
            <li>
              <SiJavascript />
            </li>
            <li>
              <SiCss3 />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
