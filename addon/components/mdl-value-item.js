import MenuItem from 'ember-material-lite/components/menu-item';

export default MenuItem.extend({
  click() {
    let value = this.get('value') || this;

    this.sendAction('action', value);
  },
});