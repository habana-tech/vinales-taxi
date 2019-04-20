class SmoothScrooll{
    constructor(){
        this.offset = -10;
        this.call = null;
        this.links = document.querySelectorAll(".nav a[href*='#']");
        this.events();
    }

    events(){
        for (let link of this.links)
            link.addEventListener("click", this.reply_click.bind(this));
    }

    scroll() {
        let posElement = this.offset;
        let posDocument = document.documentElement.scrollTop;
        let increment = Math.pow(Math.abs(posElement - posDocument), 2)/(posDocument);

        if (Math.abs(this.offset - document.documentElement.scrollTop) < 10)
            clearInterval(this.call);
        else if ((this.offset - document.documentElement.scrollTop) > 0) {
            document.documentElement.scrollTop += 10;
            // document.documentElement.scrollTop += increment;
        }
        else {
            document.documentElement.scrollTop -= 10;
            // document.documentElement.scrollTop -= increment;
        }

    };

     reply_click(event) {
        event.preventDefault();
        this.call = setInterval(this.scroll.bind(this), 10);
        let targetElement = event.target.getAttribute('data-section');
        this.offset = document.querySelector(targetElement).offsetTop;
    }
}

export default SmoothScrooll;



