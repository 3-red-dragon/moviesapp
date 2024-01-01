import React, { useEffect, useState } from "react";
import Atheatre from './Atheatre'
import { Link } from 'react-router-dom'
import { Container, Row, Button, Col } from 'react-bootstrap';

const Atheatres = () => {
    const [theatres, setTheatres] = useState();
    useEffect(() => {
        fetch("http://localhost:8000/theatres")
            .then(Response => Response.json())
            .then(data => setTheatres(data))
    }, []);
    
    return (
        <div>
            <Container>
                {theatres &&
                    theatres.map((theatre, i) => (
                        <div>
                           <Atheatre theatre={theatre} />
                        </div>

                    ))}
            </Container >
        </div>
    );
};
export default Atheatres;





