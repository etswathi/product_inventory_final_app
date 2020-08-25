import React from 'react';
import ReactDOM from 'react-dom'
import Common  from './Common'
import {  cleanup,render } from '@testing-library/react';
// import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

it('common renders without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Common></Common>, div)
})

it('check if h3 renders in correct way', ()=>{
    const {getByTestId} = render(<Common></Common>)
    expect(getByTestId('h3')).toHaveTextContent('Inventory.com')
})