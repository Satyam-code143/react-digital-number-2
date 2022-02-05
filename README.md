# react-digital-number

A react component to show digital number

### Demo: [codepen](https://codepen.io/fredxingxing/pen/BajQLxx) | src example

## Use and Setup

`npm install --save react-digital-number-2`

#### Demo.js

```js
import DigitalNumber from "react-digital-number-2";

const Demo = (props) => (
  <div>
    <DigitalNumber
      nums={nums} // nums is the number your wanna show (defualt '123'
      color="#FF0000" // the active line color of number
      unActiveColor="#22221e" // the unactive line color of number
      backgroundColor="#000" // digital number container's background color
      transformDuration={600}
    />
  </div>
);
```

## Documentation

| Name              | Description                                 | Type    | Default   |
| :---------------- | :------------------------------------------ | :------ | :-------- |
| nums              | show value                                  | String  | '123'     |
| color             | the active line color of number             | String  | '#FF0000' |
| unActiveColor     | the unActive line color of number           | String  | '#22221e' |
| backgroundColor   | digital number container's background color | String  | '#000'    |
| width             | digital container's width                   | String  | '100%'    |
| height            | digital container's height                  | String  | '100%'    |
| transition        | digital container's transition              | String  | 'none'    |
| transform         | digital number transform 0 to value         | Boolean | false     |
| transformDuration | the duration of transform                   | Number  | 600       |

![Image text](https://raw.githubusercontent.com/Fredxingxing/react-digital-number/master/images/demo.png)
