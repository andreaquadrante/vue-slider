const sliderApp = new Vue ({

  el: '#root',

  data: {

    imgSrc: imgData.map (imgE => imgE),
    srcIndex: 0

  },

  methods: {

    prevImg: function () {

      if (this.srcIndex === 0){
				this.srcIndex = this.imgSrc.length - 1;
			} else {
				this.srcIndex--;
			}
      
    },

    nextImg: function () {

      if (this.srcIndex === this.imgSrc.length - 1){
				this.srcIndex = 0;
			} else {
				this.srcIndex++;
			}

    }

  }

})
