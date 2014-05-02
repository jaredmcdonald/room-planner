define(['backbone'], function(Backbone){
  var RoomModel = Backbone.Model.extend({

      defaults : {
        furniture : []
      },

      initialize : function(){
        // e.g.
        this.on("change:furniture", function(model){
          console.log('furniture changed to:', model.get('furniture'));
        });
      }

  });

  return RoomModel;

});
