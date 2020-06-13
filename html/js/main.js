html, body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
#menu-block {
  z-index: 2;
  min-height: 500px;
}
#mapblock {
  z-index: 1;
}
.lienarticlereglementation {
  color: grey; 
  font-size: 0.9em;
}
.fab {
  font-size: 120%;
  color: #494747;
}
.notifi1 {
  color: red;
}
.notifi2 {
  color: red;
}
.notifi3 {
  color: red;
  position: absolute;
  z-index: 1;
  right: 7%;
  top: 5%;
}
.notifi4 {
  color: red;
}
.dropdown-toggle:after { 
  content: none 
}
.interpop{
  color: #6586B4;
}

.max-height-200px {
  max-height: 200px;
}
.max-height-100px {
  max-height: 100px;
}
.max-height-70px {
  max-height: 70px;
}
.max-height-30px {
  max-height: 30px;
}
.max-height-25px {
  max-height: 25px;
}
.max-height-20px {
  max-height: 20px;
}
.max-height-15px {
  max-height: 15px;
}
.max-height-10px {
  max-height: 10px;
}
.text-underline {
  text-decoration: underline;
}

.scrollbar-inside {
  overflow-y: auto;
  max-height: calc(90vh - 320px);
}

.scrollbar-inside2 {
  overflow-y: auto;
  max-height: calc(125vh - 320px);
}

.text-size-20px {
  font-size: 20px;
}
.text-size-18px {
  font-size: 18px;
}
.text-size-16px {
  font-size: 16px;
}
.text-size-14px {
  font-size: 14px;
}
.text-size-11px {
  font-size: 11px;
}
.text-size-1-1vw {
 font-size: 1.1vw; 
}
.text-size-1-3vw {
 font-size: 1.3vw; 
}
.text-my-grey {
    color : grey;
}
.commercialize{
  font-size: 0.9em;
  display: none;
}

@media screen and (max-width: 767px) {
.font-italic-before-md {
  font-style: italic;
}
.text-center-before-md {
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
}
}

@media screen and (min-width: 768px) {
.text-align-left-strictly-after-md {
  text-align: left;
}
.text-align-right-strictly-after-md {
  text-align: right;
}
}
/*#########################
#######MODAL VIDEO#########
#########################*/
.titlemodalvideo {
  font-size: 1.5em;
  font-weight: bold;
}
.titlemodalvideo2{
  font-size: 1em;
  font-weight: normal;
  text-align: justify;
}

/*#########################
#######PAGE ENTIERE########
#########################*/
@media screen and (max-width: 767px) {
.PageEntiere {
    background-color: white;
    padding-top: 60px;
}
}
@media screen and (min-width: 768px) {
.PageEntiere {
    background-color: white;
}
}

/*#########################
###########MAP#############
#########################*/
#map {
    min-height: 500px;
    min-width: 200px;
}
.fill2{
    /*z-index: 5;*/
    background-color: white;
}

/*#########################
## MES STYLES RESPONSIVES #
#########################*/
@media screen and (max-width: 767px) {
.h-md-85 {
    height: 90%;
    position: absolute;
    bottom: 0px;
}
.h-60px-md-100pc {
   height: 45px;
}
.h-80pc-md-100pc {
    height: calc(100vh - 45px);
}
.h-100-with-padding-60px-before-md {
   height: 100%;
   padding-top: 60px;
}
}
@media screen and (min-width: 768px) {
.h-md-85 {
    height: 100%;
}
.h-60px-md-100pc {
    height: 100%;
}
.h-80pc-md-100pc {
    height: 100%;
}
.h-100-with-padding-60px-before-md {
   height: 100%;
}
}
.m-top-40 {
    margin-top: 20vh;
}
.m-top-90 {
    margin-top: 90%;
}
.m-top-15-percent {
    margin-top: 15%;
}
.copyright {
    text-align: center;
    color: #D64E26;
    font-size: 10px;
}

/*#########################
###########RGPD############
#########################*/
.textRGPD {
   text-align: justify 
}
.boutonRGPD {
    text-align: center;
}
.NONRGPD {
    font-style: 50%;
}
@keyframes RGPD_animation {
  0%   {bottom: -100px;}
  100% {bottom: 40%;}
}
#RGPD_warning {
    display: none;
    position: absolute;
    bottom: 40%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, 0);
    z-index: 999;
    background-color: #FFF8C2;
    animation-name: RGPD_animation;
    animation-duration: 2s;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
}
#closevideo {
  position:absolute;
  right:-20px;
  top:0;
  z-index:999;
  font-size:2rem;
  font-weight: normal;
  opacity:1;
}


/*#########################
#######RUBAN DROITE########
#########################*/
.boutonclickable {
    cursor:pointer;
}
.fillright{
    background-color:#FBE5D6FF;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
}


/*##################################################
############ZONE DU MENU ET LOGO####################
##################################################*/
.logomenu:hover{
    transform: scale(1.1);
}

@media screen and (max-width: 767px) {
.logomenu{
    max-height: 40px;
}
}

#menu-block-sm {
   height: 60px;
   float: top;
}

.text-in-color-brown {
  color: #D64E26;
}

.text-in-size-16px {
  font-size: 18px
}

.with-my-border {
  border: 2px solid #D64E26;
}
/*##################################################
############ZONE DE LA RECHERCHE####################
##################################################*/

.searchinput-sm {
  width: 300px;
  border: none;
}

.titrerecherche {
    height:4%;
    width: 100%;
    text-decoration:underline;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 0%;
    margin-bottom: 0%;
}

.searchinput::placeholder {
  font-size: 1vw; 
}
.ui-autocomplete {
    max-height:40%;
    overflow-y: auto;
    overflow-x: hidden;
    position:absolute;
} 
.nom_de_l_ingredient {
    text-transform: uppercase;
    font-size: 85%;
    color: black;
}
.synonymes {
    font-size: 70%;
    color: grey;
}
.numero_cas {
    font-style: italic;
    font-size: 65%;
    color: black;
}
.ui-state-highlight { 
    background: #FAE8BE !important;
}
.ui-state-active { 
    background: #FFF7E4 !important;
    border-color: #FAE8BE !important;
}

/*###############################################
############ZONE DES BOUTONS ####################
###############################################*/
.boutons {
    height: 10%; 
}
/*CONTACT*/
.mail2 {
    padding-top: 8%;
}
/*CREDITS*/
.profession {
    font-size: 12px;
}


/*#########################
###########IFRA############
#########################*/
table {
  border: 1px solid black;
  width: 100%;
}
th, .table th {
    border: 1.5px solid black;
    text-align: center;
    height: 50%;
    font-style: large;
    background-color: #FBE5D6FF;
}
td, .table td {
    border: 1px solid black;
    text-align: center;  
    vertical-align: middle;
}

.caption {
    color : grey;
    text-align: center;
    font-style: italic;
    caption-side: top;
}
.width-100-px {
  width: 100px;
}

.IFRA-number {
  white-space: nowrap;
}

.IFRA-show-nothing {
  display: none;
};

/*#########################
###########MODAL###########
#########################*/
.modal-title1 {
    font-size: 18px;
    font-weight: bold;
    text-align: center;
}
.modalheader-type {
    font-style: 18px;
    text-transform: uppercase;
    text-align: center;
}
.modalheader-type2 {
    font-style: 18px;
    text-transform: uppercase;
    text-align: center;
}
.textdescripteurs {
    font-size:small;
}
.my-modal {
  background-color: #F2F2F2FF;
}
.my-modal-body {
  font-size: small;
  padding-top: 10px;
}
.nav-item {
  white-space: nowrap;
  font-weight: bold;
  text-align: justify;
}
.iconetab {
    size:small;
    color: #C6BABA;
}
.item {
  font-size: 14px;
  font-weight: bold;
}
.textitem {
  padding: 5px;
  font-size:small;
  font-weight: normal;
}
.textitem2 {
  font-size:small;
  font-weight: normal;
}
.textitem3 {
  padding: 5px;
  font-size:small;
  font-style: italic;
  font-weight: normal;
}
.imgmp {
  max-width: 180px;
  max-height: 180px;
}
.blockimg .imgmp {
  max-width: 180px;
  max-height: 180px;
  margin-left: auto;
  margin-right: auto;
}
.textitem-footer{
  font-size:small;
  text-align: center;
}
/*Couleur du texte des onglets*/
.navbar-nav li a {
  color: #818181;
}
.navbar-nav li.active a {
  color: #D64E26;
}

@media screen and (max-width: 768px) {
.modalheader-type {
  font-size: 13px;
  text-transform: uppercase;
  text-align: center;
  margin:0;
}
.modalheader-type2 {
  font-size: 13px;
  text-transform: uppercase;
  text-align: center;
}
.type {
  display: none;
}
.textdescripteurs {
    font-size:0.9em;
    text-align: justify;
}
.item {
  font-size: 0.9em;
}
.blockimg {
  min-width: 100%;
}
.imgmp {
  max-width: 180px;
  max-height: 180px;
}
.textitem {
  padding: 2px;
  font-size:small;
  font-weight: normal;
}
.lienarticlereglementation {
  color: grey; 
  font-size: 0.7em;
}
.textitem-footer {
    font-size:0.7em;
    text-align: center;
    margin-bottom: 0;
}
.navbar-nav li a {
  color: #D64E26;
  text-align: center;
  font-size: 0.8em;
  line-height: 0.8em;
}
th, .table th, td, .table td{
    font-size: 0.7em;
}
.iconetab {
  display: none !important;
}
.modal-title {
    font-size: 15px; 
}
.Filiation{
    height: 10%;
    width: 100%;
    text-align: center;
    font-size: 13px;
    font-style: italic;
}
.scrollbar-inside {
  overflow-y: auto;
  max-height: calc(55vh - 45px);
}
.onglets {
    font-size: 12px;
}
.panel-footer{
    font-size:12px;
}
.sondage a{
  color: #D64E26;
}
.petitbtn {
  line-height: 1em;
}
.both_sponsors {
  min-height: 100%;
  max-height: 100%;
}
.premium_pros img {
  max-height: 3em !important;
}
.standard_pros img {
  min-height: 5em !important;
  max-height: 5em !important;
}

.moq-circle {
  position: absolute;
  top: 0px;
  right: 0px;
  size: 0.2em;
}
}


@media screen and (min-width: 1400px) {
h1 {
    width: 100%;
   font-style: bold;
   font-size: 0.9vw;
   margin-top: 0%;
   margin-bottom: 0%;
}
.blanc2 {
  height: 44%;
}
.block{
    height: 100%;
    text-align: center;
    padding-top: 2%;
}
.scrollbar-inside {
  overflow-y: auto;
  max-height: calc(105vh - 320px);
}
.space{
    height:30%;
}
.boutonclickable {
    color:black;
    font-size: 0.9vw;
    text-decoration:underline;
    cursor:pointer;
    display: inline;
}
.close {
    float: right;
    size: 120%;
    padding-right: 5%;
}
.Filiation{
    height: 10%;
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-style: italic;
}
.panelcontent {
    max-width: 100%;
    max-height: 100%;
}
}

@media screen and (min-width: 1200px) and (max-width: 1400px) {
h1 {
   width: 100%;
   font-style: bold;
   font-size: 1.1vw;
   margin-top: 0%;
   margin-bottom: 0%;
}
.blanc2 {
   height: 42%;
}
.block{
    height: 72%;
    text-align: center;
}
.scrollbar-inside {
  overflow-y: auto;
  max-height: calc(105vh - 320px);
}
.space{
    height:20%;
}
.boutonclickable {
    color:black;
    font-size: 1.1vw;
    text-decoration:underline;
    cursor:pointer;
    display: inline;
}
.close {
    float: right;
    size: 120%;
    padding-right: 5%;
}
.Filiation{
    height: 10%;
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-style: italic;
}
.panelcontent {
    max-width: 100%;
    max-height: 100%;
}
}



@media screen and (min-width: 990px) and (max-width: 1200px) {
h1 {
   width: 100%;
   font-style: bold;
   font-size: 1.1vw;
   margin-top: 0%;
   margin-bottom: 0%;
}
.blanc2 {
   height: 42%;
}
#block{
    height: 70%;
    width: 40%;
    text-align: center;
}
#block2{
    height: 70%;
    width: 60%;
    text-align: center;
}
.boutons {
    height: 10%;
}
.space{
    height:20%;
}
.boutonclickable {
    color:black;
    font-size: 1.1vw;
    text-decoration:underline;
    cursor:pointer;
    display: inline;
}
.close {
    float: right;
    size: 120%;
    padding-right: 5%;
}
.Filiation{
    height: 10%;
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-style: italic;
}
.panelcontent {
    max-width: 100%;
    max-height: 100%;
}
}

@media screen and (min-width: 768px) and (max-width: 990px) {
h1 {
    width: 100%;
   font-style: bold;
   font-size: 1.3vw;
   margin-top: 0%;
   margin-bottom: 0%;
   display: none;
}
.blanc2 {
    height: 30%;
}
.space{
    height: 10%;
}
.boutons {
    height: 20%;
}
.block{
    height: 70%;
    text-align: center;
}
#searchclear {
    display: none;
}
.searchinput {
    border-radius: 7px;
}
.block{
    height: 40%;
    text-align: center;
}
.boutonclickable {
    color:black;
    font-size: 1.3vw;
    text-decoration:underline;
    cursor:pointer;
    display: inline;
}
.close {
    float: right;
    size: 120%;
    padding-right: 5%;
}
.Filiation{
    height: 10%;
    width: 100%;
    text-align: center;
    font-size: 15px;
    font-style: italic;
}
.panelcontent {
    max-width: 100%;
    max-height: 100%;
}
.onglets {
    font-size: 12px;
}
}


/* PROs */
.premium_pros img {
   max-height: 5em;
}
.standard_pros img {
  max-height: 5em;
}

.moq-circle {
  display: none;
}
.with-relative-position {
	position: relative;
}
.moq-default-color {
  color: black;
}
.moq-0_5-color {
	color: red;
}
.moq-1-color {
        color: yellow;
}
.moq-5-color {
        color: blue;
}
.moq-10-color {
        color: green;
}

/* LANGUAGES */

*:lang(fr) {
    display: initial;
}
*:lang(en) {
    display: initial;
}

/* YOU CAN ZOOM */
#you_can_zoom {
    display: none;
    position: absolute;
    width: 220px;
    top: 3%;
    right: 3%;
    z-index: 999;
    font-size: small;
    color: #D64E26;
    text-align: justify; 
    border: 0.25rem solid;
    border-color: #F0BEB0;
    border-radius: 10px;
}
p.#you_can_zoom {
    margin: 5%;
}
#close_you_can_zoom {
    color: #D64E26;
}

#imgen #imgfr {
    display: inline-block;
    max-width: 10px;
    max-height: 10px;
}
