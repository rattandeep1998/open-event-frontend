import Ember from 'ember';
import moment from 'moment';

const { Route } = Ember;

export default Route.extend({
  titleToken() {
    return this.l10n.t('Create');
  },
  model() {
    return {
      code          : '',
      isActive      : true,
      ticketsNumber : 10,
      minQuantity   : 1,
      maxQuantity   : 10,
      validFromDate : moment(),
      validFromTime : '12:00',
      validTillDate : moment().add(20, 'days'),
      validTillTime : '16:00',
      tickets       : [
        {
          name : 'Early bird',
          id   : 1
        },
        {
          name : 'Late entry',
          id   : 2
        }
      ]
    };
  }
});
