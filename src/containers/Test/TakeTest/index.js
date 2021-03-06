import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import Question from "./Question";
import { getTest, getFirstQuestion } from '../../../store/actions/TestActions';
import { generateResults } from "../../../store/actions/TestActions";


const TestInfo = ({ test }) => {

    return (
        <>
            <h1>You are taking a test: {test.title}</h1>
            <h2>Time limit: {test.time_dependency ? ((test.time_limit_seconds / 60)+ 'min'): 'NO LIMIT'}</h2>
        </>
    )
}

const TakeTest = () => {
    const dispatch = useDispatch();
    const test = useSelector(state => state.test.current)
    const { id } = useParams();

    useEffect(() => {
        console.log('id testa jee :', id)
        dispatch(getTest(id))
        dispatch(getFirstQuestion(id));
    },[dispatch, id])

    
    return (
        <Container>
            <Row style={{margin: '10px', padding: '10px'}}>
                <Col xs={3} style={{margin: '10px'}}>
                </Col>
                <Col style={{margin: '10px'}}>
                {test && (
                    <Container>
                        <TestInfo test={test}/>
                        <Question />
                    </Container> )}
                </Col> 
                </Row>
        </Container>
    )
}

export default TakeTest;