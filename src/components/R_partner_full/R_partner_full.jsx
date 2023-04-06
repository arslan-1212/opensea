import React from 'react'
import Faqs_partner from '../Faqs_partner/Faqs_partner'
import Gril_partner from '../Gril_partner/Gril_partner'
import Partner from '../Partner/Partner'
import Who_card_pro from '../Who_card_pro/Who_card_pro'
import Why_patner from '../Why_patner/Why_patner'

function R_partner_full() {
  return (
    <div className='ps_fixed1'>

<Partner />
<Why_patner/>
<Who_card_pro />
<Faqs_partner />
<Gril_partner/>
       
    
    </div>
  )
}

export default R_partner_full