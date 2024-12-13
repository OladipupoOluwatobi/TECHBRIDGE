import LeftAngledimg from '../leftAngledimg/LeftAngledimg'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-content">
            <h1 className="hero-title">Find a <span>job</span> easily</h1>
            <p>
                With verified, up-to-date job listings directly from employer websites, we create a premium experience for job seekers, employers, and data seekers alike.
            </p>
            <div>search is here</div>
            <div>
                <h3>Trusted by:</h3>
                <p>company is here</p>
            </div>
        </div>
        <div className='left-angled-img'>
            <LeftAngledimg />
        </div>
    </div>
  )
}

export default Hero