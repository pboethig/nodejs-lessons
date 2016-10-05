import { Meteor } from 'meteor/meteor';
import {Bins} from '../imports/collections/bins';

Meteor.startup(() => 
{
  Meteor.publish('bins', function()
  {
    Bins.find({ownerId:this.userId});
  });

});
