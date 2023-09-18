import './card.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Card = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div className='card' key={item.name}>
          <div className="card-body">
            <div className="row1">
              <div className="label">
                {item.discount > 0 && <label className='sale'>ON SALE</label>}
                <label className={`stock ${item.discount <= 0 ? 'no-disc' : ''}`}>In stock</label>
              </div>
              <div className="picture">
                <img src={`${item.image}`} className='prod-image' alt={item.name} />
              </div>
              <div className='prod-titles'>
                <div className="titles">
                  <p className='prod-name'>{item.name}</p>
                  <img src="/icons/Zelda.png" className='zelda-icon' />
                </div>
                {item.discount > 0 ? (
                  <>
                    <p className='prod-price'>${item.discount} <span className='disc'>${item.price}</span></p>
                  </>
                ) : (
                  <>
                    <p className='prod-price'>${item.price}</p>
                  </>
                )}
                <p className='prod-desc'>{item.description}</p>
                <div className="buttons">
                  <button className="details">DETAILS</button>
                  <button className="buy">ADD <span className='tocart'><ShoppingCartIcon /></span></button>
                </div>
              </div>
            </div>
            <div className='quant'>
              <input disabled type="number" className='cant' placeholder='1' />
              <div className="arrows">
                <img src="/icons/accordian_arrow.svg" className='up-arrow' alt="Up Arrow" />
                <img src="/icons/accordian_arrow.svg" className='down-arrow' alt="Down Arrow" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;