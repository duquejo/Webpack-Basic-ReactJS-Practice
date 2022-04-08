import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './styles/global.scss';

const container = document.getElementById('root');

// Create a root.
const root = createRoot(container);

// Initial render
root.render(<App />);