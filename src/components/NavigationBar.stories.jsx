import NavigationBar from './NavigationBar';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Public/Navigation/NavigationBar',
  component: NavigationBar,
  parameters: {
    // Optional parameter to center the component in the Canvas. 
    // We use 'fullscreen' here to visualize the navbar correctly across the top.
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Since the component uses React Router (Link, Outlet), we need to wrap it in a Router context.
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        {/* We define the routes so the component's <Outlet /> has something to render */}
        <Routes>
          <Route path="/" element={<Story />}>
            {/* Dummy content to visualize where the Outlet renders */}
            <Route index element={<div style={{ padding: '2rem' }}>🏠 Home Page Content</div>} />
            <Route path="peliculas" element={<div style={{ padding: '2rem' }}>🎬 Movies Content</div>} />
            <Route path="interpretes" element={<div style={{ padding: '2rem' }}>🎭 Actors Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    ),
  ],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  // This component does not accept props (args), so we leave this empty.
  args: {},
};

export const Mobile = {
  parameters: {
    // We configure the viewport to simulate a mobile device and test the hamburger menu.
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const ActivePage = {
  // We override the decorator to simulate being on the "/peliculas" page to see the active link style.
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/peliculas']}>
        <Routes>
          <Route path="/" element={<Story />}>
            <Route path="peliculas" element={<div style={{ padding: '2rem' }}>🎬 Movies Section (Active Link)</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    ),
  ],
};