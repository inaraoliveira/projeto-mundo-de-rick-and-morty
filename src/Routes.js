import React from "react";
import { Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Personagens } from './pages/Personagens';
import { SobreASerie } from './pages/SobreASerie';
import { DetalhesDePersonagens } from './pages/DetalhesDePersonagens';

export const Rotas = ()=> {

    return(
        <main>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Personagens' component={Personagens} />
                <Route path='/SobreASerie' component={SobreASerie} />
                <Route path='/DetalhesDePersonagens' component={DetalhesDePersonagens} />
            </Switch>
        </main>
    );
}