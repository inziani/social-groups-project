import { Form, Row, Col, Stack } from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable";

export default function  MemberForm(){
    return(
       
        <Form>
            <Stack gap={4}>
                <Row>
                    <Col>
                    <Form.Group controlId="memberName">
                        <Form.Label>Member Name</Form.Label>
                        <Form.Control> required</Form.Control>
                    </Form.Group>
                    </Col>
                    <Col>
                    <Form.Group controlId="parentName">
                        <Form.Label>Parent Name</Form.Label>
                        <CreatableReactSelect isMulti/>
                    </Form.Group>
                    </Col>
                </Row>
            </Stack>
        </Form>

        
    )
}