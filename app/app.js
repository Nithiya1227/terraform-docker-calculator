const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <h2>Simple Calculator</h2>
    <form method="POST" action="/calculate">
      <input name="num1" placeholder="Number 1" required />
      <input name="num2" placeholder="Number 2" required />
      <select name="operation">
        <option value="add">Add</option>
        <option value="sub">Subtract</option>
        <option value="mul">Multiply</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  `);
});

app.post("/calculate", (req, res) => {
  const { num1, num2, operation } = req.body;

  const a = parseFloat(num1);
  const b = parseFloat(num2);

  let result;

  if (operation === "add") result = a + b;
  if (operation === "sub") result = a - b;
  if (operation === "mul") result = a * b;

  res.send(`<h3>Result: ${result}</h3><a href="/">Go Back</a>`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});