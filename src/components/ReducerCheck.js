import { useReducer } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    default:
      return state;
  }
};
const reducerObject = (state, action) => {
  switch (action.type) {
    case "INCREASE_COUNT1":
      return { ...state, count1: state.count1 + action.data };
    case "INCREASE_COUNT2":
      return { ...state, count2: state.count2 + action.data };
    default:
      return state;
  }
};

const IncreaseCount = ({ title }) => {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <label>
        {title}: {count}
      </label>
      <Button
        variant="success"
        onClick={() => dispatch({ type: "INCREASE", data: 1 })}
      >
        Click me
      </Button>
    </>
  );
};
const TH1 = () => {
  const [count1, dispatch1] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer, 0);
  return (
    <>
      <h3>TH1: Để state ở ngoài component cha</h3>
      <label>Count 1: {count1}</label>
      <Button
        variant="success"
        onClick={() => dispatch1({ type: "INCREASE", data: 1 })}
      >
        Click me
      </Button>
      <label>Count 2: {count2}</label>
      <Button
        variant="success"
        onClick={() => dispatch2({ type: "INCREASE", data: 1 })}
      >
        Click me
      </Button>
      <h3>KQ: render lại hết tất cả TH1</h3>
    </>
  );
};
const TH2 = () => {
  const [count, dispatch] = useReducer(reducerObject, { count1: 0, count2: 0 });

  const { count1, count2 } = count;
  return (
    <>
      <h3>TH2: Để state là object chứa 2 count và để ở ngoài component cha</h3>
      <label>Count 1: {count1}</label>
      <Button
        variant="success"
        onClick={() => dispatch({ type: "INCREASE_COUNT1", data: 1 })}
      >
        Click me
      </Button>
      <label>Count 2: {count2}</label>
      <Button
        variant="success"
        onClick={() => dispatch({ type: "INCREASE_COUNT2", data: 1 })}
      >
        Click me
      </Button>
      <h3>KQ: render lại hết tất cả TH2, giống TH1</h3>
    </>
  );
};
export default function ReducerCheck() {
  return (
    <Container fluid>
      <h2>Giống y chang State</h2>
      <Row>
        <Col className="d-flex align-items-center flex-column">
          <TH1 />
        </Col>
        <Col className="d-flex align-items-center flex-column">
          <TH2 />
        </Col>

        <Col className="d-flex align-items-center flex-column">
          <h3>TH3: Để state ở trong components</h3>
          <IncreaseCount title="Count 1" />
          <IncreaseCount title="Count 2" />
          <h3>KQ: Chỉ render component đấy thôi</h3>
        </Col>
      </Row>
    </Container>
  );
}
