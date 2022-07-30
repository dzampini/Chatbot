import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
     const handleHello = () => {
    const botMessage = createChatBotMessage('Hola, mi nombre es Damiancito, en que puedo ayudarte?.');

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleHello},
        });
      })}
    </div>
  );
};

export default ActionProvider;