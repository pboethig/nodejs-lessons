import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'bins.insert':function (){

        return Bins.insert({
            createdAt: new Date(),
            content:'',
            sharedWith:[],
            ownderId: this.userId
        });
    },
    'bins.remove':function(bin)
    {
       return Bins.remove(bin);     
    },
    /**
     * Update the bin
     */ 
    'bins.update':function(bin, newContent)
    {
       return Bins.update(bin._id,{$set:{content:newContent}});     
    },
    /**
     * Add the share email to the array of shares
     */
    'bins.share':function(bin, email)
    {
       return Bins.update(bin._id,{$push:{sharedWith: email}});     
    }
});

export const Bins = new Mongo.Collection('bins'); 
