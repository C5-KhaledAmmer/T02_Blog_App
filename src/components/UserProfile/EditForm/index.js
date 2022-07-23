import { useRef, useState } from "react";
import { Form, Modal, Button, Row, Col, Accordion } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../../models/User";
import { setUsers, updateUser } from "../../../redux/reducers/user";
export const EditForm = ({ show, onHide, user }) => {
  const form = useRef();
  const dispatch = useDispatch();
 const {userReducer} = useSelector((state)=>{
  return state;
 }) 

  const [validated, setValidated] = useState(false);
  const newUser = new User({ ...user, address: { geo: {} }, company: {} });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.currentTarget.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }else{
      [...form.current].map((input) => {
        if (input.value) {
          updateUserInformation(input);
        }
      });
      onHide();
      setValidated(true);
    }

   
   
  };

  const updateUserInformation = async (input) => {
    switch (input.placeholder) {
      case "Email":
        newUser.email = input.value.toString();
        break;
      case "User Name":
        newUser.username = input.value;
        break;
      case "Name":
        newUser.name = input.value;
        break;
      case "Phone":
        newUser.phone = input.value;
        break;
      case "Street":
        newUser.address.street = input.value;
        break;
      case "City":
        newUser.address.city = input.value;
        break;
      case "Latitude":
        newUser.address.geo.lat = input.value;
        break;
      case "Longitude":
        newUser.address.geo.lng = input.value;
        break;
      case "Suite":
        newUser.address.suite = input.value;
        break;
      case "Zip Code":
        newUser.address.zipcode = input.value;
        break;
      case "Web Site":
        newUser.website = input.value;
        break;
      case "Company Name":
        newUser.company.name = input.value;
        break;
      case "Bs":
        newUser.company.bs = input.value;
        break;
      case "Catch Phrase":
        newUser.company.catchPhrase = input.value;
        break;

      default:
        break;
    }
    await localStorage.setItem("user", JSON.stringify(newUser));
    const users = [...userReducer.users];
    users.forEach((user,index)=>{
     if( user.id && newUser.id){
      users[index] = newUser;
     }
    })
    dispatch(setUsers(users));
    dispatch(updateUser(newUser));
  };

  const createInput = ({ controlId, type, placeholder, defaultValue }) => {
    return (
      <Form.Group as={Col} className="mb-3" controlId={controlId}>
        <Form.Label style={{color:"black"}}>{placeholder}</Form.Label>
        <Form.Control
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </Form.Group>
    );
  };

  const createRow = ({ columns }) => {
    return (
      <Row className="mb-3">
        {columns.map((ele) => {
          return createInput({ ...ele });
        })}
      </Row>
    );
  };

  const accordionItem = ({ rows, title, key }) => {
    return (
      <Accordion.Item eventKey={key}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
          {rows.map((row) => {
            return createRow({
              columns: row.columns,
            });
          })}
        </Accordion.Body>
      </Accordion.Item>
    );
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="model-dialog"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {user.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          noValidate
          validated={validated}
          ref={form}
          onSubmit={handleSubmit}
        >
          <Accordion defaultActiveKey="0">
            {accordionItem({
              key: 0,
              title: "User Name & Email",
              rows: [
                {
                  columns: [
                    {
                      controlId: "formBasicEmail",
                      placeholder: "Email",
                      defaultValue: user.email,
                      type: "email",
                    },
                    {
                      controlId: "formBasicName",
                      placeholder: "Name",
                      defaultValue: user.name,
                      type: "name",
                    },
                  ],
                },
                {
                  columns: [
                    {
                      controlId: "formBasicUserName",
                      placeholder: "User Name",
                      defaultValue: user.username,
                      type: "text",
                    },
                    {
                      controlId: "formBasicPhone",
                      placeholder: "Phone",
                      defaultValue: user.phone,
                      type: "text",
                    },
                  ],
                },
              ],
            })}
            {accordionItem({
              key: 1,
              title: "Address",
              rows: [
                {
                  columns: [
                    {
                      controlId: "formBasicStreet",
                      placeholder: "Street",
                      defaultValue: user.address.street,
                      type: "text",
                    },
                    {
                      controlId: "formBasicCity",
                      placeholder: "City",
                      defaultValue: user.address.city,
                      type: "text",
                    },
                  ],
                },
                {
                  columns: [
                    {
                      controlId: "formBasicLat",
                      placeholder: "Latitude",
                      defaultValue: user.address.geo.lat,
                      type: "text",
                    },
                    {
                      controlId: "formBasicLang",
                      placeholder: "Longitude",
                      defaultValue: user.address.geo.lng,
                      type: "text",
                    },
                    {
                      controlId: "formBasicSuite",
                      placeholder: "Suite",
                      defaultValue: user.address.suite,
                      type: "text",
                    },
                  ],
                },
                {
                  columns: [
                    {
                      controlId: "formBasicZipcode",
                      placeholder: "Zip Code",
                      defaultValue: user.address.zipcode,
                      type: "text",
                    },
                    {
                      controlId: "formBasicWebsite",
                      placeholder: "Web Site",
                      defaultValue: user.website,
                      type: "text",
                    },
                  ],
                },
              ],
            })}
            {accordionItem({
              key: 2,
              title: "Company",
              rows: [
                {
                  columns: [
                    {
                      controlId: "formBasicCompName",
                      placeholder: "Company Name",
                      defaultValue: user.company.name,
                      type: "text",
                    },
                  ],
                },
                {
                  columns: [
                    {
                      controlId: "formBasicBs",
                      placeholder: "Bs",
                      defaultValue: user.company.bs,
                      type: "text",
                    },
                  ],
                },
                {
                  columns: [
                    {
                      controlId: "formBasicCatchPhrase",
                      placeholder: "Catch Phrase",
                      defaultValue: user.company.catchPhrase,
                      type: "text",
                    },
                  ],
                },
              ],
            })}
          </Accordion>
          <br />

          <Row>
            <Col>
              <Row style={{ margin: "2px" }}>
                <Button variant="light" type="submit">
                  Save
                </Button>
              </Row>
            </Col>
            <Col>
              <Row style={{ margin: "2px" }}>
                <Button
                  variant="light"
                  onClick={() => {
                    onHide();
                  }}
                >
                  Close
                </Button>
              </Row>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
  
    </Modal>
  );
};
