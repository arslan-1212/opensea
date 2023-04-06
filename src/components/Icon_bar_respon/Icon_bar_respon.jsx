import React from 'react'
import "./Icon_bar_respon.css"
function Icon_bar_respon() {
  return (
    <div>
      <div class="dropdown d-block d-md-none">
  <a class="btn border radius-border dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  All Chains
  </a>

  <ul class="dropdown-menu " aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item py-1 hover-1 " href="#">All Chains</a></li>
    <hr/>
    <li><a class="dropdown-item py-1 hover-1 " href="#">Arbitrum</a></li>
    <hr/>
    <li><a class="dropdown-item py-1 hover-1 " href="#">Avalanche</a></li>
    <hr/>
    <li><a class="dropdown-item py-1 hover-1 " href="#">BNB Chain</a></li>
    <hr/>
    <li><a class="dropdown-item py-1 hover-1 " href="#">Ethereum </a></li>
    <hr/>
    <li><a class="dropdown-item py-1 hover-1 " href="#">Klaytn</a></li>
    <hr/>
    <li><a class="dropdown-item py-1 hover-1 " href="#">Optimism</a></li>
    <hr/>
    <li><a class="dropdown-item py-1 hover-1 " href="#">Palygon</a></li>
    <hr/>
    <li><a class="dropdown-item py-1 hover-1 " href="#">solana</a></li>
  </ul>
</div>
    </div>
  )
}

export default Icon_bar_respon
