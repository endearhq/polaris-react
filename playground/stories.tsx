import {Playground} from './Playground';
import {KitchenSink} from './KitchenSink';
import {DetailsPage} from './DetailsPage';

// eslint-disable-next-line import/no-default-export, import/no-anonymous-default-export
export default {
  title: 'Playground|Playground',
  parameters: {
    chromatic: {disable: true},
  },
};

(KitchenSink as any).story = {name: 'Kitchen sink'};
(DetailsPage as any).story = {name: 'Details page'};

export {Playground, KitchenSink, DetailsPage};
