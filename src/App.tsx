import React from 'react';
import { generate, presetPalettes } from '@ant-design/colors';
import Button, { ButtonType, ButtonSize } from './components/Button/Button';
function App() {
  console.table(presetPalettes);
  return (
    <div className="App">
      <Button>Hello</Button>
      <Button btnType={ButtonType.Primary}>Hello</Button>
      <Button size={ButtonSize.Large}>Hello</Button>
      <Button disabled>Hello</Button>
      <Button btnType={ButtonType.Link} href='https://www.baidu.com' disabled>
        Hello
      </Button>
    </div>
  );
}

export default App;
