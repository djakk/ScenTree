'use strict';

var scentree_objects = require("./scentree_objects.js");


const jsonfile = require('jsonfile');
const fs = require('fs');
const path = require('path');

const { JSDOM } = require("jsdom");

// args
const the_third_arg = process.argv[3 -1]; // the path of the file usually called 'TreeFeaturesNEW_EN_and_FR.json'
const the_fourth_arg = process.argv[4 -1]; // optional : the path of the file usually called 'index.html'
const the_fifth_arg = process.argv[5 -1];
const the_sixth_arg = process.argv[6 -1];
if (! fs.existsSync(the_third_arg)) {
    console.log("The file '" + the_third_arg + "' does not exist -> STOP! Please provide a 'TreeFeaturesNEW_EN_and_FR.json' file in argument (1st place)" );
    return;
} else {
	console.log("The file '" + the_third_arg + "' exists …" );
};
if (! fs.existsSync(the_fourth_arg)) {
    console.log("The file '" + the_fourth_arg + "' does not exist -> STOP! Please provide an 'index.html' file in argument (2nd place)" );
    return;
} else {
        console.log("The file '" + the_fourth_arg + "' exists …" );
};


const the_json_file = the_third_arg;
const the_html_file_as_a_path = the_fourth_arg;
const the_min = the_fifth_arg;
const the_max = the_sixth_arg;

// folder names as a dict
let the_folder_names_as_dict = {
	"fr" : {
		"ingredients" : "fr-ingredients", 
		"descripteurs_principaux" : "fr-descripteurs_principaux", 
		"descripteurs_secondaires" : "fr-descripteurs_secondaires"
	}, 
	"en" : {
                "ingredients" : "en-ingredients",
                "descripteurs_principaux" : "en-main_descriptors",
                "descripteurs_secondaires" : "en-secondary_descriptors"
	}
}

// folders path
let the_folder_path = path.dirname(the_html_file_as_a_path);
let ingredients_folder_path_FR = the_folder_path + "/../fr-ingredients/";
let ingredients_folder_path_EN = the_folder_path + "/../en-ingredients/";
let descripteurs_principaux_folder_path_FR = the_folder_path + "/../fr-descripteurs_principaux/";
let descripteurs_secondaires_folder_path_FR = the_folder_path + "/../fr-descripteurs_secondaires/";
let descripteurs_principaux_folder_path_EN = the_folder_path + "/../en-main_descriptors/";
let descripteurs_secondaires_folder_path_EN = the_folder_path + "/../en-secondary_descriptors/";
if (! fs.existsSync(ingredients_folder_path_FR)) {
	fs.mkdirSync(ingredients_folder_path_FR, { recursive: true });
};
if (! fs.existsSync(ingredients_folder_path_EN)) {
        fs.mkdirSync(ingredients_folder_path_EN, { recursive: true });
};
if (! fs.existsSync(descripteurs_principaux_folder_path_FR)) {
        fs.mkdirSync(descripteurs_principaux_folder_path_FR, { recursive: true });
};
if (! fs.existsSync(descripteurs_secondaires_folder_path_FR)) {
        fs.mkdirSync(descripteurs_secondaires_folder_path_FR, { recursive: true });
};
if (! fs.existsSync(descripteurs_principaux_folder_path_EN)) {
        fs.mkdirSync(descripteurs_principaux_folder_path_EN, { recursive: true });
};
if (! fs.existsSync(descripteurs_secondaires_folder_path_EN)) {
        fs.mkdirSync(descripteurs_secondaires_folder_path_EN, { recursive: true });
};




console.log("the JSON file …");
var the_objects = jsonfile.readFileSync(the_json_file);
console.log(the_objects.length);

async function get_the_dom_from_the_net(the_html_file) {
  var dom = await JSDOM.fromFile(the_html_file, { runScripts: "dangerously", resources: "usable", beforeParse(window) {window.document.jsdom_reader = 1; } });
  //var dom = await JSDOM.fromFile(the_html_file, { resources: "usable", beforeParse(window) {window.document.jsdom_reader = 1; }});
  // wait for the url to be loaded
  await new Promise(resolve => {
    dom.window.document.addEventListener("load", resolve);
  });
  return dom;
};

async function generate_one_file(the_dom_to_be_copied, the_current_object) {
    console.log("inside sub-function with " + the_current_object['sci_name']);
    
    the_dom_to_be_copied.window.markofun(the_current_object, false);
    console.log("the_dom_to_be_copied.window.markofun : done");

    var dom = new JSDOM(the_dom_to_be_copied.serialize());
    //the_dom_to_be_copied.window.close();

    // remove parts of the DOM
    if (! scentree_objects.is_natural(the_current_object)) {
        var html_element_to_be_removed = dom.window.document.getElementById("naturelleModal");
        html_element_to_be_removed.parentNode.removeChild(html_element_to_be_removed);
    };
    if (! scentree_objects.is_synthetic(the_current_object)) {
        var html_element_to_be_removed = dom.window.document.getElementById("SynthetiqueModal");
        html_element_to_be_removed.parentNode.removeChild(html_element_to_be_removed);
    };
    if (!scentree_objects.is_a_descripteur(the_current_object)) {
	var html_element_to_be_removed = dom.window.document.getElementById("DescripteurModal");
	html_element_to_be_removed.parentNode.removeChild(html_element_to_be_removed);
    };
    
    // add <meta name="robots" content="noindex"> in the DOM for descriptors only
    if (scentree_objects.is_a_descripteur(the_current_object)) {
            var the_meta_element = dom.window.document.createElement("meta");
	    the_meta_element.name = "robots";
	    the_meta_element.content = "noindex";
	    dom.window.document.getElementsByTagName('head')[0].appendChild(the_meta_element);
    };

    var the_pros_of_the_current_object = the_current_object['PRO'];
    if (the_pros_of_the_current_object) {
	    var the_length_of_the_carousel = (the_pros_of_the_current_object.filter((a) => (a["Type"] == "FS"))).length;
    } else {
	    var the_length_of_the_carousel = 0;
    };
    
    var the_script_to_open_the_modal_onload = dom.window.document.getElementById("script_for_generated_pages");
    if (! the_script_to_open_the_modal_onload) the_script_to_open_the_modal_onload = dom.window.document.createElement("script");
    the_script_to_open_the_modal_onload.id = "script_for_generated_pages";
    the_script_to_open_the_modal_onload.type = "text/javascript";
    //the_script_to_open_the_modal_onload.text = "$(window).on('load',function(){ $('#Vidéo').hide(); $('.modal-backdrop').remove(); markofun(" + JSON.stringify(the_current_object) + ", true); });";
    //the_script_to_open_the_modal_onload.text = "markofun(" + JSON.stringify(the_current_object) + ", true);";
    if (scentree_objects.is_synthetic(the_current_object)) {
    	the_script_to_open_the_modal_onload.text = "$(window).on('load',function(){ $('#SynthetiqueModal').modal('show'); show_the_carousel(" + the_length_of_the_carousel + "); });";
    } else if (scentree_objects.is_natural(the_current_object)) { 
	the_script_to_open_the_modal_onload.text = "$(window).on('load',function(){ $('#naturelleModal').modal('show'); show_the_carousel(" + the_length_of_the_carousel + "); });";
    } else {
	the_script_to_open_the_modal_onload.text = "$(window).on('load',function(){ $('#DescripteurModal').modal('show'); });";
    };
    dom.window.document.body.appendChild(the_script_to_open_the_modal_onload);
    
    // language = FR
    var dom_for_FR = new JSDOM(dom.serialize());
    generate_one_file_for_one_language(ingredients_folder_path_FR, descripteurs_principaux_folder_path_FR, descripteurs_secondaires_folder_path_FR, the_current_object, dom_for_FR, "fr");
    // language = EN
    generate_one_file_for_one_language(ingredients_folder_path_EN, descripteurs_principaux_folder_path_EN, descripteurs_secondaires_folder_path_EN, the_current_object, dom, "en"); 
};

function generate_one_file_for_one_language(ingredients_folder_path, descripteurs_principaux_folder_path, descripteurs_secondaires_folder_path, the_current_object, dom, the_language_in_two_chars) {
    if (the_language_in_two_chars == 'fr') {
	    var the_language_to_remove_in_two_chars = 'en';
    } else {
	    var the_language_to_remove_in_two_chars = 'fr';
    };
    for (let a_foreign_language of dom.window.document.querySelectorAll(":lang(" + the_language_to_remove_in_two_chars + ")")) {
        a_foreign_language.parentNode.removeChild(a_foreign_language);
    };
    
    // add a language to the HTML element
    dom.window.document.getElementsByTagName('html')[0].setAttribute('lang', the_language_in_two_chars);
   

    // canonical / alternate <link>
    if (scentree_objects.is_an_ingredient(the_current_object)) {
	    var the_object_is = "ingredients";
    } else if (scentree_objects.is_a_famille_principale(the_current_object)) {
	    var the_object_is = "descripteurs_principaux";
    } else {
	    var the_object_is = "descripteurs_secondaires";
    };
    //var the_canonical_link = dom.window.document.createElement("link");
    //the_canonical_link.href = ;
    var the_alternate_link = dom.window.document.createElement("link");
    the_alternate_link.rel = "alternate";
    the_alternate_link.href = "../" + the_folder_names_as_dict[the_language_to_remove_in_two_chars][the_object_is] + "/" + scentree_objects.compute_the_html_name(the_current_object) + ".html";
    the_alternate_link.hreflang = the_language_to_remove_in_two_chars;
    dom.window.document.getElementsByTagName('head')[0].appendChild(the_alternate_link);


    let the_name_of_the_file = scentree_objects.compute_the_html_name(the_current_object);
    if (scentree_objects.is_an_ingredient(the_current_object)) {
	the_name_of_the_file = ingredients_folder_path + the_name_of_the_file;
    } else if (scentree_objects.is_a_famille_principale(the_current_object)) {
	the_name_of_the_file = descripteurs_principaux_folder_path + the_name_of_the_file;
    } else {
	the_name_of_the_file = descripteurs_secondaires_folder_path + the_name_of_the_file;
    };
    fs.writeFile(the_name_of_the_file + ".html", dom.serialize(), function(err) {
	if(err) {
            return console.log(err);
	}
	console.log("The file " + the_name_of_the_file + ".html was saved !");
    });
    dom.window.close(); // normally, this is unnecessary
};

async function generate_files(the_scentree_objects, the_html_file, the_min, the_max) {
  console.log("loading the dom …");
  var dom = await get_the_dom_from_the_net(the_html_file);
  console.log("dom loaded ! :-)");
  if (!the_min) the_min = 0;
  if (!the_max) the_max = the_scentree_objects.length;
  console.log("min = ", the_min, " to max = ", the_max);
  for (var i = the_min; i < the_max; i++) {
    console.log(i + "/" + the_scentree_objects.length);
    //var dom = await get_the_dom_from_the_net(the_html_file);
    var the_current_object_2 = the_scentree_objects[i];
    //console.log(the_current_object_2);
    await generate_one_file(dom, the_current_object_2);
    //dom.window.close();
  };
  dom.window.close(); // otherwise we need to force quitting the js script with control-C
};

generate_files(the_objects, the_html_file_as_a_path, parseInt(the_min, 10), parseInt(the_max, 10));

