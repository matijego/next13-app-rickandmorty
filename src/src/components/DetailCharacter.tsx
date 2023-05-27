'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from 'primereact/card'
import { Panel } from 'primereact/panel';

const emptyDetails = {
    image: '',
    name: '',
    species: '',
    status: '',
    gender: ''
};

export function DetailCharacter({idCharacter}: any) {
    const [details, setDetails]: any = useState(emptyDetails);

    async function getCharacterDetails(){
        try {
            const { data } = await axios.get('https://rickandmortyapi.com/api/character/' + idCharacter);
            console.log(data)
            setDetails(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCharacterDetails();
    }, []);

  return (
    <div className='flex justify-content-center'>
        <div className='grid w-10 mt-6 border-1 border-green-500 border-round mb-6'>
            <Card className='col-12 flex justify-content-center fadein lg:col-6 border-right-1 border-green-500'>
                <img height={250} src={details.image} className="border-circle border-3 border-cyan-600" />
                <div className="text-center mt-4 text-xl text-800 ext-cyan-300 font-semibold">{details.name}</div>
            </Card>
            <Card className='col-12 fadein lg:col-6'>
                <Panel header='Informacion'>
                    <div className='grid'>
                        <div className='col-6 border-right-1 border-bottom-1 font-bold surface-border'>
                            Especie
                        </div>
                        <div className='col-6 text-right border-bottom-1 surface-border'>
                            {details.species}
                        </div>

                        <div className='col-6 border-right-1 border-bottom-1 font-bold surface-border'>
                            Status
                        </div>
                        <div className={'col-6 text-right border-bottom-1 surface-border'}>
                            {details.status}
                        </div>

                        <div className='col-6 border-right-1 border-bottom-1 font-bold surface-border'>
                            Genero
                        </div>
                        <div className='col-6 text-right border-bottom-1 surface-border'>
                            {details.gender}
                        </div>
                    </div>
                </Panel>
            </Card>
        </div>
    </div>
    )
}
