import React from 'react';

import { MainLayout } from './components/Layouts/MainLayout';
import TitleAndSwitchMode from './components/title/TitleAndSwitchMode';
import { Card } from './components/card/Card';
import { CreateTask } from './components/task/CreateTask';

import { DarkModeProvider } from './context/darkMode';
import { TaskProvider } from './context/taskContext';

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <TaskProvider>
        <MainLayout>
          <TitleAndSwitchMode />
          <CreateTask />
          <Card />
        </MainLayout>
      </TaskProvider>
    </DarkModeProvider>
  );
};

export default App;
