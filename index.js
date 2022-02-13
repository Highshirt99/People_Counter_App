
				
					
					
					
					var count=0;
					
					function increment (enter, leave){
		
				  	
				   // count+=1
					
					  countEl = document.getElementById("count");
					  countEl.innerHTML = count ;
					 
					  
					}
					
					
			
					function save() {saveEl = document.getElementById("saved")
				                
				               saveEl.textContent+= count + "," ;
				                      
					              
					}
					  
	
					
					function reset() {
					  newCount = 0;
					  document.getElementById("count").innerHTML = newCount
            if (count=0) {
              increment();
            }
            
					}
					
					
			/*		function exit() { if (count>0) {
			   						count-= 1
			   						countEl.innerHTML = count
			   		
			   	}
				
			   } */
			   	
			     	
					
					
					
			
