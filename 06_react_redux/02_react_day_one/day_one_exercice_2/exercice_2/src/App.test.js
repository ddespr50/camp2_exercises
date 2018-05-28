import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import ReactTestUtils from 'react-dom/test-utils';
import {shallow,configure,enzyme} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Wapiti from 'wapiti';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});




it('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});



it('renders Decathlon_id with enzyme', () => {
  const testRender = shallow (
    <App />
  );
  expect(testRender.text()).toEqual('Decathlon_id');
});


//wapiti method
it('renders Decathlon_id with wapiti', () => {
  return Wapiti.goto("http://localhost:3000/")
    .capture(() => document.querySelector("th").textContent)
    .run()
    .then(result => {
      expect(result).toEqual("Decathlon_id");
    });
});
