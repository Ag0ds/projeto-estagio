import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const SECRET_KEY = "teste";

const users = [
  {
    username: "teste@teste.com",
    password: bcrypt.hashSync("123456", 10), // Senha criptografada
  },
];

export async function POST(req) {
  const { username, password, action } = await req.json();

  if (action === "login") {
    const user = users.find((u) => u.username === username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return new Response(
        JSON.stringify({ message: "Credenciais inválidas." }),
        { status: 401 }
      );
    }

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    return new Response(JSON.stringify({ token }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ message: "Ação inválida." }), {
    status: 400,
  });
}
