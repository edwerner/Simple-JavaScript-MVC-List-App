// instate mvc classes in application
var Application = {
  
  _model : undefined,
  _view : undefined,
  
  initialize : function( )
  {
    this.createModel( );
    this.createView( );
  },
  
  createModel : function( )
  {
    this._model = new ListModel( [ 'hello' , 'world' ] );
  },
  
  createView : function( )
  {
    this._view = new ListView( this._model, new ListController( this._model ),
    {
      'list' : $( '#list' ),
      'addButton' : $( '#plusBtn' ),
      'delButton' : $( '#minusBtn' )
    } );
    
    this._view.show( );
  }
  
};

// ( function( $ ){
//   Application.initialize( );
// })( jQuery );

$( document ).ready( function( )
{
  Application.initialize( );
} );