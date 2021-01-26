let deadLine = '2021-01-26'; // our deadline (yy-mm-dd)-format

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60), //how many seconds are left
            minutes = Math.floor((t/1000/60)%60), //how many minutes are left
            hours = Math.floor(t/1000/60/60); //how many hours are left

        return {
            'total' : t,
            'seconds' : seconds,
            'minutes' : minutes,
            'hours' : hours
        }
    }

    function setClock (id, endTime) {
        let t = document.getElementById(id),
            seconds = t.querySelector('.seconds'),
            minutes = t.querySelector('.minutes'),
            hours = t.querySelector('.hours');
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getTimeRemaining(endTime);
            
            

            if (t.total > 0) {
                if (t.hours < 10) {
                    hours.textContent = "0" + t.hours; //so that if the number is less than 10, it starts with 0
                }
                else {
                    hours.textContent = t.hours;
                }
                if (t.minutes < 10) {
                    minutes.textContent = "0" + t.minutes;
                }
                else {
                    minutes.textContent = t.minutes;
                }
                if (t.seconds < 10) {
                    seconds.textContent = "0" + t.minutes;
                }
                else {
                    seconds.textContent = t.seconds;
                }
            }
           
            
        }

        
    }

    setClock('timer', deadLine);
