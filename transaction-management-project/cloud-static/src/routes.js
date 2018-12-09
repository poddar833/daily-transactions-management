import React from 'react';
import Person from './Person';

const routes = [
    { path: '/', exact: true, name: 'App', component: App },
    { path: '/person', name: 'Person', component: Person },
];

export default routes;