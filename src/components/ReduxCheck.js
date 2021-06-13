import { Container, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increment as incrementTH3C1 } from "../redux/counterTH3C1";
import { increment as incrementTH3C2 } from "../redux/counterTH3C2";
import {
  incrementCount1 as incrementCount1_TH1,
  incrementCount2 as incrementCount2_TH1,
} from "../redux/counterTH1";
import {
  incrementCount1 as incrementCount1_TH2,
  incrementCount2 as incrementCount2_TH2,
} from "../redux/counterTH2";

const IncreaseCount1 = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counterTH3C1);

  return (
    <>
      <label>Count 1: {count}</label>
      <Button variant="success" onClick={() => dispatch(incrementTH3C1())}>
        Click me
      </Button>
    </>
  );
};
const IncreaseCount2 = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counterTH3C2);

  return (
    <>
      <label>Count 2: {count}</label>
      <Button variant="success" onClick={() => dispatch(incrementTH3C2())}>
        Click me
      </Button>
    </>
  );
};
//===================================== TH1===================

const TH1_1 = () => {
  const dispatch = useDispatch();
  const { count1, count2 } = useSelector((state) => state.counterTH1);
  return (
    <>
      <h3>TH1_1: Để state ở chung 1 file redux và để ở component cha </h3>
      <label>Count 1: {count1}</label>
      <Button variant="success" onClick={() => dispatch(incrementCount1_TH1())}>
        Click me
      </Button>
      <label>Count 2: {count2}</label>
      <Button variant="success" onClick={() => dispatch(incrementCount2_TH1())}>
        Click me
      </Button>
      <h3>KQ: render lại hết tất cả TH1</h3>
    </>
  );
};

const Count1TH1C2 = () => {
  const dispatch = useDispatch();
  const { count1 } = useSelector((state) => state.counterTH1);
  return (
    <>
      <label>Count 1: {count1}</label>
      <Button variant="success" onClick={() => dispatch(incrementCount1_TH1())}>
        Click me
      </Button>
    </>
  );
};
const Count2TH1C2 = () => {
  const dispatch = useDispatch();
  const { count2 } = useSelector((state) => state.counterTH1);
  return (
    <>
      <label>Count 1: {count2}</label>
      <Button variant="success" onClick={() => dispatch(incrementCount2_TH1())}>
        Click me
      </Button>
    </>
  );
};
const TH1_2 = () => {
  return (
    <>
      <h3>TH1_2: Để state ở chung 1 file redux và để ở 2 component con </h3>
      <Count1TH1C2 />
      <Count2TH1C2 />
      <h3>KQ: render lại cả 2 component chứa button và lable</h3>
    </>
  );
};

//=====================================het TH1===================
//=====================================TH2===================

const TH2C1 = () => {
  const dispatch = useDispatch();
  const {
    count: { count1, count2 },
  } = useSelector((state) => state.counterTH2);
  return (
    <>
      <h3>
        TH2: Để state là 1 object chứa 2 count và để ở ngoài component cha
      </h3>
      <label>Count 1: {count1}</label>
      <Button variant="success" onClick={() => dispatch(incrementCount1_TH2())}>
        Click me
      </Button>
      <label>Count 2: {count2}</label>
      <Button variant="success" onClick={() => dispatch(incrementCount2_TH2())}>
        Click me
      </Button>
      <h3>KQ: render lại hết tất cả TH2, giống TH1</h3>
    </>
  );
};

const Count1TH2C2 = () => {
  const dispatch = useDispatch();
  const {
    count: { count1 },
  } = useSelector((state) => state.counterTH2);
  return (
    <>
      <label>Count 1: {count1}</label>
      <Button variant="success" onClick={() => dispatch(incrementCount1_TH2())}>
        Click me
      </Button>
    </>
  );
};
const Count2TH2C2 = () => {
  const dispatch = useDispatch();
  const {
    count: { count2 },
  } = useSelector((state) => state.counterTH2);
  return (
    <>
      <label>Count 1: {count2}</label>
      <Button variant="success" onClick={() => dispatch(incrementCount2_TH2())}>
        Click me
      </Button>
    </>
  );
};

//=====================================Het TH2===================

export default function ReduxCheck() {
  return (
    <Container fluid>
      <h3 style={{ color: "red", textAlign: "center" }}>
        Lưu ý kiểm tra TH1_1 thì xóa TH1_2 đi cho kết quả đúng nhất và ngược lại
      </h3>
      <Row>
        <Col className="d-flex align-items-center flex-column">
          <TH1_1 />
        </Col>
        <Col className="d-flex align-items-center flex-column">
          <TH1_2 />
        </Col>
      </Row>
      <h3 style={{ color: "red", textAlign: "center" }} className="mb-5">
        Kết quả: khi để state vô 1 file redux, cập nhật kết quả của 1 nút thì
        cái còn lại cũng cập nhật
      </h3>
      <h3 style={{ color: "red", textAlign: "center" }}>
        Lưu ý kiểm tra TH1_1 thì xóa TH1_2 đi cho kết quả đúng nhất và ngược lại
      </h3>
      <Row>
        <Col className="d-flex align-items-center flex-column">
          <TH2C1 />
        </Col>
        <Col className="d-flex align-items-center flex-column">
          <Count1TH2C2 />
          <Count2TH2C2 />
        </Col>
      </Row>
      <h3 style={{ color: "red", textAlign: "center" }} className="mb-5">
        Y chang TH1
      </h3>
      <Row>
        <Col className="d-flex align-items-center flex-column">
          <h3>TH3: Để 2 state ở 2 file redux khác nhau</h3>
          <IncreaseCount1 />
          <IncreaseCount2 />
          <h3>KQ: Chỉ render component đấy thôi</h3>
        </Col>
      </Row>
    </Container>
  );
}
