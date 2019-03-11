import {Cat} from '../components/cats'

import React from 'react';


export const TorontoLitter = (prop) => {
 return(
    <div>
      {
        prop.cats.map((cat1) => {
          return(
            <Cat message={cat1.message} name={cat1.name} />
          )
        })
      }
    </div>
  );
}