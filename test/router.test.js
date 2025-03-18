const request = require("supertest");
const server = require("../server"); // Import your Express app

describe("API POST Tests", () => {
  
  // Test creating a user
  test("POST /user should create a new user", async () => {
    const newUser = { username: "JohnDoe", lastname: "Doe" };
    const response = await request(server)
      .post("/user")
      .send(newUser)
      .set("Accept", "application/json");

    expect(response.status).toBe(201); // Assuming 201 Created
    expect(response.body).toHaveProperty("user_id");
    expect(response.body.username).toBe(newUser.username);
  });

  // Test creating a message
  test("POST /message should create a new message", async () => {
    const newMessage = { user_id: 1, post: "Hello, this is a test message!" };
    const response = await request(server)
      .post("/message")
      .send(newMessage)
      .set("Accept", "application/json");

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("message_id");
    expect(response.body.post).toBe(newMessage.post);
  });

  // Test creating a comment
  test("POST /comment should create a new comment", async () => {
    const newComment = { message_id: 1, user_id: 2, comment: "Nice post!" };
    const response = await request(server)
      .post("/comment")
      .send(newComment)
      .set("Accept", "application/json");

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("comment_id");
    expect(response.body.comment).toBe(newComment.comment);
  });

});
