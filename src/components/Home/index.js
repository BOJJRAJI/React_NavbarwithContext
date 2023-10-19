import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
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
                    ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
                }
                alt="home"
                className="home-image"
              />
              <h1>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
