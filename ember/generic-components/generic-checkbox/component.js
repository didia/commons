import Ember from 'ember';
import {PropTypes as T} from 'ember-prop-types';

const {Component} = Ember;

export default Component.extend({
  propTypes: {
    label: T.object,
    name: T.string.isRequired,
    disabled: T.bool,
    isChecked: T.bool,
    error: T.string,
    update: T.func.isRequired
  },

  classNames: ['id-checkbox'],
  classNameBindings: ['disabled'],

  actions: {
    update(isChecked) {
      const name = this.get('name');

      this.get('update')({name, isChecked});
    }
  }
});
