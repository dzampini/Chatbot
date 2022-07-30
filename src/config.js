
import {
  createChatBotMessage,
  createCustomMessage,
} from 'react-chatbot-kit';
import CustomMessage from './CustomMessage';

const botName = 'Damiancito';

const config = {
  
  botName: botName,
  lang: 'no',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  initialMessages: [
    createChatBotMessage(
      `Hola!, soy ${botName}. y estoy aqui para ayudarte.`
    ),
    createChatBotMessage(
      "dime en que puedo ser util?.",
      {
        withAvatar: false,
        delay: 500,
      }
    ),
    createCustomMessage('Test', 'custom'),
  ],
  state: {
    gist: '',
    infoBox: 'hola perro',
  },
  customComponents: {},
  customMessages: {
    custom: (props) => <CustomMessage {...props} />,
  },
  widgets: [],
};
export default config;