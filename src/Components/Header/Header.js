import React, { useState } from 'react';
import DarkMode from '../DarkMode/DarkMode';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import Logo from "../Assets/Logos/New Project.png"
export default function Header() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
        <MDBNavbar className='shadow-2' expand='lg'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>
                    <div className='navImg'>

                    </div>
                    {/* <img src={Logo} alt="" /> */}
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic}>
                    <MDBNavbarNav className='ml-auto mb-2 mb-lg-0 justify-content-end align-items-center'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='/'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/Products'>Products</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/about'>About</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/contactus'>Contact Us</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <DarkMode />
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
            {/* <div className='customNav'>
                Hello
            </div> */}
        </MDBNavbar>
    );
}