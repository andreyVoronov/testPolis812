"use strict";(self["webpackChunkvue_spa_test"]=self["webpackChunkvue_spa_test"]||[]).push([[995],{995:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-albums"},[e("ul",{staticClass:"user-albums__list"},t._l(t.albums,(function(s){return e("li",{key:s.id,staticClass:"user-albums__item"},[e("p",{staticClass:"user-albums__title",style:{color:t.pulsating?"rgba(255, 255, 255, 1)":"rgba(255, 255, 255, 0)"}},[t._v(" "+t._s(s.title)+" ")]),t.albumPhotos[s.id]&&t.albumPhotos[s.id].length?e("div",{staticClass:"user-albums__slider-container"},[e("Slider",{attrs:{photos:t.albumPhotos[s.id]}})],1):t._e()])})),0)])},l=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"slider-container"},[e("div",{staticClass:"slider",style:{transform:`translateX(${t.slideOffset}px)`,width:`${t.slideWidth}px`},on:{touchstart:t.handleTouchStart,touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},t._l(t.photos,(function(t,s){return e("div",{key:s,staticClass:"slider__slide"},[e("img",{staticClass:"slider__img",attrs:{src:t.thumbnailUrl,alt:"Album Thumbnail"}})])})),0),t.isMobile?t._e():e("button",{staticClass:"slider__prev-button",on:{click:t.prevSlide}},[t._v(" Prev ")]),t.isMobile?t._e():e("button",{staticClass:"slider__next-button",on:{click:t.nextSlide}},[t._v(" Next ")])])},n=[],a={props:{photos:{type:Array,required:!0}},data(){return{currentSlide:0,slideOffset:0,slideWidth:0,isMobile:!1,touchStartX:0,touchEndX:0,touchThreshold:50}},computed:{totalSlides(){return this.photos.length}},methods:{prevSlide(){this.currentSlide=(this.currentSlide-1+this.totalSlides)%this.totalSlides,this.updateSlideOffset()},nextSlide(){this.currentSlide=(this.currentSlide+1)%this.totalSlides,0===this.currentSlide?this.slideOffset=0:this.updateSlideOffset()},updateSlideOffset(){this.slideWidth=this.$el.offsetWidth,this.slideOffset=-this.currentSlide*this.slideWidth},handleTouchStart(t){this.touchStartX=t.changedTouches[0].clientX},handleTouchMove(t){this.touchEndX=t.changedTouches[0].clientX},handleTouchEnd(){const t=this.touchEndX-this.touchStartX;Math.abs(t)>this.touchThreshold&&(t>0?this.prevSlide():this.nextSlide())}},mounted(){this.updateSlideOffset(),this.isMobile=window.innerWidth<=768;const t=()=>{this.isMobile=window.innerWidth<=768,this.updateSlideOffset()};window.addEventListener("resize",t),window.dispatchEvent(new Event("resize")),this.$once("hook:beforeDestroy",(()=>{window.removeEventListener("resize",t)}))}},u=a,d=s(1),h=(0,d.Z)(u,r,n,!1,null,"51f37e29",null),o=h.exports,c={components:{Slider:o},data(){return{pulsating:!1}},methods:{startPulsating(){setInterval((()=>{this.pulsating=!this.pulsating}),900)}},computed:{albums(){return this.$store.state.albums.albumList},albumPhotos(){return this.$store.state.albums.albumPhotos},user(){return this.$store.state.users.currentUser}},mounted(){this.startPulsating()}},f=c,p=(0,d.Z)(f,i,l,!1,null,"73d6ed0e",null),b=p.exports}}]);
//# sourceMappingURL=995.e920b999.js.map