import React from 'react';
import ReactDOM from 'react-dom'
import LandingPage  from './LandingPage'
import {  cleanup,render } from '@testing-library/react';
// import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup)

it('landing renders without crashing', ()=>{
    const div = document.createElement('div')
    ReactDOM.render(<LandingPage></LandingPage>, div)
})

it('check if button renders in correct way', ()=>{
    const {getByTestId} = render(<LandingPage></LandingPage>)
    expect(getByTestId('button')).toHaveTextContent('Click here to Login or Sign up')
})
it('check if h1 renders in correct way', ()=>{
    const {getByTestId} = render(<LandingPage></LandingPage>)
    expect(getByTestId('h1')).toHaveTextContent('Welcome')
})
it('check if p renders in correct way', ()=>{
    const {getByTestId} = render(<LandingPage></LandingPage>)
    expect(getByTestId('p')).toHaveTextContent('Explore the world of products!!!!!!!Manage them....You are in the right place !!')
})
