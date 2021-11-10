import React from "react";
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Personagens } from './pages/Personagens';
import { SobreASerie } from './pages/SobreASerie';
import Localizacao from "./pages/Localizacao";


export const Rotas = ()=> {

    return(
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/personagens' component={Personagens} />
                <Route path='/sobreaserie' component={SobreASerie} />
                <Route path='/localizacao' component={Localizacao} />
            </Switch>
        </main>
    );
}