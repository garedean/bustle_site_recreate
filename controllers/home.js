HamsterApp.HomeController = Ember.Controller.extend({
  carouselImages: ["hamster1.jpg", "hamster2.jpg", "hamster3.jpg", "hamster4.jpg"],
  carouselIdx: 1,
  init: function() {
    this.set('imageLink', "/images/hamster1.jpg");
    this.set('carouselImage', this.get('carouselImages[carouselIdx]'));
  },

  actions: {
    scrollRight: function() {
      var images = this.get('carouselImages');
      var carouselIdx = this.get('carouselIdx');

      if(carouselIdx === (images.length - 1)) {
        this.set('carouselIdx', 0);
      } else {
        this.set('carouselIdx', carouselIdx + 1);
      }

      this.set('imageLink', "/images/" + images[carouselIdx]);
      this.set('carouselImage', this.get('carouselImages[carouselIdx]'));
    },

    scrollLeft: function() {
      var images = this.get('carouselImages');
      var carouselIdx = this.get('carouselIdx');

      if(carouselIdx === 0) {
        this.set('carouselIdx', images.length - 1);
      } else {
        this.set('carouselIdx', carouselIdx - 1);
      }
      this.set('imageLink', "/images/" + images[carouselIdx]);
      this.set('carouselImage', this.get('carouselImages[carouselIdx]'));
    }
  }
});
