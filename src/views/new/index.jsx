import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
import "./styles.css";
import { useEffect, useState } from "react";


const NewBlogPost = () => {

  // constructor(props) {
  //   super(props);
  //   this.state = { text: "" };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(value) {
  //   this.setState({ text: value });
  // }

  const [post, setPost] = useState({
    title: "",
  })
  useEffect(() => {
    setPost({
      ...post,
    })
  })


  const postBlog = async () => {
    try {
      let response = await fetch("http://localhost:3002/blogs", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json"
        }
      })
      if (response.ok) {
        const data = await response.json()
        alert("You have succesfully created a new post")
      }
    } catch (error) {
      console.log(error)
      alert("The post was submitted succesfully!")

    }
  }


  return (
    <Container className="new-blog-container">
      <Form className="mt-5">
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control size="lg" placeholder="Title" />
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control size="lg" as="select">
            <option>Category1</option>
            <option>Category2</option>
            <option>Category3</option>
            <option>Category4</option>
            <option>Category5</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Blog Content</Form.Label>
          <ReactQuill
            // value=
            // onChange=
            className="new-blog-content"
          />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{ marginLeft: "1em" }}

          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
}


export default NewBlogPost