import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap'


const List = () => {
    const [myList, setMyList] = useState([]);
    const [todo, setTodo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        setMyList([...myList, todo])
    }

    const removeItem = (index) => {
        myList.splice(index, 1)
        setMyList([...myList])
    }

    return (
        <Container>
            <Row>
                <Col>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} ></input>
                        <button type='submit'>Add</button>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col>
                    {myList.map((item, index) => {
                        return (
                            <div key={index} className='itemWrapper'>
                                <h2 >{item}</h2>
                                <button onClick={(e) => removeItem(index)}>Done</button>
                            </div>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default List