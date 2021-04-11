import test from 'ava';
import {
  setupTwigBefore,
  renderTemplateMacro,
} from '../../fixtures/twig-helpers';

test.before(setupTwigBefore);

test('should render to an empty string', renderTemplateMacro, {
  template:
    'This function {{ attach_library("ignored/library") }} does not break rendering!',
  expected: 'This function  does not break rendering!',
});
