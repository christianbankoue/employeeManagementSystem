import React, {useEffect, useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Footer() {

    const [year, setYear] = useState();

    useEffect(()=>{
        setYear(new Date().getFullYear())
    }, [year])
    return (
           <Navbar bg="dark" variant="dark" fixed="bottom" style={{marginBottom:"0px"}}>
               <Container>
                <span className="text-muted">All Rights Reserved {year} @Cbankoue</span>
               </Container>
           </Navbar>
        );
}

export default Footer;