import { render, screen } from '@testing-library/react';
import { BlogContext } from '../context/BlogContext';
import Main from '../layout/Main';

import '@testing-library/jest-dom';

describe('Main component', () => {

    beforeEach(() => jest.clearAllMocks())

    const getPosts = jest.fn()
    const posts = [];

    render(
        <BlogContext.Provider value={{posts, getPosts}}><Main/></BlogContext.Provider>
    );
    
    test('if there are not posts, NoResults page should be displayed', () => {
        expect(screen.getByText('There are no posts')).toBeVisible();
    });

});


