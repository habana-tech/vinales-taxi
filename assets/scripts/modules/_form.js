
function diff_hours(dt2, dt1) {
    let diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return diff;

}

class UpdatePrice{
    constructor(){
        this.price = 153;
        this.passengerControl = document.querySelector('#booking_peopleCount');
        this.priceNumber = document.querySelector('#priceNumber');
        this.priceText = document.querySelector('#priceText');
        this.priceTextNegotiation = document.querySelector('#priceTextNegotiation');
        this.pricePlus = 0;

        this.dateInput = document.querySelector('#booking_pickupDate');
        this.timeInput = document.querySelector('#booking_pickupTime');
        this.timeSection = document.querySelector('#booking_time_section');

        this.events();
        this.init();
    }

    init(){
        this.priceNumber.innerHTML = this.price+'.00';
    }

    events(){
        this.passengerControl.addEventListener('input', this.updatePrice.bind(this));

        [this.dateInput, this.timeInput].forEach((input)=>{
            input.addEventListener('change', this.validateTimeAndShowAlert.bind(this))
        })
    }

    updatePrice(){
        let passengerNumber = this.passengerControl.value;
        if (passengerNumber <= 5) {
            if (passengerNumber >= 1 && passengerNumber <= 3)
                this.price = 153;
            else if (passengerNumber === 4)
                this.price = 165;
            else
                this.price = 177;

            this.priceNumber.innerHTML = this.price+'.00';

            this.priceTextNegotiation.classList.remove('price_text_negotiation--is-visible');
            this.priceText.classList.add('price_text--is-visible');
        }
        else{
            this.priceText.classList.remove('price_text--is-visible');
            this.priceTextNegotiation.classList.add('price_text_negotiation--is-visible');
        }

    }

    validateTimeAndShowAlert(){
        if (!this.validateTime())
            this.timeSection.classList.add('invalid_time');
        else
            this.timeSection.classList.remove('invalid_time');
    }

    validateTime(){
        let dateStr = this.dateInput.value;
        let timeStr = this.timeInput.value;
        let dateTimeStr = dateStr+" "+timeStr;
        let time = new Date(dateTimeStr);

        let differenceHours = diff_hours(time, new Date());
        console.log(differenceHours);
        return differenceHours > 12;
    }
}

export default UpdatePrice;