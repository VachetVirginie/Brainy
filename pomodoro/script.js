$(document).ready(function() {

    var currentTime;
    var timeInMinutes = 25;
    var timeInMinutesBreak = 5;
    var deadline, deadlineBreak; 
    var timeinterval, breakinterval;
    
    //hover to get info on app
    $('[data-toggle="tooltip"]').tooltip(); 
    
    //plays timer sound 
    function timerSound () {
         var a = 'https://dl.dropboxusercontent.com/s/a6lyhh3j0ax5qmr/notification48.mp3?dl=0';
          var audio = new Audio(a);
            audio.play();
    }
      //stops both timers 
    function stop() {
      clearInterval(timeinterval);
      clearInterval(breakinterval);
    }
    //increments work time
    $('#up-w').click(function() {
      timeInMinutes = timeInMinutes + 1;
      currentTime = Date.parse(new Date());
      deadline = new Date (currentTime + timeInMinutes * 60 * 1000);
    
    setTimeout(function() {$('#change-made').removeClass('hide')}, 500);
    
    setTimeout(function() {$('#change-made').html(timeInMinutes + ' minutes set for work time')}, 500);
    
    setTimeout(function() {$('#change-made').addClass('hide')}, 1500);
      
      
      if (timeInMinutes < 10) {
        setTimeout(function() {$('#change-    made').removeClass('hide')}, 500);
    
    setTimeout(function() {$('#change-made').html('0' + timeInMinutes + ' minutes set for work time')}, 500);
    
    setTimeout(function() {$('#change-made').addClass('hide')}, 1500);
      }
        if (timeInMinutes > 59) {
        setTimeout(function() {$('#change-made').removeClass('hide')}, 500);
    setTimeout(function() {$('#change-made').html('Timer cannot exceed 59 minutes. Please try again.')}, 500);
    setTimeout(function() {$('#change-made').addClass('hide')}, 3000);
    
        stop();
          timeInMinutes = 59;
      } 
    })
      //decrements work time 
    $('#down-w').click(function() {
      timeInMinutes = timeInMinutes - 1;
      currentTime = Date.parse(new Date());
      deadline = new Date (currentTime + timeInMinutes * 60 * 1000);
      
      setTimeout(function() {$('#change-made').removeClass('hide')}, 500);
    
      setTimeout(function() {$('#change-made').html(timeInMinutes + '         minutes set for work time')}, 500);
    
      setTimeout(function() {$('#change-made').addClass('hide')}, 1500);
      
      if (timeInMinutes < 10) {
        setTimeout(function() {$('#change-    made').removeClass('hide')},      500);
    
        setTimeout(function() {$('#change-made').html('0' + timeInMinutes     + ' minutes set for work time')}, 500);
    
       setTimeout(function() {$('#change-made').addClass('hide')}, 1500);
      }
      
        if (timeInMinutes < 1) {
        setTimeout(function() {$('#change-made').removeClass('hide')}, 500);
    setTimeout(function() {$('#change-made').html('Timer cannot go below one minute. Please try again.')}, 500);
    setTimeout(function() {$('#change-made').addClass('hide')}, 3000);
        stop();
        timeInMinutes = 1;
      }
    })
      //increments break time
    $('#up-b').click(function() {
      timeInMinutesBreak = timeInMinutesBreak + 1;
      currentTime = Date.parse(new Date());
      deadlineBreak = new Date (currentTime + timeInMinutesBreak * 60 * 1000);
      
      setTimeout(function() {$('#change-made').removeClass('hide')}, 500);
    
      setTimeout(function() {$('#change-made').html(timeInMinutesBreak + '         minutes set for break time')}, 500);
    
      setTimeout(function() {$('#change-made').addClass('hide')}, 1500);
      
     if (timeInMinutesBreak < 10) {
      setTimeout(function() {$('#change-made').removeClass('hide')}, 500);
    
      setTimeout(function() {$('#change-made').html('0' + timeInMinutesBreak + '         minutes set for break time')}, 500);
    
      setTimeout(function() {$('#change-made').addClass('hide')}, 1500);
     }
      
     if (timeInMinutesBreak > 59) {
      setTimeout(function() {$('#change-made').removeClass('hide')}, 500);
    
      setTimeout(function() {$('#change-made').html('Break time cannot exceed 59 minutes. Please try again.')}, 500);
    
      setTimeout(function() {$('#change-made').addClass('hide')}, 1500);
        stop();
          timeInMinutesBreak = 59;
          
      } 
    })
      //decrements break time 
    $('#down-b').click(function() {
      timeInMinutesBreak = timeInMinutesBreak - 1;
      currentTime = Date.parse(new Date());
      deadlineBreak = new Date (currentTime + timeInMinutesBreak * 60 * 1000);
     
       setTimeout(function() {$('#change-made').removeClass('hide')},       500);
    
      setTimeout(function() {$('#change-made').html(timeInMinutesBreak + '         minutes set for break time')}, 500);
    
      setTimeout(function() {$('#change-made').addClass('hide')}, 1500);
      
     if (timeInMinutesBreak < 10) {
      setTimeout(function() {$('#change-made').removeClass('hide')}, 500);
    
      setTimeout(function() {$('#change-made').html('0' + timeInMinutesBreak + '         minutes set for break time')}, 500);
    
      setTimeout(function() {$('#change-made').addClass('hide')}, 1500);
      }
      
     if (timeInMinutesBreak < 1) {
      setTimeout(function() {$('#change-made').removeClass('hide')}, 500);
    
      setTimeout(function() {$('#change-made').html('Break time cannot be less than one minute. Please try again.')}, 500);
    
      setTimeout(function() {$('#change-made').addClass('hide')}, 1500);
        stop();
        timeInMinutesBreak = 1;
      }
    })
    //resets timer to default 25 mins
    $('#default-timer').click(function(){
      timeInMinutes = 25;
      timeInMinutesBreak = 5;
      currentTime = Date.parse(new Date());
      deadline = new Date (currentTime + timeInMinutes * 60 * 1000);
    
      clearInterval(breakinterval);
      setTimer('output', deadline);
    })
    
    //starts timer initially 
    $('#work').click(function() {
      currentTime = Date.parse(new Date());
      deadline = new Date (currentTime + timeInMinutes * 60 * 1000);
      clearInterval(breakinterval);
      setTimer('output', deadline);
    })
      
    //clears timer   
    $('#clear').click(function() {
      stop();
      $('#output').empty();
    })
    
    //initiates break timer
    $('#break').click(function() {
      
      currentTime = Date.parse(new Date());
      deadlineBreak = new Date (currentTime + timeInMinutesBreak * 60 * 1000);
      clearInterval(timeinterval);
      setBreak('output', deadlineBreak);
      
    })
    
    //calculates 25 mins from now 
    function distance(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor( (t/1000) % 60 );
      var minutes = Math.floor( (t/1000/60) % 60 );
      var hours = Math.floor( (t/(1000*60*60)) % 24 );
      return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
      };
    }
      
    //work timer
    function setTimer(id, endtime){
      var clock = document.getElementById(id);
      timeinterval = setInterval(function(){
        var t = distance(deadline);
        clock.innerHTML = t.minutes + ':' + t.seconds;
        if (t.minutes < 10) {
          clock.innerHTML = '0' + t.minutes + ':' + t.seconds;
        }
        
        if (t.seconds < 10) {
              clock.innerHTML = t.minutes + ':0' + t.seconds;
        }
        
       if (t.minutes < 10 && t.seconds < 10) {
               clock.innerHTML = '0' + t.minutes + ':' + t.seconds;
        }
        if(t.total<=0){
          clearInterval(timeinterval);
            currentTime = Date.parse(new Date());
            deadlineBreak = new Date (currentTime + timeInMinutesBreak * 60 * 1000);
            setBreak('output', deadlineBreak);
        }
        if (t.minutes === 0 && t.seconds === 0) {
         timerSound();
        }
      },1000);
    }
      
      
    //break timer   
    function setBreak(id, endtime){
      var clock = document.getElementById(id);
      breakinterval = setInterval(function() {
        var k = distance(deadlineBreak);
        clock.innerHTML = k.minutes + ':' + k.seconds;
        
        if (k.minutes < 10) {
          clock.innerHTML = '0' + k.minutes + ':' + k.seconds;
        }
        
        if (k.seconds < 10) {
              clock.innerHTML = k.minutes + ':0' + k.seconds;
        }
        
        if (k.minutes < 10 && k.seconds < 10) {
               clock.innerHTML = '0' + k.minutes + ':0' + k.seconds;
        }
        
        if (k.total<=0) {
          clearInterval(breakinterval);
            currentTime = Date.parse(new Date());
            deadline = new Date (currentTime + timeInMinutes * 60 * 1000);
            setTimer('output', deadline);
        }
        
         if (k.minutes === 0 && k.seconds === 0) {
          timerSound();
        }
      }, 1000);
      }
    
    });
    
    
    