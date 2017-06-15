import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as Reveal from 'reveal.js/js/reveal';

@Component({
  selector: 'page-reveal',
  templateUrl: 'reveal.html'
})

export class RevealPage {
        
  reveal : any;
  loaded : boolean = false;


  constructor(public navCtrl: NavController) {
  }
    ngOnInit() { 
        console.log("ngOnInit!");

        this.reveal = Reveal;
        this.loadSlides();
    }

    loadSlides() {
        
        //this function is intended to load all dinamic content for slides (json, bbdd, webservice....)

         this.revealInit(); 
    }
    ionViewDidLeave() {
        this.loaded = false;
    }
    revealInit() {
        this.reveal.addEventListener( 'ready', ( event ) => {
            this.loaded = true;
        });
        
        let revealOptions = {
            controls: true,
            progress: true,
            slideNumber: false,
            history: false,
            keyboard: true,
            overview: true,
            center: true,
            touch: true,
            loop: false,
            rtl: false,
            shuffle: false,
            fragments: true,
            embedded: false,
            help: true,
            showNotes: false,
            autoSlide: 0,
            autoSlideStoppable: true,
            autoSlideMethod: Reveal.navigateNext,
            mouseWheel: false,
            hideAddressBar: true,
            previewLinks: false,
            transition: 'slide', // none/fade/slide/convex/concave/zoom 
            transitionSpeed: 'default', // default/fast/slow 
            backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom 
            viewDistance: 3,
            parallaxBackgroundImage: '', // e.g. "'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg'" 
            parallaxBackgroundSize: '', // CSS syntax, e.g. "2100px 900px" 
            parallaxBackgroundHorizontal: null,
            parallaxBackgroundVertical: null

        };
    
        this.reveal.initialize(revealOptions);       
    }
}

