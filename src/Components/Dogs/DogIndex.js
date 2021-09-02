import React,{useState} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const DogIndex = () => {
    const [image, setImage] = useState({});

    const handleFetch = async (e) => {
        e.preventDefault();

        await fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then(data => setImage(data))
        .catch(err => console.log(err))
    }


    return (
        <Container>
            <Row>
                <Col xs='12'>
                    {image.message ? <div><img src={image.message} alt='A random doggie'/></div> : <h2>Press the button to fetch a random dog!</h2> }
                    <Button pt='10' onClick={handleFetch}> Fetch Doggie </Button>
                </Col>
            </Row>   
        </Container>
    )
}

export default DogIndex;