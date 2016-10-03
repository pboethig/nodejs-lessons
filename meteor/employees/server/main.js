import _ from 'lodash';
import {Meteor} from 'meteor/meteor';
import {Employees} from '../imports/collections/employees';
import {image, helpers} from 'faker';

Meteor.startup(()=>
{
    const numberRecords = Employees.find({}).count();

    if(!numberRecords)
    {
        _.times(5000, () =>
        {
            const {name, email, phone} = helpers.createCard();

            Employees.insert(
            {
                name,
                email,
                phone, 
                avatar:image.avatar()
            }
            );
        });
    }

    //publis a cursor
    Meteor.publish('employees', function(PER_PAGE)
    {
        return Employees.find({}, {limit:PER_PAGE});
    });
});