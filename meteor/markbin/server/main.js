import { Meteor } from 'meteor/meteor';
import {Bins} from '../imports/collections/bins';

Meteor.startup(() => 
{

  Meteor.methods({
    'get.user.by.id':function(userId)
    {
      const user = Meteor.users.findOne(userId);

      return user;
    }
  });

  Meteor.publish('allAnonymus', function()
  {
    return Bins.find({ownerId:null});
  });

  Meteor.publish('bins', function()
  {
    return Bins.find({ownerId:this.userId});
  });

  /**
   * Get all sheed bins
   */ 
  Meteor.publish('sharedBins',function()
  {
      const user = Meteor.users.findOne(this.userId);

      if(!user) return;  

      const email = user.emails[0].address;
    
      let data = Bins.find(
        {sharedWith:{$elemMatch:{$eq:'pboethig5@gmail.co5'}}}
      );

      return data;
  });
});
