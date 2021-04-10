import { Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function CreateWorkout() {
  return (
    <div className="workout-form">
      <h3>Enter a new workout...</h3>
      <Form.Group>
        <Form.Row>
          <Form.Label column lg={2}>
            Workout Name
          </Form.Label>
          <Col>
            <Form.Control
              id="name"
              type="text"
              size="sm"
              placeholder="Enter workout name..."
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label column lg={2}>
            Duration
          </Form.Label>
          <Col>
            <Form.Control
              id="duration"
              type="number"
              size="sm"
              placeholder="Enter duration in minutes..."
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label column lg={2}>
            Source
          </Form.Label>
          <Col>
            <Form.Control
              id="source"
              type="text"
              size="sm"
              placeholder="Input link to video..."
            />
          </Col>
        </Form.Row>
        <Form.Row>
          <Form.Label column lg={2}>
            Description
          </Form.Label>
          <Col>
            <Form.Control
              id="description"
              type="text"
              size="sm"
              placeholder="Enter a brief description for this workout..."
            />
          </Col>
        </Form.Row>
        <br />
        <Button
          variant="primary"
          type="submit"
          className="float-right"
          onClick={() => {
            alert("submit");
          }}
        >
          Submit
        </Button>
      </Form.Group>
      <br />
      <div className="viewAll-workout">
        <Link className="viewAll-link" to="#">
          View all workouts / View my workouts
        </Link>
      </div>
    </div>
  );
}

export default CreateWorkout;
