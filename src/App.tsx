import { useEffect, useState } from "react";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  location: {
    country: string;
  };
  picture: {
    thumbnail: string;
  };
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener usuarios:", err);
      });
  }, []);

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <table border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>País</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <img src={user.picture.thumbnail} alt="foto" />
              </td>
              <td>{`${user.name.first} ${user.name.last}`}</td>
              <td>{user.email}</td>
              <td>{user.location.country}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
