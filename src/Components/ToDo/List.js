import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'


const List = () => {
    const [myList, setMyList] = useState([]);
    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        setMyList([...myList, todo])
    }

    useEffect(() => {
        console.log(myList)
    })


    return (
        <Container>
            <Row>
                <Col>
                    <form onSubmit={handleSubmit}>
                        <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} ></input>
                        <button type='submit'>Add</button>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col>
                    {myList.map((item, index) => {
                        return (
                            <div className='itemWrapper'>
                                <h2 key={index}>{item}</h2>
                                <button>Delete</button>
                            </div>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default List