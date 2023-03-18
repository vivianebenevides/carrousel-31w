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


function carrousel_enqueue(){

$version_css = filemtime(plugin_dir_path(__FILE__ ) . "style.css");
$version_js = filemtime(plugin_dir_path(__FILE__) . "js/carrousel.js");

wp_enqueue_style(   'em_plugin_carrousel_css',
plugin_dir_url(__FILE__) . "style.css",
array(),
$version_css);

wp_enqueue_script(  'em_plugin_carrousel_js',
plugin_dir_url(__FILE__) ."js/carrousel.js",
array(),
$version_js,
true);
}

add_action('wp_enqueue_scripts', 'carrousel_enqueue');

function creation_carrousel() 
{
    //ajout des boutons de navigation (fleches gauche et droite)
return '<div class="carrousel"> 
        <button class="fleche__gauche" data-direction="reculer">
            <img src="https://s2.svgbox.net/materialui.svg?ic=arrow_back_ios" width="40" height="40" alt="fleche gauche">
        </button>
        <button class="fleche__droite" data-direction ="avancer">
            <img src="https://s2.svgbox.net/materialui.svg?ic=arrow_forward_ios" width="40" height="40" alt="fleche droite">
        </button>
        <button class="bouton__x">X</button>
        <figure class="carrousel__figure"></figure>
        <form class="carrousel__form"></form>
        </div>';
}

add_shortcode('carrousel', 'creation_carrousel');
