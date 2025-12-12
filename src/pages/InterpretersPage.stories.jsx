import InterpretersPage from './InterpretersPage';
import { MemoryRouter } from 'react-router-dom';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Pages/InterpretersPage',
  component: InterpretersPage,
  parameters: {
    // Optional parameter to center the component in the Canvas or use fullscreen.
    // For a full page component, 'fullscreen' is usually better.
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      /* The component uses 'Link' from 'react-router-dom'.
         We must wrap the story in a Router to prevent the "useHref() may be used only in the context of a <Router>" error.
      */
      <MemoryRouter>
        {/* Added a container with padding to simulate the MainContent wrapper usually present in the app layout */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  // This component relies on internal data imports, so no args are needed for basic rendering.
  args: {},
};

export const Mobile = {
  parameters: {
    // We configure the viewport to verify the responsive behavior of the 'card_grid'.
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};