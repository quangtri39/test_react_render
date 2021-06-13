import { createContext, useState, useContext } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

const CountContext1 = createContext();

const CountProviderTH1 = ({ children }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const value = { count1, setCount1, count2, setCount2 };

  return (
    <CountContext1.Provider value={value}>{children}</CountContext1.Provider>
  );
};
const CountContext2 = createContext();

const CountProviderTH2 = ({ children }) => {
  const [count, setCount] = useState({
    count1: 0,
    count2: 0,
  });
  const value = { count, setCount };
  return (
    <CountContext2.Provider value={value}>{children}</CountContext2.Provider>
  );
};

const CountContext3 = createContext();
const CountProviderTH3 = ({ children }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const value = { count1, setCount1, count2, setCount2 };

  return (
    <CountContext3.Provider value={value}>{children}</CountContext3.Provider>
  );
};

const IncreaseCountTH3V1 = () => {
  const { count1, setCount1 } = useContext(CountContext3);
  return (
    <>
      <label>Count 1: {count1}</label>
      <Button variant="success" onClick={() => setCount1(count1 + 1)}>
        Click me
      </Button>
    </>
  );
};

const IncreaseCountTH3V2 = () => {
  const { count2, setCount2 } = useContext(CountContext3);

  return (
    <>
      <label>Count 2: {count2}</label>
      <Button variant="success" onClick={() => setCount2(count2 + 1)}>
        Click me
      </Button>
    </>
  );
};

const TH1 = () => {
  const { count1, setCount1, count2, setCount2 } = useContext(CountContext1);

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
  const { count, setCount } = useContext(CountContext2);
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
export default function ContextCheck() {
  return (
    <Container fluid>
      <h2>Fail, nó render hết tất cả =))</h2>
      <Row>
        <Col className="d-flex align-items-center flex-column">
          <CountProviderTH1>
            <TH1 />
          </CountProviderTH1>
        </Col>
        <Col className="d-flex align-items-center flex-column">
          <CountProviderTH2>
            <TH2 />
          </CountProviderTH2>
        </Col>

        <Col className="d-flex align-items-center flex-column">
          <CountProviderTH3>
            <h3>TH3: Để state ở trong components</h3>
            <IncreaseCountTH3V1 />
            <IncreaseCountTH3V2 />
            <h3>KQ: Chỉ render component đấy thôi</h3>
          </CountProviderTH3>
        </Col>
      </Row>
    </Container>
  );
}
