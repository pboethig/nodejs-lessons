import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/collections/links';
import {WebApp} from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {

  Meteor.publish('links', function()
  {
      return Links.find({});
  });
});


function onRoute(req, res, next)
{

  console.log(req.params.token);

  const link = Links.findOne({token: req.params.token});

  if(link)
  {
    res.writeHead(307, {'Location': link.url});
    res.end();
  }else
  {
      next();
  }


}


const middleware = ConnectRoute(function(router)
{
  router.get('/:token',(req=>console.log(req)));
});

