'use client'
import { useEffect, useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Paginator } from 'primereact/paginator';
import { Card } from 'primereact/card';
import { Toast } from 'primereact/toast';
import { SkeletonCharacter } from "./SkeletonCharacter";
import Link from "next/link";
import axios from 'axios';

export function AllCharacters() {
    const [first, setFirst] = useState(4);
    const [rows, setRows] = useState(20);
    const [count, setCount] = useState();
    const [position, setPosition] = useState(1);
    const [characters, setCharacters] = useState([]);
    const [search, setSearch]: any = useState();
    const [loader, setLoader]: any = useState(true);

    const toast: any = useRef(null);
    const onPageChange = (event: any) => {
        setFirst(event.first);
        setRows(event.rows);
        setPosition(event.page + 1)
    };

    async function getCountData(){
        try {
            const {data} = await axios.get('https://rickandmortyapi.com/api/character');
            const info = data.info;
            setCount(info.count);
        } catch (error) {
            
        }
    }

    async function getCharacters(){
        setLoader(true);
        try {
            const { data } = await axios.get('https://rickandmortyapi.com/api/character?page=' + position);
            const allCharacters = data.results;
            setCharacters(allCharacters);
        } catch (error) {
            console.log(error);
        }
        setLoader(false);
    }

    async function findCharacter(e: any){
        e.preventDefault();
        setLoader(true);
        try {
            const { data } = await axios.get('https://rickandmortyapi.com/api/character/?name=' + search.nombre);
            const allCharacters = data.results;
            setCharacters(allCharacters);
        } catch (error) {
            toast.current.show({severity:'info', summary: 'Busqueda', detail:'No se encontro el nombre: ' + search.nombre, life: 3000});
            setPosition(0);
        }
        setLoader(false);
    }

    const handleSearch = (event: any) => {
        setSearch({
            ...search,
            [event.target.name]: event.target.value
        });
    }

    useEffect(() => {
        getCountData();
    }, []);

    useEffect(() => {
        getCharacters();
    }, [position]);
    
  return (
    <>
    <Toast ref={toast} position="bottom-right" />
    <form onSubmit={findCharacter} className="flex justify-content-center w-full mt-3 fadeinup">
        <span className="p-input-icon-left w-8">
            <i className="pi pi-search" />
            <InputText name="nombre" onChange={handleSearch} className='w-full p-inputtext-lg' placeholder="Busca por nombre..." />
        </span>
    </form>

    {loader && <SkeletonCharacter />}
    {!loader && <div className='mt-3 grid'>
    {
        characters.map((item: any, index: number) => (
            <div className="flex justify-content-center col-12 lg:col-3" key={'character-' + index}>
                <Card className="w-10 flex justify-content-center fadein cursor-pointer border-1 border-green-500" key={'character-' + index}>
                <Link href={'/character/' + item.id} className="no-underline">
                    <img height={200} src={item.image} alt="loading..." className="border-circle border-3 border-cyan-600" />
                    <div className="text-center mt-4 text-xl text-800 text-cyan-300 font-semibold">{item.name}</div>
                </Link>
                </Card>
                
            </div>
        ))
    }
    </div>}
    <div className="">
        <Paginator first={first} rows={rows} totalRecords={count} onPageChange={onPageChange} />
    </div>
    </>
  )
}
