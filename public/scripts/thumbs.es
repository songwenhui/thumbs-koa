class PraiseButton {
  constructor () {
    
  }
  addNum (num) {
    return num + 1
  }
}

class ThumbsUp extends PraiseButton {
  constructor ($ele, limitNum = 10) {
    super()
    this.num = 0
    this.limited = false
    this.limitNum = limitNum
    this.$ele = $ele
  }
  get thumbs () {
    this.num = this.addNum(this.num);
		if (this.num === this.limitNum) {
      this.limited = true;
    }
		return this.num;
  }
  clickEvent () {
    var self = this
		if (!self.limited) {
      axios.get('/update')
        .then((res) => {
          console.log('res==========', res)
          self.$ele.css('-webkit-filter','grayscale(0)');
          self.$ele.append(`<p class='praise_1' data-num=${self.thumbs}></p>`);
          $(".praise_1:last-of-type").text("+1").addClass("text-show");
          self.$ele.find(".praise_1:last-of-type")[0].addEventListener("webkitAnimationEnd",function(){
            self.$ele.find(".praise_1:nth-of-type(1)").remove();
          })
        })
        .catch((err) => {
          console.log('err=========', err)
        })
		} else {
      self.$ele.css('-webkit-filter','grayscale(1)');
      self.num = 0
      self.limited = false
    }
	}
}

export default {
  ThumbsUp
}
