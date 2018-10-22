import React from 'react';
import Button from '../Button.js'
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

const mockFn = jest.fn();

describe('Button Component', () => {
  it('renders correctly', () => {
    const tree = renderer
    .create(<Button>Caption</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
  it('should call mock function when clicked', () => {
    const tree = shallow(
      <Button onClick={mockFn}>Caption</Button>
    );
    tree.simulate('click');
    tree.update();
    //expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn).toHaveBeenCalled();
  });
});