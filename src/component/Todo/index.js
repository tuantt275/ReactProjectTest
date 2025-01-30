import { InputGroup, FormControl, Button, Col, Row } from "react-bootstrap";
const Todo = ({
  userInput,
  updateInput,
  addItem,
  deleteCheckedItems,
  list,
}) => {
  return (
    <Row>
      <Col md={{ span: 5, offset: 4 }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Nhập"
            size="lg"
            value={userInput}
            onChange={(e) => updateInput(e.target.value)}
            aria-label="add something"
            aria-describedby="basic-addon2"
            style={{ borderRadius: "12px" }}
          />
          <InputGroup>
            <Button variant="dark" className="mt-2" onClick={addItem}>
              Thêm
            </Button>
            <Button className="mt-2" onClick={deleteCheckedItems}>
              Xóa đã chọn
            </Button>
          </InputGroup>
        </InputGroup>
      </Col>
    </Row>
  );
};
export default Todo;
