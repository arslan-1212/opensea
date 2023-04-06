import React from 'react'
import "./Trending.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

function Trending() {
  return (
    <div>

      <div className=" m-0">
        <div className="row m-0">
          <div className="col-lg-12 p-0">

          <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Container  className=' m-0 '>
        <Navbar.Brand href="#home">
          <div className='main_logo d-flex'>
            <span><img src="./images/logo.svg" alt="opensea" className='lo_pi' /></span>
            <div className='d-flex align-items-center poss'><h5 className='open'>OpenSea</h5></div>
          </div>
        </Navbar.Brand>

        <Nav className="me-auto">
          <form action="/action_page.php">
             {/* <button type="submit"><i class="fa fa-search"></i></button> */}
             <input type="text" placeholder="Search items, colloections, and accounts" name="search" className='srch ' />
          </form>
          </Nav>
<div className="total-nav">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-center' />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>            

              {/* Explore Section */}
              <div className="explore ">
               <button className="dropbtn text-dark">Explore</button>
               <div className="explore-content  text-start">
                  <a href="#">All NFT's</a>
                  <hr className='m-0'/>
                 <a href="#">Art</a>
                 <hr className='m-0'/>
                  <a href="#">Collectibles</a>
                  <hr className='m-0'/>
                  <a href="#">Domain Names</a>
                  <hr className='m-0'/>
                  <a href="#">/Music</a>
                  <hr className='m-0'/>
                  <a href="#">Photography</a>
                  <hr className='m-0'/>
                  <a href="#">Sports</a>
               </div>
              </div>

              <Nav.Link href="#pricing" className='text-dark'>Drops</Nav.Link>

                {/* Stats */}
              <div className="stats">
               <button className="stats-dropbtn">Stats</button>
               <div className="stats-content  text-start">
                  <a href="#">Rankings</a>
                  <hr className='m-0'/>
                 <a href="#">Activity</a>
               </div>
              </div>    
              
                      {/* Resources */}

                      <div className="resource">
               <button className="resource-dropbtn text-dark">Resources</button>
               <div className="resource-content text-start">
                  <a href="#">Learn</a>
                  <hr className='m-0'/>
                 <a href="#">Help Center</a>
                 <hr className='m-0'/>
                  <a href="#">Collectibles</a>
                  <hr className='m-0'/>
                  <a href="#">Platform Status</a>
                  <hr className='m-0'/>
                  <a href="#">Partners</a>
                  <hr className='m-0'/>
                  <a href="#">Taxes</a>
                  <hr className='m-0'/>
                  <a href="#">Blog</a>
                  <hr className='m-0'/>
                  <a href="#">Docs</a>
                  <hr className='m-0'/>
                  <a href="#">Newsletter</a>
               </div>
              </div>

                {/* Icon */}

                      <div className="icon">
               {/* <button className="icon-dropbtn">Icon</button>
               <div className="icon-content">
                  <a href="#">Profile</a>
                 <a href="#">Favourites</a>
                  <a href="#">Watch List</a>
                  <a href="#">My Collections</a>
                  <a href="#">Partners</a>
                  <a href="#">Create</a>
                  <a href="#">Settings</a>
                  <a href="#">Language</a>
                  <a href="#">Night Mode</a>
               </div> */}
              </div>       

            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
          
        </Navbar.Collapse></div>
      </Container>
    </Navbar>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Trending
