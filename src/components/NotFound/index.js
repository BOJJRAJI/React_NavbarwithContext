import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
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
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="home-image"
              />
              <h1>Lost Your Way?</h1>
              <p className="para">
                We cannot seem to find the page you are looking for{' '}
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
