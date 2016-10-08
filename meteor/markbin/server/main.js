import { Meteor } from 'meteor/meteor';
import {Bins} from '../imports/collections/bins';

Meteor.startup(() => 
{

  Meteor.methods({
    'get.current.user':function()
    {

      //console.log("#######################################");

      //console.log(Meteor.users.findOne(this.userId));
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
    
      console.log('email:' + email);

      let data = Bins.find({
        sharedWith:{$elemMatch:{$eq:'pboethig5@gmail.co5'}}
      });

      return data;
  });
});
