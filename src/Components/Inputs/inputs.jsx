import './inputs.css';
import Box from '../box/box.jsx'
function Inputs() {
    return(
    <>
    <div className='container'>
        <div className='row-container2'>
        <h1 className='header'>Condimentum consectetur</h1>
        </div>
        <div className='row-container'>
                <div className='select-game-bg'>
                    <img src="/public/sword.png" className='sw-icon'/>
                    <select disabled className='select-game'>
                    <option selected value="Select a Game">Select a Game</option>
                    </select>
                </div>

            <div className='search'>
                <img src="/public/search.svg" className='search-icon'/>
                <input disabled type="text" className='searchbar' placeholder='Search' />
            </div>

            <div className='filter'>
            <div className='select-filter-bg'>
                <div className='display-block'><label className='small'>Price</label></div>
                <img src="/public/money-bag.png" className='filter-icon' />
                <select disabled className='select-filter'>
                <option selected value="All">All</option>
                </select>
            </div>

            <div className='select-filter-bg'>
                <div className='display-block'><label className='small'>Item Type</label></div>
                <img src="/public/feather.png" className='filter-icon' />
                <select disabled className='select-filter'>
                <option selected value="All">All</option>
                </select>
            </div>
            </div>
        </div>
        <Box/>
    </div>
    </>
    )
}

export default Inputs