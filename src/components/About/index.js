import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBgContainerClass = isDarkTheme
        ? 'dark-bg-container'
        : 'light-bg-container'
      const homeContainer = isDarkTheme
        ? 'dark-home-container'
        : 'light-home-container'
      return (
        <div>
          <Navbar />
          <div className={homeBgContainerClass}>
            <div className={homeContainer}>
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
                }
                alt="about"
                className="home-image"
              />
              <h1>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
