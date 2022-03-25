import * as api from '../api'
import { React, useState, useEffect } from 'react';
import Select from "react-select";
import {
  Button,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


export default function Dashboard() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await api.readTodos();
      console.log(result.data.data);
      setTodos(result.data.data);
    };

    //   const fetchGambar = async () => {
    //     const resultGambar = await api.readGambar();
    //     console.log(resultGambar.data);
    //     setGambars(resultGambar.data);
    //   };
    fetchData();
    //   fetchGambar();
    //
  }, []);

  return (
    <div className="App">
        <FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                NIP
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                placeholder='NIP'
                mb='24px'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Name
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                placeholder='Your full name'
                mb='24px'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Jabatan
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                placeholder='Jabatan'
                mb='24px'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Grade
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                placeholder='Grade'
                mb='24px'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Date
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='date'
                placeholder='Date'
                mb='24px'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Proyeksi
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                placeholder='Jabatan Proyeksi'
                mb='24px'
                size='lg'
              />
              <FormControl mb='24px'>
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Jenjang Jabatan
                </FormLabel>
                <Select options={options} />
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Jenis Fit & Proper
                </FormLabel>
                <Select options={options} />
              </FormControl>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Pilih Urjab
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                placeholder='Uraian Jabatan'
                mb='24px'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Upload PPT *.ppt/.pptx
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='file'
                //placeholder='Jabatan Proyeksi'
                mb='20px'
                
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Upload CV *.doc/.docx
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='file'
                //placeholder='Jabatan Proyeksi'
                mb='20px'
                
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Penguji
              </FormLabel>
              <Input
                variant='auth'
                fontSize='sm'
                ms='4px'
                type='text'
                placeholder='Penguji'
                mb='20px'
                size='lg'
              />
              <Button
                fontSize='14px'
                variant='dark'
                fontWeight='bold'
                w='100%'
                h='45'
                mb='24px'>
                SUBMIT
              </Button>
            </FormControl>
    </div>
  );
}
// export default Home;

// function Home() {
//   return (
//     <div className='home'>
//       <h1>Home</h1>
//     </div>
//   );
// }
