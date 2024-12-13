import Image1 from '../../assets/images/image1.png';
import './LeftAngledImg.css';

const LeftAngledImg = () => {
  return (
    <div className='image-container' aria-label="Angled Image Container">
      <img src={Image1} alt="Angled" className="angled-image" />
    </div>
  );
};

export default LeftAngledImg;