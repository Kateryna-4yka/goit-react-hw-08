// Створіть компонент Layout, який буде рендерити компонент AppBar і огортати усі маршрути, щоб бути доступним на кожному із них. 
import {Outlet} from 'react-router-dom';

import AppBar from '../AppBar/AppBar';


export default function Layout () {



    return (
        <>
          <AppBar />
          <main>
            <Outlet />
          </main>
        </>
      );
    };