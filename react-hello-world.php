<?php
/*
Plugin Name: React-Hello-World
Description: Plugin created from react-create-app.
Version:     0.0.1
Author:      MyAppIncome
Author URI:  http://myappincome.co.uk
*/

function wp_react_hello_world() {
  echo '<div id="root"></div>';
}
 
function include_react_files() {
    wp_enqueue_style( 'prefix-style', plugins_url('css\main.c17080f1.css', __FILE__) );
    wp_enqueue_script( 'plugin-scripts', plugins_url('js/main.ee7b2412.js', __FILE__),array(),  '0.0.1', true );
}
 
add_action( 'wp_enqueue_scripts', 'include_react_files' );