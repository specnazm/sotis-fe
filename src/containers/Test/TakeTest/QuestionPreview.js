import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { getOptions, selectedOption } from '../../../store/actions/OptionActions';
import { setItem } from '../../../store/actions/ItemActions';

const QuestionPreview = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.item.current)
    const items = useSelector(state => state.section.current?.items)
    const options = useSelector(state => state.option.all)

    useEffect(() => {
        if (item)
            dispatch(getOptions(item.id))
    }, [item, dispatch])
    
    const onPrevious = () => {
        const currentIndex = items.findIndex(el => el.id === item.id);
        if (currentIndex !== 0)
            dispatch(setItem(items[currentIndex - 1]))
    }   

    const onNext = () => {
        const currentIndex = items.findIndex(el => el.id === item.id);
        if (currentIndex !== (items.length - 1))
            dispatch(setItem(items[currentIndex + 1]))
    }   


    return (
        <>
        {item && (
            <Container style={{marginTop: '30px'}}>
                <Row className="mb-12">
                    <h3>{item.question}</h3>
                </Row>
                {options.map(option => (
                    <Row className="mb-3" key={option.id}>
                        <Col xs={1}>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    disabled={true}
                                    value={option.name}
                                    type="text" 
                                   />
                            </Form.Group>
                        </Col>
                        <Col xs={10}>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    disabled={true}
                                    value={option.label}
                                    type="text" 
                                     />
                            </Form.Group>
                        </Col>
                    </Row> 
                ))}
                <Row className="mb-3">
                    <Col xs={1}>
                        <Button onClick={onPrevious}>
                            Previous
                        </Button>
                    </Col>
                    <Col xs={10}>
                    </Col>
                    <Col xs={1} onClick={onNext}>
                        <Button>
                            Next
                        </Button>
                    </Col>
                </Row>
             
            </Container>
            )
        }
        </>
    );
}

export default QuestionPreview;