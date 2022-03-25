import * as api from '../api';
import { useState, useEffect } from 'react';
import {Button, Table} from 'react-bootstrap';

function DataPeserta() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.readTodos();
      console.log(result.data.data.attributes);
      setTodos(result.data.data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
       <Button bsPrefix="super-btn" variant="primary" style={{margin:20, padding:10}}>Tambah Data Peserta</Button>
      <div className="list-group"> 
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nama</th>
              <th scope="col">NIP</th>
              <th scope="col">Jabatan</th>
              <th scope="col">Grade</th>
              <th scope="col">Jenjang</th>
              <th scope='col'>Edit</th>
            </tr>
          </thead>

          {todos.map((todo) => (
            <tbody>
              <tr>
                <th>{todo.id}</th>
                <td>{todo.attributes.nama}</td>
                <td>{todo.attributes.nip}</td>
                <td>{todo.attributes.jabatan.data.attributes.nama_jabatan}</td>
                <td>{todo.attributes.grade.data.attributes.nama_grade}</td>
                <td>{todo.attributes.jenjang.data.attributes.nama_jenjang}</td>
                <td><Button variant="secondary">Edit</Button></td>
              </tr>
            </tbody>
            // <div className="card text-center">
            //   <div className="card-body">
            //     <h5 className="card-title">{todo.attributes.Nama}</h5>
            //     <p className="card-text">NIM : {todo.attributes.NIM}</p>
            //     <a href="#" className="btn btn-primary">
            //       Go somewhere
            //     </a>
            //   </div>
            // </div>
          ))}
        </Table>
      </div>
    </div>
  );
}
export default DataPeserta;
