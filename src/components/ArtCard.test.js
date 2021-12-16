import ArtCard from "./ArtCard";
import { render, screen } from '@testing-library/react';
import {Routes} from 'react-router-dom';


describe ('ArtCard Component',()=>{
test('Should display artcard name',()=>{
    render(
    <Routes>
    <ArtCard name={'Pesho'} />
    </Routes>);
    expect(document.querySelector('h4').textContent).toBe('Pesho');
});





});
