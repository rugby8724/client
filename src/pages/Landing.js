import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
          Next level gatekeep distillery, swag seitan banjo actually woke fixie yuccie. Etsy kitsch banjo, JOMO drinking vinegar master cleanse cold-pressed. Cronut craft beer JOMO four dollar toast echo park man bun adaptogen shabby chic marfa next level affogato selvage direct trade vexillologist.
          </p>
          <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='ing main-img'/>
      </div>

    </Wrapper>
  )
}


export default Landing