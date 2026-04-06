import './styles/theme.css';
import './styles/globais.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá mundo
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
        nostrum necessitatibus ducimus perferendis consectetur numquam
        accusantium cumque cupiditate tempore beatae facere obcaecati fugiat
        maiores est, minus vitae, magni ipsa voluptas?
      </p>
    </>
  );
}
