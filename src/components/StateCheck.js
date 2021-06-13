import { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const IncreaseCount = ({ title }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <label>
        {title}: {count}
      </label>
      <Button variant="success" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </>
  );
};
const TH1 = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <>
      <h3>TH1: Để state ở ngoài component cha</h3>
      <label>Count 1: {count1}</label>
      <Button variant="success" onClick={() => setCount1(count1 + 1)}>
        Click me
      </Button>
      <label>Count 2: {count2}</label>
      <Button variant="success" onClick={() => setCount2(count2 + 1)}>
        Click me
      </Button>
      <h3>KQ: render lại hết tất cả TH1</h3>
    </>
  );
};
const TH2 = () => {
  const [count, setCount] = useState({
    count1: 0,
    count2: 0,
  });
  const { count1, count2 } = count;
  return (
    <>
      <h3>TH2: Để state là object chứa 2 count và để ở ngoài component cha</h3>
      <label>Count 1: {count1}</label>
      <Button
        variant="success"
        onClick={() => setCount({ ...count, count1: count1 + 1 })}
      >
        Click me
      </Button>
      <label>Count 2: {count2}</label>
      <Button
        variant="success"
        onClick={() => setCount({ ...count, count2: count2 + 1 })}
      >
        Click me
      </Button>
      <h3>KQ: render lại hết tất cả TH2, giống TH1</h3>
    </>
  );
};
export default function StateCheck() {
  return (
    <Container fluid>
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
