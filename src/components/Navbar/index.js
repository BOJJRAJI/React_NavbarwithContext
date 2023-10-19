import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navBarClass = isDarkTheme ? 'black-navbar' : 'white-navbar'
      const homeAboutContainer = isDarkTheme
        ? 'dark-home-about-container'
        : 'white-home-about-container'
      const logo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      return (
        <div className={navBarClass}>
          <img src={logo} alt="website logo" className="logo-image" />
          <ul className={homeAboutContainer}>
            <li>
              <Link to="/" className={isDarkTheme ? 'list-dark' : 'list-white'}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={isDarkTheme ? 'list-dark' : 'list-white'}
              >
                About
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            data-testid="theme"
            type="button"
            className="theme-button"
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              alt="theme"
              className="theme-icon"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
