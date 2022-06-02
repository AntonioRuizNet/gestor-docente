import React from 'react';
import { Input } from '../input'

export const Buscador = ({setSearch}) => {
    return (
      <div className="row" style={{height: '60px'}}> 
        <div className="col-1 offset-8 text-right" style={{paddingTop: '10px'}}>Buscador</div>
        <div className="col-3 text-right"><Input setValue={setSearch} type={'text'} idInput={'search'}/></div>
        <div className="col-12" style={{fontSize: '11px', textAlign: 'right', marginTop: '-22px'}}>* Busca coincidencias en todas las columnas</div>
      </div>
    )
  }