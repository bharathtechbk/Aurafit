const fitnesscheckbox =document.getElementById("Fitnesscheck");
const yogacheckbox =document.getElementById("Yogacheck");
const mentalhealthcheckbox =document.getElementById("MentalHealthcheck");
const fooddietcheckbox =document.getElementById("FoodDietcheck");

fitnesscheckbox.addEventListener('change',function(){
    if(this.checked)
        {
                var fitnessprice =1500;

        }
    
});
yogacheckbox.addEventListener('change',function(){
    if(this.checked)
        {
                var yogaprice =1000;

        }
    
});
mentalhealthcheckbox.addEventListener('change',function(){
    if(this.checked)
        {
                var mentalhealthprice =1000;

        }
    
});
fooddietcheckbox.addEventListener('change',function(){
    if(this.checked)
        {
                var fooddietpriceprice =500;

        }
    
});



