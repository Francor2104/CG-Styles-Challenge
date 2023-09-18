import './box.css'
import Card from '../card/card'
import jsonData from '../../assets/Objects.json'

const Box = () => {
  return (
    <>
      <div className='center-box'>
          <div className='box'>
            <div className='row-sort'>
                    <p className='sort'> Showing 15 of 30 </p>
                <div className='feature'>
                    <img src="/settings.png" alt="" className='feature-icon' />
                    <select disabled className='select-feature'>
                        <option selected value="All">Featured</option>
                    </select>
                    
                </div>
            </div>
            <div className='cards-container'>
            {jsonData.items.map((item) => (
              <Card key={item.name} item={item} />
            ))}
            </div>
            <div className='pagination'>
                <ul className='pagination'>
                    <li className='li arrow'>{'<'}</li>
                    <li className='li selected'>1</li>
                    <li className='li'>2</li>
                    <li className='li'>3</li>
                    <li className='li'>4</li>
                    <li className='li'>...</li>
                    <li className='li'>11</li>
                    <li className='li arrow'>{'>'}</li>
                </ul>
            </div>
          </div>
        </div>
    </>
  )
}

export default Box
