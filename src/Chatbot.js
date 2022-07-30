import Chatbot from 'react-chatbot-kit'
import config from './config';
import MessageParser from './messageparser.js';
import ActionProvider from './action.js';
import 'react-chatbot-kit/build/main.css';
const MyComponent = () => {
  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default MyComponent;
    