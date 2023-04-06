import React from 'react'
import "./Analytics_table.css"
import la from "../Assets/la.avif"
import laa from "../Assets/laa.avif";
import laaa from "../Assets/laaa.avif";
function Analytics_table() {
  return (
    <div className='border_rounder p-3 mt-3'>
        <div class="table-responsive dddd">
  <table class="table ">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col"></th>
      <th scope="col">Wallet</th>
      <th scope="col">owned</th>
      <th scope="col">%owned</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row " >1</th>
      <td><div className="d-flex justify-content-start align-items-center ">
                    <img src={la} className="owner_img" alt="" />
                    <span
                      style={{ color: "rgba(32,129,226)" }}
                      className="ms-2"
                    >
                      Maxsaltzman
                    </span>
                  </div></td>
      <td>  <span>0x5b72...536b</span></td>
      <td> <span>174</span></td>
      <td>65.17%</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><div className="d-flex justify-content-start align-items-center ">
                    <img src={laa} className="owner_img" alt="" />
                    <span
                      style={{ color: "rgba(32,129,226)" }}
                      className="ms-2"
                    >
                      Flyinbeard
                    </span>
                  </div></td>
      <td> <span>0x5b72...536b</span></td>
      <td> <span>174</span></td>
      <td> <span>65.17%</span></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td ><div className="d-flex justify-content-start align-items-center ">
                    <img src={laaa} className="owner_img" alt="" />
                    <span
                      style={{ color: "rgba(32,129,226)" }}
                      className="ms-2"
                    >
                      Mac2022
                    </span>
                  </div></td>
      <td> <span>0x5b72...536b</span></td>
      <td>  <span>174</span></td>
      <td>65.17% </td>
    </tr>
  </tbody>
  </table>
</div>
         {/* <div >
              <h3 className="listing_head">Owner </h3>
              <span className="span_text_pfa">Top 100</span>
            </div>
            <div className="table-responsive">
      <table className="table  ">

  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col"></th>
      <th scope="col">Wallet</th>
      <th scope="col">owned</th>
      <th scope="col">%owned</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td><div className="d-flex justify-content-center align-items-center ">
                    <img src={la} className="owner_img" alt="" />
                    <span
                      style={{ color: "rgba(32,129,226)" }}
                      className="ms-2"
                    >
                      Maxsaltzman
                    </span>
                  </div></td>
      <td>  <span>0x5b72...536b</span></td>
      <td> <span>174</span></td>
      <td>65.17%</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
  
</table>
</div> */}
    </div>
  )
}

export default Analytics_table
