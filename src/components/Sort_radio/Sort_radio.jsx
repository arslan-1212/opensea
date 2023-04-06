import { Radio, Typography } from '@mui/material'
import React from 'react'

const label = { inputProps: { "aria-label": "Checkbox demo" } };
function Sort_radio() {
  return (
    <div>
       <Typography>
            <div className="new_main">
              <span className="new_all">Recently listed</span>
              <Radio
                {...label}
              
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>

            <div className="new_main">
              <span className="new_all">Recently created</span>
              <Radio
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>

            <div className="new_main">
              <span className="new_all">Bundles</span>
              <Radio
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>

            <div className="new_main">
              <span className="new_all">Recently sold</span>
              <Radio
                {...label}
                
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>

            <div className="new_main">
              <span className="new_all">Recently received</span>
              <Radio
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>

            <div className="new_main">
              <span className="new_all">Endin soon</span>
              <Radio
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>
            <div className="new_main">
              <span className="new_all">Price low to high</span>
              <Radio
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>
            <div className="new_main">
              <span className="new_all">Price low to high</span>
              <Radio
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>
            <div className="new_main">
              <span className="new_all">Hightest last sale</span>
              <Radio
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>
            <div className="new_main">
              <span className="new_all">Oldest</span>
              <Radio
                {...label}
                sx={{ "& .MuiSvgIcon-root": { fontSize: 27 } }}
              />
            </div>
          </Typography>
    </div>
  )
}

export default Sort_radio
