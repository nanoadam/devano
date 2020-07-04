import Nano from '../src';
import Navbar from './components/navbar/navbar-component';

new Nano({
  element: '#root',
  state: {},
  components: [Navbar.template],
});
