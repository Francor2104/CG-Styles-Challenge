import './card.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Card = ({ item }) => {
  const { name, price, image, discount, description } = item;

  return (
    <div className='card'>
      <div className="card-body">
        <div className="row1">
          <div className="label">
            {discount > 0 && <label className='sale'>ON SALE</label>}
            <label className={`stock ${discount <= 0 ? 'no-disc' : ''}`}>In stock</label>
          </div>
          <div className="picture">
            <img src={`${image}`} className='prod-image' alt={name} />
          </div>
          <div className='prod-titles'>
            <div className="titles">
              <p className='prod-name'>{name}</p>
              <img src="/icons/Zelda.png" className='zelda-icon' alt="Zelda Icon" />
            </div>
            {discount > 0 ? (
              <p className='prod-price'>${discount} <span className='disc'>${price}</span></p>
            ) : (
              <p className='prod-price'>${price}</p>
            )}
            <p className='prod-desc'>{description}</p>
            <div className="buttons">
              <button className="details">DETAILS</button>
              <button className="buy">ADD <span className='tocart'><ShoppingCartIcon /></span></button>
            </div>
          </div>
        </div>
        <div className='quant'>
          <input type="number" className='cant' placeholder='1' />
          <div className="arrows">
            <img src="/icons/accordian_arrow.svg" className='up-arrow' alt="Up Arrow" />
            <img src="/icons/accordian_arrow.svg" className='down-arrow' alt="Down Arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;