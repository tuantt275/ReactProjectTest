import { ListGroup, Button, Form } from "react-bootstrap";
const TodoList = ({ list, deleteItem, editItem, checked }) => {
  return (
    <ListGroup>
      {list.map((item, index) => (
        <ListGroup.Item
          key={item.id}
          variant="dark"
          action
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Form.Check
            type="checkbox"
            checked={item.checked || false}
            onChange={() => checked(item.id)}
            style={{ marginRight: "10px" }}
          />
          {item.value}
          <span>
            <Button
              style={{ marginRight: "10px" }}
              variant="light"
              onClick={() => deleteItem(item.id)}
            >
              Xóa
            </Button>
            <Button variant="light" onClick={() => editItem(index)}>
              Sửa
            </Button>
          </span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};
export default TodoList;
