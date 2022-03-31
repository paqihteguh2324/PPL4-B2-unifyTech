import * as api from '../api'
import { React, useState, useEffect } from 'react';
import Select from "react-select";
import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input
} from "@chakra-ui/react";



export default function DaftarFit() {
     const [jenjang, setJenjang] = useState([]);
          useEffect(() => {
            const fetchData = async () => {
              const result = await api.readTodos();
              const arr = result.data.data;
              const options = arr.map((item) => item.attributes.jabatan.data.attributes.nama_jabatan);
              console.log(options);
              setJenjang(options);
            };
            fetchData();
  }, []);

  return (
    <div className="App" style={{padding:50}}>
        <h1>Pendaftaran Fit & Proper</h1>
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
                <Select options={jenjang} />
                <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                  Jenis Fit & Proper
                </FormLabel>
                <Select options={jenjang} />
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