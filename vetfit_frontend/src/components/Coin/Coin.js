import React from 'react'
import './coin.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';




const Coin = ({name, price, id, coinAbbr, image, market_cap, percentChange }) => {

    
    

  return (
    <div className='coin'>
        <Link className='coin-link' to={`/coin/${id}`} >
            <div className='coin-banner'>
                <div className='coin-info'>
                    <img className='coin-image' src={image} alt={`${id}-image`} />
                    <h3 className='coin-name'>{name}</h3>
                    <h3 className='coin-symbol'>{coinAbbr}</h3>
                </div>
                <div className='coin-data'>
                    {/*<h3 className='coin-price'>{symbol}{price.toLocaleString()}</h3>*/}
                    {percentChange > 0
                    ? <h3 className='percent-change positive'>{percentChange.toFixed(2)}%</h3>
                    : <h3 className='percent-change negative'>{percentChange.toFixed(2)}%</h3>
                        }
                </div>

            </div>
        </Link>
        {/* {withinPortfolio <Tooltip disableFocusListener 
        disableTouchListener title="Delete from portfolio">
        <DeleteForeverRoundedIcon size='large'
        variant="contained" onClick={() => handleDelete()}
        sx={{color: 'purple', ":hover": {color: '#b93dfc', cursor: 'pointer'}, fontSize: 60 }} 
        disableElevation></DeleteForeverRoundedIcon>
        </Tooltip> */}
    </div>
  )
}

export default Coin

