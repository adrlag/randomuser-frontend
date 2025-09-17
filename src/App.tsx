import { useEffect, useState } from "react";

interface User {
  login: {
    uuid: string;
  };
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
  const [originalUsers, setOriginalUsers] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        setOriginalUsers(data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener usuarios:", err);
      });
  }, []);

  const handleDelete = (id: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.login.uuid !== id));
  };

  const handleRestore = () => {
    setUsers(originalUsers);
    setFilter("");
  };

  const filteredUsers = users.filter((user) =>
    user.location.country.toLowerCase().includes(filter.toLowerCase())
  );



  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <div>
        <input
          type="text"
          placeholder="Filtrar por país..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button onClick={handleRestore}>
          Restaurar lista de usuarios inicial
        </button>
      </div>
      <br />
      <table border={1} cellPadding={5} cellSpacing={0}>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>País</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index}>
              <td>
                <img src={user.picture.thumbnail} alt="foto" />
              </td>
              <td>{`${user.name.first} ${user.name.last}`}</td>
              <td>{user.email}</td>
              <td>{user.location.country}</td>
              <td>{user.phone}</td>
              <td>
                <button onClick={() => handleDelete(user.login.uuid)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
          {filteredUsers.length === 0 && (
            <tr>
              <td colSpan={6}>
                No se han encontrado usuarios para ese país.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
