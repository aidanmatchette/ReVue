import React, {useState, useEffect} from 'react'
import './css/dashboard.css'
import Search from '../components/Search/Search'
import Coin from '../components/Coin/Coin'
import Carousell from '../components/Carousell/Carousell'
import { Pagination } from '@mui/material'

// main dashboard url, eventualy change to be able to switch market.
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false

const Dashboard = () => {
  const [allCoins, setAllCoins] = useState([])
  const [trendingCoins, setTrendingCoins] = useState([])
  // const [search, setSearch] = useState('')
  const [pageNum, setPageNum] = useState(1)
  

  // useEffect(() => {
  //   generateAllCoins()
  //   generateTrendingCoins()
  // },[currency])

  const generateTrendingCoins = async () => {
    // const data = await dashboardAPI.getTrendingDashboard(currency)
    // setTrendingCoins(data ? data : [])
  }

  const generateAllCoins = async () => {
  } 



  return (
    <div className='dashboard-main'>
      <div className='carousell'>
        <Carousell trendingCoins={trendingCoins} setTrendingCoins={setTrendingCoins} />
      </div>
      <div className='dashboard-search'>
      </div>
    </div>
  )
}

export default Dashboard
