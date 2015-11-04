
// Importing what we need
import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import Backbone from 'backbone';
import parse from './parse_auth';
import {TodoCollection} from './resources';
import {TodoView} from './views';


// Accessing Parse database (class)
$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': parse.APP_ID,
    'X-Parse-REST-API-Key': parse.API_KEY
  }
});

// Set new collection
let todos = new TodoCollection();

// Fetching data and what we will do when its fetched
todos.fetch().then(function() {

// Call the constructor info and render it on screen  
  $('.wrapper').html(new TodoView(todos).render().$el);

});


console.log('Hello, World');
