import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Col from "react-bootstrap/Col";
import SinglePost from "../components/posts/SinglePost";
import AddPostModal from "../components/posts/AddPostModal";
import UpdatePostModal from "../components/posts/UpdatePostModal";
import addIcon from "../assets/plus-circle-fill.svg";
import { getPostsAction } from "../redux/Actions/PostActions";
import { SET_SHOW_TOAST, SHOW_ADD_POST_MODAL } from "../utils/constants";

const Dashboard = () => {
  const { post, posts, showToast } = useSelector((state) => state.PostReducer);
  const { user } = useSelector((state) => state.AuthReducer);

  const dispatch = useDispatch();

  // Start: Get all posts
  useEffect(() => dispatch(getPostsAction()), []);

  let body = null;

  if (posts.length === 0) {
    body = (
      <>
        <Card className="text-center mx-5 my-5">
          <Card.Header as="h1">Hi {user.username}</Card.Header>
          <Card.Body>
            <Card.Title>Welcome to LearnIt</Card.Title>
            <Card.Text>
              Click the button below to track your first skill to learn
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                dispatch({ type: SHOW_ADD_POST_MODAL, showAddPostModal: true });
              }}
            >
              LearnIt!
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    body = (
      <>
        <Row className="row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
          {posts.map((post) => (
            <Col key={post._id} className="my-2">
              <SinglePost post={post} />
            </Col>
          ))}
        </Row>

        {/* Open Add Post Modal */}
        <OverlayTrigger
          placement="left"
          overlay={<Tooltip>Add a new thing to learn</Tooltip>}
        >
          <Button
            className="btn-floating"
            onClick={() => {
              dispatch({ type: SHOW_ADD_POST_MODAL, showAddPostModal: true });
            }}
          >
            <img src={addIcon} alt="add-post" width="60" height="60" />
          </Button>
        </OverlayTrigger>
      </>
    );
  }

  return (
    <>
      {body}
      <AddPostModal />
      {post !== null && <UpdatePostModal />}
      {/* After post is added, show toast */}
      <Toast
        show={showToast.show}
        style={{ position: "fixed", top: "20%", right: "10px" }}
        className={`bg-${showToast.type} text-white`}
        onClose={() => {
          dispatch({
            type: SET_SHOW_TOAST,
            showToast: { show: false, message: "", type: null },
          });
        }}
        delay={3000}
        autohide
      >
        <Toast.Body>
          <strong>{showToast.message}</strong>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default Dashboard;
