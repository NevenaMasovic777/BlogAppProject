
import { fireEvent, render, screen } from '@testing-library/react';
import { BlogContext } from '../context/BlogContext';
import Header from '../layout/Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Header component', () => {

    beforeEach(() => jest.clearAllMocks())

    const getPosts = jest.fn()
    const posts = [];

    render(
    <BlogContext.Provider value={{posts, getPosts}}>
        <BrowserRouter>
            <Header/>
        </BrowserRouter>
    </BlogContext.Provider>);
    
    
    test('link texts should be visible', () => {    
        expect(screen.getByText('Help')).toBeVisible();
        expect(screen.getByText('My profile')).toBeVisible();
        expect(screen.getByText('Home')).toBeVisible();
    })

});