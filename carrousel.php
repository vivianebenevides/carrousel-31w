<?php 
/**
 * Extension carrousel permet d'afficher dans une boîte modale 
 * les images d'une galerie
 * Package name : Carrousel 
 * Version : 1.0.0
 */
/*
Plugin Name: Carrousel
Author: Viviane Benevides
Plugin URI: https://github.com/vivianebenevides/carrousel-31w
Description: Permet d'afficher dans une boîte dans les images d'une galerie avec un systheme de navigation
*/

wp_enqueue_style(   'em_plugin_carrousel_css',
plugin_dir_url(__FILE__) . "style.css",
array(),
$version_css);

wp_enqueue_script(  'em_plugin_carrousel_js',
plugin_dir_url(__FILE__) ."js/carrousel.js",
array(),
$version_js,
true);
